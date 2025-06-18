import axios from "axios";
import { User } from "../types/User";

export const getMe = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/users/me`, {
        withCredentials: true
    });
};

export const updateUser = async (id: number, data: User) => {
    return await axios.put(`${import.meta.env.VITE_PUBLIC_URL}/users/${id}`, data);
};
