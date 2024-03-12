import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import MainContent from "../componets/MainContent";

describe("testing MainContent component rendering ", () => {
  it("Renders the MainContent component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
    const initialFolders = screen.getByTestId("initialFolders");
    expect(initialFolders).toBeInTheDocument();
  });
});
