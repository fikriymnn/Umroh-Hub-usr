import axios from 'axios';
import { User } from '../types/User';

export const loginUser = async (user: User) => {
    const res = await axios.post(
        'https://zshnvs5v-7000.asse.devtunnels.ms/api/auth/login/user',
        user,
        { withCredentials: true }
    );
    return res.data;
};

// export const registerUser = async (user: User) => {
//     const res = await axios.post('')
// };
