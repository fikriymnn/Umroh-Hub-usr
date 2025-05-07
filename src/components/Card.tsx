import React from 'react'

const Card = ({ cardImage, cardHeader, cardContent, cardFooter, cardProgress }: any) => {
    return (
        <div className='bg-white rounded-[10px] w-full z-20 h-fit mt-[32px]'>
            {cardImage && (
                <img src={cardImage} alt='card-image' className='w-full rounded-t-[10px] h-[30%] object-cover' />
            )}
            <div className='w-full border-b-2 pb-2 border-[#CBCBCB]'>
                <div className='w-full px-[17px] py-[20px] flex flex-col'>
                    {cardHeader && <h1 className='font-bold text-[18px]'>{cardHeader}</h1>}
                    <div className='mt-4'>{cardContent}</div>
                    {cardFooter && <div className='mt-6'>{cardFooter}</div>}
                </div>
            </div>

            {cardProgress && (
                <div className='flex-col space-y-2 px-[17px] py-[20px] w-full mt-[8px]'>
                    <div className='w-full h-[13px] rounded-[10px] bg-[#E5E5E5]'>
                        <div
                            className='rounded-s-[10px] h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]'
                            style={{ width: `${cardProgress.percent}%` }}
                        />
                    </div>
                    <h1 className='text-[12px] font-semibold'>
                        {cardProgress.label}
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Card
