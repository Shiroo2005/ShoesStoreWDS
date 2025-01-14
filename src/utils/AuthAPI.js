import axios from './axios-customize'

export const register = async (payload) => {
    console.log(payload);
    return await axios.post('/auth/register', payload)
}

export const login = async (payload) => {
    console.log(payload);
    return await axios.post('/auth/login', payload)

}