import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

const NO_RETRY_HEADER = 'x-no-retry';

const handleRefresh = async () => {
    try {
        const response = await instance.post('/api/accesstoken');
        return response?.accessToken ?? null;
    } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
    }
};

// 🛠 Request Interceptor - Thêm Authorization & x-no-retry
instance.interceptors.request.use(config => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Refresh-Token'] = localStorage.getItem("refresh_token")
    }
    if (!config.headers[NO_RETRY_HEADER]) {
        config.headers[NO_RETRY_HEADER] = 'false';
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 🛠 Response Interceptor - Xử lý 401 Unauthorized
instance.interceptors.response.use(
    response => response?.data,
    async error => {
        console.log("Error Headers:", error.config.headers);

        // access token expired
        if (error.response?.status === 401 && error.config.headers?.[NO_RETRY_HEADER] === 'false') {
            const access_token = await handleRefresh();
            if (access_token) {
                localStorage.setItem("access_token", access_token);
                error.config.headers['Authorization'] = `Bearer ${access_token}`;
                error.config.headers[NO_RETRY_HEADER] = 'true'; // Đánh dấu đã retry
                error.config.baseURL = baseUrl; // Đảm bảo request có baseURL
                return instance.request(error.config);
            }
        }

        //refresh token expire or invalid
        //refresh token expired
        if (
            error.config && error.response
            && +error.response.status === 400
            && error.config.url === '/api/accesstoken'
        ) {
            if (
                window.location.pathname !== '/'
            ) {
                window.location.href = '/login';
            } else console.log('sss')
        }


        return Promise.reject(error.response ?? error);
    }
);

export default instance;
