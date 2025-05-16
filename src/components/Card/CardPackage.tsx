import React from 'react'

const CardPackage = ({ packageList = [], capacity, booked }: any) => {
    const remaining = capacity - booked
    const progress = (booked / capacity) * 100

    const renderStars = (count: number) =>
        [...Array(count)].map((_, i) => (
            <span key={i} className="text-yellow-300">★</span>
        ))

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {packageList.map((item: any, index: number) => (
                <div key={index} className='w-full relative h-[200px] shadow-[-1px_1px_8px] shadow-white'>
                    <img src={item.image} alt="paket" className='w-full h-full object-cover' />
                    <div className="w-full h-full bg-gradient-to-b from-black/0 to-black py-3 px-5 flex flex-col space-y-3 absolute top-0">
                        <h1 className=" text-white capitalize font-bold text-[24px]">
                            {item.title}
                        </h1>
                        <div className="flex space-x-2">
                            <img src={item.hotelIcon2} alt="background" className="w-[30px] h-[30px]" />
                            <div className="flex-col w-full">
                                <div className="flex w-full">
                                    <h6 className='text-white text-[12px] font-semibold'>{item.hotelName} :
                                        <span className='text-yellow-300 mx-[7px]'>{renderStars(item.hotelRating)}</span>
                                        (Quad Room)
                                    </h6>
                                </div>
                                <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{item.hotelDistance}</h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="flex space-x-2">
                                <img src={item.planeIcon} alt="background" className="w-[30px] h-[30px]" />
                                <div className="flex-col w-full">
                                    <div className="flex w-full">
                                        <h6 className='text-white text-[12px] capitalize font-semibold'>{item.airline}
                                            <span className='text-yellow-300 mx-[7px]'>{renderStars(item.airlineRating)}</span>
                                        </h6>
                                    </div>
                                    <h1 className="text-[#5CE9FF] text-[10px] font-semibold">{item.route}</h1>
                                </div>
                            </div>
                            <div className="absolute bottom-11 right-5 text-[45px] font-bold bg-gradient-to-br from-[#10F5EA] to-[#3C97FF] inline-block text-transparent bg-clip-text">
                                {item.price}
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
            ))}
        </div>
    )
}

export default CardPackage
