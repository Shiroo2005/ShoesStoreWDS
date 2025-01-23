import axios from "./axios-customize"

export const newOrder = async (id) => {
    return await axios.post(`/cart/new/${id}`)
}

export const getAllOrderUserAPI = async (id) => {
    return await axios.get(`/orders/${id}`)
}

export const getOrderDetailAPI = async (id) => {
    return await axios.get(`/orders/details/${id}`)
}