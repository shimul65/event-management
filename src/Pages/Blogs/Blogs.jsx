import { AiOutlineCalendar } from "react-icons/ai";
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import img3 from '../../assets/banner3.jpg'
import img4 from '../../assets/banner4.jpg'

const Blogs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4  gap-5 px-2 mb-20 mt-14">
            {/* left side */}
            <div className="col-span-3 space-y-6">
                <div className='border px-5 py-6 rounded-lg'>
                    <h2 className='text-3xl font-bold md:w-3/4 mb-5'>Romantic Beachfront Wedding Ceremony</h2>
                    <img className='w-full rounded-lg' src={img1} alt="" />
                    <p className=" text-white bg-[#ff635c] w-fit px-4 py-2 rounded-xl flex my-4 items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Sep 24, 2023</span></p>
                    <p className='mb-6 text-justify'>Celebrate your love against the backdrop of a romantic beachfront wedding ceremony. Picture soft sands beneath your feet, palm trees swaying gently in the breeze, and the sun setting over the horizon as you exchange vows. The soothing sound of waves creates an ambiance of unparalleled romance. Whether its an intimate gathering or a grand seaside affair, a beachfront ceremony offers an unforgettable experience. Walk down a sandy aisle adorned with seashell decor to your beloved beneath a floral arch. Guests will revel in the natural beauty surrounding them as they witness your love story unfold against a breathtaking coastal panorama.
                    </p>
                    <button
                        className="btn px- py-0 rounded-2xl bg-[#fcb41e] hover:bg-[#ff635c] hover:text-primary-bg text-xs font-normal text-[#FFF] border-none">Read more</button>
                </div>
                <div className='border px-5 py-6 rounded-lg'>
                    <h2 className='text-3xl font-bold md:w-3/4 mb-5'>Grand Cathedral Wedding Ceremony</h2>
                    <img className='w-full rounded-lg' src={img2} alt="" />
                    <p className=" text-white bg-[#ff635c] w-fit px-4 py-2 rounded-xl flex my-4 items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>July 4, 2023</span></p>
                    <p className='mb-6 text-justify'>Embrace the charm of a rustic barn wedding ceremony, where natural beauty meets country elegance. Exchange vows amid weathered wood, soft fairy lights, and the aroma of fresh flowers. The barns rustic authenticity and refined sophistication blend seamlessly, creating a vintage-contemporary atmosphere. The space allows personalized decor, from reclaimed wood accents to mason jar centerpieces, infusing your personality into every detail.
                    </p>
                    <button
                        className="btn px- py-0 rounded-2xl bg-[#fcb41e] hover:bg-[#ff635c] hover:text-primary-bg text-xs font-normal text-[#FFF] border-none">Read more</button>
                </div>
                <div className='border px-5 py-6 rounded-lg'>
                    <h2 className='text-3xl font-bold md:w-3/4 mb-5'>Rustic Barn Wedding Ceremony</h2>
                    <img className='w-full rounded-lg' src={img3} alt="" />
                    <p className=" text-white bg-[#ff635c] w-fit px-4 py-2 rounded-xl flex my-4 items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Mar 14, 2023</span></p>
                    <p className='mb-6 text-justify'>Experience a cultural fusion wedding ceremony, where traditions from diverse backgrounds unite in celebration of love and unity. This ceremony weaves customs, rituals, and symbols from different cultures into a unique and memorable experience. Its an opportunity to honor heritage while creating new traditions that are uniquely yours, celebrating the beautiful tapestry of your love.
                    </p>
                    <button
                        className="btn px- py-0 rounded-2xl bg-[#fcb41e] hover:bg-[#ff635c] hover:text-primary-bg text-xs font-normal text-[#FFF] border-none">Read more</button>
                </div>
                <div className='border px-5 py-6 rounded-lg'>
                    <h2 className='text-3xl font-bold md:w-3/4 mb-5'>Cultural Fusion Wedding Ceremony</h2>
                    <img className='w-full rounded-lg' src={img4} alt="" />
                    <p className=" text-white bg-[#ff635c] w-fit px-4 py-2 rounded-xl flex my-4 items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2023</span></p>
                    <p className='mb-6 text-justify'>Enter the grandeur of a cathedral for a wedding ceremony embodying timeless elegance and significance. Soaring arches, stained glass, and awe-inspiring architecture create a sacred and regal atmosphere. Soft, ethereal light filters through stained glass, casting vibrant colors on your path down the aisle. Perfect for couples seeking grandeur and a profound connection to faith, this ceremony evokes centuries of tradition. Its a day of majestic romance etched in hearts forever.
                    </p>
                    <button
                        className="btn px- py-0 rounded-2xl bg-[#fcb41e] hover:bg-[#ff635c] hover:text-primary-bg text-xs font-normal text-[#FFF] border-none">Read more</button>
                </div>
            </div>

            {/* right side */}
            <div className="flex flex-col gap-5">
                <div className='border px-5 py-3 rounded-lg'>
                    <img className='w-full' src={img1} alt="" />
                    <h2 className='text-xl font-bold my-5 mb-5'>Romantic Beachfront Wedding Ceremony</h2>
                    <div className='flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-5'>
                        <p className="font-medium">Wedding</p>
                        <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Sep 24, 2023</span></p>
                    </div>
                </div>
                <div className='border px-5 py-3 rounded-lg'>
                    <img className='w-full' src={img2} alt="" />
                    <h2 className='text-xl font-bold my-5 mb-5'>Grand Cathedral Wedding Ceremony</h2>
                    <div className='flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-5'>
                        <p className="font-medium">Birthday Event</p>
                        <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>July 4, 2023</span></p>
                    </div>
                </div>
                <div className='border px-5 py-3 rounded-lg'>
                    <img className='w-full' src={img3} alt="" />
                    <h2 className='text-xl font-bold my-5 mb-5'>Rustic Barn Wedding Ceremony</h2>
                    <div className='flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-5'>
                        <p className="font-medium">Bridal Event</p>
                        <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Mar 14, 2023</span></p>
                    </div>
                </div>
                <div className='border px-5 py-3 rounded-lg'>
                    <img className='w-full' src={img4} alt="" />
                    <h2 className='text-xl font-bold my-5 mb-5'>Cultural Fusion Wedding Ceremony</h2>
                    <div className='flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-5'>
                        <p className="font-medium">Wedding</p>
                        <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;