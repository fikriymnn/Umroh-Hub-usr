import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { getSelectedPackage, saveOrderData } from '../../utils/storage';
import { order } from '../../services/orderServices';

const useOrder = () => {
    const navigate = useNavigate();
    const packages = getSelectedPackage();
    const [jamaahList, setJamaahList] = useState([
        {
            name: '',
            email: '',
            gender: '',
            phone_number: '',
            // ktp: '',
            // passport: '',
            // kk: ''
        }
    ]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const updatedList = [...jamaahList];
        updatedList[index] = {
            ...updatedList[index],
            [name]: value,
        };
        setJamaahList(updatedList);
    };

    const handleDataJamaah = () => {
        setJamaahList([
            ...jamaahList,
            {
                name: '',
                email: '',
                gender: '',
                phone_number: '',
                // ktp: '',
                // passport: '',
                // kk: ''
            }
        ]);
    };

    async function handleSubmitOrder() {
        const payload = {
            id_package: packages.id,
            jamaah: jamaahList
        }
        try {
            const res = await order(payload);
            const order_id = res.data?.order_id;
            console.log(`Berhasil kirim data: ${res.data}`);
            navigate(`/Payment/${order_id}`);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    const handleRemoveJamaah = (index: number) => {
        if (jamaahList.length === 1) return;
        const updatedList = [...jamaahList];
        updatedList.splice(index, 1);
        setJamaahList(updatedList);
    };
    return {
        navigate,
        jamaahList, setJamaahList,
        handleChange,
        handleDataJamaah,
        handleSubmitOrder,
        handleRemoveJamaah
    }
}

export default useOrder
