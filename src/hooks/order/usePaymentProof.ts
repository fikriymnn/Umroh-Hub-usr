import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { clearOrderData, getPayment } from '../../utils/storage';
import { paymentOrder } from '../../services/orderServices';
import { isAxiosError } from 'axios';

const usePaymentProof = () => {
    const navigate = useNavigate();
    const {order_id} = useParams();
    const payment = getPayment();
    const [paymentProof, setPaymentProof] = useState('');

    const handleSubmitPayment = async () => {
        const payload = {
            ...payment,
            transaction_proof_url: 'exampleX'
        };

        try {
            if (order_id) {
                const res = await paymentOrder(order_id, payload);
                console.log(res);
                alert('Pembayaran berhasil');
                clearOrderData();
                navigate('/MyTransactions')
            }
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                alert(message);
                console.error(`Error ${message}`);
            }
        }
    };

    return {
        payment,
        paymentProof, setPaymentProof,
        handleSubmitPayment
    };
};

export default usePaymentProof;