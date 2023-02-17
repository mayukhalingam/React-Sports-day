import { render, screen} from '@testing-library/react';
import { EventContext } from '../../../EventContext';
import { mock_data_selected} from '../../../mocks/MockEventData';
import SelectedEventsContainer from '../SelectedEventsContainer';

describe("SelectedEventsContainer", () => {
    it("Should render the selected events cards", () => {
        const selectedEventsList = mock_data_selected;

        render(
            <EventContext.Provider value={{selectedEventsList}}>
                <SelectedEventsContainer/>
            </EventContext.Provider>
        );

        expect(screen.getAllByTitle("eventCard")).toHaveLength(2);
        
    })

    it("Should render no selected events message", () => {
        const selectedEventsList = [];

        render(
            <EventContext.Provider value={{selectedEventsList}}>
                <SelectedEventsContainer/>
            </EventContext.Provider>
        );

        expect(screen.getByText("No event Selected!")).toBeTruthy();
        
    })
})