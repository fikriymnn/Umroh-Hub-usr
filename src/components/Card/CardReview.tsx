import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardReview = ({ ulasan = [], variant = 'carousel' }: any) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="bg-white rounded-lg shadow w-[1125px] h-[408px] mx-auto p-6 mt-[30px]">

            {variant === 'list' ? (
                <div className="flex flex-col gap-6 mb-5">
                    <h2 className="text-[24px] md:text-2xl font-semibold mb-6">Ulasan Jemaah</h2>
                    {ulasan.map((item: any, i: number) => (
                        <div key={i} className="p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                                <div>
                                    <p className="font-semibold">{item.nama}</p>
                                    <p className="text-sm text-gray-500">{item.kota}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{item.komentar}</p>
                            <div className="flex gap-2 flex-wrap">
                                {item.foto.map((_: any, idx: number) => (
                                    <div key={idx} className="w-[82px] h-[59px] bg-gray-300 rounded" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="relative mt-[50px]">
                    <h2 className="text-xl md:text-2xl font-semibold ml-[85px] mb-6">Ulasan Jemaah</h2>
                    <Carousel
                        responsive={responsive}
                        arrows
                        showDots
                        infinite
                        containerClass="relative"
                        itemClass="flex justify-center"
                        customLeftArrow={
                            <button className="absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10 text-gray-600 text-2xl">
                                &lt;
                            </button>
                        }
                        customRightArrow={
                            <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10 text-gray-600 text-2xl">
                                &gt;
                            </button>
                        }
                        dotListClass="flex justify-center mt-6"
                    >
                        {ulasan.map((item: any, i: number) => (
                            <div key={i} className="w-full max-w-[400px]">
                                <div className="p-4 rounded-lg w-full bg-white">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                                        <div>
                                            <p className="font-semibold">{item.nama}</p>
                                            <p className="text-sm text-gray-500">{item.kota}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-3">{item.komentar}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {item.foto.map((_: any, idx: number) => (
                                            <div key={idx} className="w-[82px] h-[59px] bg-gray-300 rounded" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default CardReview;
