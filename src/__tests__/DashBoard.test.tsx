import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "../componets/Dashboard";

describe("testing MainContent component rendering ", () => {
    it("Renders the MainContent component", () => {
      const { getByTestId } = render(
        <BrowserRouter>
         <Dashboard/>
        </BrowserRouter>
      );
      const initialFolders = screen.getByTestId("initialFolders");
      const logo = screen.getByTestId("logo");
      expect(logo).toBeInTheDocument();
      expect(initialFolders).toBeInTheDocument();
      // fireEvent.click(button);
    });
  });