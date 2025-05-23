import React, { useState } from 'react'
import DefaultLayout from "../../layout/DefaultLayout";
import bg from "../../assets/images/makkah-3986709.png"
import paketExample from "../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import CardPackage from '../../components/Card/CardPackage';
import departureCity from "../../assets/icons/Group 28 (1).svg"
function UmrohPackagePage() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 15
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
    const totalPages = Math.ceil(packages.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = packages.slice(startIndex, startIndex + itemPages)

    return (
        <DefaultLayout>
            <div className='w-full pb-20'>
                <div className="w-full h-[445px] relative">
                    <img src={bg} alt="background" className='w-full h-fit' />
                    <div className="w-full h-full z-10 absolute top-0 bg-gradient-to-br from-black/0 to-black/45">
                        <div className="relative w-full h-full flex justify-center">
                            <div className="w-[70%] h-[200px] absolute bottom-0 rounded-[10px] translate-y-1/2
                          bg-gradient-to-bl from-[#004492] to-[#00152C] shadow-[0px_4px_4px] shadow-black/25">
                                <div className="w-full grid grid-cols-2">
                                    <div className="grid grid-cols-2 gap-3 border-e-[2px] w-full h-full mt-[40px] px-10 justify-center ">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure-city" className="text-white text-[12px] ms-4">
                                                Kota Keberangkatan
                                            </label>
                                            <div className="relative">
                                                <img
                                                    src={departureCity}
                                                    alt="City Icon"
                                                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                                />
                                                <select
                                                    id="departure-city"
                                                    name="departure city"
                                                    className="bg-white w-full ps-9 pe-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]"
                                                >
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Jakarta">Jakarta</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="Cepat">Cepat</option>
                                                <option value="Lambat">Lambat</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure time" className='text-white text-[12px] ms-4'>Waktu Keberangkatan</label>
                                            {/* <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id="">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="Cepat">Cepat</option>
                                                <option value="Lambat">Lambat</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure time" className='text-white text-[12px] ms-4'>Waktu Keberangkatan</label>
                                            {/* <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select> */}
                                            <input type='time' className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id="" />
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Durasi Perjalanan</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="1 Jam">1 Jam</option>
                                                <option value="2 Jam">Bandung</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 w-full h-full items-start mt-[40px] px-10 justify-center ">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Kategori Paket Umroh</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="Bandung">Bandung</option>
                                                <option value="Bandung">Bandung</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Estimasi Biaya</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="45 Juta">45 Juta</option>
                                                <option value="Bandung">Bandung</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-fit background-div">

                        <div className=" mt-[150px] w-full flex flex-col items-center">
                            <div className="w-3/4">
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
                </div>
            </div>
        </DefaultLayout>
    )
}

export default UmrohPackagePage