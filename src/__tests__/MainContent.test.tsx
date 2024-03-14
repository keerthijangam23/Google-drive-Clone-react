import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import MainContent from "../componets/MainContent";
import FolderContextCreate, { data } from "../Context/FolderContextCreate";
import ModelActionContextCreate from "../Context/ModelActionContextCreate";
import FolderContent from "../componets/FolderContent";


describe("testing MainContent component rendering ", () => {
  test("Renders the MainContent component", () => {
    const { getByText, } = render(
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
    const initialFolders = screen.getByTestId("initialFolders");
    expect(initialFolders).toBeInTheDocument();
  });
  test("test for vertical dots click event ,checking model pop up appearing or not", async () => {
    const { getByText,getByRole} = render(
      <BrowserRouter>
        <FolderContextCreate>
          <ModelActionContextCreate>
            <MainContent />
           </ModelActionContextCreate>
        </FolderContextCreate>
       </BrowserRouter>
    );

    const folderPopUPButton = screen.getAllByTestId("folder-pop-up");
    fireEvent.click(folderPopUPButton[1]);
    const renameText = screen.getByText("Rename");
    expect(renameText).toBeInTheDocument();
    fireEvent.click(renameText);
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Rename")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
  });
  
 
});
