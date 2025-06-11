import React from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import eyeIcon from "../../../assets/icons/Eye (2).svg"
import reactionIcon2 from "../../../assets/icons/Group 1000004446.svg"
import replyIcon2 from "../../../assets/icons/Group 132.svg"
import profileExample from "../../../assets/images/profile_placeholder.png"
import reactionIcon from "../../../assets/icons/Group 1000004448.svg"
import imageExample from "../../../assets/images/66a41ade1c9a3e1a68e7f74273b7892f.png"
import { FaArrowUp } from 'react-icons/fa'

function ForumDetail() {
    return (
        <DefaultLayout>
        <div className='w-full min-h-screen background-div pt-[200px] flex flex-col items-center'> 
         <div className="bg-white w-full max-w-[1200px] mx-auto min-h-screen px-6 md:px-[75px] py-[27px]">
              <div className="flex w-full justify-end">
                        <div className="flex space-x-[5px]">
                            <div className="w-[24px] h-[24px] rounded-full border-2 border-black flex items-center justify-center">

                            <h1 className='text-[15px] font-medium'>+</h1>
                            </div>
                            <h1 className='text-[15px] font-medium'>Buat Ulasan</h1>
                        </div>
                    </div>

                    <div className="px-4 pt-4  mt-[18px] w-full">
     
      <div className="flex flex-col gap-2">
      
        <div className="flex gap-4 ">
          <img
            src={profileExample}
            alt="Avatar"
            className="w-[37px] h-[37px] rounded-full object-cover"
          />
          <div className='flex-col'>
            <p className="font-medium text-[15px] mt-2">Kusnadi</p>
            <div className="w-11/12 gap-[7px] grid grid-cols-4">
                                        <img src={imageExample} alt="image" className='w-full h-[150px]' />
                                        <img src={imageExample} alt="image" className='w-full h-[150px]' />
                                        <img src={imageExample} alt="image" className='w-full h-[150px]' />
                                        <img src={imageExample} alt="image" className='w-full h-[150px]' />
            </div>
            <div className="flex mt-[23px]">              
                <p className="text-sm  mt-2 leading-relaxed font-medium w-9/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoour partners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.v9
                </p>
                 <div className="flex ps-[35px] justify-center flex-col gap-2 w-3/12">
          <button className="flex gap-2 items-center">
            <div className="flex items-center gap-2 bg-gradient-to-br from-[#004492] to-[#10F5EA] text-white p-3 rounded-[10px] text-sm hover:bg-blue-700 transition">            
            <img src={reactionIcon} alt="Reaction Icon" className='w-[16px] h-[16px]' /> 
            </div>
            <h1 className='font-medium text-[15px]'>Reaksi</h1>
          </button>
          
        </div>
            </div>
          </div>
        </div>
       
      </div>

      <div className="flex gap-4 text-[12px] font-medium text-gray-600 mt-4 ps-13">
        <div className="flex items-center space-x-1">
           <img src={eyeIcon} alt="Reaction Icon" className='w-[16px] h-[16px]' /> <span className='text-[#3C97FF] me-1'>480</span> Dilihat
        </div>
        <div className="flex items-center space-x-1">
           <img src={reactionIcon2} alt="Reaction Icon" className='w-[14px] h-[14px]' />  <span className='text-[#3C97FF] me-1'>480</span> Reaksi
        </div>
        <div className="flex items-center space-x-1">
           <img src={replyIcon2} alt="Reaction Icon" className='w-[16px] h-[16px]' />  <span className='text-[#3C97FF] me-1'>480</span> Balasan
        </div>
      </div>
    </div>
    <div className="w-full ms-15">
        
        <h1 className='text-[20px] mt-[32px] ms-[30px] font-medium'>Balasan</h1>
         <div className="w-11/12 px-[55px] py-[22px] mt-[10px] shadow-[0px_4px_13px_rgba(0,0,0,0.25)]">
      <div className="w-11/12 ">
        {/* Komentar utama */}
        <div className="space-y-2">
          {/* Komentar 1 */}
          <div className="flex gap-4">
            <img
              src={profileExample}
              alt="Avatar"
              className="w-[37px] h-[37px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="font-medium text-[15px]">Apep</p>
              <p className="text-sm mt-2 leading-relaxed font-medium w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <div className="flex justify-end gap-10 mt-2 text-xs font-medium items-center">
                <button className="hover:underline">Lihat Semua Balasan</button>
                <button className="flex items-center gap-1 hover:underline">
                  <img src={replyIcon2} alt="Balas" className="w-4 h-4" />
                  Balas
                </button>
                <div className="flex gap-2">
                  <img src={reactionIcon2} alt="Like" className="w-4 h-4" />
                  <img src={reactionIcon2} alt="Dislike" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Balasan 1 */}
          <div className="flex gap-4 pl-12">
            <img
              src={profileExample}
              alt="Avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="font-medium text-[15px]">
                Ahtom ▸ Apep
              </p>
              <p className="text-sm mt-2 leading-relaxed font-medium w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-end gap-10 mt-2 text-xs font-medium items-center">
                <button className="flex items-center gap-1 hover:underline">
                  <img src={replyIcon2} alt="Balas" className="w-4 h-4" />
                  Balas
                </button>
                <div className="flex gap-2">
                  <img src={reactionIcon2} alt="Like" className="w-4 h-4" />
                  <img src={reactionIcon2} alt="Dislike" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Balasan 2 */}
          <div className="flex gap-4 pl-12">
            <img
              src={profileExample}
              alt="Avatar"
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="font-medium text-[14px]">
                Sunandar ▸ Apep
              </p>
              <p className="text-sm mt-2 leading-relaxed font-medium w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-end gap-10 mt-2 text-xs font-medium items-center">
                <button className="flex items-center gap-1 hover:underline">
                  <img src={replyIcon2} alt="Balas" className="w-4 h-4" />
                  Balas
                </button>
                <div className="flex gap-2">
                  <img src={reactionIcon2} alt="Like" className="w-4 h-4" />
                  <img src={reactionIcon2} alt="Dislike" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

         

        </div>
          <div className="space-y-4 mt-6">
      {/* Garis horizontal dengan teks kanan */}
      <div className="relative flex items-center">
        <hr className="flex-grow border-gray-300" />
        <span className="ml-2 text-sm text-black whitespace-nowrap">
          Lihat Balasan Lebih Banyak
        </span>
      </div>

      {/* Input komentar */}
      <div className="flex mt-[60px] items-center space-x-4  shadow-[0px_4px_14px_rgba(0,0,0,0.25)] rounded-[5px] px-4 bg-white w-8/12">
        <img src={reactionIcon2} alt="Reaction Icon" className='w-[16px] h-[16px]' /> 
        <input
          type="text"
          placeholder="tulis komentar anda"
          className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
        />
        <button className=" bg-[#004492] translate-x-7 shadow-[0px_4px_14px_rgba(0,0,0,0.25)] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700">
          <FaArrowUp size={14} />
        </button>
      </div>
    </div>
      </div>
    </div>
    </div>
    </div>   
                 
          </div>
      </DefaultLayout>
  )
}

export default ForumDetail