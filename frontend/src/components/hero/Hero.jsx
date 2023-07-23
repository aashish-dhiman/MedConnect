import heroImg01 from "../../assets/images/heroImg01.png";
import heroImg02 from "../../assets/images/heroImg02.png";
import heroImg03 from "../../assets/images/heroImg03.png";

const Hero = () => {
    return (
        <section className="hero__section 2xl:h-[800px]">
            <div className="container">
                <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] justify-between">
                    {/* ================= hero content ==================== */}
                    <div>
                        <div className="w-full text-center md:text-left lg:text-left">
                            <h1 className="text-[34px] leading-[40px] text-headingColor font-[800] md:text-[48px]  md:leading-[60px]">
                                We help patients live a healthy, longer life.
                            </h1>
                            <p className="text__para">
                                Embrace the future of healthcare with our doctor
                                online consultation, where expert advice meets
                                convenience for a healthier, happier you!
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
                                <p className=" text__para">Approved Clinics</p>
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
                    <div className="flex gap-[20px] flex-col w-full mt-5">
                        <div className="flex items-center justify-end">
                            <img
                                src={heroImg01}
                                alt="doctor picture"
                                className=" rounded-xl w-[80%] "
                            />
                        </div>
                        <div className="flex flex-row justify-start gap-[20px]">
                            <img
                                src={heroImg02}
                                alt="doctor picture"
                                className="rounded-xl w-[40%]"
                            />
                            <img
                                src={heroImg03}
                                alt="doctor picture"
                                className="rounded-xl w-[40%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
