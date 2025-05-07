import React from 'react'
import waIcons from "../assets/icons/ic_baseline-whatsapp.svg"

function Footer() {
    return (
        <div className="bg-[#001A4D] w-full h-[400px] grid grid-cols-4 px-[10%] py-10">
            <div className="col-span-2">
                <h1 className='text-white text-[40px]'>Umroh<span className='font-bold'>Hub</span></h1>
                <p className='text-white text-[12px] mt-[27px] w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <button className='bg-[#404040A6] w-[130px] text-white text-[10px] whitespace-nowrap
                    font-semibold flex space-x-4 justify-center items-center rounded-full py-2 px-3 mt-[24px]'>
                    <img src={waIcons} alt="whatsapp" className='w-[23px] h-[23px] me-3' />
                    Hubungi kami
                </button>
                <ul className='list-disc mt-[17px] ms-4'>
                    <li className="text-sm text-white">Phone: 0819237568</li>
                    <li className="text-sm text-white">Fax: 1235749182</li>
                    <li className="text-sm text-white">Contact Center: 0812020</li>
                </ul>
            </div>
            <div className="mt-5 w-full flex flex-col items-center">
                <h1 className='text-white text-[15px] font-bold'>Tentang Perusahaan</h1>
                <ul className='mt-[29px] flex flex-col w-[50%] items-start space-y-[11px]'>
                    <li className='text-white text-[12px] font-semibold'>Beranda</li>
                    <li className='text-white text-[12px] font-semibold'>Paket Umrah</li>
                    <li className='text-white text-[12px] font-semibold'>Lainnya</li>
                    <li className='text-white text-[12px] font-semibold'>Tentang Kami</li>
                </ul>
            </div>
            <div className="mt-5 w-full flex flex-col items-center">
                <h1 className='text-white text-[15px] font-bold capitalize'>Jadi mitra kami</h1>
                <ul className='mt-[29px] flex flex-col w-[40%] items-start space-y-[11px]'>
                    <li className='text-white text-[12px] font-semibold'>Beranda</li>
                    <li className='text-white text-[12px] font-semibold'>Paket Umrah</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
