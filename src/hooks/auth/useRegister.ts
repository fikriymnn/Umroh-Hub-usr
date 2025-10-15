import React, {useState} from 'react';
import { register } from '../../services/authServices';
import { isAxiosError } from 'axios';

const useRegister = ({
    isAnimated,
        setIsAnimated,
    }: {
        isAnimated: boolean;
        setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ktp, setKtp] = useState('');

    async function handleRegister() {
        try {
            const res = await register({
                name,
                email,
                password,
                phone_number: phone,
                address,
                no_ktp: ktp
            });
            console.log(res);
            setIsAnimated(!isAnimated);
            alert('Register berhasil');
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            setAddress('');
            setKtp('');
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat registrasi';
                alert(message);
                console.error(`Error: ${message}`);
            } else {
                alert('Terjadi kesalahan jaringan atau server');
            }
        }
    };

    return {
        name, setName,
        email, setEmail,
        password, setPassword,
        phone, setPhone,
        address, setAddress,
        ktp, setKtp,
        handleRegister
    };
};

export default useRegister;
