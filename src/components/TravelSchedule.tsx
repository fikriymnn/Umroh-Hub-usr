import React, { useState } from 'react'

interface TravelScheduleProps {
  image: string;
  hari: string;
  waktu: string;
  aktivitas: string;
  catatan: string;
}

function TravelSchedule({
  image,
  hari,
  waktu,
  aktivitas,
  catatan
}: TravelScheduleProps) {
  return (
    <div className="w-full grid grid-cols-5 gap-5 mb-10">
      <img src={image} alt={`Schedule Image`} className='w-full h-[230px]' />
      <div className="w-full">
        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
          {hari}
        </h1>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
          Waktu
        </h1>
        <h1 className='font-medium'>{waktu}</h1>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
          Aktivitas
        </h1>
        <h1 className='font-medium'>{aktivitas}</h1>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
          catatan
        </h1>
        <h1 className='font-medium'>{catatan}</h1>
      </div>
    </div>
  )
}

export default TravelSchedule
