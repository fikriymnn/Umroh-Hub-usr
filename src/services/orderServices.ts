import axios from "axios";

export const order = async (payload: any) => {
    return await axios.post(`${import.meta.env.VITE_PUBLIC_URL}/addOrder`, payload);
};
