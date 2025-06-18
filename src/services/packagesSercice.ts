import axios from "axios";

export const getAllPackages = async (queryString: string) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getPackage?${queryString}`);
    console.log("URL:", `${import.meta.env.VITE_PUBLIC_URL}/getPackage?${queryString}`);
};

export const getOnePackages = async (id: string | number) => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOnePackageUmroh/${id}`)
};

export const getAllReviews = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllReview`);
};

export const getAllCategory = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllCategory`)
}; 

export const getAllLocation = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllLocation`)
}; 
export const getAllType = async () => {
    return await axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getAllType`)
}; 
