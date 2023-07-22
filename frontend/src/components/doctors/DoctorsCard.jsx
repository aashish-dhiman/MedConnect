import PropTypes from "prop-types";
import starIcon from "../../assets/images/star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorsCard = (props) => {
    const {
        name,
        specialty,
        avgRating,
        totalRating,
        photo,
        totalPatients,
        hospital,
    } = props;
    return (
        <div className="p-3 md:p-6 lg:p-6">
            <div>
                <img src={photo} alt="doctor image" className="rounded-xl" />
            </div>
            <h2 className="text-[16px] md:text-[18px] leading-[30px] text-headingColor font-[700] mt-3">
                {name}
            </h2>
            <div className="mt-2 flex items-center justify-between">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 text-[12px] leading-4 rounded-md font-semibold ">
                    {specialty}
                </span>

                <div className="flex items-center gap-1.5 ">
                    <span className=" flex items-center gap-1.5 text-[14px] leading-6 text-headingColor font-[700]">
                        <img src={starIcon} alt="star" /> {avgRating}
                    </span>

                    <span className="text-[10px] font-[400] text-textColor">
                        ({totalRating})
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-between w-full">
                    <h3 className="text-[12px] leading-7 text-headingColor font-[500] ">
                        {totalPatients}+ patients
                    </h3>
                    <p className="text-[10px] text-textColor leading-6 font-[500]">
                        {hospital}
                    </p>
                </div>
            </div>
            <Link
                to="/doctors"
                className=" w-[30px] h-[30px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
            >
                <BsArrowRight className="group-hover:text-white w-6 group-hover:scale-[0.9] transition-all " />
            </Link>
        </div>
    );
};

DoctorsCard.propTypes = {
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    totalPatients: PropTypes.number.isRequired,
    hospital: PropTypes.string.isRequired,
};

export default DoctorsCard;
