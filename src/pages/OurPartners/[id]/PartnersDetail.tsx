/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import DefaultLayout from '../../../layout/DefaultLayout'
import CardPackage from '../../../components/Card/CardPackage'
import mitraExampleProfile from "../../../assets/images/pexels-chevanon-1108099.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from '../../../components/Review';
import usePartnersDetail from '../../../hooks/partners/usePartnersDetail';
import { renderStars } from '../../../utils/renderStars';

function PartnersDetail() {
    const {
        partner,
        reviews,
        currentPage, setCurrentPage,
        totalPages,
        currentItems
    } = usePartnersDetail();

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

    return (

        <DefaultLayout>
            {partner && (
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
                                    {partner?.mitra?.company_name}<span className="text-yellow-300 text-[30px] ms-6">{renderStars(partner?.ratingMitra)}</span> <span className='ms-6 text-[24px]'>({partner?.totalReview})</span>
                                </h1>
                                <p className='text-[12px] mt-2 w-[95%]'>{partner?.mitra?.description}</p>
                                <div className="flex space-x-10 mt-6">

                                    <h1 className="text-[#3C97FF] text-[20px] font-semibold">{partner?.totalPackage} <span className='text-black font-normal'>Paket</span></h1>
                                    <h1 className="text-[#3C97FF] text-[20px] font-semibold">{partner?.totalJamaah} <span className='text-black font-normal'>Jemaah</span></h1>
                                    <h1 className="text-[#3C97FF] text-[20px] font-semibold">{partner?.totalReview} <span className='text-black font-normal'>Ulasan</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 items-start mt-[45px] space-y-[25px]">
                        <h1 className="text-white text-[24px] font-semibold capitalize">Paket dari<span className='text-[#3C97FF] ms-3 capitalize font-medium'>{partner?.mitra?.company_name}</span></h1>
                        <div className=" w-full flex flex-col items-center">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                                {currentItems?.map((packages: any, index: number) => (
                                    <CardPackage
                                        key={index}
                                        packages={packages}
                                    />
                                ))}
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
                            {reviews?.map((review, index) => (
                                <div key={index} className="px-14 w-full max-w-[600px]">
                                    <Reviews ulasan={review} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </DefaultLayout>
    )
}

export default PartnersDetail