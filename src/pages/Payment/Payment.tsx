import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import hotelIcon from "../../assets/icons/Component 1.svg"
import hotelIcons from "../../assets/icons/Group.svg"
import planeIcon from '../../assets/icons/bxs_plane.svg'
import departureLocIcon from '../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../assets/icons/mdi_calendar-time.svg'
import examplePlane from '../../assets/images/image 3.png'
import profileIcon from "../../../src/assets/icons/iconamoon_profile-circle-fill.svg"
function Payment() {
    return (
      <DefaultLayout>           
        <div className='w-full min-h-screen pt-[200px] flex flex-col items-center space-y-[34px] background-div'>
          <div className="bg-white w-10/12 h-full flex flex-col p-6 space-y-[23px]">
            <div className=" flex w-full space-x-4 mt-3 rounded-[5px]">
                                        <img src={profileIcon} alt="profile" className='w-[38px] h-[38px]' />
                                      
                                            <h1 className='text-[20px] font-bold'>Nama Pemesan</h1>
                                          
            </div>

            <div className="w-full grid grid-cols-3 gap-2  rounded-[5px]">
              <div className="w-full h-full bg-[#D1F4FA] px-[19px] py-[15px]">
                <h1 className='flex capitalize items-center font-semibold'>Jumlah jemaah <span className='ms-[42px] font-normal text-sm'>5 jemaah</span></h1>
                <ul className='list-disc ms-4 mt-2'>
                  <li className='text-[11px] capitalize'>Belia Septi ramadhani</li>
                  <li className='text-[11px] capitalize'>Belia Septi ramadhani</li>

                </ul>
              </div>
              <div className="w-full flex h-full justify-center">
                <div className="w-7/12 h-full flex flex-col space-y-[28px]">
                                                  <div>
                                                      <div className="flex space-x-2 h-[16px] items-center">
                                                          <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                          <p className="font-bold text-[15px]">Duration Perjalanan</p>
                                                      </div>
                                                      <p className='font-medium text-[13px] ms-6 mt-1'>9 Hari</p>
                                                  </div>
                                                
                                                  <div>
                                                      <div className="flex space-x-2 h-[16px] items-center">
                                                          <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                          <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                                                      </div>
                                                      <p className='font-medium text-[13px] ms-6 mt-1'>10 September 2023</p>
                                                  </div>
                                                  <div>
                                                      <div className="h-[16px] flex items-center space-x-2">
                                                          <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                                                          <p className="font-semibold">Maskapai Pesawat</p>
                                                      </div>
                                                      <p className='font-medium text-[13px] ms-6 mt-1'>Garuda</p>
                  
                                                  </div>
                                                  <div>
                                                      <div className="flex space-x-2 h-[16px] items-center">
                                                          <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                          <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                                                      </div>
                                                      <p className='font-medium text-[13px] ms-6 mt-1'>Jakarta</p>
                                                  </div>
                                                  <div className="flex gap-2 items-center">
                                                      <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                                                      <span className='font-semibold'>Air Asia Airlines</span>
                                                  </div>
                  </div>
                </div>
              <div className="w-full justify-center flex">
              <div className='w-9/12 flex flex-col  space-y-[15px]'>
                                                  <div className="flex space-x-2 h-[16px] items-center">
                                                      <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                                      <p className="font-bold text-[15px]">Hotel</p>
                                                  </div>
                                                  <div className="flex space-x-1 ms-4 mt-3">
                                                      <div className="h-[16px] flex items-center">
                                                          <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                      </div>
                                                      <div className='flex-col w-full'>
              
                                                          <h6 className='text-[12px] font-semibold'>
                                                              Hotel Habib
                                                              <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                                                          </h6>
              
                                                          <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200 m ke masjidil haram</p>
                                                      </div>
                  </div>
                  <div className="flex space-x-1 ms-4">
                                                  <div className="h-[16px] flex items-center">
                                                      <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                                  </div>
                                                  <div className='flex-col w-full'>
              
                                                      <h6 className='text-[12px] font-semibold'>
                                                          Hotel Hanawi
                                                          <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                                                      </h6>
              
                                                      <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200 m ke masjidil haram</p>
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

export default Payment