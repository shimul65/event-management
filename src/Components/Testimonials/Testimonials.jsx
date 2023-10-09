import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";
import { AiOutlineDash } from "react-icons/ai";
import testimonial1 from '../../assets/testimonial1.jpg'
import testimonial2 from '../../assets/testimonial2.jpg'
import testimonial3 from '../../assets/testimonial3.jpg'
import testimonial4 from '../../assets/testimonial4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Testimonials = () => {

    useEffect(() => {
        AOS.init();
    }, [])

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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],
    };
    return (
        <div className="bg-[#f5f5f6] py-8 md:py-14">
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200" className=" text-3xl md:text-5xl font-extrabold text-center">Testimonials
            </h2>
            <div className="my-2 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p data-aos="zoom-in" data-aos-easing="linear"
                data-aos-duration="1200" className="text-center text-[#a3a3a6] text-sm">HAPPY CLIENTS ABOUT US</p>
            <div className="mt-10 mx-8 md:mx-12 lg:mx-20">
                <Slider className={`md:`} {...settings}>
                    <div className="border p-10 rounded-3xl bg-white">
                        <h3 className="text-xl text-center"> &quot;I invited these event planner to arrange a bachelor party for my best. &quot;</h3>
                        <div className="flex gap-3 justify-center items-center mt-6">
                            <img className="rounded-full w-12" src={testimonial1} alt="" />
                            <p className="text-[#a3a3a6] text-sm">LINDA MICHEL</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-3xl bg-white">
                        <h3 className="text-xl text-center"> &quot;Look no further! You are in the right place to plan your celebration. &quot;</h3>
                        <div className="flex gap-3 justify-center items-center mt-6">
                            <img className="rounded-full w-12" src={testimonial2} alt="" />
                            <p className="text-[#a3a3a6] text-sm">JESSICA MANN</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-3xl bg-white">
                        <h3 className="text-xl text-center"> &quot;My family and I are beyond happy to have them plan our wedding day. &quot;</h3>
                        <div className="flex gap-3 justify-center items-center mt-6">
                            <img className="rounded-full w-12" src={testimonial3} alt="" />
                            <p className="text-[#a3a3a6] text-sm">JANE SANDERS</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-3xl bg-white">
                        <h3 className="text-xl text-center"> &quot;Perfect decoration and perfect buffet for my little sister birthday party! &quot;</h3>
                        <div className="flex gap-3 justify-center items-center mt-6">
                            <img className="rounded-full w-12" src={testimonial4} alt="" />
                            <p className="text-[#a3a3a6] text-sm">JOHN SNOW</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    );
}

export default Testimonials;