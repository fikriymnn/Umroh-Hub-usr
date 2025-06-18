import { useState } from 'react'
import { clearOrderData, getOrderData, getSelectedPackage } from '../../utils/storage';
import { order, paymentOrder } from '../../services/orderServices';
import { useParams } from 'react-router';

const usePayment = () => {
    const {order_id} = useParams();
    const packages = getSelectedPackage();
    const orderData = getOrderData();
    const [rekening, setRekening] = useState("");
    const [isPayment, setIsPayment] = useState(false);

    const hadlePaymentClick = async () => {
        setIsPayment(true);
        const payload = {
            id_package: packages.id,
            payment_method: "Transfer",
            bank: "bca",
            no_rek: rekening,
            jamaah: orderData
        }
        try {
            console.log(payload);

            const res = await order(payload);
            console.log(res);
            alert('Data pesanan berhasil dikirim');
            // clearOrderData();
        } catch (error) {
            alert('Gagal kirim');
            console.error(`Error: ${error}`);
        }
    };

    const handlePaymentOrder = async () => {
        const payment = {
            payment_method: 'Transfer',
            bank: 'BCA',
            transaction_proof_url: 'example',
            no_rek: '0982872',
            by_name_of: 'irfan'
        };

        try {
            const res = await paymentOrder(payment);
            console.log(res);
            alert('Pembayaran berhasil');
            clearOrderData();
        } catch (error) {
            alert('Pembayaran gagal');
            console.error(`Error: ${error}`);
        }
    };

    return {
        packages,
        orderData,
        rekening, setRekening,
        isPayment, setIsPayment,
        hadlePaymentClick,
        handlePaymentOrder
    };
};

export default usePayment;
