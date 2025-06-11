import axios from "axios";

export const fetchAllPartners = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras`);
};

export const fetchPartnersById = async (id: string | number) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/${id}`);
};
