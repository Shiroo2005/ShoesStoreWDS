import axios from './axios-customize'

export const register = async (payload) => {
    console.log(payload);
    return await axios.post('/auth/register', payload)
}

export const login = async (payload) => {
    console.log(payload);
    return await axios.post('/auth/login', payload)

}

export const getAccountAPI = async () => {
    const URL_BACKEND = '/auth/account'

    return axios.get(URL_BACKEND)
}

export const logout = async (id) => {
    return axios.post(`/auth/logout/${id}`)
}