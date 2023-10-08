import { useLoaderData } from "react-router-dom";
import { AiOutlineDash } from "react-icons/ai";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="py-8 md:py-14 px-2 md:px-4 lg:px-0">
            <h2 className=" text-3xl md:text-5xl font-extrabold text-center">Our Elegant Wedding Planning <span className='text-[#fcb41e]'>Services.</span>
            </h2>
            <div className="my-2 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p className="text-center text-[#a3a3a6] text-sm">EXPERTISE, CREATIVITY, AND ATTENTION TO DETAIL FOR YOUR DREAM DAY.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    services.map(service => <Service key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;