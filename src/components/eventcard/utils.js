// import React from "react";

export const getTiming = (startTime, endTime) => {

    const start = startTime.split(" ")[1].slice(0, 5);
    const end = endTime.split(" ")[1].slice(0, 5);

    return start + "-" + end 
    
}

export const checkOverlap = (event, timing) => {
    
    const eventTiming = getTiming(event.start_time, event.end_time);
    const [start1, end1] = eventTiming.split("-");
    const [start2, end2] = timing.split("-");

    if ( end1 < start2 || end2 < start1 ){
        return false
    }

    return true

}