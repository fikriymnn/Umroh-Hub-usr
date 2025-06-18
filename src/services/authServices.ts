import axios from 'axios';
import { User } from '../types/User';

export const loginUser = async (data: User) => {
    return await axios.post(
        `${import.meta.env.VITE_PUBLIC_URL}/auth/login/user`,
        data,
        { withCredentials: true }
    );
};

export const register = async (data: User) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/users`, data);
};

export const logOut = async () => {
    await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/logout`);
};
