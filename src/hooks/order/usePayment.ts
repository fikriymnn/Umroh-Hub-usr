import { useEffect, useState } from 'react'
import { clearOrderData, getSelectedOrder, getSelectedPackage, savePayment } from '../../utils/storage';
import bcaIcon from "../../../src/assets/icons/image 7.svg"

const usePayment = () => {
    const packages = getSelectedPackage();
    const orderData = getSelectedOrder();
    const [dropdownOpen, setDropdownOpen] = useState(Boolean);
    const [bank, setBank] = useState("bca");
    const [nameOf, setNameOf] = useState("");
    const [rekening, setRekening] = useState("");
    const [isPayment, setIsPayment] = useState(false);

    useEffect(() => {
        const handleClose = () => {
            clearOrderData();
        };

        window.addEventListener('beforeunload', handleClose);

        return () => {
            window.removeEventListener('beforeunload', handleClose);
        }
    }, []);

    const bankOptions = [
        {label: 'BCA', value: 'bca', icon: bcaIcon},
        {label: 'BCA', value: 'bca', icon: bcaIcon},
    ];

    const hadlePaymentClick = async () => {
        setIsPayment(true);
        const payload = {
            payment_method: "Transfer",
            bank,
            no_rek: rekening,
            by_name_of: nameOf
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
        dropdownOpen, setDropdownOpen,
        bank, setBank,
        bankOptions,
        nameOf, setNameOf,
        rekening, setRekening,
        isPayment, setIsPayment,
        hadlePaymentClick,
    };
};

export default usePayment;
