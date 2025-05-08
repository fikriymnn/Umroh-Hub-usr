import React from 'react'

const Card = ({ cardImage, cardHeader, cardContent, cardFooter, cardProgress }: any) => {
    return (
        <div className='bg-white rounded-[10px] w-full max-w-[350px] h-[506px] flex flex-col overflow-hidden shadow-md'>
            {cardImage && (
                <img src={cardImage} alt='card-image' className='w-full h-[150px] object-cover rounded-t-[10px]' />
            )}
            <div className='flex-1 flex flex-col px-[17px] py-[16px] border-b border-[#CBCBCB] overflow-hidden'>
                {cardHeader && <h1 className='font-bold text-[18px]'>{cardHeader}</h1>}

                {/* Konten scrollable jika terlalu panjang */}
                <div className='mt-2 flex-1 overflow-auto pr-1'>
                    {cardContent}
                </div>

                {cardFooter && <div className='mt-4'>{cardFooter}</div>}
            </div>

            {cardProgress && (
                <div className='px-[17px] py-[12px]'>
                    <div className='w-full h-[10px] rounded-[10px] bg-[#E5E5E5] overflow-hidden'>
                        <div
                            className='h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]'
                            style={{ width: `${cardProgress.percent}%` }}
                        />
                    </div>
                    <p className='text-[12px] font-semibold mt-2'>{cardProgress.label}</p>
                </div>
            )}
        </div>
    );
}

export default Card
