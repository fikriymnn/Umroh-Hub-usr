import axios from "axios";
import { Order } from "../types/Order";

export const order = async (payload: Order) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addOrder`, payload,
        {withCredentials: true}
    );
};
