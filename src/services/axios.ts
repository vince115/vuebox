import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api",
});

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error || error.response);
    }
);

// export const getUser = async (userId) => {
//     const response = await apiClient.get(`/user/${userId}`);
//     return response;
// };