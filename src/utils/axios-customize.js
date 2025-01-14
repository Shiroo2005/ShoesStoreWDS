import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}`

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

instance.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem("access_token")}` }

const handleRefresh = async () => {
    const response = await instance.get('/auth/refresh')

    if (response && response.data) {
        return response.data.access_token
    } else return null

}

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


const NO_RETRY_HEADER = 'x-no-retry'
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response?.data
}, async function (error) {

    // // access token expired
    // if (error.response.status == 401 && !error.config.headers[NO_RETRY_HEADER]) {
    //     const access_token = await handleRefresh()
    //     error.config.headers[NO_RETRY_HEADER] = 'true'
    //     if (access_token) {
    //         localStorage.setItem("access_token", access_token)

    //         error.config.headers['Authorization'] = `Bearer ${access_token} `
    //         return axios.request(error.config)
    //     }
    // }

    // //refresh token expired
    // if (
    //     error.config && error.response
    //     && +error.response.status === 400
    //     && error.config.url === '/api/v1/auth/refresh'
    // ) {
    //     if (
    //         window.location.pathname !== '/'
    //         && !window.location.pathname.startsWith('/book')
    //     ) {
    //         window.location.href = '/login';
    //     } else console.log('sss')
    // }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return error?.response?.data ?? Promise.reject(error)
    return Promise.reject(error)
});

export default instance