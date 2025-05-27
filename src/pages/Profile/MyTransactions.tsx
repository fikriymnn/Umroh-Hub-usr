import React from 'react'
import Sidebar from '../../components/Sidebar'
import hotelIcon from "../../assets/icons/Component 1.svg"
import hotelIcons from "../../assets/icons/Group.svg"
import planeIcon from '../../assets/icons/bxs_plane.svg'
import departureLocIcon from '../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../assets/icons/mdi_calendar-time.svg'
import examplePlane from '../../assets/images/image 3.png'
import bedIcons from '../../assets/icons/mdi_guest-room.svg'

function Transaction() {
  return (
    <div className='w-full h-screen flex space-x-2 bg-gradient-to-b from-[#004492] to-[#00152C]'>
      <div className='w-2/12'>
        <Sidebar />
      </div>
      <div className="w-10/12 flex h-screen pt-[140px] justify-center bg-white">
              <div className="w-8/12 ">
                  <div className="flex space-x-[70px] pb-6 border-b-1 border-[#B0ADAD]">
                      <h1 className='ms-[56px] text-[#0A6BDB] font-medium'>Semua</h1>
                      <h1 className=' font-medium capitalize'>Belum Dibayar</h1>
                      <h1 className=' font-medium capitalize'>di proses</h1>
                      <h1 className=' font-medium capitalize'>selesai</h1>
                  </div>
                  <div className="mt-[27px] pb-[36px] border-b-[#B0ADAD] px-[56px] border-b-1">
                      <div className="">
                          
                        <div className="flex justify-between w-full">
                              <h1 className="text-[24px] font-medium">Umroh Paket Plus Hasanah</h1>
                              <div className="flex space-x-2">
                                  
                                            <h1 className='text-[14px] font-medium'>Status</h1>
                                             <h1 className='text-[#0A6BDB] text-[14px] font-medium capitalize'>Di proses</h1>
                              </div>
                                        </div>
                        <div className="flex items-center space-x-4">
                                            <span className="text-[20px] font-medium">Hasanah Hana</span>
                                            <span className='text-yellow-300 text-[18px]'>★ ★ ★ ★ ★</span>
                                        </div>
                                        
                            <div className=" w-8/12 grid grid-cols-2  gap-y-2 py-4 pt-4 text-sm ">
                                                <div>
                                                    <div className="flex space-x-2 h-[16px] items-center">
                                                        <img src={bedIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                                        <p className="font-bold text-[15px]">Pilihan Kamar</p>
                                                    </div>
                                                    <p className='font-medium text-[13px] capitalize ms-6 mt-3'>Satu Kamar 4 Orang <span className='font-semibold'>(QUAD)</span></p>
                                                </div>
                                                <div>
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

                                                            <p className='text-[#209FB2] capitalize text-[10px] capitalize font-semibold'>250m ke masjidil haram</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex space-x-2 h-[16px] items-center">
                                                        <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                        <p className="font-bold text-[15px]">Duration Perjalanan</p>
                                                    </div>
                                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>9 Hari</p>
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

                                                        <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>200m ke masjidil haram</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex space-x-2 h-[16px] items-center">
                                                        <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                        <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                                                    </div>
                                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>10 September 2023</p>
                                                </div>
                                                <div>
                                                    <div className="h-[16px] flex items-center space-x-2">
                                                        <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                                                        <p className="font-semibold">Maskapai</p>
                                                    </div>
                                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>garuda</p>

                                                </div>
                                                <div>
                                                    <div className="flex space-x-2 h-[16px] items-center">
                                                        <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                                        <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                                                    </div>
                                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>jakarta</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                                                    <span className='font-semibold capitalize'>Air Asia Airlines</span>
                                                </div>
                                            </div>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction