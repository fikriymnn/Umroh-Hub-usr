import React from 'react'

import bg from "../assets/images/Group (1).png"


const Login = ({
    isAnimated,
    setIsAnimated,
  }: {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
  
    return (
      
            <div className="w-full h-full bg-gradient-to-br from-[#3C97FF] to-primary-blue text-white relative overflow-hidden">
            {/* Background image */}
            <img
                src={bg}
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />

            {/* Konten */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center">
                <h2 className="text-[30px] font-medium">Daftar ke</h2>
                <h1 className="text-[64px] mb-6 font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
                <p className="text-[15px]">Belum Punya Akun Di UmrohHub?</p>
                <p className="text-sm mb-4">Daftar Yuk</p>
                <button
                 onClick={() => {
                    setIsAnimated(!isAnimated);
                  }}
                className="bg-white text-[#001A4D] font-semibold px-7 py-1 rounded-full"
                >
                Daftar
                </button>
            </div>
            </div>

           
    )
}

export default Login