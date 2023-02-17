import React, { useContext } from "react";
import { EventContext } from "../../EventContext";
import EventCard from "../eventcard/EventCard";
import { checkOverlap } from "../eventcard/utils";
import "./AllEventsContainer.css";
 

const AllEventsContainer = () => {

  const {eventsList, setEventList, selectedEventsList, setSelectedEventsList} = useContext(EventContext);

  const onSelect = (id, timing) =>{
    // Max 3 events can be selected
    if (selectedEventsList.length <= 2 ){
      const selectedEvent = eventsList.filter((event) => {
        return event.id === id;
      })

      //check for overlapp
      const overlappEvent  = selectedEventsList.filter((event) => {
        return checkOverlap(event, timing);
      })

      if(overlappEvent.length === 0){
        setSelectedEventsList(
          [...selectedEventsList, selectedEvent[0]]
        )
        setEventList(
          eventsList.filter((event) => {
            return event.id !== id;
          })
        )
      }
      else{
        alert("This event clashes with previously selected event : \n" + overlappEvent[0].event_name + "\n\nPlease select another event.");
      }
    }
    else{
      alert("You can select maximum of only 3 events!");
    }
  };

    return (
        <div className='allEventsConatiner'>
          <div className="Title"> All Events </div>
          <div className="allEvents">
            {eventsList.length > 0 ?
              eventsList.map((event, id) => {
                return (
                  <EventCard 
                  key={id}
                  eventId = {event.id}
                  testid = {"event-card-"+id} 
                  name={event.event_name} 
                  category={event.event_category} 
                  startTime={event.start_time} 
                  endTime={event.end_time} 
                  isSelected = {false}
                  onClick={onSelect}/>
                );
              })
              :
                (<div className="noEvents"> No events to show </div>)
            }
          </div> 
        </div>
    );
}

export default AllEventsContainer;