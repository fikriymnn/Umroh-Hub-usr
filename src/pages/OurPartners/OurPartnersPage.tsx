import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardPartners from '../../components/Card/CardPartners'
// import penawaranBg from "../../assets/images/Group.png"
// import penawaranBg2 from "../../assets/images/Group (1).png"
import '../../app.css'
function OurPartnersPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemPages = 4

    const partners = [
        {
            name: "Travel Keren Dongs",
            rating: 5,
            reviewCount: 60,
            licenseNumber: "123045694094949",
            packages: [1, 2, 3],
        },
        {
            name: "Travel Keren Dongs",
            rating: 5,
            reviewCount: 60,
            licenseNumber: "123045694094949",
            packages: [1, 2, 3],
        },
        {
            name: "Travel Keren Dongs yh kan",
            rating: 5,
            reviewCount: 60,
            licenseNumber: "123045694094949",
            packages: [1, 2, 3],
        },
        {
            name: "Travel Keren Dongs",
            rating: 5,
            reviewCount: 60,
            licenseNumber: "123045694094949",
            packages: [1, 2, 3],
        },
    ];

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

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {currentItems.map((data, index) => (
                        <CardPartners key={index} {...data} />
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
