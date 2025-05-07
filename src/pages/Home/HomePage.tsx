import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CarouselHome from "../../components/Carousel/Carousel";
import CarouselForum from "../../components/Carousel/CarouselForum";
import Card from "../../components/Card/Card";
import penawaranBg from "../../assets/images/Group.png"
import penawaranBg2 from "../../assets/images/Group (1).png"
import vector from "../../assets/images/Vector.png"
// import penawaranBg2 from "./assets/images/Group (1).png"
import example4 from "../../assets/images/Rectangle 122.png"
import exampleCards from "../../assets/images/pexels-taha-elahi-7984586.png"
import hotelIcon from "../../assets/icons/Component 1.svg"
import paketBg from "../../assets/images/Rectangle 111.png"
import paketExample from "../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
import hotelIcon2 from "../../assets/icons/Component 7.svg"
import planeIcon from "../../assets/icons/Component 8.svg"
import kabahIcon from "../../assets/icons/Component 23.svg"
import planeIcon2 from "../../assets/icons/Component 24.svg"

const HomePage: React.FC = () => {
  const hotelList = [
    {
      city: 'Mekkah',
      roomType: 'Quad Room',
      distance: '200 m ke Masjidil Haram',
      icon: hotelIcon
    },
    {
      city: 'Madinah',
      roomType: 'Quad Room',
      distance: '150 m ke Masjid Nabawi',
      icon: hotelIcon
    },
  ];

  const cardContent = hotelList.map((hotel, index) => (
    <div className='flex space-x-2 w-full my-2' key={index}>
      <img src={hotel.icon} alt="icon" className='w-[30px] h-[30px]' />
      <div className='flex-col w-full'>
        <h6 className='text-[12px] font-semibold'>
          {hotel.city} :
          <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>({hotel.roomType})
        </h6>
        <p className='text-[#209FB2] text-[10px] font-semibold'>{hotel.distance}</p>
      </div>
    </div>
  ));

  const cardFooter = (
    <>
      <div className='flex space-x-2 mt-2'>
        <h1 className='text-[#ACACAC] text-[12px] font-semibold line-through'>Rp. 40.000.000/pak</h1>
        <h1 className='text-[#209FB2] text-[15px] font-semibold'>Rp. 24.000.000/pak</h1>
      </div>
      <div className='flex w-[80%] ms-1 justify-between mt-[20px]'>
        <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#D1F4FA]'>Pesan</button>
        <button className='py-3 text-[13px] font-semibold'>Lihat Detail</button>
      </div>
    </>
  );

  const cardProgress = {
    percent: Math.min((100 / 50) * 100, 100),
    label: 'Pesanan: 100/150'
  };
  return (
    <DefaultLayout>
      <div className='w-full min-h-screen flex flex-col'>
        {/* content area */}
        <div className="flex flex-col w-full">
          {/* carousel */}
          <div className="w-full z-0">
            <CarouselHome />
          </div>

          {/* penawaran */}
          <div className="w-full h-[600px] z-10 bg-gradient-to-b from-[#00153E] to-[#3C97FF]">
            <div className="relative w-full h-[600px] z-10 bg-gradient-to-b from-[#001A4D]/55 via-[#5CE9FF52] to-[#001A4D]">
              <div className="w-full h-full flex justify-between z-0">
                <div className="h-full w-[50%]">
                  <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
                </div>
                <div className="h-full w-[50%] relative">
                  <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 z-20 flex flex-col mt-[40px] items-center h-full">
                <h1 className="text-[#10F5EA] font-semibold">Penawaran Khusus</h1>
                <h1 className="text-white font-extrabold text-[24px]">Penawaran Khusus Umroh</h1>

                {/* cards */}
                <div className='w-[23%]'>
                  <Card
                    cardImage={exampleCards}
                    header="Paket Umroh"
                    cardContent={cardContent}
                    cardFooter={cardFooter}
                    cardProgress={cardProgress}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* paket */}
          <div className="w-full h-[550px] relative">
            <img src={paketBg} alt="background" className="w-full h-full object-cover" />
            <div className="w-full absolute top-14 flex justify-center">
              <div className="w-[80%] mt-3 flex flex-col">
                <div className="flex w-full justify-between">
                  <h1 className=" text-white font-bold text-[20px]">
                    Paket yang tersedia
                  </h1>
                  <h1 className=" text-[#10F5EA] font-bold text-[15px]">
                    Lihat lebih banyak
                  </h1>
                </div>
                <div className="grid grid-cols-3 mt-3">
                  <div className="w-[100%] relative h-[200px] shadow-[-1px_1px_8px] shadow-white">
                    <img src={paketExample} alt="paket" className='w-full h-full object-cover' />
                    <div className="w-full h-full bg-gradient-to-b from-black/0 to-black py-3 px-5 flex flex-col space-y-3 absolute top-0">
                      <h1 className=" text-white capitalize font-bold text-[24px]">
                        Umroh Hasanah hana
                      </h1>
                      <div className="flex space-x-2">
                        <img src={hotelIcon2} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-full">
                          <div className="flex w-full">
                            <h6 className='text-white text-[12px] font-semibold'>Mekkah :
                              <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              (Quad Room)
                            </h6>
                          </div>
                          <h1 className="text-[#5CE9FF] text-[10px] font-semibold">200 m ke Masjidil Haram</h1>
                        </div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div className="flex space-x-2">
                          <img src={planeIcon} alt="background" className="w-[30px] h-[30px]" />
                          <div className="flex-col w-full">
                            <div className="flex w-full">
                              <h6 className='text-white text-[12px] capitalize font-semibold'>Lion Air
                                <span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                              </h6>
                            </div>
                            <h1 className="text-[#5CE9FF] text-[10px] font-semibold">Soekarno hatta ke JED</h1>
                          </div>
                        </div>
                        <div className="absolute bottom-11 right-5 text-[45px] font-bold bg-gradient-to-br from-[#10F5EA] to-[#3C97FF] inline-block text-transparent bg-clip-text">
                          32 Jt
                        </div>
                      </div>
                      <div className="flex justify-between px-[17px] py-[20px] w-full mt-[8px] ">
                        <div className="flex  space-x-2">
                          <div className="w-[100px] h-[5px] rounded-[10px] bg-[#E5E5E5]">
                            <div className="w-[80%] rounded-s-[10px] h-full bg-gradient-to-r from-[#004492] to-[#10F5EA]">
                            </div>
                          </div>
                          <div className="flex-col text-center -translate-y-4">
                            <h1 className=" text-[9px] font-semibold text-center text-white">Pesanan: 100/150</h1>
                            <h1 className=" text-[9px] font-semibold text-center text-white">Tersisa: 50</h1>
                          </div>
                        </div>
                        <h1 className=" text-[#10F5EA] font-bold text-[12px] -translate-y-1">
                          Lihat detail
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* kenapa harus umrohub */}
          <div className="w-full grid grid-cols-2">
            <div className="w-full h-full bg-[#D1F4FA]">
              <div className="w-full relative h-full flex justify-between z-0">
                <div className="h-full w-[50%]">
                  <img src={vector} alt="background" className="w-[88%] h-full opacity-70 object-cover" />
                </div>
                <div className="h-full w-[50%] relative">
                  <img src={vector} alt="background" className="w-[88%] h-full absolute opacity-70 right-0 object-cover" />
                </div>
                <div className="flex absolute top-0 w-[100%] py-10 px-[13%] justify-center">
                  <div className="mt-6 flex flex-col">
                    <h1 className='text-[24px] font-extrabold text-[#001A4D]'>Kenapa Harus Di
                      <span className='text-white bg-[#001A4D] font-normal rounded-[8px] px-4 py-1 ms-2'>UmrohHub</span>
                    </h1>
                    <p className='text-[12px] text-[#001A4D] mt-[16px] w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="flex space-x-5 mt-[26px]">
                      <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#001A4D] text-white'>
                        Pesan
                      </button>
                      <button className='py-3 text-[#001A4D] text-[13px] font-semibold'>
                        Baca Selengkapnya
                      </button>
                    </div>
                    <div className="w-full flex justify-between">

                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={planeIcon2} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={kabahIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-[#001A4D] text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-[#001A4D] text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[570px]">
              <img src={example4} alt="background" className='object-cover w-full h-full' />
            </div>
          </div>

          {/* forum */}
          <div className="bg-white w-full h-[700px]">
            <div className="w-full h-full relative flex justify-between z-0">
              <div className="h-full w-[50%]">
                <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
              </div>
              <div className="h-full w-[50%] relative">
                <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
              </div>
              <div className="w-full absolute top-0 h-full py-7 flex flex-col items-center">
                <h1 className="font-extrabold text-[#001A4D] text-[24px]">
                  Forum Diskusi
                </h1>
                <p className="w-[80%] mt-[21px] text-[#001A4D] text-center text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div className="w-[100%] mt-[78px]">
                  <CarouselForum />
                </div>
              </div>
            </div>
          </div>

          {/* mitra */}
          <div className="bg-gradient-to-b from-[#186FD2] to-[#001A4D] w-full h-[600px]">
            <div className="w-full h-full flex justify-between z-0">
              <div className="h-full w-[50%]">
                <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
              </div>
              <div className="h-full w-[50%] relative">
                <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
