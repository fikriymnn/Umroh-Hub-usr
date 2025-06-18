/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router';
import { Package } from '../../types/Package';
import { getOnePackages } from '../../services/packagesSercice';
import Slider from 'react-slick';
import exampleImage from "../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"

const useDetailPackage = () => {
    const { id } = useParams();
    const [packages, setPackages] = useState<Package>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4;

    useEffect(() => {
        async function fetchPackage() {
            try {
                if (id) {
                    const res = await getOnePackages(id);
                    console.log(res.data);
            
                    setPackages(res.data.data);
                }
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchPackage();
    }, []);

    const review = [
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
    ];

    const schedule = packages?.package_schedules?.flatMap((schedule: any) =>
        schedule.detail_activities.map((activity: any) => ({
            hari: schedule.title,
            image: schedule.image_url,
            aktivitas: activity.activity,
            catatan: activity.note,
            waktu: activity.time,
        }))
    ) || [];

    const totalPages = Math.ceil((schedule?.length || 0) / itemPages);
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = schedule.slice(startIndex, startIndex + itemPages)

    const images = [
        exampleImage,
        exampleImage,
        exampleImage
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const sliderRef = useRef<Slider>(null);

    const formatHarga = (itung: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(itung);
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return {
        packages,
        currentPage, setCurrentPage,
        currentItems,
        review,
        totalPages,
        images,
        settings,
        sliderRef,
        formatHarga,
        next, previous
    };
};

export default useDetailPackage;
