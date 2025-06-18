import {useState, useEffect} from 'react';
import { Package } from '../../types/Package';
import { getAllCategory, getAllLocation, getAllPackages, getAllType } from '../../services/packagesSercice';
import { Category, Location, Type } from '../../types/Filter';

const usePackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [category, setCategory] = useState<Category[]>([]);
    const [location, setLocation] = useState<Location[]>([]);
    const [type, setType] = useState<Type[]>([]);
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
            console.error(`Error: ${error}`);
        }
    };

    async function fetchCategory() {
        try {
            const res = await getAllCategory();
            setCategory(res.data.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    async function fetchLocation() {
        try {
            const res = await getAllLocation();
            setLocation(res.data.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    async function fetchType() {
        try {
            const res = await getAllType();
            setType(res.data.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

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
        category,
        location,
        type,
        setCurrentPage,
        formatToShortRupiah,
        totalPages,
        filters, setFilters
    };
};

export default usePackages;
