import React from 'react'
import { Link, useLocation } from 'react-router'

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname
    return (
        <div className="w-full flex fixed z-50 justify-center mt-[23px]">
            <nav className="w-[60%] h-[145px] relative z-50">
                <div className="w-full h-[92px] bg-[#001A4D] text-white shadow-[11px_13px_7.6px] shadow-black/25 flex items-center  justify-center 
                    rounded-tl-[4px] rounded-tr-[4px] px-4 ">
                    <h1 className="text-[28px] font-normal">
                        Umroh<span className="font-extrabold">Hub</span>
                    </h1>
                </div>
                <div className="w-full h-[53px] sticky flex justify-between p-2 bg-[#D1F4FA] shadow-[9px_11px_7.3px] shadow-black/25 rounded-br-[4px] rounded-bl-[4px]">
                    <div className='w-full h-full items-center ms-[76px] flex space-x-[27px]'>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/HomePage" className='font-semibold text-[13px]'>Home</Link>
                            {currentPath === "/HomePage" &&
                            <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/UmrohPackage" className='font-semibold text-[13px]'>Paket Umroh</Link>
                            {currentPath === "/UmrohPackage" &&
                            <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/OurPartners" className='font-semibold text-[13px]'>Mitra Kami</Link>
                            {currentPath === "/OurPartners" &&
                            <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/HomePage" className='font-semibold text-[13px]'>Tentang Kami</Link>
                            {currentPath === "/HomePage" &&
                            <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                    </div>
                    <div className="flex space-x-[7px] h-full items-center me-[53px]">
                        <button className='bg-[#001A4D] h-[80%] text-white rounded-[2px] items-center px-2'>
                            Daftar
                        </button>
                        <button className='bg-[#D1F4FA] h-[80%] border-[1px] border-[#001A4D] items-center rounded-[2px] px-2'>
                            Masuk
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
