import axios from 'axios';
import { User } from '../types/User';

export const loginUser = async (user: User) => {
    const res = await axios.post(
        `${import.meta.env.VITE_PUBLIC_URL}/auth/login/user`,
        user,
        { withCredentials: true }
    );
    return res.data;
};

// export const registerUser = async (user: User) => {
//     const res = await axios.post('')
// };

export const logOut = async () => {
    try {
        await axios.delete(`${import.meta.env.VITE_PUBLIC_URL}/logout`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

export const getMe = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/users/me`, {
        withCredentials: true
    });
};

