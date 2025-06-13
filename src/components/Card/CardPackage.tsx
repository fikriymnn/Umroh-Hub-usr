/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router'
import { Package } from '../../types/Package';
import paketExample from "../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import hotelIcon from "../../assets/icons/Component 1.svg"
import planeIcon from "../../assets/icons/Component 8.svg"

const capacity = 80;
const booked = 50;
const airlineRating = 5;

const CardPackage = ({ packages }: { packages: Package }) => {
    const remaining = capacity - booked
    const progress = (booked / capacity) * 100
    const hotelData = packages.package_hotels?.[0];

    const renderStars = (count: number) =>
        [...Array(count)].map((_, i) => (
            <span key={i} className="text-yellow-300">★</span>
        ))


    return (
        <Link to={`/UmrohPackage/${packages.id}`} className='w-full relative h-[200px] shadow-[-1px_1px_8px] shadow-white'>
            <img src={paketExample} alt="paket" className='w-full h-full object-cover' />
            <div className="w-full h-full bg-gradient-to-b from-black/0 to-black py-3 px-5 flex flex-col space-y-3 absolute top-0">
                <h1 className=" text-white capitalize font-bold text-[24px]">
                    {packages.package_name}
                </h1>
                <div className="flex space-x-2">
                    <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                    <div className="flex-col w-full">
                        <div className="flex w-full">
                            <h6 className='text-white text-[12px] font-semibold'>{hotelData?.master_hotel?.hotel_name} :
                                <span className='text-yellow-300 mx-[7px]'>{renderStars(parseInt(hotelData?.master_hotel?.hotel_type || '0'))}</span>
                                (Quad Room)
                            </h6>
                        </div>
                        <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{hotelData?.description}</h1>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex space-x-2">
                        <img src={planeIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                            <div className="flex w-full">
                                <h6 className='text-white text-[12px] capitalize font-semibold'>{packages?.airline}
                                    <span className='text-yellow-300 mx-[7px]'>{renderStars(airlineRating)}</span>
                                </h6>
                            </div>
                            <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{packages?.master_location_departure?.location_name}</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-11 right-5 text-[45px] font-bold bg-gradient-to-br from-[#10F5EA] to-[#3C97FF] inline-block text-transparent bg-clip-text">
                        {packages?.price}
                    </div>
                </div>
                <div className="flex justify-between px-[17px] py-[20px] w-full mt-[8px] ">
                    <div className="flex  space-x-2">
                        <div className="w-[100px] h-[5px] rounded-[10px] bg-[#E5E5E5]">
                            <div className="w-[80%] rounded-s-[10px] h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]"
                                style={{ width: `${progress}%` }}
                            >
                            </div>
                        </div>
                        <div className="flex-col text-center -translate-y-4">
                            <h1 className=" text-[9px] font-semibold text-center text-white">Pesanan: {booked}/{capacity}</h1>
                            <h1 className=" text-[9px] font-semibold text-center text-white">Tersisa: {remaining}</h1>
                        </div>
                    </div>
                    <h1 className=" text-[#10F5EA] font-bold text-[12px] -translate-y-1">
                        Lihat detail
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default CardPackage
