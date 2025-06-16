import { useState } from 'react'
import { clearOrderData, getOrderData, getSelectedPackage } from '../../utils/storage';
import { order } from '../../services/orderServices';

const usePayment = () => {
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
            clearOrderData();
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
        hadlePaymentClick
    };
};

export default usePayment;
