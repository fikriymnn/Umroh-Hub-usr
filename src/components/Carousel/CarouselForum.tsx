/* eslint-disable react-hooks/rules-of-hooks */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import prevNextIcon from "../../assets/icons/Expand_left.svg";
import exampleProfil from "../../assets/images/pexels-chevanon-1108099.png";
import "../../index.css";
import reactionIcon from "../../assets/icons/happy_light.svg";
import commentIcon from "../../assets/icons/Chat.svg";

function CarouselForum() {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const chats = [
    { id: 1, username: "@Abdullah", text: "Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" },
    { id: 2, username: "@Aisyah", text: "MasyaAllah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" },
    { id: 3, username: "@Rahman", text: "Keren Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" },
    { id: 4, username: "@Fatimah", text: "Suka Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" },
    { id: 5, username: "@Ali", text: "Terima kasih umrohub, you are the best" },
    { id: 6, username: "@Siti", text: "Mantap! terus berkebmbang umrohub ya aamiin ya Allah" },
  ];

  const forumChat = [];
  for (let i = 0; i < chats.length; i += 4) {
    forumChat.push(chats.slice(i, i + 4));
  }

  return (
    <div className="slider-container w-full h-[500px] relative overflow-hidden">
      <Slider {...settings} ref={sliderRef} className="z-0">
        {forumChat.map((chatForum, i) => (
          <div
            key={i}
            className="relative w-[100%] justify-center h-full grid grid-rows-2 space-y-5"
          >
            <div className="w-full row-span-1 flex space-x-6 justify-center">
              {chatForum.slice(0, 2).map((cht) => (
                <div
                  key={cht.id}
                  className="w-[40%] md:w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]"
                >
                  <div className="w-[90%] h-full flex items-start justify-start">
                    <div className="w-[30%]">
                      <img
                        src={exampleProfil}
                        alt="Profile"
                        className="w-[30px] h-[30px] md:w-[55px] md:h-[55px] rounded-full"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col space-y-2">
                      <h1 className="text-[8px] md:text-[10px] text-white">{cht.username}</h1>
                      <div className="w-[90%] py-[10px] px-[12px] bg-white h-[50%] md:h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                        <p className="text-[8px] line-clamp-3 md:line-clamp-4 md:text-[10px] text-[#001A4D] text-center capitalize">
                          {cht.text}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex md:space-x-4 space-x-2">
                          <div className="flex space-x-1 md:space-x-2">
                            <img src={reactionIcon} alt="reaction" className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" />
                            <h1 className="text-[8px] md:text-[10px] text-white">2435</h1>
                          </div>
                          <div className="flex space-x-1 md:space-x-2">
                            <img src={commentIcon} alt="comment" className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" />
                            <h1 className="text-[8px] md:text-[10px] text-white">2435</h1>
                          </div>
                        </div>
                        <h1 className="text-[8px] md:text-[12px] font-bold text-white ms-3 md:ms-3">Lihat Balasan</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full row-span-1 flex justify-center space-x-6">
              {chatForum.slice(2, 4).map((cht) => (
                <div
                  key={cht.id}
                  className="w-[40%] md:w-[35%] h-[170px] rounded-[8px] flex flex-col justify-center py-6 items-center bg-gradient-to-r from-[#001A4D] to-[#5AD3FF]"
                >
                  <div className="w-[90%] h-full flex items-start justify-start">
                    <div className="w-[30%]">
                      <img
                        src={exampleProfil}
                        alt="Profile"
                        className="w-[30px] h-[30px] md:w-[55px] md:h-[55px] rounded-full"
                      />
                    </div>
                    <div className="w-full h-full flex flex-col space-y-2">
                      <h1 className="text-[8px] md:text-[10px] text-white">{cht.username}</h1>
                      <div className="w-[90%] py-[10px] px-[12px] bg-white h-[75%] rounded-e-[20px] rounded-bl-[20px]">
                        <p className="text-[8px] line-clamp-3 md:line-clamp-4 md:text-[10px] text-[#001A4D] text-center capitalize">
                          {cht.text}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex md:space-x-4 space-x-2">
                          <div className="flex space-x-1 md:space-x-2">
                            <img src={reactionIcon} alt="reaction" className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" />
                            <h1 className="text-[8px] md:text-[10px] text-white">2435</h1>
                          </div>
                          <div className="flex space-x-1 md:space-x-2">
                            <img src={commentIcon} alt="comment" className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" />
                            <h1 className="text-[8px] md:text-[10px] text-white">2435</h1>
                          </div>
                        </div>
                        <h1 className="text-[8px] md:text-[12px] font-bold text-white ms-3 md:ms-3">Lihat Balasan</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
