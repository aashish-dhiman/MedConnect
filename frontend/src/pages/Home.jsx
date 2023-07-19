import React from "react";
import heroImg01 from "../assets/images/heroImg01.png";
import heroImg02 from "../assets/images/heroImg02.png";
import heroImg03 from "../assets/images/heroImg03.png";

const Home = () => {
    return (
        <>
            {/* ===================== hero section ==================== */}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col md:flex-row lg:flex-row gap-[70px] justify-between">
                        {/* ================= hero content ==================== */}
                        <div>
                            <div className="lg:w-[550px] md:w-[420px] sm:w-[380px] ">
                                <h1 className="text-[34px] leading-[40px] text-headingColor font-[800] md:text-[50px]  md:leading-[60px]">
                                    We help patients live a healthy, longer
                                    life.
                                </h1>
                                <p className="text__para">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero similique delectus
                                    assumenda officia, voluptatem aperiam
                                    asperiores dicta, fuga corrupti accusamus
                                    doloribus.
                                </p>

                                <button className="btn btn__hover sm:text-[20px] ">
                                    Book an Appointment
                                </button>
                            </div>

                            {/* ============ hero counter ========= */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:flex-row items-start gap-5 lg:gap-7">
                                <div>
                                    <h2 className=" text-[30px] leading-10 lg:text-[40px] font-[700] text-headingColor ">
                                        30+
                                    </h2>
                                    <span className="bg-yellowColor h-2 w-[100px] rounded-full block -mt-[14px] -mb-[8px]"></span>
                                    <p className=" text__para">
                                        Years of Experience
                                    </p>
                                </div>
                                <div>
                                    <h2 className=" text-[30px] leading-10 lg:text-[40px] font-[700] text-headingColor ">
                                        20+
                                    </h2>
                                    <span className="bg-purpleColor h-2 w-[80px] rounded-full block -mt-[14px] -mb-[8px]"></span>
                                    <p className=" text__para">
                                        Approved Clinics
                                    </p>
                                </div>
                                <div>
                                    <h2 className=" text-[30px] leading-10 lg:text-[40px] font-[700] text-headingColor ">
                                        100%
                                    </h2>
                                    <span className="bg-irisBlueColor h-2 w-[160px] rounded-full block -mt-[14px] -mb-[8px]"></span>
                                    <p className=" text__para">
                                        Customer Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ============= hero images ============ */}
                        <div className="flex gap-[30px] justify-end ">
                            <div>
                                <img
                                    src={heroImg01}
                                    alt="doctor picture"
                                    className=" rounded-xl "
                                />
                            </div>
                            <div className="mt-[30px]">
                                <img
                                    src={heroImg02}
                                    alt="doctor picture"
                                    className="rounded-xl mb-[30px]"
                                />
                                <img
                                    src={heroImg03}
                                    alt="doctor picture"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===================== hero section end==================== */}
        </>
    );
};

export default Home;
