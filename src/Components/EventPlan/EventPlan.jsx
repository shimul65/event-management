import { AiOutlineDash } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsChatLeftText } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { LuPartyPopper } from "react-icons/Lu";

const EventPlan = () => {
    return (
        <div className="my-8 md:my-14">
            <h2 className=" text-3xl md:text-5xl font-extrabold text-center"><span className='text-[#fcb41e]'>Hello!</span> We Are an Event Planning Agency
            </h2>
            <div className="my-4 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p className="text-center">As the premier event planning company in the area, we know that it’s not “one size fits all”. <br /> Each event and client is unique and we believe our services should be as well. <br /> We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            <div className="grid grid-cols-1 md:grid-cols-7 mx-2 md:mx-52 my-14">
                <div className="flex flex-col items-center justify-center">
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
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <BsChatLeftText></BsChatLeftText>
                    </div>
                    <p className="my-4 text-center">
                        Connect with the best vendor
                    </p>
                    <p className="p-2 w-10 text-center text-white bg-[#fcb41e] rounded-full">2</p>
                </div>
                <div className="event-plan-footer mb-5 border-b-[3px]">
                </div>
                <div className="flex flex-col items-center justify-center">
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
                <div className="flex flex-col items-center justify-center">
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