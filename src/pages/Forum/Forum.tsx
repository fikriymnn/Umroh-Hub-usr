import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import eyeIcon from "../../assets/icons/Eye (2).svg"
import reactionIcon2 from "../../assets/icons/Group 1000004446.svg"
import replyIcon2 from "../../assets/icons/Group 132.svg"
import makkahImage from '../../assets/images/makkah-3986709 (1).png'
import profileExample from "../../assets/images/profile_placeholder.png"
import reactionIcon from "../../assets/icons/Group 1000004448.svg"
import replyIcon from "../../assets/icons/Group 1000004447.svg"

function Forum() {
    return (
        <DefaultLayout>
        <div className='w-full min-h-screen background-div flex flex-col items-center'> 
        <div className="w-full relative h-fit">
  <img src={makkahImage} alt="Makkah Image" className="w-full h-fit" />

  <div className="absolute top-1/4 left-0 w-full h-full flex items-center justify-center text-center">
    <p className="text-white font-philosopher font-bold text-[64px]">
      Ceritakan Pengalaman Anda Selama <br /> Bersama UmrohHub
    </p>
  </div>
</div>

                <div className="bg-white w-10/12 min-h-screen px-[75px] py-[27px]">
                    <div className="flex w-full justify-between">
                        <div className="flex space-x-[24px]">
                            <h1 className='text-[15px] font-medium text-[#0A6BDB]'>Semua</h1>
                            <h1 className='text-[15px] font-medium'>Ulasan Saya</h1>
                        </div>
                        <div className="flex space-x-[5px]">
                            <div className="w-[24px] h-[24px] rounded-full border-2 border-black flex items-center justify-center">

                            <h1 className='text-[15px] font-medium'>+</h1>
                            </div>
                            <h1 className='text-[15px] font-medium'>Buat Ulasan</h1>
                        </div>
                    </div>

                    <div className="px-4 pt-4 pb-10 mt-[43px] border-b border-[#929292] w-full">
     
      <div className="flex flex-col gap-2">
      
        <div className="flex gap-4 ">
          <img
            src={profileExample}
            alt="Avatar"
            className="w-[37px] h-[37px] rounded-full object-cover"
          />
          <div className='flex-col'>
            <p className="font-medium text-[15px] mt-2">Kusnadi</p>
            <div className="flex">              
                <p className="text-sm  mt-2 leading-relaxed font-medium w-9/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoour partners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.v9
                </p>
                 <div className="flex ps-[48px] flex-col gap-2 w-3/12">
          <button className="flex gap-2 items-center">
            <div className="flex items-center gap-2 bg-gradient-to-br from-[#004492] to-[#10F5EA] text-white p-3 rounded-[10px] text-sm hover:bg-blue-700 transition">            
            <img src={reactionIcon} alt="Reaction Icon" className='w-[16px] h-[16px]' /> 
            </div>
            <h1 className='font-medium text-[15px]'>Reaksi</h1>
          </button>
          <button className="flex gap-2 items-center">
            <div className="flex items-center gap-2 bg-gradient-to-br from-[#004492] to-[#10F5EA] text-white p-3 rounded-[10px] text-sm hover:bg-blue-700 transition">            
            <img src={replyIcon} alt="Reaction Icon" className='w-[16px] h-[16px]' /> 
            </div>
            <h1 className='font-medium text-[15px]'>Beri Balasan</h1>
          </button>
        </div>
            </div>
          </div>
        </div>
       
      </div>

      <div className="flex w-9/12 justify-end gap-4 text-[12px] font-medium text-gray-600 mt-4 ps-14 md:ps-14">
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
                </div>  
          </div>
      </DefaultLayout>
  )
}

export default Forum