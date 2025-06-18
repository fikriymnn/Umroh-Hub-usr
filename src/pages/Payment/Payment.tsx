import DefaultLayout from '../../layout/DefaultLayout'
import hotelIcon from "../../assets/icons/Component 1.svg"
import hotelIcons from "../../assets/icons/Group.svg"
import planeIcon from '../../assets/icons/bxs_plane.svg'
import departureLocIcon from '../../assets/icons/mingcute_location-fill.svg'
import dateIcon from '../../assets/icons/clarity_date-solid.svg'
import durationIcon from '../../assets/icons/mdi_calendar-time.svg'
import examplePlane from '../../assets/images/image 3.png'
import profileIcon from "../../../src/assets/icons/iconamoon_profile-circle-fill.svg"
import payMethodIcon from "../../../src/assets/icons/Group 167.svg"
import bcaIcon from "../../../src/assets/icons/image 7.svg"
import useProfile from '../../hooks/user/useProfile'
import usePayment from '../../hooks/order/usePayment'
function Payment() {
  const { user } = useProfile();
  const {
    packages,
    orderData,
    rekening, setRekening,
    isPayment,
    hadlePaymentClick,
    handlePaymentOrder
  } = usePayment();

  return (
    <DefaultLayout>
      <div className='w-full min-h-screen pt-[200px] flex flex-col items-center space-y-[34px] background-div'>
        <div className="bg-white rounded-[5px] w-10/12 h-full flex flex-col py-6 px-12 space-y-[23px]">
          <div className=" flex w-full space-x-4 mt-3 rounded-[5px]">
            <img src={profileIcon} alt="profile" className='w-[38px] h-[38px]' />

            <h1 className='text-[20px] font-bold'>{user?.name}</h1>

          </div>

          <div className="w-full grid grid-cols-3 gap-2  rounded-[5px]">
            <div className='w-full h-full bg-[#D1F4FA] px-[19px] py-[15px]'>
              <h1 className='flex capitalize items-center font-semibold'>Jumlah jemaah <span className='ms-[42px] font-normal text-sm'>5 jemaah</span></h1>
              <ul className='list-disc ms-4 mt-2'>
                {orderData.map((data: any) => (
                  <li className='text-[11px] capitalize'>{data.name}</li>
                ))}
              </ul>
              <h1 className='flex capitalize mt-4 items-center font-semibold'>Tipe pembayaran</h1>
              <ul className='list-disc ms-4 mt-2'>
                <li className='text-[11px] capitalize'>Uang muka</li>

              </ul>
            </div>
            <div className="w-full flex h-full justify-center">
              <div className="w-7/12 h-full flex flex-col space-y-[28px]">
                <div>
                  <div className="flex space-x-2 h-[16px] items-center">
                    <img src={durationIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                    <p className="font-bold text-[15px]">Duration Perjalanan</p>
                  </div>
                  <p className='font-medium text-[13px] ms-6 mt-1'>{packages.duration} Hari</p>
                </div>

                <div>
                  <div className="flex space-x-2 h-[16px] items-center">
                    <img src={dateIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                    <p className="font-bold text-[15px]">Tanggal Keberangkatan</p>
                  </div>
                  <p className='font-medium text-[13px] ms-6 mt-1'>
                    {new Date(packages.date_departure).toLocaleDateString('id-ID', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <div className="h-[16px] flex items-center space-x-2">
                    <img src={planeIcon} alt="icon" className='w-[14px] h-[14px]' />
                    <p className="font-semibold">Maskapai Pesawat</p>
                  </div>
                  <p className='font-medium text-[13px] ms-6 mt-1'>{packages.airline}</p>

                </div>
                <div>
                  <div className="flex space-x-2 h-[16px] items-center">
                    <img src={departureLocIcon} alt='Hotels' className='w-[14px] h-[14px]' />
                    <p className="font-bold text-[15px]">Kota Keberangkatan</p>
                  </div>
                  <p className='font-medium text-[13px] ms-6 mt-1'>{packages.master_location_departure.location_name}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={examplePlane} alt="AirAsia" className="w-[34px] h-[34px] " />
                  <span className='font-semibold'>Air Asia Airlines</span>
                </div>
              </div>
            </div>
            <div className="w-full justify-center flex">
              <div className='w-9/12 flex flex-col  space-y-[15px]'>
                <div className="flex space-x-2 h-[16px] items-center">
                  <img src={hotelIcons} alt='Hotels' className='w-[14px] h-[14px]' />
                  <p className="font-bold text-[15px]">Hotel</p>
                </div>
                <div className="flex space-x-1 ms-4 mt-3">
                  <div className="h-[16px] flex items-center">
                    <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                  </div>
                  <div className='flex-col w-full'>

                    <h6 className='text-[12px] font-semibold'>
                      {packages.package_hotels[0].master_hotel.hotel_name}
                      <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                    </h6>

                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{packages.package_hotels[0].description}</p>
                  </div>
                </div>
                <div className="flex space-x-1 ms-4">
                  <div className="h-[16px] flex items-center">
                    <img src={hotelIcon} alt="icon" className='w-[11px] h-[11px]' />
                  </div>
                  <div className='flex-col w-full'>

                    <h6 className='text-[12px] font-semibold'>
                      {packages.package_hotels[0].master_hotel.hotel_name}
                      <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span> Quad Room
                    </h6>

                    <p className='text-[#209FB2] text-[10px] capitalize font-semibold'>{packages.package_hotels[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isPayment ? (
          <div className=" w-10/12 h-full flex space-x-4">
            <div className="bg-white rounded-[5px] w-7/12 h-full py-6 px-12">
              <div className=" flex w-full space-x-4 mt-3 rounded-[5px]">
                <img src={payMethodIcon} alt="profile" className='w-[38px] h-[38px]' />

                <h1 className='text-[20px] flex items-center font-bold'>Metode Pembayaran</h1>

              </div>
              <div className=" flex w-full space-x-4 mt-3 rounded-[5px]">
                <div className="w-[71px] h-[46px] rounded-[10px] border-2 border-[#D9D9D9D9]">
                  <img src={bcaIcon} alt="profile" className='w-[63px] h-[44px]' />
                </div>
                <h1 className='text-[#A1A1A1] flex items-center font-medium'>Transfer Bank (Transfer BCA)</h1>
              </div>
              <div className="mt-[18px]">
                <label htmlFor="Nama" className='capitalize ms-1 font-semibold'>Nama Pemilik no rekening</label>
                <input
                  type="number"
                  value={rekening}
                  onChange={(e) => setRekening(e.target.value)}
                  placeholder="Ketik Nama Pemilik Rekening..."
                  className='placeholder:text-[15px] placeholder:text-[#95959599] placeholder:font-semibold
                 w-full rounded-[10px] mt-2 border-[1px] border-[#959595] h-[51px] px-[20px] py-[15px]' />
              </div>
              <div className="mt-[13px]">
                <h1 className='font-semibold text-[15px]'>Perhatian:</h1>
                <p className='font-medium text-[15px]'>Anda bisa transfer dari layanan perbankan apapun ( internet
                  banking, SMS/M-Banking, ATM )</p>
              </div>
              <div className="mt-[18px]">
                <label htmlFor="Nama" className='capitalize ms-1 font-semibold'>kode promo</label>
                <input type="text" placeholder="Ketik Kode Promo..." className='placeholder:text-[15px] placeholder:text-[#95959599] placeholder:font-semibold
                 w-full rounded-[10px] mt-2 border-[1px] border-[#959595] h-[51px] px-[20px] py-[15px]' />
              </div>
              <div className="flex w-full mt-3 justify-center">

                <button className="rounded-[6px] font-semibold text-white mt-2 px-6 py-2 bg-gradient-to-br capitalize from-[#3C9BFF] to-[#10F5EA]">redeem</button>
              </div>
            </div>
            <div className="bg-white w-5/12 h-full rounded-[5px] py-6 px-12">
              <div className=" flex w-full space-x-8 mt-3 rounded-[5px]">
                <h1 className='text-[20px] flex capitalize items-center font-bold'>Total bayar</h1>
                <h1 className='text-[15px] flex capitalize items-center font-medium'>uang muka</h1>
              </div>
              <h1 className='text-[32px] mt-9 flex capitalize justify-center items-center font-semibold'>Rp. 600000000</h1>
              <button className="rounded-full text-[24px] font-semibold text-white w-full mt-2 p-6 bg-gradient-to-br from-[#3C9BFF] to-[#10F5EA]"
                onClick={hadlePaymentClick}
              >Bayar</button>
            </div>
          </div>
        ) : (
          <div className="w-10/12 h-full rounded-[5px] bg-white py-6 px-12  grid grid-cols-2 gap-[80px]">
            <div className="flex flex-col space-y-4">

              <div className=" flex w-full space-x-4 mt-3 rounded-[5px]">
                <img src={payMethodIcon} alt="profile" className='w-[38px] h-[38px]' />

                <h1 className='text-[20px] flex items-center font-bold'>Metode Pembayaran</h1>
                <div className="flex flex-col">

                  <h1 className='text-[13px] flex items-center text-[#3C97FF] font-semibold'>Bayar ke 1</h1>
                  <h1 className='text-[11px] flex items-center text-[#3C97FF] font-medium'>(Uang muka)</h1>
                </div>
              </div>
              <div className=" flex w-full space-x-4 px-2 border-2 border-[#D9D9D9D9]">
                <img src={bcaIcon} alt="profile" className='w-[63px] h-[44px]' />
                <h1 className=' flex items-center font-medium capitalize'>Belia IAIAIAIIAIIA</h1>
              </div>
              <div className=" grid grid-cols-2 w-full h-[45px] space-x-4 border-2 border-[#D9D9D9D9]">
                <div className="w-full flex justify-center items-center">
                  <h1 className=' flex items-center whitespaces-nowarp font-medium capitalize'>UmrohYUK</h1>
                </div>
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-[#3C9BFF] to-[#10F5EA] capitalize text-white">promo terpakai</div>
              </div>
              <div className="w-10/12 flex justify-between">
                <h1 className=' flex items-center font-bold capitalize'>Total</h1>
                <div className=" font-bold bg-gradient-to-br from-[#3C9BFF] to-[#10F5EA] inline-block text-transparent bg-clip-text">
                  Rp 6.000.000
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="mt-[18px]">
                <div className="flex flex-col space-y-[13px]">
                  <label className="block text-[13px] font-semibold mb-2">Unggah bukti pembayaran</label>
                  <div className="flex space-x-2 border-[2px] items-center  border-[#D9D9D9D9] h-[45px] rounded-[10px] p-2 w-full">

                    <div className="relative w-4/12">
                      <input
                        id="fileUpload"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <label
                        htmlFor="fileUpload"
                        className="inline-block whitespace-nowrap bg-gradient-to-br from-[#3C9BFF] to-[#10F5EA] w-full text-white font-medium text-center py-[3px]  px-4 rounded-md hover:bg-gray-300 cursor-pointer"
                      >
                        Pilih File
                      </label>
                    </div>

                    <p className="text-sm text-gray-600 overflow-hidden">fileName</p>
                  </div>

                </div>
              </div>
              <p className='text-[11px] font-semibold'>Unggah foto bukti transfer anda agar pesanan bisa dikonfirmasi.
                anda bisa mengirim bukti transaksi dalam kurun waktu 24 jam kedepan,</p>
              <p className='text-[11px] text-[#0A6BDB] font-semibold'>*untuk mengakses halaman ini kembali setelah keluar, buka
                laman akun &gt; pesanan saya &gt; belum bayar, lalu klik tombol bayar</p>
              <button
                onClick={handlePaymentOrder}
                className="rounded-[10px] text-[24px] font-semibold text-white w-full mt-2 py-2 bg-gradient-to-br from-[#3C9BFF] to-[#10F5EA]"
              >
                Kirim
              </button>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

export default Payment