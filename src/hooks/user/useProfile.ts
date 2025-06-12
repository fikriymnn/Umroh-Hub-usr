import {useState, useEffect} from 'react';
import { User } from '../../types/User';
import { getMe, updateUser } from '../../services/userSevices';

const useProfile = () => {
    const [user, setUser] = useState<User>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await getMe();
                console.log(res.data);
                const userData = res.data.data;
            
                setUser(userData);
                setName(userData.name);
                setEmail(userData.email);
                setPhone(userData.phone_number);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchUser();
    }, []);

    async function handleUpdate() {
        if (!user?.id) return;
        
        try {
            await updateUser(user.id, {
            name,
            email,
            phone_number: phone
            });
        
            alert('Data berhasil diperbarui!');
            setUser((prev: any) => ({
                ...prev,
                name,
                email,
                phone_number: phone
            }));
        } catch (error) {
            console.error(`Error: ${error}`);
            alert('Gagal memperbarui')
        }
    };

    return {
        user,
        name, setName,
        email, setEmail,
        phone, setPhone,
        handleUpdate
    };
};

export default useProfile;
