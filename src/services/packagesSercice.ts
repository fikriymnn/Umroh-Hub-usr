import axios from "axios";

export const getAllPackages = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage`);
};

export const getOnePackages = async (id: string | number) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`)
};
