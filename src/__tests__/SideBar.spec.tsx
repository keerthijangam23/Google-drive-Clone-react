import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "../componets/SideBar";
import { FoldersContext } from "../Context/FolderContextCreate";
import { ModelActionContext } from "../Context/ModelActionContextCreate";

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
      action: "create",
      folderId: "",
      folderName: "",
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

    test("testing is model POP up opening or not and checking create button click", () => {
      const { getByText, getByTestId, getByRole } = render(
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <SideBar />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      );
      const newBtn = getByText("New");
      fireEvent.click(newBtn);

      const createBtn = getByText("Create");
      fireEvent.click(createBtn);
      expect(mockSetModelAction).toHaveBeenCalled();
    });
    test("testing whether alert coming or not when folder name is empty", () => {
      const { getByText, getByTestId, getByRole } = render(
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <SideBar />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      );
      const newBtn = getByText("New");
      fireEvent.click(newBtn);

      const folderInput = getByTestId("folder-input");
      fireEvent.change(folderInput, { target: { value: "" } });
      const alertMock = jest.spyOn(window, "alert");
      const createBtn = getByText("Create");
      fireEvent.click(createBtn);
      expect(alertMock).toHaveBeenCalledTimes(1);
    });
    test("testing is model POP up opening or not and checking cancel button click", () => {
      const { getByText, getByTestId, getByRole } = render(
        <MockFoldersDataProvider>
          <MockModelActionProvider>
            <SideBar />
          </MockModelActionProvider>
        </MockFoldersDataProvider>
      );
      const newBtn = getByText("New");
      fireEvent.click(newBtn);

      const cancelBtn = getByTestId("cancel-button");
      fireEvent.click(cancelBtn);
      expect(mockSetModelAction).toHaveBeenCalled();
    });
  });
});
