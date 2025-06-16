import {useState, useEffect} from 'react';
import { Package } from '../../types/Package';
import { getAllPackages } from '../../services/packagesSercice';

const usePackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 15;
    const itemHomePages = 6;

    useEffect(() => {
        async function fetchPackages() {
            try {
                const res = await getAllPackages();
                setPackages(res.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackages();
    }, []);

    function formatToShortRupiah(value: number) {
        const juta = 1000000;

        if (value >= juta) {
            return `${value / juta}jt`;
        }

        return value.toString();
    };

    const totalPages = Math.ceil(packages.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = packages.slice(startIndex, startIndex + itemPages)
    const currentHomeItems = packages.slice(startIndex, startIndex + itemHomePages);

    return {
        packages,
        currentPage, setCurrentPage,
        formatToShortRupiah,
        totalPages,
        currentItems, currentHomeItems
    };
};

export default usePackages;
