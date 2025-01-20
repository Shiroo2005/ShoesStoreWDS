import axios from './axios-customize'

export const getAllProductsAPI = async () => {
    return await axios.get('/products')
}