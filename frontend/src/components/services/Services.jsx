import ServicesCard from "./ServicesCard";
import { services } from "./../../assets/data/services";
const Services = () => {
    return (
        <section>
            <div className="container">
                <div className="mx-auto w-[80%] md:w-1/2 lg:w-1/2 text-center">
                    <h2 className="heading text-center ">
                        Our Medical Services
                    </h2>
                    <p className="text__para">
                        Expert Care for Your Health Needs. Your well-being is
                        our priority, with personalized solutions and
                        compassionate support.
                    </p>
                </div>
                {/* ========= Cards Components ====== */}
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-[30px] lg:gap-[34px] mt-[30px] ">
                    {services.map((item, index) => (
                        <ServicesCard {...item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
