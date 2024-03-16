import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainContent from "../componets/MainContent";
import { FoldersContext } from "../Context/FolderContextCreate";
import { ModelActionContext } from "../Context/ModelActionContextCreate";

describe("testing MainContent component rendering ", () => {
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
    action: "",
    folderId: "1",
    folderName: "folder1",
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
  test("Renders the MainContent component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
    const initialFolders = screen.getByTestId("initialFolders");
    expect(initialFolders).toBeInTheDocument();
  });
  test("test for vertical dots click event ,checking model pop up appearing or not", async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    );

    const folderPopUPButton = screen.getAllByTestId("folder-pop-up");
    fireEvent.click(folderPopUPButton[1]);
    expect(getByText("Rename")).toBeInTheDocument();
    expect(getByText("Delete")).toBeInTheDocument();
    expect(getByText("Open")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
  });
  test("testing Rename text click working ot not", async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
    
      const renameBtn = getByText("Rename");
      fireEvent.click(renameBtn);
      expect(mockSetFoldersData).toHaveBeenCalled();
    
  });
  
  test("testing Delete text click working ot not", async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
    
      const deleteBtn = getByText("Delete");
      fireEvent.click(deleteBtn);
      expect(mockSetFoldersData).toHaveBeenCalled();
      expect(mockSetModelAction).toHaveBeenCalled();
    
  });
  test("testing cancel text click working or not", async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
    
      const cancelBtn = getByText("Cancel");
      fireEvent.click(cancelBtn);
      expect(mockSetModelAction).toHaveBeenCalled();
    
  });
  test("testing Open text click working ot not", async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
    
      const openBtn = getByText("Open");
      fireEvent.click(openBtn);
      expect(mockSetModelAction).toHaveBeenCalled();

    
  });
  
  test("testing whether alert coming or not when I give folder name empty in case of rename", async () => {
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
    action: "rename",
    folderId: "1",
    folderName: "folder1",
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
    const { getByText, getByRole,getByTestId } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
   
    
      const renameBtn = getByTestId("rename");
      fireEvent.click(renameBtn);
      const alertMock = jest.spyOn(window,'alert');
      const folderInput = getByTestId("folder-input");
      fireEvent.change(folderInput, { target: { value: "" } });
      const renameModelBtn = getByText("Rename");
      fireEvent.click(renameModelBtn);
      expect(alertMock).toHaveBeenCalledTimes(1)
     
    
  });
  test("testing whether cancel button working or not in modelpop up", async () => {
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
    action: "rename",
    folderId: "1",
    folderName: "folder1",
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
    const { getByText, getByRole,getByTestId } = render(
      <BrowserRouter>
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <MainContent />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      </BrowserRouter>
    ); 
   
    
      const renameBtn = getByTestId("rename");
      fireEvent.click(renameBtn);
      screen.debug();
      const folderInput = getByTestId("folder-input");
      fireEvent.change(folderInput, { target: { value: "" } });
      const cancelModelBtn = getByText("Cancel");
      fireEvent.click(cancelModelBtn);
      expect(mockSetModelAction).toHaveBeenCalled();
    
  });

});
