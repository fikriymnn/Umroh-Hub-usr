import {useState} from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../../services/authServices';
import { isAxiosError } from 'axios';

const useLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const res = await loginUser({
                email,
                password
            });
            console.log(res);
            
            alert('Login berhasil');
            navigate('/');
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat login';
                alert(message);
                console.error(`Error: ${message}`);
            } else {
                alert('Terjadi kesalahan jaringan atau server');
            }
        }
    };

    return {
        email, setEmail,
        password, setPassword,
        handleLogin
    };
};

export default useLogin;
