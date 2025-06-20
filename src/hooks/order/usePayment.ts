import { useState } from 'react'
import { clearOrderData, getOrderData, getSelectedPackage, savePayment } from '../../utils/storage';
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
            payment_method: "Transfer",
            bank: "bca",
            no_rek: rekening,
            by_name_of: "syifa"
        }
        try {
            console.log(payload);
            alert('Data payment berhasil dikirim');
            savePayment(payload);
        } catch (error) {
            alert('Gagal kirim');
            console.error(`Error: ${error}`);
        }
    };

    return {
        packages,
        orderData,
        rekening, setRekening,
        isPayment, setIsPayment,
        hadlePaymentClick,
    };
};

export default usePayment;
