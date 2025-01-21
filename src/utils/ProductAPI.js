import axios from './axios-customize'

export const getAllProductsAPI = async (current, query) => {
    return await axios.get(`/products?p=${current}&${query}`)
}

export const getProductDetailAPI = async (id) => {
    return await axios.get(`/products/${id}`)
}

export const addToCartAPI = async (payload) => {
    return await axios.post('/cart', payload)
}

export const getCartAPI = async (id) => {
    return await axios.get(`/cart`)
}