import Banner from "../../Components/Banner/Banner";
import EventPlan from "../../Components/EventPlan/EventPlan";
import GallerySection from "../../Components/GallerySection/GallerySection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <EventPlan></EventPlan>
            <Services></Services>
            <GallerySection></GallerySection>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;