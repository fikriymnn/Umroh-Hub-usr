/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router'
import { Partners } from '../../types/Partners'

const CardPartners = ({ partners }: { partners: Partners }) => {
    return (
        <div className='bg-white rounded-xl shadow-md p-4 w-full'>
            <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>{partners.compamy_name}</h3>
                    <div className='flex'>
                        <div className='text-sm text-gray-600 ml-[2px]'>
                            60 Penilaian
                        </div>
                        <div className='text-sm text-gray-600 flex items-center gap-1 ml-[35px]'>
                            Rating
                            <span className='text-yellow-500'>★★★★★</span>
                        </div>
                    </div>
                    <div className='text-sm text-gray-600 mt-[10px] ml-[2px]'>
                        Nomor Izin Umroh:{" "}
                        <p className='text-blue-600 font-semibold'>{partners.siuppiu}</p>
                    </div>
                </div>
            </div>
            <Link to={`/OurPartners/${partners.id}`}>
                <div className='text-[11px] text-[#004492] mt-[4px] mr-[15px] cursor-pointer text-end'>
                    Selengkapnya &gt;
                </div>
            </Link>
            <div className='flex gap-2 mt-[10px]'>
                {partners.package_umrohs.map((_, index: number) => (
                    <div key={index} className='flex bg-gray-200 w-[139.33px] h-[97.45px] rounded-md'>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPartners