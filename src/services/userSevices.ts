import axios from "axios";

export const getMe = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/users/me`, {
        withCredentials: true
    });
};

export const updateUser = async (id: number, data: {
    name: string;
    email: string;
    phone_number: string | number;
}) => {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/users/${id}`, data);
};
