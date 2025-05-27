import React, { useState } from 'react'
import transactionIcon from "../assets/icons/icon-park-solid_transaction-order.svg"
import profileIcon from "../assets/icons/iconamoon_profile-circle-fill (1).svg"
import logoutIcon from "../assets/icons/humbleicons_logout.svg"
import profileIcon2 from "../assets/icons/iconamoon_profile-circle-fill.svg"
import transactionIcon2 from "../assets/icons/icon-park-solid_transaction-order (1).svg"
import { Link, useLocation } from 'react-router'

function Sidebar() {
    const [showLogout, setShowLogout] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {/* Logout Confirmation Modal */}
            {showLogout && 
                <div className="fixed inset-0 backdrop-blur bg-black/15 bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[5px] shadow-md px-8 py-6 w-5/12 h-5/12 flex flex-col items-center justify-center text-center">
                        <h1 className="text-[40px] font-semibold text-[#282828] mb-6">Yakin untuk keluar?</h1>
                        <div className="flex justify-center space-x-4">
                            <button 
                                onClick={() => setShowLogout(false)} 
                                className="bg-[#2DBDFF] text-white font-semibold rounded-full px-10 py-3"
                            >
                                Ga jadi
                            </button>
                            <button 
                                onClick={() => {
                                    // Add your logout logic here
                                    console.log("Logging out...");
                                    setShowLogout(false);
                                }} 
                                className="bg-[#FF4848] text-white font-semibold rounded-full px-10 py-3"
                            >
                                Iya
                            </button>
                        </div>
                    </div>
                </div>
            }

            {/* Sidebar */}
            <div className="flex flex-col items-center h-screen bg-white rounded-t-[10px]">
                <h1 className="text-[28px] font-philosopher font-normal mt-[31px]">
                    Umroh<span className="font-bold">Hub</span>
                </h1>
                <Link to="/Profile" className="flex w-8/12 items-center mt-[69px] space-x-[15px]">
                    <img src={currentPath === "/Profile" ? profileIcon : profileIcon2} alt="profile" className="w-[28px] h-[28px]" />
                    <h1 className={`font-medium text-left flex items-self-center ${currentPath === "/Profile" ? "text-[#0A6BDB]" : ""}`}>Profile</h1>
                </Link>
                <Link to="/MyTransactions" className="flex w-8/12 mt-[32px] space-x-[15px]">
                    <img src={currentPath === "/MyTransactions" ? transactionIcon2 : transactionIcon} alt="transaction" className="w-[28px] h-[28px]" />
                    <h1 className={`font-medium text-left ${currentPath === "/MyTransactions" ? "text-[#0A6BDB]" : ""}`}>Pesanan saya</h1>
                </Link>
                <div className="flex w-8/12 space-x-[15px] mt-[152px] cursor-pointer">
                    <img src={logoutIcon} alt="logout" className="w-[28px] h-[28px]" />
                    <h1 
                        onClick={() => setShowLogout(true)} 
                        className="font-medium text-left text-[#0A6BDB] capitalize"
                    >
                        Keluar
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Sidebar
