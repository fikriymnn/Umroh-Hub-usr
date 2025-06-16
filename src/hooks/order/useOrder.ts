import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { saveOrderData } from '../../utils/storage';

const useOrder = () => {
    const navigate = useNavigate();
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

    const handleNext = () => {
        console.log("Data jamaahList sebelum disimpan:", jamaahList);
        saveOrderData(jamaahList);
        navigate('/payment');
    };

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
        handleNext,
        handleRemoveJamaah
    }
}

export default useOrder
