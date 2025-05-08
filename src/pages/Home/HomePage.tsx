/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CarouselHome from "../../components/Carousel/Carousel";
import CarouselForum from "../../components/Carousel/CarouselForum";
import Card from "../../components/Card/Card";
import CardPackage from "../../components/Card/CardPackage";
import TrustIndicator from "../../components/TrustIndicator";
import Button from "../../components/Button";
import penawaranBg from "../../assets/images/Group.png"
import penawaranBg2 from "../../assets/images/Group (1).png"
import vector from "../../assets/images/Vector.png"
// import penawaranBg2 from "./assets/images/Group (1).png"
import example4 from "../../assets/images/Rectangle 122.png"
import exampleCards from "../../assets/images/pexels-taha-elahi-7984586.png"
import hotelIcon from "../../assets/icons/Component 1.svg"
import paketBg from "../../assets/images/Rectangle 111.png"
import paketExample from "../../assets/images/11848643a6d154484c0aa44d026fef3c.png"
// import hotelIcon2 from "../../assets/icons/Component 7.svg"
import planeIcon from "../../assets/icons/Component 8.svg"
import kabahIcon from "../../assets/icons/Component 23.svg"
import planeIcon2 from "../../assets/icons/Component 24.svg"
import exampleProfil from "../../assets/images/pexels-chevanon-1108099.png"
import suitcaseIcon from "../../assets/icons/suitcase_fill.svg"
import userIcon from "../../assets/icons/User_fill.svg"
import checkIcon from "../../assets/icons/check_ring_round.svg"

