import React from 'react'

const CardPartners = ({
    name,
    rating,
    reviewCount,
    licenseNumber,
    packages = []
}: any) => {
    return (
        <div className='bg-white rounded-xl shadow-md p-4 w-full'>
            <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>{name}</h3>
                    <div className='text-sm text-gray-600'>
                        {reviewCount} Penilaian
                    </div>
                    <div className='text-sm text-gray-600 flex items-center gap-1'>
                        Rating
                        <span className='text-yellow-500'>{"★".repeat(rating)}</span>
                    </div>
                    <div className='text-sm text-gray-600'>
                        Nomor Izin Umroh:{" "}
                        <span className='text-sky-500 underline'>{licenseNumber}</span>
                    </div>
                    <div className='text-sm text-sky-500 mt-1 cursor-pointer'>
                        Lihat Paket Lainnya &gt;
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-4'>
                {packages.map((pkg: string, index: number) => (
                    <div
                        key={index}
                        className='flex-1 w-[139.33511352539062px] h-[97.45844268798828px] bg-gray-200 rounded-md'
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPartners
