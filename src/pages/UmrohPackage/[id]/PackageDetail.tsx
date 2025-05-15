import React, { useRef, useState } from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import hotelIcon from "../../../assets/icons/Component 1.svg"
import wifiIcon from "../../../assets/icons/ic_baseline-wifi.svg"
import hotelIcons from "../../../assets/icons/Group.svg"
import disabilityIcon from '../../../assets/icons/streamline_travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user.svg'
import spoonIcon from "../../../assets/icons/ic_round-restaurant.svg"
import roomServiceIcon from '../../../assets/icons/ic_baseline-meeting-room.svg'
import locationIcon from "../../../assets/icons/Pin_alt.svg"
import exampleImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
import CardReview from '../../../components/Card/CardReview'
import planeIcon from '../../../assets/icons/bxs_plane.svg'
import TravelSchedule from '../../../components/TravelSchedule'
import examplePlane from '../../../assets/images/image 3.png'
import bedIcons from '../../../assets/icons/mdi_guest-room.svg'
import departureLocIcon from '../../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../../assets/icons/mdi_calendar-time.svg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return (
        <DefaultLayout>
            <div className='w-full pt-[200px] min-h-screen background-div flex flex-col space-y-[25px] items-center justify-center'>
            <div className="grid grid-cols-5 gap-5 w-10/12 mx-auto mt-10">
            {/* Kartu Kiri */}
            <div className="bg-white col-span-2 h-[550px] rounded-[5px] shadow-md overflow-hidden">
            <div className="relative rounded-t-[5px] overflow-hidden">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((src, index) => (
                    <div key={index} className="h-[220px]">
                        <img
                        src={src}
                        alt={`slide-${index}`}
                        className="w-full h-[220px] object-cover"
                        />
                    </div>
                    ))}
                </Slider>
                <button
                className="absolute left-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 w-[24px] h-[24px] text-white font-bold items-center justify-center flex p-2 rounded-full"
                onClick={previous}
            >
               &lt;

            </button>
            <button
                className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 w-[24px] h-[24px] text-white font-bold items-center justify-center flex p-2 rounded-full"
                onClick={next}
            >
               &gt;

            </button>

                {/* Overlay dan teks */}
                <div className="absolute bottom-2 left-0 w-full h-[50px] bg-black/50 flex items-center px-8">
                    <p className="text-white text-[15px] font-semibold">
                    Paket <span className="text-[#10F5EA] ms-4 text-[20px]">Plus</span>
                    </p>
                </div>
            </div>

                        
                <div className="px-8 py-4 space-y-2">
                <p className="text-[15px] font-medium">Harga</p>
                <h2 className="text-[36px] font-bold bg-gradient-to-r from-[#3C97FF] to-[#245B99] bg-clip-text text-transparent">
                Rp 32.000.000
                </h2>

                <p className="text-[15px] font-medium">Mitra</p>
                <div className="flex items-center space-x-4">
                    <span className="text-[24px] font-medium">Hasanah Hana</span>
                    <span className='text-yellow-300 text-[18px]'>★ ★ ★ ★ ★</span>
                </div>
                <p className="text-[15px] font-medium">Nomor Izin Umroh</p>
                <p className="text-[20px] font-medium">1243214533</p>
                <div className="mt-7 w-10/12 h-[14px]">
                    <div className="w-full bg-gray-200 rounded-full h-full">
                    <div
                        className="bg-gradient-to-r from-[#004492] to-[#10F5EA] h-full rounded-full w-8/12"
                        
                    ></div>
                    </div>
                    <p className="text-[12px] mt-1 font-semibold">Pesanan: 100/150</p>
                </div>
                </div>
            </div>

            {/* Kartu Kanan */}
            <div className="col-span-3 h-[550px] flex flex-col space-y-6">
                <div className="bg-white w-full h-10/12 rounded-[5px] py-4 px-[50px] space-y-4 shadow-md">
                <h2 className="font-semibold text-[24px] ms-3">Fasilitas Umroh</h2>
                <div className="grid grid-cols-2 gapx-8 py-4 text-sm">
                    <ul className="list-disc list-inside text-[15px] font-medium space-y-1">
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    </ul>
                    <ul className="list-disc list-inside text-[15px] font-medium space-y-1">
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gapx-8 py-4 pt-4 text-sm border-t">
                    <div>
                    <div className="flex space-x-2 h-[16px] items-center">
                    <img src={bedIcons} alt='Hotels' className='w-[14px] h-[14px]'/>
                    <p className="font-bold text-[15px]">Pilihan Kamar</p>
                    </div>
                    <p className='font-medium text-[13px] ms-6 mt-3'>Satu Kamar 4 Orang <span className='font-semibold'>(QUAD)</span></p>
                    </div>
                    <div>
                    <div className="flex space-x-2 h-[16px] items-center">
                    <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]'/>
                    <p className="font-bold text-[15px]">Hotel</p>
                    </div>
                    <div className="flex space-x-1 ms-4 mt-3">
                        <div className="h-[16px] flex items-center">         
                        <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                        </div>
                        <div className='flex-col w-full'>
                                
                                                    <h6 className='text-[12px] font-semibold'>
                                                        Hotel Habib
                                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                                                    </h6>
                            
                                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200 m ke masjidil haram</p>
                                                </div>
                    </div>
                    </div>
                    <div>
                    <div className="flex space-x-2 h-[16px] items-center">
                    <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]'/>
                    <p className="font-bold text-[15px]">Duration Perjalanan</p>
                    </div>
                    <p className='font-medium text-[13px] ms-6 mt-1'>9 Hari</p>
                    </div>
                    <div className="flex space-x-1 ms-4">
                        <div className="h-[16px] flex items-center">         
                        <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                        </div>
                        <div className='flex-col w-full'>
                                
                                                    <h6 className='text-[12px] font-semibold'>
                                                        Hotel Hanawi
                                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                                                    </h6>
                            
                                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200 m ke masjidil haram</p>
                                                </div>
                    </div>
                    <div>
                    <div className="flex space-x-2 h-[16px] items-center">
                    <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]'/>
                    <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                    </div>
                    <p className='font-medium text-[13px] ms-6 mt-1'>10 September 2023</p>
                    </div>
                    <div>
                    <div className="h-[16px] flex items-center space-x-2">         
                        <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                    <p className="font-semibold">Maskapai</p>
                    </div>
                    <p className='font-medium text-[13px] ms-6 mt-1'>Garuda</p>
                    
                    </div>
                    <div>
                    <div className="flex space-x-2 h-[16px] items-center">
                    <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]'/>
                    <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                    </div>
                    <p className='font-medium text-[13px] ms-6 mt-1'>Jakarta</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                        <span className='font-semibold'>Air Asia Airlines</span>
                    </div>
                </div>
                </div>

                <div className="bg-gradient-to-r from-[#10F5EA] to-[#3C97FF] w-full h-2/12 flex items-center justify-center rounded-b-[20px] rounded-t-[5px] shadow-md">
                <h1 className="capitalize text-white text-center font-bold text-[30px]">
                    Pesan Sekarang
                </h1>
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