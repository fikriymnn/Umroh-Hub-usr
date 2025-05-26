import React from 'react'

const TrustIndicator = ({ dataTrust }: any) => {
    return (
        <div className='flex space-x-6'>
            <div className="flex space-x-2 w-[100px]">
                <img src={dataTrust.icon} alt="Label" className="w-[22px] h-[22px] mt-2 rounded-full" />
                <h1 className="text-[#10F5EA] font-bold text-[14px] mt-2">
                    {dataTrust.label}
                </h1>
            </div>
            <h1 className="w-[30px] text-[#10F5EA] font-bold text-[14px] mt-2 ml-3">
                {dataTrust.percentage}
            </h1>
        </div>
    )
}

export default TrustIndicator
