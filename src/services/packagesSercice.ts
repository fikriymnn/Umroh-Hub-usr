import axios from "axios";

export const getAllPackages = async (queryString: string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage?${queryString}`);
};

export const getOnePackages = async (id: string | number) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`)
};

export const getAllReviews = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllReview`);
};
