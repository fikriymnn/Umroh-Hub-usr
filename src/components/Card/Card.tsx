/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const Card = ({ data }: any) => {
    return (
        <div className='bg-white rounded-[10px] w-full h-[506px] flex flex-col overflow-hidden shadow-md'>
            {data.cardImage && (
                <img src={data.cardImage} alt='card-image' className='w-full h-[180px] object-cover rounded-t-[10px]' />
            )}
            <div className='flex-1 flex flex-col px-[17px] pt-[16px] py-[10px] border-b border-[#CBCBCB] overflow-hidden'>
                {data.cardHeader && <h1 className='font-bold text-[18px]'>{data.cardHeader}</h1>}

                <div className='mt-2 flex-1 overflow-auto pr-1'>
                    {data.hotelList?.map((hotel: any, index: number) => (
                        <div className='flex space-x-2 w-full my-2' key={index}>
                            <img src={hotel.icon} alt="icon" className='w-[30px] h-[30px]' />
                            <div className='flex-col w-full'>
                                <h6 className='text-[12px] font-semibold'>
                                    {hotel.city} :
                                    <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>({hotel.roomType})
                                </h6>
                                <p className='text-[#209FB2] text-[10px] font-semibold'>{hotel.distance}</p>
                            </div>
                        </div>
                    ))}

                    <div className='flex space-x-2 mt-2'>
                        <h1 className='text-[#ACACAC] text-[12px] font-semibold line-through'>{data.price.original}</h1>
                        <h1 className='text-[#209FB2] text-[15px] font-semibold'>{data.price.discounted}</h1>
                    </div>
                    <div className='flex w-10/12 ms-1 justify-between mt-[20px]'>
                        <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#D1F4FA]'>Pesan</button>
                        <button className='py-3 text-[13px] font-semibold'>Lihat Detail</button>
                    </div>
                </div>
            </div>

            {data.cardProgress && (
                <div className='px-[17px] py-[20px]'>
                    <div className='w-full h-[10px] rounded-[10px] bg-[#E5E5E5] overflow-hidden'>
                        <div
                            className='h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]'
                            style={{ width: `${data.cardProgress.percent}%` }}
                        />
                    </div>
                    <p className='text-[12px] font-semibold mt-2'>{data.cardProgress.label}</p>
                </div>
            )}
        </div>
    )
}

export default Card
