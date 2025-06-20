import React, { useState } from 'react'
import { useParams } from 'react-router';
import { clearOrderData, getPayment } from '../../utils/storage';
import { paymentOrder } from '../../services/orderServices';

const usePaymentProof = () => {
    const {order_id} = useParams();
    const payment = getPayment();
    const [paymentProof, setPaymentProof] = useState('');

    const handleSubmitPayment = async () => {
        const payload = {
            payment,
            transaction_proof_url: 'exampleX'
        };

        try {
            if (order_id) {
                const res = await paymentOrder(order_id, payload);
                console.log(res);
                alert('Pembayaran berhasil');
                clearOrderData();
            }
        } catch (error) {
            alert('Pembayaran gagal');
            console.error(`Error: ${error}`);
        }
    };

    return {
        payment,
        paymentProof, setPaymentProof,
        handleSubmitPayment
    };
};

export default usePaymentProof;