const HomePage: React.FC = () => {
  const cardDataList = [
    {
      cardImage: exampleCards,
      cardHeader: 'Paket Umroh 1',
      hotelList: [
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
        }
      ],
      price: {
        original: 'Rp. 40.000.000/pak',
        discounted: 'Rp. 24.000.000/pak'
      },
      progress: {
        current: 100,
        total: 150
      }
    },
    {
      cardImage: exampleCards,
      cardHeader: 'Paket Umroh 2',
      hotelList: [
        {
          city: 'Mekkah',
          roomType: 'Double Room',
          distance: '250 m ke Masjidil Haram',
          icon: hotelIcon
        },
        {
          city: 'Madinah',
          roomType: 'Double Room',
          distance: '100 m ke Masjid Nabawi',
          icon: hotelIcon
        }
      ],
      price: {
        original: 'Rp. 50.000.000/pak',
        discounted: 'Rp. 30.000.000/pak'
      },
      progress: {
        current: 60,
        total: 100
      }
    }
  ];

  const renderCardContent = (hotelList: any[]) => (
    hotelList.map((hotel, index) => (
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
    ))
  );

  const renderCardFooter = (price: any) => (
    <>
      <div className='flex space-x-2 mt-2'>
        <h1 className='text-[#ACACAC] text-[12px] font-semibold line-through'>{price.original}</h1>
        <h1 className='text-[#209FB2] text-[15px] font-semibold'>{price.discounted}</h1>
      </div>
      <div className='flex w-[80%] ms-1 justify-between mt-[20px]'>
        <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-[#D1F4FA]'>Pesan</button>
        <button className='py-3 text-[13px] font-semibold'>Lihat Detail</button>
      </div>
    </>
  );

  const packages = [
    {
      title: "Umroh Hasanah Hana",
      image: paketExample,
      hotelName: "Mekkah",
      hotelRating: 5,
      hotelDistance: "200 m ke Masjidil Haram",
      airline: "Lion Air",
      airlineRating: 5,
      route: "Soekarno hatta ke JED",
      price: "32 Jt",
      booked: 100,
      capacity: 150,
    },
    {
      title: "Umroh Amanah Travel",
      image: paketExample,
      hotelName: "Madinah",
      hotelRating: 4,
      hotelDistance: "500 m ke Nabawi",
      airline: "Garuda Indonesia",
      airlineRating: 4,
      route: "CGK - MED",
      price: "28 Jt",
      booked: 70,
      capacity: 100,
    },
  ];

  const valuesTrust = [
    { label: 'Terpercaya', percentage: '100%' },
    { label: 'Terjamin', percentage: '100%' },
    { label: 'Berkualitas', percentage: '100%' },
    { label: 'Aman', percentage: '100%' },
    { label: 'Amanah', percentage: '100%' },
  ];

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
            <div className="relative w-full h-[600px] z-10 bg-gradient-to-b from-primary-blue/55 via-[#5CE9FF52] to-[#001A4D]">
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                  {cardDataList.map((data, index) => (
                    <Card
                      key={index}
                      cardImage={data.cardImage}
                      cardHeader={data.cardHeader}
                      cardContent={renderCardContent(data.hotelList)}
                      cardFooter={renderCardFooter(data.price)}
                      cardProgress={{
                        percent: Math.min((data.progress.current / data.progress.total) * 100, 100),
                        label: `Pesanan: ${data.progress.current}/${data.progress.total}`
                      }}
                    />
                  ))}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                  {packages.map((item, index) => (
                    <CardPackage
                      key={index}
                      title={item.title}
                      image={item.image}
                      hotelName={item.hotelName}
                      hotelRating={item.hotelRating}
                      hotelDistance={item.hotelDistance}
                      airline={item.airline}
                      airlineRating={item.airlineRating}
                      route={item.route}
                      price={item.price}
                      booked={item.booked}
                      capacity={item.capacity}
                    />
                  ))}
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
                    <h1 className='text-[24px] font-extrabold text-primary-blue'>Kenapa Harus Di
                      <span className='text-white bg-primary-blue font-normal rounded-[8px] px-4 py-1 ms-2'>UmrohHub</span>
                    </h1>
                    <p className='text-[12px] text-primary-blue mt-[16px] w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="flex space-x-5 mt-[26px]">
                      <button className='py-3 w-[100px] text-[13px] font-semibold rounded-full bg-primary-blue text-white'>
                        Pesan
                      </button>
                      <button className='py-3 text-primary-blue text-[13px] font-semibold'>
                        Baca Selengkapnya
                      </button>
                    </div>
                    <div className="w-full flex justify-between">

                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-primary-blue text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={hotelIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-primary-blue text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-primary text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={planeIcon2} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-primary-blue text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
                        </div>
                      </div>
                      <div className="flex space-x-5 w-[50%] mt-[65px]">
                        <img src={kabahIcon} alt="background" className="w-[30px] h-[30px]" />
                        <div className="flex-col w-[100%]">
                          <h6 className='text-primary-blue text-[13px] font-semibold'>Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[10px] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</h1>
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
                <h1 className="font-extrabold text-primary-blue text-[24px]">
                  Forum Diskusi
                </h1>
                <p className="w-[80%] mt-[21px] text-primary-blue text-center text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div className="w-[100%] mt-[78px]">
                  <CarouselForum />
                </div>
              </div>
            </div>
          </div>

          {/* mitra */}
          <div className="bg-gradient-to-b from-[#186FD2] to-primary-blue w-full h-[600px]">
            <div className="w-full relative h-full flex justify-between z-0">
              <div className="h-full w-[50%]">
                <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
              </div>
              <div className="h-full w-[50%] relative">
                <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
              </div>
              <div className="absolute top-0 w-[100%] h-full flex flex-col items-center mt-[56px]">
                <div className="w-[70%] grid grid-cols-2 px-6">
                  <div className="flex-col mt-6">

                    <div className="w-[90%] h-[80px] flex space-x-3 border-b-[1px]">
                      <img src={exampleProfil} alt="Profile" className="w-[65px] h-[65px] mt-2 rounded-full" />
                      <div className="flex flex-col mt-2">
                        <h1 className="text-[15px] capitalize font-bold text-white whitespace-nowrap">
                          Hana Montana<span className='text-yellow-300 mx-[7px]'>★ ★ ★ ★ ★</span>
                        </h1>
                        <div className="flex space-x-4 -ms-0.5">
                          <div className="flex">
                            <img src={suitcaseIcon} alt="Suitcase" className="w-[17px] h-[17px]" />
                            <h1 className="text-[14px] mt-0.5 capitalize font-bold text-white whitespace-nowrap">
                              34<span className='font-extralight'> Paket</span>
                            </h1>
                          </div>
                          <div className="flex ms-2">
                            <img src={userIcon} alt="Suitcase" className="w-[30px] h-[30px] -translate-y-1" />
                            <h1 className="text-[14px] mt-0.5 capitalize -translate-x-3.5 font-bold text-white whitespace-nowrap">
                              234<span className='font-extralight'> Jemaah</span>
                            </h1>
                          </div>
                          <div className="flex space-x-1">
                            <img src={planeIcon} alt="Suitcase" className="w-[15px] h-[15px] translate-y-1" />
                            <h1 className="text-[14px] mt-0.5 capitalize font-bold text-white whitespace-nowrap">
                              34<span className='font-extralight'> Penerbangan</span>
                            </h1>
                          </div>
                        </div>
                        <h1 className="text-[#10F5EA] font-bold text-[12px] -translate-y-2">
                          Lihat detail
                        </h1>
                      </div>
                    </div>

                  </div>
                  <div className="w-full h-full">
                    <h1 className="font-extrabold text-white text-[24px]">Mitra Kami</h1>
                    <p className="font-medium text-[15px] text-white w-full mt-[26px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoour partners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className="mt-[22px]">
                      {valuesTrust.map((item, index) => (
                        <TrustIndicator
                          key={index}
                          label={item.label}
                          percentage={item.percentage}
                          icon={checkIcon}
                        />
                      ))}
                    </div>
                    <Button
                      variant="primaryBlueGr"
                      type="button"
                      className="mt-[20px]"
                    >
                      Lihat Selengkapnya
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
