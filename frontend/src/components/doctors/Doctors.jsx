import doctors from "../../assets/data/doctors";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
    return (
        <section>
            <div className="container">
                <div className="mx-auto md:w-[470px] text-center">
                    <h2 className="heading ">Our Great Doctors</h2>
                    <p className="text__para">
                        Providing Exceptional Care and Expertise. Meet our
                        dedicated team of skilled doctors, committed to your
                        well-being and delivering top-notch medical services.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-[30px]  ">
                {doctors.map((item) => {
                    return <DoctorsCard key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
};

export default Doctors;
