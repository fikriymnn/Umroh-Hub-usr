import React from 'react'

interface IndicatorProps {
    label: string;
    percentage: string;
    icon: string;
}

const TrustIndicator: React.FC<IndicatorProps> = ({ label, percentage, icon }) => {
    return (
        <div className="flex space-x-6">
            <div className="flex space-x-2 w-[100px]">
                <img src={icon} alt="Label" className="w-[22px] h-[22px] mt-2 rounded-full" />
                <h1 className="text-[#10F5EA] font-bold text-[14px] mt-2">
                    {label}
                </h1>
            </div>
            <h1 className="w-[30px] text-[#10F5EA] font-bold text-[14px] mt-2 ml-3">
                {percentage}
            </h1>
        </div>
    )
}

export default TrustIndicator
