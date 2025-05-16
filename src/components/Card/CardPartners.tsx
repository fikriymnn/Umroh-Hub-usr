import React from 'react'

const CardPartners = ({ partnersList }: any) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {partnersList.map((part: any, indx: number) => (
                <div key={indx} className='bg-white rounded-xl shadow-md p-4 w-full'>
                    <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-gray-300 rounded-full'>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>{part.name}</h3>
                            <div className='flex'>
                                <div className='text-sm text-gray-600 ml-[2px]'>
                                    {part.reviewCount} Penilaian
                                </div>
                                <div className='text-sm text-gray-600 flex items-center gap-1 ml-[35px]'>
                                    Rating
                                    <span className='text-yellow-500'>{"★".repeat(part.rating)}</span>
                                </div>
                            </div>
                            <div className='text-sm text-gray-600 mt-[10px] ml-[2px]'>
                                Nomor Izin Umroh:{" "}
                                <p className='text-blue-600 font-semibold'>{part.licenseNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-[11px] text-[#004492] mt-[4px] mr-[15px] cursor-pointer text-end'>
                        Selengkapnya &gt;
                    </div>
                    <div className='flex gap-2 mt-[10px]'>
                        {part.packages.map((index: number) => (
                            <div
                                key={index}
                                className='flex-1 w-[139.33511352539062px] h-[97.45844268798828px] bg-gray-200 rounded-md'
                            >
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardPartners
