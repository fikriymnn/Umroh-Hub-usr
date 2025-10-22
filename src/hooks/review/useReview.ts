import { useState } from 'react'
import { clearOrderData, getSelectedOrder } from '../../utils/storage';
import { addReview } from '../../services/packagesSercice';
import { isAxiosError } from 'axios';

const useReview = () => {
    const orderData = getSelectedOrder();
    const [rating, setRating] = useState<number | null>(null);
    const [description, setDescription] = useState('');

    const handleSubmitReview = async () => {
        const order = {
            id_order: orderData.id,
            description,
            rating: rating ?? 0,
            is_active: true,
            images: [
                {image_url: 'ssss'},
                {image_url: 'ssss'},
            ]
        }

        try {
            const res = await addReview(order);
            console.log(res);
            alert(res.data.data.message);
            clearOrderData();
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data'
                console.error(`Error: ${message}`);
            }
        }
    };

    return {
        rating, setRating,
        description, setDescription,
        handleSubmitReview,
    };
};

export default useReview;
