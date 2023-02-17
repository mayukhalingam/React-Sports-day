import { render, screen } from '@testing-library/react';
import { EventContext } from '../../../EventContext';
import {mock_data} from '../../../mocks/MockEventData';
import AllEventsContainer from '../AllEventsContainer';

describe("AllEventsContainer", () => {
    
    it("Should render all the events cards", () => {
        const eventsList = mock_data;

        render(
            <EventContext.Provider value={{eventsList}}>
                <AllEventsContainer/>
            </EventContext.Provider>
        );

        expect(screen.getAllByTitle("eventCard")).toHaveLength(10);
        
    })

    it("Should render no events message", () => {
        const eventsList = [];

        render(
            <EventContext.Provider value={{eventsList}}>
                <AllEventsContainer/>
            </EventContext.Provider>
        );

        expect(screen.getByText("No events to show")).toBeTruthy();
        
    })

    // it("Should not render the selected item", async () => {
    //     const eventsList = mock_data;

    //     render(
    //         <EventContext.Provider value={{eventsList}}>
    //             <AllEventsContainer/>
    //         </EventContext.Provider>
    //     );

    //     expect(screen.getByTestId("event-card-2")).toBeTruthy();

    //     fireEvent.click(screen.getByTestId("event-card-2"))


    //     await waitFor(() => {
    //         expect(screen.queryByTestId("event-card-2")).not.toBeTruthy()
    //     });
        
    // })
})