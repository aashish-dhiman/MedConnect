import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = (props) => {
    const { name, desc } = props;
    return (
        <div className="py-[10px] px-3">
            <h2 className="text-[24px] leading-9 text-headingColor font-[700] ">
                {name}
            </h2>
            <p className="text-[14px] leading-7 font-[400] text-textColor mt-3 h-[120px]">
                {desc}
            </p>

            <div className="">
                <Link
                    to="/doctors"
                    className=" w-[30px] h-[30px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                    <BsArrowRight className="group-hover:text-white w-6 group-hover:scale-[0.9] transition-all " />
                </Link>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

export default ServicesCard;
