import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();

    const service = services.find(service => service.id == id)
    const { name, image, price, shortDescription, fullDescription, availability, benefits } = service;


    return (
        <div className="flex flex-col mx-3 lg:mx-0 lg:flex-row bg-base-100 shadow-xl border my-16">
            <div className="flex-1">
                <figure><img className="" src={image} alt="service" /></figure>
            </div>

            <div className="card-body flex-1">
                <h2 className="card-title text-3xl">{name}</h2>
                <div className="">
                    <p className="my-2  text-xl">{shortDescription}</p>
                    <p className="text-lg">{fullDescription}</p>
                    <div className="text-xl flex items-center gap-3 my-2"><MdEventAvailable className="text-2xl"></MdEventAvailable>
                        <p className=""> Availability : {availability}</p>
                    </div>
                    <div className="text-xl flex gap-3 my-2"><PiArrowBendDoubleUpRightBold className="text-2xl"></PiArrowBendDoubleUpRightBold>
                        <p className=""> Benefits : {benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</p>
                    </div>
                    <div className="text-xl flex gap-3 my-2"><TbBrandBooking className="text-2xl mt-1"></TbBrandBooking>
                        <div className="flex items-center gap-2">
                            <p className=""> Book for :</p>
                            <div className="flex items-center gap-1 text-[#ff635c]"><p className="text-3xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                                <span className="text-3xl">{price}</span></div>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link>
                        <button
                            className="btn w-full rounded-full text-gray-600 bg-[#fcb41e] hover:bg-[#ff635c] hover:text-white text-xs md:text-lg font-medium md:font-medium  border-none">Book NOW</button></Link>
                    <Link to='/'>
                        <button
                            className="btn w-full rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-black text-xs md:text-lg font-medium md:font-medium text-[#FFF]   border-none">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;