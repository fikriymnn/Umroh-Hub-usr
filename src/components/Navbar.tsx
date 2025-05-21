import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isDetailPackage = currentPath.startsWith("/UmrohPackage/")
    const isDetailMitra = currentPath.startsWith("/OurPartners/")

    // const [, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true)
    // useEffect(() => {
    // const handleScroll = () => {
    //     if (window.scrollY > 400) {
    //     setScrolled(true);
    //     } else {
    //     setScrolled(false);
    //     }
    // };

    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const scrollControler = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY && currentScroll > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY = currentScroll;
        }

        window.addEventListener("scroll", scrollControler);

        return () => window.removeEventListener("scroll", scrollControler)
    }, [])
    return (
        <div className="w-full flex fixed z-50 justify-center">
            <nav
                className={`transition-all duration-1000 ease-in-out w-[60%] h-[145px] relative z-50 transform ${isVisible ? "translate-y-[23px]" : "-translate-y-[160px]"
                    }`}
            >
                <div className="w-full h-[92px] bg-[#001A4D] text-white shadow-[11px_13px_7.6px] shadow-black/25 flex items-center  justify-center 
                    rounded-tl-[4px] rounded-tr-[4px] px-4 ">
                    <h1 className="text-[28px] font-philosopher font-normal">Umroh<span className="font-bold">Hub</span></h1>
                </div>
                <div className="w-full h-[53px] sticky flex justify-between p-2 bg-[#D1F4FA] shadow-[9px_11px_7.3px] shadow-black/25 rounded-br-[4px] rounded-bl-[4px]">
                    <div className='w-full h-full items-center ms-[76px] flex space-x-[27px]'>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/" className='font-semibold text-[13px]'>Home</Link>
                            {currentPath === "/" &&
                                <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/UmrohPackage" className='font-semibold text-[13px]'>Paket Umroh</Link>
                            {(currentPath === "/UmrohPackage" || isDetailPackage) &&
                                <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/OurPartners" className='font-semibold text-[13px]'>Mitra Kami</Link>
                            {(currentPath === "/OurPartners" || isDetailMitra) &&
                                <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/" className='font-semibold text-[13px]'>Tentang Kami</Link>
                            {currentPath === "/" &&
                                <div className="w-2 h-1 bg-blue-900 rounded-full"></div>
                            }
                        </div>
                    </div>
                    <div className="flex space-x-[7px] h-full items-center me-[53px]">
                        <Link to="/Register" className='h-full flex items-center'>
                            <button className='bg-[#001A4D] h-[80%] text-white rounded-[2px] items-center px-2'>
                                Daftar
                            </button>
                        </Link>
                        <Link to="/Login" className='h-full flex items-center'>
                            <button className='bg-[#D1F4FA] h-[80%] border-[1px] border-[#001A4D] items-center rounded-[2px] px-2'>
                                Masuk
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
