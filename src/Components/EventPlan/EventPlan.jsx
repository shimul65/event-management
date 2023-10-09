import { AiOutlineDash } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsChatLeftText } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { LuPartyPopper } from "react-icons/Lu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const EventPlan = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="my-8 md:my-14">
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className=" px-10 md:px-0 text-3xl md:text-5xl font-extrabold text-center"><span className='text-[#fcb41e]'>Hello!</span> We Are a Wedding Event Planning Agency
            </h2>
            <div className="my-4 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p data-aos="zoom-in" data-aos-easing="linear"
                data-aos-duration="1500" className="text-center px-16 md:px-0">As the premier event planning company in the area, we know that it’s not “one size fits all”. <br /> Each event and client is unique and we believe our services should be as well. <br /> We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            <div className="grid grid-cols-1 gap-6 lg:gap-0 md:gap-10 md:grid-cols-3 lg:grid-cols-7 mx-2  md:mx-28 lg:mx-52 my-14">
                <div data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="flex flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <HiOutlineHomeModern></HiOutlineHomeModern>
                    </div>
                    <p className="my-4 text-center">
                        Find the perfect venue for free
                    </p>
                    <p className="p-2 w-10 text-center text-white bg-[#fcb41e] rounded-full">1</p>
                </div>
                <div className="event-plan-footer mb-5 border-b-[3px]">
                </div>
                <div data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="flex flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <BsChatLeftText></BsChatLeftText>
                    </div>
                    <p className="my-4 text-center">
                        Connect with the best vendor
                    </p>
                    <p className="p-2 w-10 text-center text-white bg-[#fcb41e] rounded-full">2</p>
                </div>
                <div className="event-plan-footer block md:hidden lg:block mb-5 border-b-[3px]">
                </div>
                <div data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="flex flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <SlNote></SlNote>
                    </div>
                    <p className="my-4 text-center">
                        Let us help you with the event
                    </p>
                    <p className="p-2 w-10 text-center text-white bg-[#fcb41e] rounded-full">3</p>
                </div>
                <div className="event-plan-footer mb-5 border-b-[3px]">
                </div>
                <div data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="flex flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <LuPartyPopper></LuPartyPopper>
                    </div>
                    <p className="my-4 text-center">
                        Enjoy the party with your friends
                    </p>
                    <p className="p-2 w-10 text-center text-white bg-[#fcb41e] rounded-full">4</p>
                </div>
            </div>
        </div>
    );
};

export default EventPlan;