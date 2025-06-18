import {useState, useEffect} from 'react';
import { Package } from '../../types/Package';
import { getAllPackages } from '../../services/packagesSercice';

const usePackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        page: 1,
        limit: 6,
        id_category_departure: '',
        id_location_departure: '',
        id_type_departure: '',
        duration: '',
        price: '',
        date_departure: ''
    });      

    function buildQueryParams(params: Record<string, any>) {
        const query = Object.entries(params)
        .filter(([_, value]) => value !== '' && value !== null && value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

        return query;
    }  

    useEffect(() => {
        async function fetchPackages() {
            try {
                const queryString = buildQueryParams(filters);
                const res = await getAllPackages(queryString);
                console.log(res);
                setPackages(res.data.data);
                setTotalPages(Math.ceil(res.data.jumlahPaket / filters.limit));
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackages();
    }, [filters]);

    const setCurrentPage = (page: number) => {
        setFilters((prev) => ({
            ...prev,
            page: page,
        }));
    };  

    function formatToShortRupiah(value: number) {
        const juta = 1000000;

        if (value >= juta) {
            return `${value / juta}jt`;
        }

        return value.toString();
    };

    return {
        packages,
        setCurrentPage,
        formatToShortRupiah,
        totalPages,
        filters, setFilters
    };
};

export default usePackages;
