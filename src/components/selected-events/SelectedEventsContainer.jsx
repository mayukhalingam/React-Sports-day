import React, { useContext } from "react";
import { EventContext } from "../../EventContext";
import EventCard from "../eventcard/EventCard";
import "./SelectedEventsContainer.css"

const SelectedEventsContainer = () => {
  const {eventsList, setEventList, selectedEventsList, setSelectedEventsList} = useContext(EventContext);

  const onRemove = (id) =>{
    const new_event = selectedEventsList.filter((event) => {
      return event.id === id;
    })
    setSelectedEventsList(
      selectedEventsList.filter((event) => {
        return event.id !== id;
      })
    )
    setEventList(
      [...eventsList,
      new_event[0]]
    )
  };

    return (
        <div className="selectedContainer">
          <div className="selectedTitle"> Selected Events </div>
          <div className="selectedEvents">
            {selectedEventsList.length !== 0 ? 
              selectedEventsList.map((event, id) => {
                return (
                  <EventCard 
                  key={id} 
                  eventId = {event.id} 
                  name={event.event_name} 
                  category={event.event_category} 
                  startTime={event.start_time} 
                  endTime={event.end_time}
                  isSelected = {true} 
                  onClick={onRemove}/>
                );
              })
              : <div className="NoEventText"> No event Selected! </div>
            }
          </div> 
        </div>
    );
}

export default SelectedEventsContainer;