import {useState} from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../../services/authServices';

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
            alert('Login gagal');
            console.error(`Error: ${error}`);
        }
    };

    return {
        email, setEmail,
        password, setPassword,
        handleLogin
    };
};

export default useLogin;
