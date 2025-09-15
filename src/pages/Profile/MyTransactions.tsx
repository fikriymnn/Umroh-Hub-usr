import { Link } from 'react-router'
import Sidebar from '../../components/Sidebar'
import hotelIcon from "../../assets/icons/Component 1.svg"
import hotelIcons from "../../assets/icons/Group.svg"
import planeIcon from '../../assets/icons/bxs_plane.svg'
import departureLocIcon from '../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../assets/icons/mdi_calendar-time.svg'
import examplePlane from '../../assets/images/image 3.png'
import bedIcons from '../../assets/icons/mdi_guest-room.svg'
import useMyTransactions from '../../hooks/user/useMyTransactions'
import { saveSelectedOrder } from '../../utils/storage'
import { renderStarsHotels } from '../../utils/renderStars'
import usePackageDetail from '../../hooks/packages/usePackageDetail'

function Transaction() {
    const { formatDate } = usePackageDetail();
    const {
        order,
        filter, setFilter,
        handleReviewClick,
        getPaymentUrl
    } = useMyTransactions();

    return (
        <div className='w-full h-screen flex space-x-2 bg-gradient-to-b from-[#004492] to-[#00152C]'>
            <div className='w-2/12'>
                <Sidebar />
            </div>
            <div className="w-10/12 max-w-screen-xl mx-auto flex h-full pt-[140px] justify-center bg-white overflow-x-hidden relative">
                <div className="w-8/12 ">
                    <div className="flex space-x-[70px] pb-6 border-b-1 border-[#B0ADAD]">
                        <h1
                            onClick={() => setFilter('all')}
                            className={`ms-[56px] font-medium cursor-pointer ${filter === 'all' ? 'text-[#0A6BDB]' : ''}`}>
                            Semua
                        </h1>
                        <h1
                            onClick={() => setFilter('belum_dibayar')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'belum_dibayar' ? 'text-[#0A6BDB]' : ''}`}>
                            Belum Dibayar
                        </h1>
                        <h1
                            onClick={() => setFilter('diproses')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'diproses' ? 'text-[#0A6BDB]' : ''}`}>
                            di proses
                        </h1>
                        <h1
                            onClick={() => setFilter('selesai')}
                            className={`font-medium capitalize cursor-pointer ${filter === 'selesai' ? 'text-[#0A6BDB]' : ''}`}>
                            selesai
                        </h1>
                    </div>
                    {order?.map((item, index) => (
                        <Link
                            to={getPaymentUrl(item)}
                            onClick={() => saveSelectedOrder(item)}
                            key={index}
                            className='mt-[27px] pb-[36px] border-b-[#B0ADAD] px-[56px] border-b'
                        >
                            <div className="flex justify-between w-full">
                                <h1 className="text-[24px] font-medium">{item?.package_umroh?.package_name}</h1>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex space-x-2">
                                        <h1 className="text-[14px] font-medium">Status Pembayaran</h1>
                                        <h1 className="text-[#0A6BDB] text-[14px] font-medium capitalize">
                                            {item?.payment_status}
                                        </h1>
                                    </div>

                                    <div className="flex space-x-2">
                                        <h1 className="text-[14px] font-medium">Status Pesanan</h1>
                                        <h1 className="text-[#0A6BDB] text-[14px] font-medium capitalize">
                                            {item?.order_status}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-[20px] font-medium">{item?.mitra?.company_name}</span>
                                <span className='text-yellow-300 text-[18px]'>★ ★ ★ ★ ★</span>
                            </div>

                            <div className=" w-8/12 grid grid-cols-2  gap-y-2 py-4 pt-4 text-sm ">
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={bedIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Pilihan Kamar</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-3'>{item?.package_umroh?.package_hotels[0]?.master_hotel?.room_type}</p>
                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Hotel</p>
                                    </div>
                                    <div className='flex space-x-1 ms-4 mt-3'>
                                        <div className="h-[16px] flex items-center">
                                            <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                        </div>
                                        <div className='flex-col w-full'>
                                            <h6 className='text-[12px] font-semibold'>
                                                {item?.package_umroh?.package_hotels[0]?.master_hotel?.hotel_name}
                                                {renderStarsHotels(parseInt(item?.package_umroh?.package_hotels[0]?.master_hotel?.hotel_type || '0'))}
                                                {item?.package_umroh?.package_hotels[0]?.master_hotel?.room_type}
                                            </h6>

                                            <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{item?.package_umroh?.package_hotels[0]?.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Duration Perjalanan</p>
                                    </div>
                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>{item?.package_umroh?.duration} Hari</p>
                                </div>
                                <div className='flex space-x-1 ms-4 mt-3'>
                                    <div className="h-[16px] flex items-center">
                                        <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                                    </div>
                                    <div className='flex-col w-full'>
                                        <h6 className='text-[12px] font-semibold'>
                                            {item?.package_umroh?.package_hotels[1]?.master_hotel?.hotel_name}
                                            {renderStarsHotels(parseInt(item?.package_umroh?.package_hotels[1]?.master_hotel?.hotel_type || '0'))}
                                            {item?.package_umroh?.package_hotels[1]?.master_hotel?.room_type}
                                        </h6>

                                        <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{item?.package_umroh?.package_hotels[1]?.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                                    </div>
                                    <p className='font-medium capitalize text-[13px] ms-6 mt-1'>
                                        {item?.package_umroh?.date_departure
                                            ? formatDate(item?.package_umroh?.date_departure)
                                            : '-'}
                                    </p>
                                </div>
                                <div>
                                    <div className="h-[16px] flex items-center space-x-2">
                                        <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                                        <p className="font-semibold">Maskapai</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>{item?.package_umroh?.airline}</p>

                                </div>
                                <div>
                                    <div className="flex space-x-2 h-[16px] items-center">
                                        <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                                        <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                                    </div>
                                    <p className='font-medium text-[13px] capitalize ms-6 mt-1'>{item?.package_umroh?.master_location_departure?.location_name}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                                    <span className='font-semibold capitalize'>Air Asia Airlines</span>
                                </div>
                                {!item?.review_status && (
                                    <div className='flex flex-col place-items-center justify-between'>
                                        <p className='text-yellow-300'>★ ★ ★ ★ ★</p>
                                        <button
                                            onClick={() => handleReviewClick(item)}
                                            className='bg-red-500 w-[118px] px-4 py-2 rounded-2xl'
                                        >
                                            Beri Ulasan
                                        </button>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transaction