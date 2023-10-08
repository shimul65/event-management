import { BsCurrencyDollar } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, image, price, shortDescription } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='relative'>
                <figure><img src={image} alt="gallery photo" /></figure>
                <div className="absolute top-0 text-white bg-[#fcb41e] w-fit px-3 py-1 rounded-r-2xl flex items-center gap-1">
                    <p className="text-2xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                    <span className="text-2xl">{price}</span>
                </div>
            </div>
            <div className="card-body flex flex-col">
                <div className="flex-grow">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-[#a3a3a6] text-lg">{shortDescription}</p>
                </div>
                <Link to={`/services/${id}`}>
                    <button
                        className="btn w-full rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-black text-xs md:text-lg font-medium md:font-medium text-[#FFF]   border-none">DETAILS</button></Link>
            </div>
        </div>
    );
};

export default Service;
Service.propTypes = {
    service: PropTypes.object.isRequired
}