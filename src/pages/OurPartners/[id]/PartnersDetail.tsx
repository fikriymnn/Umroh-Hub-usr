import React, { useState } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import paketExample from "../../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import CardPackage from '../../../components/Card/CardPackage';
import mitraExampleProfile from "../../../assets/images/pexels-chevanon-1108099.png"
import CardReview from '../../../components/Card/CardReview';

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
    ];
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
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                            {/* {packages.map((item, index) => (
                    <CardPackage
                      key={index}
                      title={item.title}
                      image={item.image}
                      hotelName={item.hotelName}
                      hotelRating={item.hotelRating}
                      hotelDistance={item.hotelDistance}
                      airline={item.airline}
                      airlineRating={item.airlineRating}
                      route={item.route}
                      price={item.price}
                      booked={item.booked}
                      capacity={item.capacity}
                    />
                  ))} */}

                            {currentItems.map((data, index) => (
                                <CardPackage key={index} {...data} />
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
                <CardReview ulasan={dataUlasan} variant="carousel" />
                {/* <div className="bg-white w-10/12 flex flex-col items-center h-[400px] px-[40px] py-5 rounded-[5px] mt-[20px] ">
                    <div className="w-9/12 h-full ">
                        <h1 className="text-[24px] capitalize w-full h-[50px] flex  items-center font-medium">
                            ulasan jemaah
                        </h1>
                        <div className="w-full h-[80%] grid grid-cols-3 mt-[48px] gap-2">

                            <div className='w-full h-full flex flex-col'>
                                <div className='flex items-start gap-4'>
                                    <div className='w-[65px] h-[65px] bg-gray-300 rounded-full'>
                                    </div>
                                    <div className="flex flex-col">

                                        <h3 className='text-lg font-semibold'>Belia lucuk</h3>
                                        <div className='text-sm text-gray-600 capitalize'>
                                            jakarta
                                        </div>
                                    </div>

                                </div>

                                <div className='text-sm text-gray-600 flex items-center gap-1'>
                                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                                </div>
                                <div className=' w-full h-[70px] grid grid-cols-4 gap-2 mt-4'>
                                    <div
                                        className='w-full bg-gray-200 rounded-md'
                                    >
                                    </div>
                                    <div
                                        className='w-full bg-gray-200 rounded-md'
                                    >
                                    </div>
                                    <div
                                        className='w-full bg-gray-200 rounded-md'
                                    >
                                    </div>
                                    <div
                                        className='w-full bg-gray-200 rounded-md'
                                    >
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </DefaultLayout>
    )
}

export default PartnersDetail