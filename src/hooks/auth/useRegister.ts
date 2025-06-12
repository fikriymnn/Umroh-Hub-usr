import React, {useState} from 'react';
import { register } from '../../services/authServices';

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
            alert('Register gagal');
            console.error(`Error: ${error}`);
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
