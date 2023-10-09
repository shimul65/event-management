import axios from "axios";
import { useContext, useState } from "react";
import GalleryPhoto from "./GalleryPhoto";
import { AiOutlineDash } from "react-icons/ai";
import {  Link,  useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const GallerySection = () => {
    const {user} = useContext(AuthContext);
    const [photos, setPhotos] = useState([]);

    const location = useLocation();

    axios.get('galleryData.json')
        .then(data => setPhotos(data.data))

    return (
        <div className="py-8 md:py-14">
            <h2 className=" text-3xl md:text-5xl font-extrabold text-center">Gallery
            </h2>
            <div className="my-2 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p className="text-center text-[#a3a3a6] text-sm">OUR RECENT PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    photos.slice(0, 4).map(singlePhoto => <GalleryPhoto key={singlePhoto.id}
                        singlePhoto={singlePhoto}
                    ></GalleryPhoto>)
                }
            </div>
            <div className="flex justify-center items-center gap-6 mt-10">
                <h2 className=" px-10 md:px-0 text-2xl md:text-4xl font-extrabold text-center">See Our <span className='text-[#fcb41e]'>Best Wedding Events</span>  Gallery !
                </h2>
                <Link state={location.pathname}  to={user ? `/gallery` : `/login`}>
                    <button
                        className="btn px-8 rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-base font-semibold text-[#FFF] md:h-16  border-none">VISIT GALLERY</button>
                </Link>
            </div>
        </div>
    );
};

export default GallerySection;