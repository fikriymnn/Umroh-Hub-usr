import {useState, useEffect} from 'react';
import { Partners } from '../../types/Partners';
import { getAllPartners } from '../../services/partnersServices';

const usePartners = () => {
    const [partners, setPartners] = useState<Partners[]>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 4;

    useEffect(() => {
        async function fetchPartners() {
            try {
                const res = await getAllPartners();
                setPartners(res.data.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPartners();
    }, []);

    const totalPages = Math.ceil(partners.length / itemPages);
    const startIndex = (currentPage - 1) * itemPages;
    const currentItems = partners.slice(startIndex, startIndex + itemPages);

    return {
        partners,
        currentPage, setCurrentPage,
        totalPages,
        currentItems
    };
};

export default usePartners;
