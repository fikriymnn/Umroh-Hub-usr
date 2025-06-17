import { useEffect, useState } from 'react'
import { Order } from '../../types/Order';
import axios from 'axios';

const useMyTransactions = () => {
    const [order, setOrder] = useState<Order[]>([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        async function fetchOrder() {
            try {
                let params = {};

                if (filter === 'belum_bayar') {
                    params = { payment_status: 'pending' };
                } else if (filter === 'diproses') {
                    params = { order_status: 'process' };
                } else if (filter === 'selesai') {
                    params = { order_status: 'confirmed' };
                }

                const res = axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOrderUser`, {
                    withCredentials: true,
                    params
                });
                console.log((await res));
                setOrder((await res).data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchOrder();
    }, [filter]);

    return {
        order, setOrder,
        filter, setFilter
    };
};

export default useMyTransactions;
