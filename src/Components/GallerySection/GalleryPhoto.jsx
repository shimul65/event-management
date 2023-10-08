import { LuPartyPopper } from "react-icons/Lu";
import { AiOutlineCalendar } from "react-icons/ai";
import PropTypes from 'prop-types';

const GalleryPhoto = ({ singlePhoto }) => {
    const { img, partyDate, partyTitle } = singlePhoto;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="gallery photo" /></figure>
            <div className="card-body">
                <div className="flex items-center gap-3">
                    <div className="text-2xl text-[#ff635c]"><LuPartyPopper></LuPartyPopper></div>
                    <h2 className="card-title">{partyTitle}</h2>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-2xl">
                        <AiOutlineCalendar></AiOutlineCalendar>
                    </div>
                    <p className="text-[#a3a3a6] text-sm">{partyDate}</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryPhoto;
GalleryPhoto.propTypes = {
    singlePhoto: PropTypes.object.isRequired
}