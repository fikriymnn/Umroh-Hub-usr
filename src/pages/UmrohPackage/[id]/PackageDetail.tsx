import React, { useState } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import hotelIcon from "../../../assets/icons/Component 1.svg"
import wifiIcon from "../../../assets/icons/ic_baseline-wifi.svg"
import disabilityIcon from '../../../assets/icons/streamline_travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user.svg'
import spoonIcon from "../../../assets/icons/ic_round-restaurant.svg"
import roomServiceIcon from '../../../assets/icons/ic_baseline-meeting-room.svg'
import locationIcon from "../../../assets/icons/Pin_alt.svg"
import exampleImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
import CardReview from '../../../components/Card/CardReview'
import TravelSchedule from '../../../components/TravelSchedule'

function PackageDetail() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPages = 4

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

    const schedule = [
        {
            image: exampleImage,
            hari: 'Hari 1',
            waktu: '07.00 AM',
            aktivitas: 'Sarapan dan persiapan',
            catatan: 'Bawa perlengkapan mandi',
        },
        {
            image: exampleImage,
            hari: 'Hari 2',
            waktu: '10.00 AM',
            aktivitas: 'City Tour',
            catatan: 'Jangan lupa kamera',
        },
        {
            image: exampleImage,
            hari: 'Hari 3',
            waktu: '10.00 AM',
            aktivitas: 'City Tour',
            catatan: 'Jangan lupa kamera',
        },
        {
            image: exampleImage,
            hari: 'Hari 4',
            waktu: '10.00 AM',
            aktivitas: 'City Tour',
            catatan: 'Jangan lupa kamera',
        },
        {
            image: exampleImage,
            hari: 'Hari 5',
            waktu: '10.00 AM',
            aktivitas: 'City Tour',
            catatan: 'Jangan lupa kamera',
        },
    ];

    const totalPages = Math.ceil(schedule.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = schedule.slice(startIndex, startIndex + itemPages)

    return (
        <DefaultLayout>
            <div className='w-full pt-[200px] min-h-screen background-div flex flex-col space-y-[25px] items-center justify-center'>
                <div className="grid grid-cols-5 gap-5 w-10/12">
                    <div className="bg-white col-span-2 h-[500px] rounded-[5px]">
                    </div>
                    <div className=" col-span-3 h-[500px] flex-col flex space-y-6 rounded-[5px]">
                        <div className="bg-white w-full h-10/12 rounded-[5px]">

                        </div>
                        <div className="bg-gradient-to-r flex items-center justify-center from-[#10F5EA] to-[#3C97FF]  w-full h-2/12 rounded-b-[20px] rounded-t-[5px]">
                            <h1 className='capitalize text-white text-center font-bold text-[30px]'>Pesan sekarang</h1>
                        </div>
                    </div>
                </div>

                {/* hotel dan Fasilitasnya */}
                <div className="w-10/12 h-[600px] p-[40px] rounded-[5px] bg-white">
                    <h1 className='text-[24px] font-medium'>Hotel dan Fasilitasnya</h1>
                    <div className=" h-full grid grid-cols-2 w-11/12 mt-[50px]">
                        <div className='flex flex-col space-y-2 w-full my-2 items-center'>
                            <div className="w-full flex space-x-3.5">

                                <img src={hotelIcon} alt="icon" className='w-[30px] h-[30px]' />
                                <div className='flex-col w-full'>
                                    <h6 className='text-[12px] font-semibold'>
                                        Hotel Habib
                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                                    </h6>
                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200 m ke masjidil haram</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col ms-[80px] space-y-3.5 items-start ">

                                <div className="bg-[#D9D9D9] h-[160px] flex justify-start w-8/12">

                                </div>
                                <div className="flex space-x-5 w-7/12">

                                    <img src={locationIcon} alt="icon" className='w-[18px] h-[18px]' />
                                    <p className="text-[15px] font-medium">
                                        Jl lorem ipsum dolor sit amet lorem ipsum dot sit amat
                                    </p>
                                </div>
                                <div className="flex w-8/12 mt-4 space-x-2">
                                    <div className="flex h-[20px] items-center space-x-5 w-7/12">
                                        <img src={wifiIcon} alt="icon" className='w-[18px] h-[18px]' />
                                        <p className="text-[15px] capitalize font-medium">
                                            Free Wifi
                                        </p>
                                    </div>
                                    <div className="flex space-x-5 w-7/12">

                                        <img src={spoonIcon} alt="icon" className='w-[18px] h-[18px]' />
                                        <p className="text-[15px] capitalize font-medium">
                                            tempat Makan
                                        </p>
                                    </div>
                                </div>
                                <div className="flex h-[20px] mt-4 items-center w-8/12 space-x-2">
                                    <div className="flex h-[20px] items-center space-x-5 w-7/12">
                                        <img src={disabilityIcon} alt="icon" className='w-[18px] h-[18px]' />
                                        <p className="text-[15px] capitalize font-medium">
                                            Disabilitas
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 w-7/12">

                                        <img src={roomServiceIcon} alt="icon" className='w-[25px] h-[25px]' />
                                        <p className="text-[15px] whitespace-nowrap capitalize font-medium">
                                            Pelayanan Kamar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* jadwal */}
                <div className="bg-white w-10/12 p-[40px] rounded-[5px]">
                    <div>
                        <h1 className='text-[24px] font-medium capitalize mb-10'>Jadwal perjalanan</h1>
                        {currentItems.map((data, index) => (
                            <TravelSchedule key={index} {...data} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-10 space-x-4 text-white'>
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className='px-3 py-1 bg-black'
                        >
                            &lt;
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : 'bg-black text-white font-bold rounded-2xl'}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className='px-3 py-1 bg-black'
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="w-10/12 grid gap-5 grid-cols-3">
                    <CardReview ulasan={review} variant="list" />
                    <div>

                    </div>
                    <div className=" bg-white rounded-[5px] p-[40px]">
                        <h1 className='text-[24px] font-medium'>Persyaratan</h1>
                        <ul className='list-disc ms-8 mt-4'>
                            <li>syarat</li>
                            <li>syarat</li>
                            <li>syarat</li>
                            <li>syarat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default PackageDetail