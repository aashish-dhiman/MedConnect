import { Link } from "react-router-dom";
import featureImg from "../../assets/images/feature-img.png";
import videoIcon from "../../assets/images/video-icon.png";
import avatarIcon from "../../assets/images/avatar-icon.png";

const Features = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-center justify-center">
                    <div className="w-[80%] md:w-1/2 lg:w-1/2 text-left">
                        <h2 className="heading">
                            Get virtual treatment anytime.
                        </h2>
                        <ul>
                            <li className="text__para">
                                1. Schedule the appointment directly.
                            </li>
                            <li className="text__para">
                                2. Search for your physician here, and contact
                                their office.
                            </li>
                            <li className="text__para">
                                3. View our physicians who are accepting new
                                patients, <br />
                                use the online scheduling tool to select an
                                appointment time.
                            </li>
                        </ul>
                        <Link to="/home">
                            <button className="btn btn__hover ">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* ===== feature img ===== */}
                    <div className="flex justify-end relative z-10 mt-[50px]">
                        <img
                            src={featureImg}
                            alt="doctor image"
                            className="w-3/4 rounded-xl"
                        />

                        <div className=" w-[130px] absolute bg-white rounded-[10px] flex flex-col bottom-10 left-5 z-20 p-2 pb-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-[4px] items-center justify-between">
                                    <p className=" text-[10px] leading-[10px] text-headingColor font-[600] ">
                                        Tue, 20
                                    </p>
                                    <p className=" text-[10px] leading-[10px] text-textColor font-[400]">
                                        11:00 AM
                                    </p>
                                </div>
                                <span className="bg-yellowColor w-5 h-5 flex items-center justify-center rounded px-1">
                                    <img src={videoIcon} alt="video icon" />
                                </span>
                            </div>

                            <div className="flex items-center justify-start mt-1 text-[8px] rounded-full bg-[#CCF0F3] py-1 px-2 leading-[8px] text-irisBlueColor font-[500] w-fit ">
                                Consultation
                            </div>

                            <div className="flex mt-2 items-center justify-center gap-2">
                                <img src={avatarIcon} alt="avatar" className="w-8 h-8"/>
                                <h4 className="text-[12px] leading-3 font-[700] ">
                                    Dr. Sharma
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
