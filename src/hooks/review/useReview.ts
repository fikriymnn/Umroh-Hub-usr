import { useState } from 'react'
import { clearOrderData, getSelectedOrder } from '../../utils/storage';
import { addReview } from '../../services/packagesSercice';
import { isAxiosError } from 'axios';

const useReview = () => {
    const orderData = getSelectedOrder();
    const [description, setDescription] = useState('');

    const handleSubmitReview = async () => {
        const order = {
            id_order: orderData.id,
            description: description,
            rating: 1,
            is_active: true,
            images: [
                {image_url: 'ssss'},
                {image_url: 'ssss'},
            ]
        }

        try {
            const res = await addReview(order);
            console.log(res);
            alert('Berhasil kirim review');
            clearOrderData();
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data'
                console.error(`Error: ${message}`);
            }
        }
    }

    return {
        description, setDescription,
        handleSubmitReview,
    };
};

export default useReview;
