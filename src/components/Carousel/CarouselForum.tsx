import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from 'react-slick'
import prevNextIcon from "../../assets/icons/Expand_left.svg";
import exampleProfil from "../../assets/images/pexels-chevanon-1108099.png";
import "../../index.css"
import reactionIcon from "../../assets/icons/happy_light.svg"
import commentIcon from "../../assets/icons/Chat.svg"

function CarouselForum() {
    const sliderRef = useRef<Slider>(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    const settings = {
        dots: true,
        //   appendDots: (dots: React.ReactNode) => (
        //     <div className="absolute bottom-6 w-full flex justify-center z-10">
        //       <ul className="flex gap-2">{dots}</ul>
        //     </div>
        //   ),
        //   customPaging: () => (
        //     <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></div>
        //   ),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true
    };

    return (
        <div className="slider-container w-full h-[500px] relative overflow-hidden">

            <Slider {...settings} ref={sliderRef} className="z-0">
                <div className="relative w-[100%] justify-center h-full grid grid-rows-2 space-y-5">
                    <div className="w-full row-span-1 flex space-x-6 justify-center">
                        <div className="w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]">
                            <div className="w-[90%] h-full flex items-start justify-start">
                                <div className="w-[30%]">
                                    <img src={exampleProfil} alt="Profile"className="w-[55px] h-[55px] rounded-full"/>
                                </div>
                                <div className="w-full h-full flex flex-col space-y-2">
                                    <h1 className="text-[10px] text-white">@Abdullah</h1>
                                    <div className="w-[90%] py-[10px] px-[12px] bg-white h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                                    <p className="text-[10px] text-[#001A4D] text-center capitalize ">Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <div className="flex space-x-2">
                                                <img src={reactionIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                            <div className="flex space-x-2">
                                                <img src={commentIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[12px] font-bold text-white me-7">Lihat Balasan</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]">
                            <div className="w-[90%] h-full flex items-start justify-start">
                                <div className="w-[30%]">
                                    <img src={exampleProfil} alt="Profile"className="w-[55px] h-[55px] rounded-full"/>
                                </div>
                                <div className="w-full h-full flex flex-col space-y-2">
                                    <h1 className="text-[10px] text-white">@Abdullah</h1>
                                    <div className="w-[90%] py-[10px] px-[12px] bg-white h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                                    <p className="text-[10px] text-[#001A4D] text-center capitalize ">Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <div className="flex space-x-2">
                                                <img src={reactionIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                            <div className="flex space-x-2">
                                                <img src={commentIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[12px] font-bold text-white me-7">Lihat Balasan</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full row-span-1 flex justify-center space-x-6">
                        <div className="w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]">
                            <div className="w-[90%] h-full flex items-start justify-start">
                                <div className="w-[30%]">
                                    <img src={exampleProfil} alt="Profile"className="w-[55px] h-[55px] rounded-full"/>
                                </div>
                                <div className="w-full h-full flex flex-col space-y-2">
                                    <h1 className="text-[10px] text-white">@Abdullah</h1>
                                    <div className="w-[90%] py-[10px] px-[12px] bg-white h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                                    <p className="text-[10px] text-[#001A4D] text-center capitalize ">Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <div className="flex space-x-2">
                                                <img src={reactionIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                            <div className="flex space-x-2">
                                                <img src={commentIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[12px] font-bold text-white me-7">Lihat Balasan</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]">
                            <div className="w-[90%] h-full flex items-start justify-start">
                                <div className="w-[30%]">
                                    <img src={exampleProfil} alt="Profile"className="w-[55px] h-[55px] rounded-full"/>
                                </div>
                                <div className="w-full h-full flex flex-col space-y-2">
                                    <h1 className="text-[10px] text-white">@Abdullah</h1>
                                    <div className="w-[90%] py-[10px] px-[12px] bg-white h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                                    <p className="text-[10px] text-[#001A4D] text-center capitalize ">Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <div className="flex space-x-2">
                                                <img src={reactionIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                            <div className="flex space-x-2">
                                                <img src={commentIcon} alt="reaction" className="w-[14px] h-[14px]" />
                                                <h1 className="text-[10px] text-white">2435</h1>
                                            </div>
                                        </div>
                                        <h1 className="text-[12px] font-bold text-white me-7">Lihat Balasan</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="w-full h-[500px] bg-blue-600 flex items-center justify-center text-white text-4xl">2</div>
            </Slider>
            <button
                className="absolute left-1/12 top-1/3 transform  z-10 bg-[#EDF9FC] p-2 rounded-full"
                onClick={previous}
            >
                <img src={prevNextIcon} alt="Previous" className="-rotate-180 w-8 h-8" />
            </button>
            <button
                className="absolute right-1/12 top-1/3 transform z-10 bg-[#EDF9FC] p-2 rounded-full"
                onClick={next}
            >
                <img src={prevNextIcon} alt="Next" className=" w-8 h-8" />
            </button>

        </div>
    );
}

export default CarouselForum;
