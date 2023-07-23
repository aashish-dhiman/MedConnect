/* eslint-disable react/no-unescaped-entities */
import TestimonialSwiper from "./TestimonialSwiper";

const Testimonial = () => {
    return (
        <section>
            <div className="container">
                <div className="w-[80%] mx-auto text-center">
                    <h2 className="heading">What Patients Say About Us</h2>
                    <p className="text__para text-center">
                        At MedConnect, we take pride in providing exceptional
                        online doctor consultation services to our patients. Our
                        patients speak highly of the exceptional care they
                        receive through our online consultations. Discover what
                        makes our service special by hearing directly from those
                        we' ve helped.
                    </p>
                </div>
                {/* swiper component */}
                <TestimonialSwiper />
            </div>
        </section>
    );
};

export default Testimonial;
