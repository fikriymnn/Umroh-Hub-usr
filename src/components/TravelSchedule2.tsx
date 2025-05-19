import React from 'react'

const TravelSchedule2 = ({ scheduleList }: any) => {
    return (
        <div className="w-full">
            {scheduleList.map((item: any, index: number) => (
                <div key={index} className='grid grid-cols-5 gap-5 mb-10'>
                    <img src={item.image} alt={`Schedule Image`} className='w-full h-[230px]' />
                    <div className="w-full">
                        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
                            {item.hari}
                        </h1>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
                            Waktu
                        </h1>
                        <h1 className='font-medium'>{item.waktu}</h1>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
                            Aktivitas
                        </h1>
                        <h1 className='font-medium'>{item.aktivitas}</h1>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <h1 className="font-bold  capitalize text-[20px] text-[#004492]">
                            catatan
                        </h1>
                        <h1 className='font-medium'>{item.catatan}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TravelSchedule2
