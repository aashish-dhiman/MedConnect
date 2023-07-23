// import React from "react";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

// =========== Components ===============
import Hero from "../components/hero/Hero";
import Card from "../components/modals/card";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Features from "../components/features/Features";
import Doctors from "../components/doctors/Doctors";
import Faq from "../components/faq/Faq";
import Testimonial from "../components/testimonial/Testimonial";

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
            <Hero />
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

            {/* ======== Faq section start ======= */}
            <Faq />

            {/* ======== Faq section end ======= */}

            {/* ======== Testimonial section start ======= */}
            <Testimonial />

            {/* ======== Testimonial section end ======= */}
        </>
    );
};

export default Home;
