import { useLoaderData } from "react-router-dom";
import GalleryPhoto from "../../Components/GallerySection/GalleryPhoto";
import { AiOutlineDash } from "react-icons/ai";



const Gallery = () => {
    const galleryPhotos = useLoaderData();

    return (
        <div className="py-8 md:py-14 px-2 md:px-4 lg:px-0">
            <h2 className=" text-3xl md:text-5xl font-extrabold text-center">Gallery
            </h2>
            <div className="my-2 text-[#fcb41e] flex justify-center text-5xl"><AiOutlineDash></AiOutlineDash></div>
            <p className="text-center text-[#a3a3a6] text-sm">OUR RECENT PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    galleryPhotos.map(singlePhoto => <GalleryPhoto key={singlePhoto.id}
                        singlePhoto={singlePhoto}
                    ></GalleryPhoto>)
                }
            </div>
        </div>
    );
};

export default Gallery;