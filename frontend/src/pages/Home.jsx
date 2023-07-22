// import React from "react";
import heroImg01 from "../assets/images/heroImg01.png";
import heroImg02 from "../assets/images/heroImg02.png";
import heroImg03 from "../assets/images/heroImg03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import Card from "../components/modals/card";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Features from "../components/features/Features";
import Doctors from "../components/doctors/Doctors";

const Home = () => {
    const cardItem = [
        {
            img: icon01,
            heading: "Find a Doctor",
            content:
                "Unlock your path to optimal health - Connect with the perfect doctor and embark on a journey towards well-being and vitality.",
            linkTo: "/doctors",
        },
        {
            img: icon02,
            heading: "Find a Location",
            content:
                "Discover your perfect destination effortlessly - Find a location that matches your desires and creates unforgettable memories.",
            linkTo: "/doctors",
        },
        {
            img: icon03,
            heading: "Book Appointment",
            content:
                "Simplify scheduling - Book your appointment effortlessly and prioritize your health with ease at your comfort.",
            linkTo: "/doctors",
        },
    ];

    return (
        <>
            {/* ===================== hero section ==================== */}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col md:flex-row lg:flex-row gap-[70px] justify-between">
                        {/* ================= hero content ==================== */}
                        <div>
                            <div className="lg:w-[550px] md:w-[480px] sm:w-full text-center ">
                                <h1 className="text-[34px] leading-[40px] text-headingColor font-[800] md:text-[48px]  md:leading-[60px]">
                                    We help patients live a healthy, longer
                                    life.
                                </h1>
                                <p className="text__para">
                                    Embrace the future of healthcare with our
                                    doctor online consultation, where expert
                                    advice meets convenience for a healthier,
                                    happier you!
                                </p>

                                <button className="btn btn__hover sm:text-[20px] ">
                                    Book an Appointment
                                </button>
                            </div>

                            {/* ============ hero counter ========= */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:flex-row items-start gap-5 lg:gap-7 ml-[20px]">
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

            {/* ============== Cards components start ============== */}
            <section>
                <div className="container">
                    <div className=" md:w-[470px] mx-auto ">
                        <h2 className=" heading text-center ">
                            Providing the best medical services
                        </h2>
                        <p className="text__para text-center">
                            Connect with experienced doctors promptly, and
                            receive expert care from the comfort of your home,
                            ensuring your health is always in the best hands.
                        </p>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-7 mt-[30px] lg:mt-[50px] ">
                        {cardItem.map((item, index) => {
                            return <Card key={index} {...item} />;
                        })}
                    </div>
                </div>
            </section>
            {/* ================== cards components ends ============== */}

            {/* ============ About section start ================== */}
            <About />
            {/* ========== About Section Ends =========  */}

            {/* ================ Services section starts ============ */}
            <Services />
            {/* =============== Services section ends ================ */}

            {/* =============== Features Section Start============= */}
            <Features />

            {/* =============== Features Section Ends ============= */}

            {/* =============== Our Great Doctors ============ */}
            <Doctors />

            {/* ============= Our Great Doctor end ========= */}
        </>
    );
};

export default Home;
