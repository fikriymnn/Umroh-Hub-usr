/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const Card = ({ data }: any) => {
  return (
    <div className='bg-white rounded-[10px] w-full h-[506px] flex flex-col overflow-hidden shadow-md 
                    max-md:h-auto max-sm:h-auto max-sm:pb-3'>
      {data.cardImage && (
        <img
          src={data.cardImage}
          alt='card-image'
          className='w-full h-[180px] object-cover rounded-t-[10px] 
                     max-md:h-[140px] max-sm:h-[80px]'
        />
      )}

      <div className='flex-1 flex flex-col px-[17px] pt-[16px] py-[10px] max-sm:py-[8px] border-b border-[#CBCBCB] 
                      overflow-hidden max-sm:px-[12px]'>
        {data.cardHeader && (
          <h1 className='font-bold text-[18px] max-md:text-[15px] max-sm:text-[11px]'>
            {data.cardHeader}
          </h1>
        )}

        <div className='mt-2 max-sm:mt-[2px] flex-1 overflow-auto pr-1 max-sm:overflow-visible'>
          {data.hotelList?.map((hotel: any, index: number) => (
            <div
              className='flex space-x-2 w-full my-2'
              key={index}
            >
              <img
                src={hotel.icon}
                alt='icon'
                className='w-[30px] h-[30px] max-md:w-[25px] max-md:h-[25px] 
                           max-sm:w-[14px] max-sm:h-[14px]'
              />
              <div className='flex-col w-full'>
                <h6 className='text-[12px] font-semibold max-md:text-[10px] max-sm:text-[9px]'>
                  {hotel.city} :
                  <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>({hotel.roomType})
                </h6>
                <p className='text-[#209FB2] text-[10px] font-semibold max-md:text-[9px] max-sm:text-[8px]'>
                  {hotel.distance}
                </p>
              </div>
            </div>
          ))}

          <div className='flex space-x-2 mt-2 max-sm:flex-wrap max-sm:gap-y-[2px]'>
            <h1 className='text-[#ACACAC] text-[12px] font-semibold line-through max-md:text-[10px] max-sm:text-[9px]'>
              {data.price.original}
            </h1>
            <h1 className='text-[#209FB2] text-[15px] font-semibold max-md:text-[13px] max-sm:text-[9px]'>
              {data.price.discounted}
            </h1>
          </div>

          <div className='flex w-10/12 ms-1 justify-between mt-[20px] 
                          max-md:w-full max-sm:w-full max-sm:mt-[12px] max-sm:gap-2'>
            <button
            className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#D1F4FA] 
                        max-md:py-2 max-md:w-[85px] max-md:text-[11px] 
                        max-sm:w-fit max-sm:py-1 max-sm:px-2 max-sm:text-[8px]'
            >
            Pesan
            </button>
            <button
            className='py-3 text-[13px] font-semibold 
                        max-md:py-2 max-md:text-[11px] 
                        max-sm:py-1 max-sm:text-[8px]'
            >
            Lihat Detail
            </button>

          </div>
        </div>
      </div>

      {data.cardProgress && (
        <div className='px-[17px] py-[20px] max-md:py-[12px] max-sm:py-[10px] max-sm:px-[12px]'>
          <div className='w-full h-[10px] rounded-[10px] bg-[#E5E5E5] overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]'
              style={{ width: `${data.cardProgress.percent}%` }}
            />
          </div>
          <p className='text-[12px] font-semibold mt-2 max-md:text-[10px] max-sm:text-[9px]'>
            {data.cardProgress.label}
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
