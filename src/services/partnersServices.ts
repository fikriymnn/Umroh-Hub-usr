import axios from "axios";

export const getAllPartners = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras`);
};

export const getPartnersById = async (id: string | number) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/${id}`);
};
