import React from "react";
import "./HotelsTemplateElements.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const HotelsTemplateElements = (props) => {
    const {pathname} = useLocation()
    const countryName = pathname.split('/')[pathname.split("/").length - 1]
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/countries/${countryName}/${props.id}`, { state: { id: props.id } });
    };

    return (
        <div onClick={handleClick} className="ref2">
            <div>
                <div className="TurkeyHtlsBlock" id="firstTurkeyHtlBlock">
                    <div className="DivForHotelImg">
                        <img className="GeneralImgName" src={require(`../../../../Assets/${props.hotelLogo}`)} alt='' />
                    </div>
                    <div className="DivForDescriptions">
                        <div href="#" className="RefForHotelName">
                            <p className="ParForHotelName">{props.hotelName}</p>
                        </div>
                        <p className="ParForCategory">{props.hotelCategory}</p>
                        <p className="ParForRegion">{props.resortName}</p>
                    </div>
                    <div className="DivForIcons">
                        <div data-tooltip="Спокійний відпочинок" className="PopupDescription">
                            <div className="DivForHolidayType" id="DivForImgTranquility">
                                <img className="holidayTypeIcon" id="firstTypeIcon" src={require(`../../../../Assets/${props.sprite}`)} alt='' />
                            </div>
                        </div>
                        <div data-tooltip="Молодіжний відпочинок" className="PopupDescription">
                            <div className="DivForHolidayType" id="DivForImgYouth">
                                <img className="holidayTypeIcon" id="secondTypeIcon" src={require(`../../../../Assets/${props.sprite}`)} alt='' />
                            </div>
                        </div>
                        <div data-tooltip="Сімейний відпочинок" className="PopupDescription">
                            <div className="DivForHolidayType" id="DivForImgFamily">
                                <img className="holidayTypeIcon" id="thirdTypeIcon" src={require(`../../../../Assets/${props.sprite}`)} alt='' />
                            </div>
                        </div>
                        <div data-tooltip="Пляжний відпочинок" className="PopupDescription">
                            <div className="DivForHolidayType" id="DivForImgBeach">
                                <img className="holidayTypeIcon" id="fourthTypeIcon" src={require(`../../../../Assets/${props.sprite}`)} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsTemplateElements;