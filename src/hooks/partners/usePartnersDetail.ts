import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Partners } from '../../types/Partners';
import { getPartnersById } from '../../services/partnersServices';
import { Review } from '../../types/Review';
import { getAllReviews } from '../../services/packagesSercice';

const usePartnersDetail = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState<Partners | null>(null);
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
                setPartner(res.data.data.data);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
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

    const totalPages = Math.ceil((partner?.package_umrohs?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages;
    const currentItems = partner?.package_umrohs?.slice(startIndex, startIndex + itemPages) || [];

    return {
        partner,
        reviews, setReviews,
        currentPage, setCurrentPage,
        totalPages,
        currentItems
    };
};

export default usePartnersDetail;
