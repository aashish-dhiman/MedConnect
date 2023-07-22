import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center md:justify-between lg:justify-between gap-[50px] md:gap-[80px] lg:gap-[100px] flex-col md:flex-row lg:flex-row items-center ">
                    {/* ========= About Img =============== */}
                    <div className=" relative w-[50%] md:w-1/3 lg:w-1/3 z-10 order-2 md:order-1 lg:order-1 ">
                        <img
                            src={aboutImg}
                            alt="about image"
                            className="rounded-xl"
                        />
                        <div className="absolute w-[70%] bottom-[0] -right-[40%] z-20  ">
                            <img
                                src={aboutCardImg}
                                alt="about card"
                                className="rounded-xl"
                            />
                        </div>
                    </div>

                    {/* =========== About Content ========== */}
                    <div className="order-1 md:order-1 lg:order-1 w-[80%] md:w-1/2 lg:w-[1/2] flex flex-col justify-center text-center md:text-start lg:text-start items-center md:items-start lg:items-start">
                        <h2 className="heading ">Meet Our Chief Doctor</h2>
                        <p className="text__para">
                            Leading with expertise and compassion, our Chief
                            Head Doctor brings 20+ years of experience to ensure
                            your well-being. <br />
                            Trust in their care for a healthier tomorrow.
                        </p>
                        <Link to="/">
                            <button className="btn btn__hover">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
