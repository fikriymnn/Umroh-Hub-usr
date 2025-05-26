import React from 'react'
import transactionIcon from "../../assets/icons/icon-park-solid_transaction-order.svg"
import profileIcon from "../../assets/icons/iconamoon_profile-circle-fill (1).svg"
import logoutIcon from "../../assets/icons/humbleicons_logout.svg"
import profileExample from "../../assets/images/profile_placeholder.png"
function Profile() {
  return (
      <div className='w-full h-screen flex space-x-2 bg-gradient-to-b from-[#004492] to-[#00152C]'>
          <div className="w-2/12 flex flex-col items-center h-screen bg-white rounded-t-[10px]">
              <h1 className="text-[28px] font-philosopher font-normal mt-[31px]">Umroh<span className="font-bold">Hub</span></h1>
              <div className="flex w-8/12 mt-[69px] space-x-[15px]">
                  <img src={profileIcon} alt="profile" className='w-[28px] h-[28px]' />
                  <h1 className="font-medium flex justify-start text-left text-[#0A6BDB]">Profile</h1>
              </div>
              <div className="flex w-8/12 mt-[32px] space-x-[15px]">
                  <img src={transactionIcon} alt="profile" className='w-[28px] h-[28px]' />
                  <h1 className="font-medium flex justify-start text-left text-[#0A6BDB] capitalize">Pesanan saya</h1>
              </div>
              <div className="flex w-8/12 space-x-[15px] mt-[152px]">
                  <img src={logoutIcon} alt="profile" className='w-[28px] h-[28px]' />
                  <h1 className="font-medium flex justify-start text-left text-[#0A6BDB] capitalize">Keluar</h1>
              </div>
          </div>
          <div className="w-10/12 flex h-screen bg-white">
              <div className="w-8/12 h-full p-[39px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <div className="mt-[18px] flex flex-col space-y-1">
                    <label htmlFor="Nama" className='capitalize ms-1 font-semibold'>Nama</label>
                    <input type="text" className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
                  </div>
                  <div className="mt-[18px] flex flex-col space-y-1">
                    <label htmlFor="Phone" className='capitalize ms-1 font-semibold'>No Telepon/whatsApp</label>
                    <input type="text" className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
                  </div>
                  <div className="mt-[18px] flex flex-col space-y-1">
                    <label htmlFor="Email" className='capitalize ms-1 font-semibold'>Email</label>
                    <input type="text" className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
                  </div>
                  <button className="rounded-full font-semibold text-white mt-[36px] px-6 py-2 bg-gradient-to-br capitalize from-[#3C9BFF] to-[#10F5EA]">simpan</button>
              </div>
              <div className="w-4/12 px-[39px] py-[55px] flex flex-col items-center">
                  <img src={profileExample} alt="profile picture" className='w-[173px] h-[173px] rounded-full' />
                  <div className="flex w-full flex-col space-y-[26px] mt-[37px]">
                      <div className="">               
                        <h1 className='font-medium'>Nama</h1>
                        <h1 className='font-light capitalize'>Kusnadi Hafidz Ahmad</h1>
                      </div>
                      <div className="">               
                        <h1 className='font-medium'>No Telepon/whatsApp</h1>
                        <h1 className='font-light capitalize'>Kusnadi Hafidz Ahmad</h1>
                      </div>
                      <div className="">               
                        <h1 className='font-medium'>Email</h1>
                        <h1 className='font-light capitalize'>Kusnadi Hafidz Ahmad</h1>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Profile