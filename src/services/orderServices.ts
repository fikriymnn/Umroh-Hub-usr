import axios from "axios";
import { Order } from "../types/Order";

export const order = async (payload: Order) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addOrder`, payload,
        {withCredentials: true}
    );
};

export const paymentOrder = async (order_id: number | string, payment: Order) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addOrder/${order_id}`, payment,
        {withCredentials: true}
    );
};
