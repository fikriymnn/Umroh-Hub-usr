import axios from 'axios';
import { User } from '../types/User';

export const loginUser = async (user: User) => {
    const res = await axios.post(
        `${import.meta.env.VITE_PUBLIC_URL}/auth/login/user`,
        user,
        { withCredentials: true }
    );
};

// export const registerUser = async (user: User) => {
//     const res = await axios.post('')
// };

export const logOut = async () => {
    await axios.delete(`${import.meta.env.VITE_PUBLIC_URL}/logout`);
};
