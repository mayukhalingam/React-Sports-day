import React from "react";
import "./EventCard.css"
import { getTiming } from "./utils";

const EventCard = (props) => {

    const {eventId, name, category, startTime, endTime, testid, isSelected, onClick } = props
    const timing = getTiming(startTime, endTime);
    
    return (
        <div className="cardContainer" title="eventCard" data-testid = {testid}>
            <div className="cardDetails">
                <div className="cardCategory">
                    {category[0]}
                </div>
                <div className="dividerLine"/>
                <div className="cardInfo">
                    <div className="cardInfoName">
                        {name}
                    </div>
                    <div className="cardInfoCategory">
                        {"(" + category + ")"}
                    </div>
                    <div className="cardInfoTiming">
                        {timing}
                    </div>
                    <button className="cardButton" onClick={() => onClick(eventId, timing)} style = {{backgroundColor: isSelected? "red" : "green"}}> 
                        {
                            isSelected ? "Remove" : "Select"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventCard;