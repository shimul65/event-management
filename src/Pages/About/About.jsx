import EventPlan from "../../Components/EventPlan/EventPlan";
import "../../Components/Testimonials/slick.css";
import "../../Components/Testimonials/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineDash } from "react-icons/ai";
import stuff1 from '../../assets/stuff1.jpg'
import stuff2 from '../../assets/stuff2.jpg'
import stuff3 from '../../assets/stuff3.jpg'
import stuff4 from '../../assets/stuff4.jpg'
import stuff5 from '../../assets/stuff5.jpg'


const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Adjust this value as needed
                settings: {
                    slidesToShow: 2, // Number of slides to show at this breakpoint
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Adjust this value as needed
                settings: {
                    slidesToShow: 2, // Number of slides to show at this breakpoint
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Adjust this value as needed
                settings: {
                    slidesToShow: 1, // Number of slides to show at this breakpoint
                    slidesToScroll: 1,
                },
            },
            // Add more breakpoints and settings as needed
        ],
    };
    return (
        <>
            <div>
                <EventPlan></EventPlan>
            </div >
            <div className="bg-[#f5f5f6] py-8 md:py-14">
                <h2 className=" text-3xl md:text-5xl font-extrabold text-center">Our Staff
                </h2>
                <div className="my-2 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
                <p className="text-center text-[#a3a3a6] text-sm">MEET OUR BEST TEAM</p>
                <div className="mt-10 mx-8 md:mx-12 lg:mx-20">
                    <Slider className={`md:`} {...settings}>
                        <div className=" p-10 rounded-3xl ">

                            <div className="flex flex-col gap-3 justify-center items-center mt-6">
                                <img className="rounded-full w-full" src={stuff1} alt="" />
                                <p className="mt-4">MARK ANDERSON</p>
                                <p className="text-[#a3a3a6] text-lg">Director</p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl">

                            <div className="flex flex-col gap-3 justify-center items-center mt-6">
                                <img className="rounded-full w-full" src={stuff2} alt="" />
                                <p className="mt-4">JENIFER LOPEZ</p>
                                <p className="text-[#a3a3a6] text-lg">Artist</p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl">

                            <div className="flex flex-col gap-3 justify-center items-center mt-6">
                                <img className="rounded-full w-full" src={stuff3} alt="" />
                                <p className="mt-4">ADAM SMITH</p>
                                <p className="text-[#a3a3a6] text-lg">Manager</p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl">

                            <div className="flex flex-col gap-3 justify-center items-center mt-6">
                                <img className="rounded-full w-full" src={stuff4} alt="" />
                                <p className="mt-4">ALICIA KEYS</p>
                                <p className="text-[#a3a3a6] text-lg">Planner</p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl">

                            <div className="flex flex-col gap-3 justify-center items-center mt-6">
                                <img className="rounded-full w-full" src={stuff5} alt="" />
                                <p className="mt-4">TAILOR SWIFT</p>
                                <p className="text-[#a3a3a6] text-lg">Host</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </>
    );
};

export default About;