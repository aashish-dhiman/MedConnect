import faqImg from "../../assets/images/faq-img.png";
import { faqs } from "../../assets/data/faqs";
import FaqCards from "./FaqCards";

const Faq = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between">
                    <div className=" w-[30%] hidden md:block lg:block my-auto">
                        <img
                            src={faqImg}
                            alt="faq image"
                            className="rounded-xl"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <h3 className="heading text-[36px] ">
                            Most questions asked by our patients
                        </h3>
                        <ul className="mt-[30px]">
                            {faqs.map((item, index) => {
                                return <FaqCards key={index} {...item} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
