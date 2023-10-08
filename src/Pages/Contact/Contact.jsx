import { AiOutlineDash } from "react-icons/ai";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { BsTelephone, BsCheckSquare } from "react-icons/bs";


const Contact = () => {
    return (
        <div className="my-8 md:my-20">
            <h2 className=" px-10 md:px-0 text-3xl md:text-5xl font-extrabold text-center">Contact With Us
            </h2>
            <div className="mt-4 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <div className="grid grid-cols-1 gap-6 lg:gap-0 md:gap-10 md:grid-cols-3 lg:grid-cols-7 mx-2 md:mx-14 lg:mx-24 my-14">
                <div className="flex py-10 border rounded-full shadow-2xl flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <CiLocationOn></CiLocationOn>
                    </div>
                    <p className="mt-6 text-center">
                        Postal Address
                    </p>
                    <p className="my-4 text-center text-[#a3a3a6]">Unica Event Agency <br />
                        85 Fentiman Ave <br />
                        Ottawa, ON K1S 0T7</p>
                </div>
                <div className="event-plan-footer my-8 md:my-0 md:mb-[50%] border-b-[3px]">
                </div>
                <div className="flex py-10 rounded-full shadow-2xl border flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <BsTelephone></BsTelephone>
                    </div>
                    <p className="mt-6 text-center">
                        Phone & E-mail
                    </p>
                    <p className="my-4 text-center text-[#a3a3a6]">Phone: 1-800-64-38 <br />
                        Fax: 1-800-64-39 <br />
                        office@fable.com</p>
                </div>
                <div className="event-plan-footer block md:hidden lg:block my-8 md:my-0 md:mb-[50%]  border-b-[3px]">
                </div>
                <div className="flex rounded-full shadow-2xl py-10 border flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <CiTimer></CiTimer>
                    </div>
                    <p className="mt-6 text-center">
                        Open Hours
                    </p>
                    <p className="my-4 text-center text-[#a3a3a6]">Monday – Friday <br />
                        8.00 am – 5.00 pm <br />
                        Weekend Closed</p>
                </div>
                <div className="event-plan-footer my-8 md:my-0 md:mb-[50%]  border-b-[3px]">
                </div>
                <div className="flex px-1 rounded-full shadow-2xl py-10 border flex-col items-center justify-center">
                    <div className="text-5xl text-[#ff635c]">
                        <BsCheckSquare></BsCheckSquare>
                    </div>
                    <p className="mt-6 text-center">
                        Sessions
                    </p>
                    <p className="my-4 text-center text-[#a3a3a6]">Mornings, 8 am – 12 pm <br />
                        Afternoons, 1 pm – 5 pm <br />
                        Full Day, 8 am – 5 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;