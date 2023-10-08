import Banner from "../../Components/Banner/Banner";
import EventPlan from "../../Components/EventPlan/EventPlan";
import GallerySection from "../../Components/GallerySection/GallerySection";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <EventPlan></EventPlan>
            <GallerySection></GallerySection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;