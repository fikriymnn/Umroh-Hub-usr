import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { DetailPartner } from '../../types/Partners';
import { getPartnersById } from '../../services/partnersServices';
import { Review } from '../../types/Review';
import { getAllReviews } from '../../services/packagesSercice';
import { isAxiosError } from 'axios';

const usePartnersDetail = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState<DetailPartner | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 9;

    useEffect(() => {
        fetchPartner();
        fetchReview();
    }, []);
    
    async function fetchPartner() {
        try {
            if (id) {
                const res = await getPartnersById(id);
                console.log(res.data);
                setPartner(res.data.data.data);
            }
        } catch (error) {
            if (isAxiosError(error)) {
                const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data';
                console.error(`Error: ${message}`);
            }
        }
    };

    async function fetchReview() {
        try {
            const res = await getAllReviews();
            console.log(res);
            setReviews(res.data.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    const totalPages = Math.ceil((partner?.mitra?.package_umrohs?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages;
    const currentItems = partner?.mitra?.package_umrohs?.slice(startIndex, startIndex + itemPages) || [];

    return {
        partner,
        reviews, setReviews,
        currentPage, setCurrentPage,
        totalPages,
        currentItems
    };
};

export default usePartnersDetail;
