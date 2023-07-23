/* eslint-disable react/prop-types */
import { testimonials } from "../../assets/data/testimonial";
import { HiStar } from "react-icons/hi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSwiper = () => {
    return (
        <div className="mt-[38px]">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonials.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className=" py-[30px] px-[40px] rounded-xl shadow-md hover:shadow-xl h-[300px] mb-10 ">
                                <div className="flex items-center gap-[13px]">
                                    <img
                                        src={item.img}
                                        alt="patient"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-[15px] leading-[30px] font-semibold  text-headingColor">
                                            {item.name}
                                        </h4>
                                        <div className="flex items-center gap-[2px] ">
                                            <HiStar className="text-yellowColor w-[18px] h-5 " />
                                            <HiStar className="text-yellowColor w-[18px] h-5 " />
                                            <HiStar className="text-yellowColor w-[18px] h-5 " />
                                            <HiStar className="text-yellowColor w-[18px] h-5 " />
                                            <HiStar className="text-yellowColor w-[18px] h-5 " />
                                        </div>
                                    </div>
                                </div>
                                <p className=" text-[14px] text-textColor font-[400] my-4 leading-5">
                                    {item.feedback}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default TestimonialSwiper;
