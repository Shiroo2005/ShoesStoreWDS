import axios from './axios-customize'

export const getAllCategoriesAPI = async () => {
    const result = await axios.get('/categories')
    return result;

}