import {useState, useEffect} from 'react';
import { Package } from '../../types/Package';
import { getAllCategory, getAllLocation, getAllPackages, getAllType } from '../../services/packagesSercice';
import { Category, Location, Type } from '../../types/Filter';
import { isAxiosError } from 'axios';

const useUmrohPackagePage = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [category, setCategory] = useState<Category[]>([]);
    const [location, setLocation] = useState<Location[]>([]);
    const [type, setType] = useState<Type[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        page: 1,
        limit: 6,
        package_status: 'active',
        id_category_departure: '',
        id_location_departure: '',
        id_type_departure: '',
        duration: '',
        price: '',
        date_departure: ''
    });

    function buildQueryParams(params: Record<string, any>) {
        const query = Object.entries(params)
        .filter(([ value]) => value !== '' && value !== null && value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

        return query;
    }  

    useEffect(() => {
        fetchPackages();
        fetchCategory();
        fetchLocation();
        fetchType();
    }, [filters]);

    async function fetchPackages() {
        try {
            const queryString = buildQueryParams(filters);
            const res = await getAllPackages(queryString);
            console.log(res);
            setPackages(res.data.data);
            setTotalPages(Math.ceil(res.data.jumlahPaket / filters.limit));
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                console.error(`Error: ${message}`);
            }
        }
    };

    async function fetchCategory() {
        try {
            const res = await getAllCategory();
            setCategory(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                console.error(`Error: ${message}`);
            }
        }
    };

    async function fetchLocation() {
        try {
            const res = await getAllLocation();
            setLocation(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                console.error(`Error: ${message}`);
            }
        }
    };

    async function fetchType() {
        try {
            const res = await getAllType();
            setType(res.data.data);
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                console.error(`Error: ${message}`);
            }
        }
    };

    const setCurrentPage = (page: number) => {
        setFilters((prev) => ({
            ...prev,
            page: page,
        }));
    };  

    const handleChangeFilter = (field: string, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
            page: 1,
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
        category,
        location,
        type,
        setCurrentPage,
        formatToShortRupiah,
        totalPages,
        filters, setFilters,
        handleChangeFilter
    };
};

export default useUmrohPackagePage;