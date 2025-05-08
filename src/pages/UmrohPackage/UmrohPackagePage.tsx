import React from 'react'
import DefaultLayout from "../../layout/DefaultLayout";
import bg from "../../assets/images/makkah-3986709.png"
import penawaranBg from "../../assets/images/Group.png"
import penawaranBg2 from "../../assets/images/Group (1).png"
function UmrohPackagePage() {
    return (
      <DefaultLayout>       
            <div className='w-full min-h-screen'>
                <div className="w-full h-[445px] relative">
                    <img src={bg} alt="background" className='w-full h-fit' />
                    <div className="w-full h-full z-10 absolute top-0 bg-gradient-to-br from-black/0 to-black/45">
                        <div className="relative w-full h-full flex justify-center">
                            <div className="w-[70%] h-[200px] absolute bottom-0 rounded-[10px] translate-y-1/2
                          bg-gradient-to-bl from-[#004492] to-[#00152C] shadow-[0px_4px_4px] shadow-black/25">
                            <div className="w-full grid grid-cols-2">
                                        <div className="grid grid-cols-2 gap-3 border-e-[2px] w-full h-full mt-[40px] px-10 justify-center ">
                                            <div className="flex flex-col">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Kota Keberangkatan</label>
                                                <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                                <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col -translate-y-1/6">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Waktu Keberangkatan</label>
                                                {/* <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select> */}
                                                <input type='time' className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id=""/>
                                            </div>
                                            <div className="flex flex-col -translate-y-1/6">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Durasi Perjalanan</label>
                                                <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 w-full h-full items-start mt-[40px] px-10 justify-center ">
                                            <div className="flex flex-col">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Kota Keberangkatan</label>
                                                <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                                <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select>
                                            </div>
                                        </div>
                                </div>
                          </div>
                        </div>
                    </div>
                    <div className="w-full relative z-0 min-h-screen bg-gradient-to-br from-[#004492] to-[#00152C]">
                    <div className="w-full h-full flex justify-between z-0">
                        <div className="h-full w-[50%]">
                        <img src={penawaranBg} alt="background" className="w-[100%] opacity-25 h-full object-cover" />
                        </div>
                        <div className="h-full w-[50%] absolute right-0">
                        <img src={penawaranBg2} alt="background" className="w-[100%] opacity-25 h-full object-cover" />
                        </div>
                    </div>
                    </div>
                </div>
          </div>
      </DefaultLayout>
  )
}

export default UmrohPackagePage