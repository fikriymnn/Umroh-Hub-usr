import React from 'react'
import paketBg from "../../assets/images/Rectangle 111.png"
import paketExample from "../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import hotelIcon2 from "../../assets/icons/Component 7.svg"
import planeIcon from "../../assets/icons/Component 8.svg"

interface CardPackageProps {
    title: string
    image: string
    hotelName: string
    hotelRating: number
    hotelDistance: string
    airline: string
    airlineRating: number
    route: string
    price: string
    booked: number
    capacity: number
}

function CardPackage({
    title,
    image,
    hotelName,
    hotelRating,
    hotelDistance,
    airline,
    airlineRating,
    route,
    price,
    booked,
    capacity,
}: CardPackageProps) {
    const remaining = capacity - booked
    const progress = (booked / capacity) * 100

    const renderStars = (count: number) =>
        [...Array(count)].map((_, i) => (
            <span key={i} className="text-yellow-300">★</span>
        ))

    return (
        <div className="grid grid-cols-3 mt-3">
            <div className="w-[100%] relative h-[200px] shadow-[-1px_1px_8px] shadow-white">
                <img src={paketExample} alt="paket" className='w-full h-full object-cover' />
                <div className="w-full h-full bg-gradient-to-b from-black/0 to-black py-3 px-5 flex flex-col space-y-3 absolute top-0">
                    <h1 className=" text-white capitalize font-bold text-[24px]">
                        {title}
                    </h1>
                    <div className="flex space-x-2">
                        <img src={hotelIcon2} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                            <div className="flex w-full">
                                <h6 className='text-white text-[12px] font-semibold'>{hotelName} :
                                    <span className='text-yellow-300 mx-[7px]'>{renderStars(hotelRating)}</span>
                                    (Quad Room)
                                </h6>
                            </div>
                            <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{hotelDistance}</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="flex space-x-2">
                            <img src={planeIcon} alt="background" className="w-[30px] h-[30px]" />
                            <div className="flex-col w-full">
                                <div className="flex w-full">
                                    <h6 className='text-white text-[12px] capitalize font-semibold'>{airline}
                                        <span className='text-yellow-300 mx-[7px]'>{renderStars(airlineRating)}</span>
                                    </h6>
                                </div>
                                <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{route}</h1>
                            </div>
                        </div>
                        <div className="absolute bottom-11 right-5 text-[45px] font-bold bg-gradient-to-br from-[#10F5EA] to-[#3C97FF] inline-block text-transparent bg-clip-text">
                            {price}
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
            </div>
        </div>
    )
}

export default CardPackage
