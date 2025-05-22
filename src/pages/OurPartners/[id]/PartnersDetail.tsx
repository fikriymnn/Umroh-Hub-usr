'use client'
import React, { useState } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import paketExample from "../../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import CardPackage from '../../../components/Card/CardPackage'
import mitraExampleProfile from "../../../assets/images/pexels-chevanon-1108099.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from '../../../components/Review'

function PartnersDetail() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 9
    const packages = [
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Amanah Travel",
            image: paketExample,
            hotelName: "Madinah",
            hotelRating: 4,
            hotelDistance: "500 m ke Nabawi",
            airline: "Garuda Indonesia",
            airlineRating: 4,
            route: "CGK - MED",
            price: "28 Jt",
            booked: 70,
            capacity: 100,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Amanah Travel",
            image: paketExample,
            hotelName: "Madinah",
            hotelRating: 4,
            hotelDistance: "500 m ke Nabawi",
            airline: "Garuda Indonesia",
            airlineRating: 4,
            route: "CGK - MED",
            price: "28 Jt",
            booked: 70,
            capacity: 100,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Amanah Travel",
            image: paketExample,
            hotelName: "Madinah",
            hotelRating: 4,
            hotelDistance: "500 m ke Nabawi",
            airline: "Garuda Indonesia",
            airlineRating: 4,
            route: "CGK - MED",
            price: "28 Jt",
            booked: 70,
            capacity: 100,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Hasanah Hana",
            image: paketExample,
            hotelName: "Mekkah",
            hotelRating: 5,
            hotelDistance: "200 m ke Masjidil Haram",
            airline: "Lion Air",
            airlineRating: 5,
            route: "Soekarno hatta ke JED",
            price: "32 Jt",
            booked: 100,
            capacity: 150,
        },
        {
            title: "Umroh Amanah Travel",
            image: paketExample,
            hotelName: "Madinah",
            hotelRating: 4,
            hotelDistance: "500 m ke Nabawi",
            airline: "Garuda Indonesia",
            airlineRating: 4,
            route: "CGK - MED",
            price: "28 Jt",
            booked: 70,
            capacity: 100,
        },

    ];

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

    const NextArrow = ({ onClick }: any) => (
        <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer z-10 hover:bg-gray-100"
            onClick={onClick}
        >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );

    const PrevArrow = ({ onClick }: any) => (
        <div
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer z-10 hover:bg-gray-100"
            onClick={onClick}
        >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const totalPages = Math.ceil(packages.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = packages.slice(startIndex, startIndex + itemPages)
    return (

        <DefaultLayout>
            <div className='background-div pt-[200px] w-full min-h-screen flex flex-col items-center'>
                <div className="bg-white w-10/12 h-[251px] px-[40px] py-5 rounded-[5px] mt-[20px] ">
                    <div className="w-full h-full flex space-x-16 items-center">
                        <img
                            src={mitraExampleProfile}
                            alt="mitra profile"
                            className="w-[220px] h-[220px] object-cover rounded-full"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-[50px] capitalize w-full h-[50px] flex  items-center font-medium">
                                Hasanah Travel <span className="text-yellow-300 text-[30px] ms-6">★</span> <span className='ms-6 text-[24px]'>(89)</span>
                            </h1>
                            <p className='text-[12px] mt-2 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            <div className="flex space-x-10 mt-6">

                                <h1 className="text-[#3C97FF] text-[20px] font-semibold">20 <span className='text-black font-normal'>Paket</span></h1>
                                <h1 className="text-[#3C97FF] text-[20px] font-semibold">20 <span className='text-black font-normal'>Jemaah</span></h1>
                                <h1 className="text-[#3C97FF] text-[20px] font-semibold">20 <span className='text-black font-normal'>Ulasan</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-10/12 items-start mt-[45px] space-y-[25px]">
                    <h1 className="text-white text-[24px] font-semibold capitalize">Paket dari<span className='text-[#3C97FF] font-medium'>hasanah hana</span></h1>
                    <div className=" w-full flex flex-col items-center">
                        <div className="w-full">
                            <CardPackage packageList={currentItems} />
                        </div>
                        <div className='flex justify-center mt-10 space-x-4 text-white'>
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className='px-3 py-1'
                            >
                                &lt;
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className='px-3 py-1'
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-10 px-6 mt-10 bg-white w-[1125px] h-[408px] rounded-[5px]">
                    <h2 className="text-[24px] md:text-2xl font-semibold mb-4 ml-24">Ulasan Jemaah</h2>
                    <Slider {...settings}>
                        {dataUlasan.map((review, index) => (
                            <div key={index} className="px-14">
                                <Review ulasan={[review]} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default PartnersDetail