import React, { useState } from 'react'
import transactionIcon from "../assets/icons/icon-park-solid_transaction-order.svg"
import profileIcon from "../assets/icons/iconamoon_profile-circle-fill (1).svg"
import logoutIcon from "../assets/icons/humbleicons_logout.svg"
import { Link } from 'react-router'


function Sidebar() {
    const [showLogout, setShowLogout] = useState(false);
    return (
        <div className="flex flex-col items-center h-screen bg-white rounded-t-[10px]">
            <h1 className="text-[28px] font-philosopher font-normal mt-[31px]">Umroh<span className="font-bold">Hub</span></h1>
            <Link to="/Profile" className="flex w-8/12 mt-[69px] space-x-[15px]">
                <img src={profileIcon} alt="profile" className='w-[28px] h-[28px]' />
                <h1 className="font-medium flex justify-start text-left text-[#0A6BDB]">Profile</h1>
            </Link>
            <Link to="/MyTransactions" className="flex w-8/12 mt-[32px] space-x-[15px]">
                <img src={transactionIcon} alt="profile" className='w-[28px] h-[28px]' />
                <h1 className="font-medium flex justify-start text-left text-[#0A6BDB] capitalize">Pesanan saya</h1>
            </Link>
            <div className="flex w-8/12 space-x-[15px] mt-[152px]">
                <img src={logoutIcon} alt="profile" className='w-[28px] h-[28px]' />
                <h1 onClick={()=> setShowLogout(true)} className="font-medium flex justify-start text-left text-[#0A6BDB] capitalize">Keluar</h1>
            </div>
            {showLogout && 
                <div className="bg-white w-6/12 h-[150px]">
                    <h1 className='text-[40px] text-[#282828] font-semibold'>Yakin untuk keluar? </h1>
                    <div className="flex space-x-4">
                        <button className='bg-[#2DBDFF]'>
                            Ga jadi
                        </button>
                        <button className='bg-[#FF4848]'>
                            Iya
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Sidebar
