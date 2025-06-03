import axios from "axios";

export const fetchAllPartners = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras`);
        return res.data.data.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

export const fetchPartnersById = async (id: string | number) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/mitras/${id}`);
        return res.data.data.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
