import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Partners } from '../../types/Partners';
import { getPartnersById } from '../../services/partnersServices';

const useDetailPartner = () => {
    const { id } = useParams();
    const [partner, setPartner] = useState<Partners | null>(null);
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 9;

    useEffect(() => {
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

        fetchPartner();
    }, []);

    const dataUlasan = [
        {
            nama: 'Acep Waskuy',
            kota: 'Jakarta',
            komentar: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
            foto: [1, 2, 3, 4],
        },
        {
            nama: 'Adul Sahrumi',
            kota: 'Bandung',
            komentar: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
            foto: [1, 2, 3, 4],
        },
        {
            nama: 'Dias Nasional',
            kota: 'Bandung',
            komentar: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
            foto: [1, 2, 3, 4],
        },
    ];

    const totalPages = Math.ceil((partner?.package_umrohs?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages;
    const currentItems = partner?.package_umrohs?.slice(startIndex, startIndex + itemPages) || [];

    return {
        partner,
        currentPage, setCurrentPage,
        dataUlasan,
        totalPages,
        currentItems
    };
};

export default useDetailPartner;
