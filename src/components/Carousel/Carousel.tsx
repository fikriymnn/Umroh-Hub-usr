import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from 'react-slick'
import prevNextIcon from "../../assets/icons/Expand_left.svg";
import umrohcarousel from "../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png";
import "../../index.css"

function CarouselHome() {
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
        appendDots: (dots: React.ReactNode) => (
            <div className="absolute bottom-6 w-full flex justify-center z-10">
                <ul className="flex gap-2">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return (
        <div className="slider-container w-full h-[500px] relative overflow-visible">

            <Slider {...settings} ref={sliderRef} className="z-0">
                <div className="relative w-full h-full">
                    <img src={umrohcarousel} alt="Slide 1" className="w-full h-full object-cover" />
                    <h1 className="absolute inset-0 font-philosopher flex items-center justify-center text-white text-4xl font-bold text-center">
                        Solusi Untuk <br /> Umroh
                    </h1>
                </div>
                <div className="w-full h-[500px] bg-blue-600 flex items-center justify-center text-white text-4xl">2</div>
                <div className="w-full h-[500px] bg-green-600 flex items-center justify-center text-white text-4xl">3</div>
                <div className="w-full h-[500px] bg-red-600 flex items-center justify-center text-white text-4xl">4</div>
                <div className="w-full h-[500px] bg-yellow-600 flex items-center justify-center text-white text-4xl">5</div>
                <div className="w-full h-[500px] bg-purple-600 flex items-center justify-center text-white text-4xl">6</div>
            </Slider>
            <button
                className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full"
                onClick={previous}
            >
                <img src={prevNextIcon} alt="Previous" className="-rotate-180 w-8 h-8" />
            </button>
            <button
                className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full"
                onClick={next}
            >
                <img src={prevNextIcon} alt="Next" className=" w-8 h-8" />
            </button>

        </div>
    );
}

export default CarouselHome;
