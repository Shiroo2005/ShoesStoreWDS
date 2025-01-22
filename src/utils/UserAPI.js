import axios from './axios-customize';

export const getUserByIdAPI = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    console.log("Get User API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error.response || error);
    throw error;
  }
};

export const updateUserAPI = async (id, payload) => {
  try {
    const response = await axios.put(`/users/${id}`, payload);
    console.log("Update User API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.response || error);
    throw error;
  }
};
