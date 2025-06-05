import axios from "axios";

export const fetchAllPackages = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage`);
        return res.data.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
