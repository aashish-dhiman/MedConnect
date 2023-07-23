import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqCards = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const { question, content } = props;
    return (
        <div
            className="p-3 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer "
            onClick={toggleAccordion}
        >
            <div className="flex items-center justify-between gap-5">
                <h4 className=" text-[14px] leading-7 md:text-[16px] text-headingColor ">
                    {question}
                </h4>
                <div
                    className={` ${
                        isOpen &&
                        "bg-primaryColor text-white border-none hover:text-headingColor hover:border hover:bg-white hover:border-solid hover:border-[#141F21]"
                    } w-7 h-7 border border-solid border-[#141F21] rounded-full flex items-center justify-center btn__hover  hover:text-white transition-all`}
                >
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            {isOpen && (
                <div className="text__para text-[14px] leading-6 mt-1 ">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

FaqCards.propTypes = {
    question: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default FaqCards;
