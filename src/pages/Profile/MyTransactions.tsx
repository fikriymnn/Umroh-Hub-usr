import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import hotelIcon from "../../assets/icons/Component 1.svg"
import hotelIcons from "../../assets/icons/Group.svg"
import planeIcon from '../../assets/icons/bxs_plane.svg'
import departureLocIcon from '../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../assets/icons/mdi_calendar-time.svg'
import examplePlane from '../../assets/images/image 3.png'
import bedIcons from '../../assets/icons/mdi_guest-room.svg'
import axios from 'axios'
import { Order } from '../../types/Order'

function Transaction() {
    const [order, setOrder] = useState<Order[]>([]);
    const [filter, setFilter] = useState('semua');

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = axios.get(`${import.meta.env.VITE_PUBLIC_URL}/getOrderUser`, {
                    withCredentials: true
                });
                console.log((await res).data.data);
                setOrder((await res).data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchOrder();
    }, []);

    const transaction = [
        {
            packageName: 'Umroh Paket Plus Hasanah',
            partners: 'Hasanah Hana',
            roomCapacity: 4,
            duration: 9,
            date: '10 September 2023',
            city: 'Jakarta',
            airline: 'Garuda',
            status: 'di proses',
            hotel: [
                {
                    nameHotel: 'Hotel Habib',
                    typeHotel: 'Quad Room',
                    distance: '250m ke Masjidil Haram'
                },
                {
                    nameHotel: 'Hotel Habib',
                    typeHotel: 'Quad Room',
                    distance: '200m ke Masjidil Haram'
                },
            ]
        },
        {
            packageName: 'Umroh Paket Plus Hasanah Elite',
            partners: 'Hasanah Hana',
            roomCapacity: 4,
            duration: 9,
            date: '10 September 2023',
            city: 'Bandung',
            airline: 'Garuda',
            status: 'selesai',
            hotel: [
                {
                    nameHotel: 'Hotel Nawawi',
                    typeHotel: 'Quad Room',
                    distance: '250m ke Masjidil Haram'
                },
                {
                    nameHotel: 'Hotel Habib',
                    typeHotel: 'Quad Room',
                    distance: '200m ke Masjidil Haram'
                },
            ]
        },
    ];

    const filteredTransactions = transaction.filter((item) => {
        if (filter === 'semua') {
            return true;
        }

        return item.status === filter;
    });

    return (
        <div className='w-full h-screen flex space-x-2 bg-gradient-to-b from-[#004492] to-[#00152C]'>
            <div className='w-2/12'>
                <Sidebar />
            </div>
            <div className="w-10/12 max-w-screen-xl mx-auto flex h-full pt-[140px] justify-center bg-white overflow-x-hidden relative">
                <div className="w-8/12 ">
                    <div className="flex space-x-[70px] pb-6 border-b-1 border-[#B0ADAD]">
                        <h1
                            onClick={() => setFilter('semua')}
                            className={`ms-[56px] font-medium cursor-pointer ${filter === 'semua' ? 'text-[#0A6BDB]' : ''}`}>
                            Semua
                        </h1>
                        <h1
                            onClick={() => setFilter('belum dibayar')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'belum dibayar' ? 'text-[#0A6BDB]' : ''}`}>
                            Belum Dibayar
                        </h1>
                        <h1
                            onClick={() => setFilter('di proses')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'di proses' ? 'text-[#0A6BDB]' : ''}`}>
                            di proses
                        </h1>
                        <h1
                            onClick={() => setFilter('selesai')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'selesai' ? 'text-[#0A6BDB]' : ''}`}>
                            selesai
                        </h1>
                    </div>
                    {order?.map((item, index) => (
                        <div key={index} className='mt-[27px] pb-[36px] border-b-[#B0ADAD] px-[56px] border-b'>
                            <div className="flex justify-between w-full">
                                <h1 className="text-[24px] font-medium">{item?.package_umroh?.package_name}</h1>
                                <div className="flex space-x-2">

                                    <h1 className='text-[14px] font-medium'>Status</h1>
                                    <h1 className='text-[#0A6BDB] text-[14px] font-medium capitalize'>{item?.payment_status}</h1>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-[20px] font-medium">{item?.mitra?.company_name}</span>
                                <span className='text-yellow-300 text-[18px]'>★ ★ ★ ★ ★</span>
                            </div>

                            <div className=" w-8/12 grid grid-cols-2  gap-y-2 py-4 pt-4 text-sm ">
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={bedIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Pilihan Kamar</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-3'>{item?.package_umroh?.package_hotels[0]?.master_hotel?.room_type}</p>
                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Hotel</p>
                                    </div>
                                    {item?.package_umroh?.package_hotels?.map((hotel, i) => {
                                        if (i === 0) {
                                            return (
                                                <div key={i} className='flex space-x-1 ms-4 mt-3'>
                                                    <div className="h-[16px] flex items-center">
                                                        <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                    </div>
                                                    <div className='flex-col w-full'>
                                                        <h6 className='text-[12px] font-semibold'>
                                                            {hotel?.master_hotel?.hotel_name}
                                                            <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> {hotel?.master_hotel?.hotel_type}
                                                        </h6>

                                                        <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{hotel?.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Duration Perjalanan</p>
                                    </div>
                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>{item?.package_umroh?.duration} Hari</p>
                                </div>
                                {item?.package_umroh?.package_hotels?.map((hotel, i) => {
                                    if (i === 1) {
                                        return (
                                            <div key={i} className='flex space-x-1 ms-4 mt-3'>
                                                <div className="h-[16px] flex items-center">
                                                    <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                </div>
                                                <div className='flex-col w-full'>
                                                    <h6 className='text-[12px] font-semibold'>
                                                        {hotel?.master_hotel?.hotel_name}
                                                        <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> {hotel?.master_hotel?.hotel_type}
                                                    </h6>

                                                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{hotel?.description}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                                    </div>
                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>
                                        {new Date(item?.package_umroh?.date_departure).toLocaleDateString('id-ID', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <div className="h-[16px] flex items-center space-x-2">
                                        <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                                        <p className="font-semibold">Maskapai</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>{item?.package_umroh?.airline}</p>

                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>{item?.package_umroh?.master_location_departure?.location_name}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                                    <span className='font-semibold capitalize'>Air Asia Airlines</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transaction