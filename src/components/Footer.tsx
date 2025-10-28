import React from 'react'
import waIcons from "../assets/icons/ic_baseline-whatsapp.svg"

function Footer() {
    return (
      <div className="bg-primary-blue w-full h-auto md:h-[400px] grid grid-cols-2 px-6 md:px-[10%] py-10 gap-y-8 md:gap-y-0 md:gap-x-10">
        <div className="col-span-2 md:col-span-1 flex flex-col md:items-start item-center ">
            <h1 className='text-white text-[24px] md:text-left text-center md:text-[40px] font-philosopher font-normal'>
            Umroh<span className='font-bold'>Hub</span>
            </h1>
            <p className='text-white text-[10px] md:text-left text-center md:text-[12px] mt-3 md:mt-[27px] w-[95%] md:w-[80%] leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className='bg-[#404040A6] w-[120px] md:w-[130px] text-white text-[9px] md:text-[10px] font-semibold flex justify-center items-center  rounded-full py-1.5 px-3 mt-3 md:mt-[24px]'>
            <img src={waIcons} alt="whatsapp" className='w-[18px] h-[18px] md:w-[23px] md:h-[23px] me-2 md:me-3' />
            Hubungi kami
            </button>

            <ul className='list-disc mt-3 md:mt-[17px] ms-5 space-y-1'>
            <li className="text-[10px] md:text-sm text-white">Phone: 0819237568</li>
            <li className="text-[10px] md:text-sm text-white">Fax: 1235749182</li>
            <li className="text-[10px] md:text-sm text-white">Contact Center: 0812020</li>
            </ul>
        </div>

        <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-y-5 md:gap-y-0">
            <div className="flex flex-col items-start">
            <h1 className='text-white text-[12px] md:text-[15px] font-bold'>Tentang Perusahaan</h1>
            <ul className='mt-3 md:mt-[29px] flex flex-col space-y-[8px] md:space-y-[11px]'>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Beranda</li>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Paket Umrah</li>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Lainnya</li>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Tentang Kami</li>
            </ul>
            </div>
            
            <div className="flex flex-col items-start">
            <h1 className='text-white text-[12px] md:text-[15px] font-bold capitalize'>Jadi Mitra Kami</h1>
            <ul className='mt-3 md:mt-[29px] flex flex-col space-y-[8px] md:space-y-[11px]'>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Beranda</li>
                <li className='text-white text-[10px] md:text-[12px] font-semibold'>Paket Umrah</li>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer
