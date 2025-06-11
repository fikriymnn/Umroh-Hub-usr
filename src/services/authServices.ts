import axios from 'axios';

export const loginUser = async (data: {
    email: string;
    password: string;
}) => {
    return await axios.post(
        `${import.meta.env.VITE_PUBLIC_URL}/auth/login/user`,
        data,
        { withCredentials: true }
    );
};

export const register = async (data: {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    no_ktp: string;
}) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/users`, data);
};

export const logOut = async () => {
    await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/auth/logout`);
};
