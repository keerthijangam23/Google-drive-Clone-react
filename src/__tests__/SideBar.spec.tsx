import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import SideBar from "../componets/SideBar";
// import FolderContextCreate from "../Context/FolderContextCreate";
// import ModelActionContextCreate from "../Context/ModelActionContextCreate";
import { FoldersContext } from "../Context/FolderContextCreate";
import { ModelActionContext } from "../Context/ModelActionContextCreate";
// import { data } from "../Context/FolderContextCreate";
import { useContext, useState } from "react";
import { ModelActionContextData } from "../types/DashboardCommonTypes";

describe("testing the sidebar", () => {
  test("test the drive logo", () => {
    render(<SideBar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
  test("testing drive text", () => {
    render(<SideBar />);
    const drive = screen.getByText("Drive");
    expect(drive).toBeInTheDocument();
  });

  describe("Sidebar", () => {
    test("opens modal when button is clicked", () => {
    //   const { getByText, getByRole, getByTestId } = render(
    //     <FolderContextCreate>
    //       <ModelActionContextCreate>
    //         <SideBar />
    //       </ModelActionContextCreate>
    //     </FolderContextCreate>
    //   );
    //   const newButton = screen.getByText("New");
    //   fireEvent.click(newButton);
    //   expect(getByText("Create Folder")).toBeInTheDocument();
    //   expect(getByText("Create")).toBeInTheDocument();
    //   expect(getByTestId("cancel-button")).toBeInTheDocument();
    //   expect(getByRole("textbox")).toBeInTheDocument();

       

    const mockSetFoldersData = jest.fn();
    const foldersData = [
      { id: "1", name: "folder1" },
      { id: "2", name: "folder2" },
    ];
    const MockFoldersDataProvider = ({ children }: any) => (
      <FoldersContext.Provider
        value={{ folders: foldersData, setFolders: mockSetFoldersData }}
      >
        {children}
      </FoldersContext.Provider>
    );

    const mockModelAction = {
      action: "aa",
      folderId: "a",
      folderName: "a",
    };
    const mockSetModelAction = jest.fn();

    const MockModelActionProvider = ({ children }: any) => (
      <ModelActionContext.Provider
        value={{
          modelAction: mockModelAction,
          setModelAction: mockSetModelAction,
        }}
      >
        {children}
      </ModelActionContext.Provider>
    );

    const { getByText,getByTestId,getByRole } = render(
      <MockFoldersDataProvider>
        <MockModelActionProvider>
          <SideBar />
        </MockModelActionProvider>
      </MockFoldersDataProvider>
    );

   const newButton = screen.getByText("New");
      fireEvent.click(newButton);
      screen.debug();
      expect(getByText("Create Folder")).toBeInTheDocument();
      expect(getByText("Create")).toBeInTheDocument();
      expect(getByTestId("cancel-button")).toBeInTheDocument();
      expect(getByRole("textbox")).toBeInTheDocument();

    });
  });
});
