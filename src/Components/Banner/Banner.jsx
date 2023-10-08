import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full relative rounded-lg my-5 ">
            {/* banner slider 1*/}
            <div id="slide1" className="carousel-item border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className=" text-3xl md:text-7xl font-extrabold text-center text-white"><span className='text-[#fcb41e]'>We Create</span>
                            <br />
                            You Celebrate
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">Planning a Wedding, Proposal or Event in your busy city is not so easy. <br />It takes skills and time to make it all easy-going</p>
                        <button
                            className="btn bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-xl font-medium md:font-extrabold text-[#FFF] w-[150px] md:h-16  border-none">CONTACT US</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4"
                            className="btn btn-circle bg-transparent text-[white] border-none hover:bg-neutral-500 hover:text-black">❮</a>
                        <a href="#slide2"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❯</a>
                    </div>
                </div>
            </div>
            {/* banner slider 2*/}
            <div id="slide2" className="carousel-item border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className=" text-3xl md:text-7xl font-extrabold text-center text-white"><span className='text-[#fcb41e]'>Let Us Help</span>
                            <br />
                            <span className='md:text-6xl text-2xl'>You Create</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">Planning a Wedding, Proposal or Event in your busy city is not so easy. <br />It takes skills and time to make it all easy-going</p>
                        <button
                            className="btn bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-xl font-medium md:font-extrabold text-[#FFF] w-[150px] md:h-16  border-none">CONTACT US</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❮</a>
                        <a href="#slide3"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❯</a>
                    </div>
                </div>
            </div>
            {/* banner slider 3 */}
            <div id="slide3" className="carousel-item border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner4})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center my-8 md:my-0 space-y-7 lg:mb-20">
                        <h2 className=" text-3xl md:text-7xl font-extrabold text-center text-white"><span className='text-[#fcb41e]'>From Set Up</span>
                            <br />
                            <span className='md:text-5xl text-2xl'>to</span><br />
                            <span className='md:text-6xl text-36xl'>Clean Up</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">Planning a Wedding, Proposal or Event in your busy city is not so easy. <br />It takes skills and time to make it all easy-going</p>
                        <button
                            className="btn bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-xl font-medium md:font-extrabold text-[#FFF] w-[150px] md:h-16  border-none">CONTACT US</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❮</a>
                        <a href="#slide4"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❯</a>
                    </div>
                </div>
            </div>
            {/* banner slider 4 */}
            <div id="slide4" className="carousel-item border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner3})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className=" text-3xl md:text-6xl font-extrabold text-center text-white"><span className='text-[#fcb41e]'>Your Happy Moment</span>
                            <br />
                            <span className='md:text-5xl text-3xl'>Our desire</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">Planning a Wedding, Proposal or Event in your busy city is not so easy. <br />It takes skills and time to make it all easy-going</p>
                        <button
                            className="btn bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-xl font-medium md:font-extrabold text-[#FFF] w-[150px] md:h-16  border-none">CONTACT US</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❮</a>
                        <a href="#slide1"
                            className="btn btn-circle bg-transparent text-white border-none hover:bg-neutral-500 hover:text-black">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;