import { useEffect, useState } from 'react';
import { FetchEventData } from './api/FetchEventData';
import './App.css';
import AllEventsContainer from './components/all-events/AllEventsContainer';
import SelectedEventsContainer from './components/selected-events/SelectedEventsContainer';
import {EventContext} from './EventContext';

function App() {
  
  const [eventsList, setEventList] = useState([]);
  const [selectedEventsList, setSelectedEventsList] = useState([]);
  const [error, setError] = useState(false);

  // Fetchin events data
  useEffect(() => {
    FetchEventData()
    .then( (data) => {
      setEventList(data);
      setSelectedEventsList([]);
    })
    .catch(() => {
      setError(true)
    })
  },[]);
  
  return (
    <div className="App">
      <div className="eventsPage">
        { error ? (
          <div className='errorMessage'> Error encountered while fetching data </div>
        )
        : (
          <EventContext.Provider value={{eventsList, setEventList, selectedEventsList, setSelectedEventsList}}>
            <AllEventsContainer/>
            <SelectedEventsContainer/>
          </EventContext.Provider>
        )}
      </div>
    </div>
  );
}

export default App;
