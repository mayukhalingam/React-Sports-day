import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {mock_data} from './mocks/MockEventData';
import * as api from './api/FetchEventData';

jest.mock("./api/FetchEventData");

describe('App', () => {
  beforeEach(() => jest.clearAllMocks);

  it('Render the data when API call is successful', async () => {
    api.FetchEventData.mockResolvedValue(mock_data);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Butterfly 100M")).toBeInTheDocument();
    })
  });

  it('Should render error message when API call fails', async () => {
    api.FetchEventData.mockRejectedValue({});
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Error encountered while fetching data")).toBeInTheDocument();
    })
  });
});
