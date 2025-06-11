/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DefaultLayout from '../../layout/DefaultLayout'
import CardPartners from '../../components/Card/CardPartners'
import { fetchAllPartners } from '../../services/partnersServices'
// import penawaranBg from "../../assets/images/Group.png"
// import penawaranBg2 from "../../assets/images/Group (1).png"
import '../../app.css'
import { Partners } from '../../types/Partners'

function OurPartnersPage() {
    const [partners, setPartners] = useState<Partners[]>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 4;

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetchAllPartners();
                setPartners(res.data.data.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        }

        fetchPackages();
    }, []);

    const totalPages = Math.ceil(partners.length / itemPages)
    const startIndex = (currentPage - 1) * itemPages
    const currentItems = partners.slice(startIndex, startIndex + itemPages)

    return (
        <DefaultLayout>
            <div className="w-full min-h-screen pt-[230px] pb-20 px-6  background-div"
            //   style={{
            //     backgroundImage: `url(${penawaranBg}), url(${penawaranBg2})`,
            //     backgroundPosition: "left top, right top",
            //     backgroundSize: "50% 100%, 50% 100%", // atau "cover" jika ingin gambar memenuhi area
            //     backgroundRepeat: "no-repeat, no-repeat",
            //     backgroundColor: "blue" // Ganti dengan Tailwind `bg-blue-500` jika perlu
            //   }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-10/12 mx-auto">
                    {currentItems.map((item: any, index: number) => (
                        <CardPartners
                            key={index}
                            partners={item}
                        />
                    ))}
                </div>

                <div className='flex justify-center mt-10 space-x-4 text-white '>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='px-3 py-1'
                    >
                        &lt;
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : 'bg-sky-600'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='px-3 py-1'
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default OurPartnersPage
