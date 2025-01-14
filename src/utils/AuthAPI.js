import axios from './axios-customize'

export const register = async (payload) => {
    const formData = new FormData();
    console.log(payload);

    for (const key in payload) {
        formData.append(key, payload[key]);
    }

    return await axios.post('/auth/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}