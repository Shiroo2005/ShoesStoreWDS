import axios from './axios-customize'

export const getAllProductsAPI = async () => {
    return await axios.get('/products')
}

export const getProductDetailAPI = async (id) => {
    return await axios.get(`/products/${id}`)
}
