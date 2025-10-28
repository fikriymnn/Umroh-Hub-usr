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
// import hotelIcon2 from "../../assets/icons/Component 7.svg"
import planeIcon from "../../assets/icons/Component 8.svg"
import kabahIcon from "../../assets/icons/Component 23.svg"
import planeIcon2 from "../../assets/icons/Component 24.svg"
import exampleProfil from "../../assets/images/pexels-chevanon-1108099.png"
import suitcaseIcon from "../../assets/icons/suitcase_fill.svg"
import userIcon from "../../assets/icons/User_fill.svg"
import checkIcon from "../../assets/icons/check_ring_round.svg"
import useHomePage from "../../hooks/home/useHomePage";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  const {
    packages
  } = useHomePage();

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
      cardProgress: {
        current: 60,
        total: 100,
        label: 'Pesanan: 60/100'
      }
    }
  ];

  const valuesTrust = [
    { label: 'Terpercaya', percentage: '100%', icon: checkIcon },
    { label: 'Terjamin', percentage: '100%', icon: checkIcon },
    { label: 'Berkualitas', percentage: '100%', icon: checkIcon },
    { label: 'Aman', percentage: '100%', icon: checkIcon },
    { label: 'Amanah', percentage: '100%', icon: checkIcon },
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
        <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] z-10 bg-gradient-to-b from-[#00153E] to-[#3C97FF]">
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] z-10 bg-gradient-to-b from-primary-blue/55 via-[#5CE9FF52] to-[#001A4D]">
            <div className="w-full h-full flex flex-col md:flex-row justify-between z-0">
              <div className="h-[150px] sm:h-[250px] md:h-full w-full md:w-[50%]">
                <img
                  src={penawaranBg}
                  alt="background"
                  className="w-full md:w-[90%] h-full object-cover"
                />
              </div>
              <div className="h-[150px] sm:h-[250px] md:h-full w-full md:w-[50%] relative">
                <img
                  src={penawaranBg2}
                  alt="background"
                  className="w-full md:w-[90%] h-full md:absolute md:right-0 object-cover"
                />
              </div>
            </div>

            <div className="absolute inset-0 z-20 flex flex-col mt-[20px] md:mt-[40px] items-center h-full px-3 sm:px-0">
              <h1 className="text-[#10F5EA] font-semibold text-sm sm:text-base md:text-lg">
                Penawaran Khusus
              </h1>
              <h1 className="text-white font-extrabold text-[18px] sm:text-[22px] md:text-[24px] text-center">
                Penawaran Khusus Umroh
              </h1>

              {/* cards */}
              <div className="w-11/12 sm:w-10/12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 md:mt-5">
                {cardDataList?.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* paket */}
          <div className="w-full h-[550px] relative">
            <img src={paketBg} alt="background" className="w-full h-full object-cover" />
            <div className="w-full absolute top-14 flex justify-center">
              <div className="w-10/12 mt-3 flex flex-col">
                <div className="flex w-full justify-between">
                  <h1 className=" text-white font-bold text-[20px]">
                    Paket yang tersedia
                  </h1>
                  <Link to={'/UmrohPackage'} className=" text-[#10F5EA] font-bold text-[15px]">
                    Lihat lebih banyak
                  </Link>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                  {packages?.map((item, index) => (
                    <CardPackage
                      key={index}
                      packages={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* kenapa harus umrohub */}
          <div className="w-full grid md:grid-cols-2 text-[80%] md:text-[100%]">
            <div className="w-full h-[300px] md:h-full bg-[#D1F4FA]">
              <div className="w-full relative h-full flex justify-between z-0">
                <div className="h-full w-[50%]">
                  <img
                    src={vector}
                    alt="background"
                    className="w-[88%] h-full opacity-70 object-cover"
                  />
                </div>
                <div className="h-full w-[50%] relative">
                  <img
                    src={vector}
                    alt="background"
                    className="w-[88%] h-full absolute opacity-70 right-0 object-cover"
                  />
                </div>

                <div className="flex absolute top-0 w-[95%] md:w-10/12 md:py-10 left-[4%] md:left-1/7">
                  <div className="mt-4 md:mt-6 flex flex-col">
                    <h1 className="text-[16px] md:text-[24px] md:text-left text-center font-extrabold text-primary-blue leading-snug">
                      Kenapa Harus Di
                      <span className="text-white bg-primary-blue rounded-[8px] px-3 py-1 ms-2 font-philosopher font-normal">
                        Umroh<span className="font-bold">Hub</span>
                      </span>
                    </h1>

                    <p className="text-[9px] md:text-[12px] text-primary-blue mt-[12px] md:mt-[16px] w-[95%] leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>

                    <div className="flex space-x-4 mt-[10px] md:mt-[26px]">
                      <button className="py-1 md:py-3 px-2  md:w-[100px] text-[10px] font-semibold rounded-full bg-primary-blue text-white">
                        Pesan
                      </button>
                      <button className="py-1 md:py-3 text-primary-blue text-[10px] font-semibold">
                        Baca Selengkapnya
                      </button>
                    </div>

                    <div className="w-full flex justify-between">
                      <div className="flex space-x-3 md:space-x-5 w-[50%] mt-[15px] md:mt-[65px]">
                        <img
                          src={hotelIcon}
                          alt="background"
                          className="w-[10px] h-[10px] md:w-[30px] md:h-[30px]"
                        />
                        <div className="flex-col w-[100%]">
                          <h6 className="text-primary-blue text-[10px] md:text-[13px] font-semibold">
                            Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[8px] md:text-[10px] w-[90%] md:w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididun
                          </h1>
                        </div>
                      </div>

                      <div className="flex space-x-3 md:space-x-5 w-[50%] mt-[15px] md:mt-[65px]">
                        <img
                          src={hotelIcon}
                          alt="background"
                          className="w-[10px] h-[10px] md:w-[30px] md:h-[30px]"
                        />
                        <div className="flex-col w-[100%]">
                          <h6 className="text-primary-blue text-[10px] md:text-[13px] font-semibold">
                            Lorem Ipsum
                          </h6>
                          <h1 className="text-primary text-[8px] md:text-[10px] w-[90%] md:w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididun
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-between">
                      <div className="flex space-x-3 md:space-x-5 w-[50%] mt-[15px] md:mt-[65px]">
                        <img
                          src={planeIcon2}
                          alt="background"
                          className="w-[10px] h-[10px] md:w-[30px] md:h-[30px]"
                        />
                        <div className="flex-col w-[100%]">
                          <h6 className="text-primary-blue text-[10px] md:text-[13px] font-semibold">
                            Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[8px] md:text-[10px] w-[90%] md:w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididun
                          </h1>
                        </div>
                      </div>

                      <div className="flex space-x-3 md:space-x-5 w-[50%] mt-[15px] md:mt-[65px]">
                        <img
                          src={kabahIcon}
                          alt="background"
                          className="w-[10px] h-[10px] md:w-[30px] md:h-[30px]"
                        />
                        <div className="flex-col w-[100%]">
                          <h6 className="text-primary-blue text-[10px] md:text-[13px] font-semibold">
                            Lorem Ipsum
                          </h6>
                          <h1 className="text-primary-blue text-[8px] md:text-[10px] w-[90%] md:w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididun
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] md:h-[570px]">
              <img
                src={example4}
                alt="background"
                className="object-cover w-full h-full"
              />
            </div>
          </div>


          {/* forum */}
          <div className="bg-white w-full h-[600px] md:h-[700px]">
            <div className="w-full h-full relative flex justify-between z-0">
              <div className="h-full w-[50%]">
                <img src={penawaranBg} alt="background" className="w-[90%] h-full object-cover" />
              </div>
              <div className="h-full w-[50%] relative">
                <img src={penawaranBg2} alt="background" className="w-[90%] h-full absolute right-0 object-cover" />
              </div>
              <div className="w-full absolute top-0 h-full py-7 flex flex-col items-center">
                <h1 className="font-extrabold text-primary-blue text-[18px] md:text-[24px]">
                  Forum Diskusi
                </h1>
                <p className="w-[80%] mt-[11px] md:mt-[21px] text-primary-blue text-center  text-[9px] md:text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div className="w-[100%] mt-[40px] md:mt-[78px]">
                  <CarouselForum />
                </div>
              </div>
            </div>
          </div>

          {/* mitra */}
           <div className="bg-gradient-to-b from-[#186FD2] to-primary-blue w-full min-h-[500px] h-fit md:h-[600px] sm:h-auto">
            <div className="w-full relative h-full flex justify-between z-0 flex-col md:flex-row">
              <div className="h-[300px] md:h-full w-full md:w-[50%]">
                <img
                  src={penawaranBg}
                  alt="background"
                  className="w-full md:w-[90%] h-full object-cover"
                />
              </div>
              <div className="h-[300px] md:h-full w-full md:w-[50%] relative">
                <img
                  src={penawaranBg2}
                  alt="background"
                  className="w-full md:w-[100%] h-full absolute md:static right-0 object-cover"
                />
              </div>

              <div className="absolute md:top-0 top-0 w-full h-full flex flex-col items-center md:mt-[56px]">
                <div className="w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 px-4 py-6 md:px-6 gap-6 md:gap-0">
                  <div className="flex-col mt-4 md:mt-6">
                    <div className="w-full md:w-[90%] h-auto md:h-[80px] flex flex-col md:flex-row md:space-x-3 border-b-[1px] pb-3 md:pb-0">
                      <div className="flex justify-center md:justify-start">
                        <img
                          src={exampleProfil}
                          alt="Profile"
                          className="w-[40px] h-[40px] md:w-[65px] md:h-[65px] mt-2 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col mt-2 text-center md:text-left">
                        <h1 className="text-[12px] md:text-[15px] capitalize font-bold text-white whitespace-nowrap">
                          Hana Montana
                          <span className="text-yellow-300 mx-[5px] md:mx-[7px]">★ ★ ★ ★ ★</span>
                        </h1>

                        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 ">
                          <div className="flex items-center">
                            <img src={suitcaseIcon} alt="Suitcase" className="w-[16px] h-[16px]" />
                            <h1 className="text-[12px] md:text-[14px] mt-0.5 capitalize font-bold text-white whitespace-nowrap">
                              34<span className="font-extralight"> Paket</span>
                            </h1>
                          </div>
                          <div className="flex items-center">
                            <img
                              src={userIcon}
                              alt="User"
                              className="w-[26px] h-[26px] "
                            />
                            <h1 className="text-[12px] md:text-[14px] mt-0.5 capitalize -translate-x-2 font-bold text-white whitespace-nowrap">
                              234<span className="font-extralight"> Jemaah</span>
                            </h1>
                          </div>
                          <div className="flex items-center space-x-1">
                            <img
                              src={planeIcon}
                              alt="Plane"
                              className="w-[13px] h-[13px] translate-y-0.5"
                            />
                            <h1 className="text-[12px] md:text-[14px] mt-0.5 capitalize font-bold text-white whitespace-nowrap">
                              34<span className="font-extralight"> Penerbangan</span>
                            </h1>
                          </div>
                        </div>

                        <h1 className="text-[#10F5EA] font-bold text-[12px] mt-1 ">
                          Lihat detail
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full text-center md:text-left">
                    <h1 className="font-extrabold text-white text-[18px] md:text-[24px]">
                      Mitra Kami
                    </h1>
                    <p className="font-medium text-[10px] md:text-[15px] text-white w-full mt-[20px] md:mt-[26px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamcoour partners Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud.
                    </p>

                    <div className="mt-[20px] md:mt-[22px] text-center md:text-left">
                      {valuesTrust.map((item: any, index: number) => (
                        <TrustIndicator key={index} dataTrust={item} />
                      ))}
                    </div>

                    <Button
                      variant="primaryBlueGr"
                      type="button"
                      className="mt-[20px] !text-[10px] md:!text-base md:mt-[20px]"
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