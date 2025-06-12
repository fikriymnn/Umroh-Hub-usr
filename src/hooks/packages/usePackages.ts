import {useState, useEffect} from 'react';
import { Package } from '../../types/Package';
import { getAllPackages } from '../../services/packagesSercice';

const usePackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 15;

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

    const totalPages = Math.ceil(packages.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = packages.slice(startIndex, startIndex + itemPages)

    return {
        packages,
        currentPage, setCurrentPage,
        totalPages,
        currentItems
    };
};

export default usePackages;
