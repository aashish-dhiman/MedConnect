import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className=" py-[30px] px-5 ">
            <div className="flex items-center justify-center">
                <img src={props.img} alt="icon" />
            </div>

            <div className="mt-[30px]">
                <h2 className=" text-[26px] leading-7 text-headingColor font-[700] text-center ">
                    {props.heading}
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                    {props.content}
                </p>

                <Link
                    to={props.linkTo}
                    className=" w-[30px] h-[30px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                    <BsArrowRight className="group-hover:text-white w-6 group-hover:scale-[0.9] transition-all " />
                </Link>
            </div>
        </div>
    );
};

// Define the prop types for the Card component
Card.propTypes = {
    img: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
};

export default Card;
