import React from 'react'

const TrustIndicator = ({ dataTrust }: any) => {
    return (
       <div className="flex mt-2 space-x-4 md:space-x-6 justify-center md:justify-start">
        <div className="flex space-x-2 w-[80px] md:w-[100px]">
            <img
            src={dataTrust.icon}
            alt="Label"
            className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] md:mt-2 mt:1 rounded-full"
            />
            <h1 className="text-[#10F5EA] font-bold text-[10px] md:text-[14px] md:mt-2 mt:1">
            {dataTrust.label}
            </h1>
        </div>

        <h1 className="w-[25px] md:w-[30px] text-[#10F5EA] font-bold text-[10px] md:text-[14px] md:mt-2 mt:1 ml-2 md:ml-3">
            {dataTrust.percentage}
        </h1>
        </div>
    )
}

export default TrustIndicator
