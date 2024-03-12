import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "../componets/SideBar";
import FolderContextCreate from "../Context/FolderContextCreate";
import ModelActionContextCreate from "../Context/ModelActionContextCreate";

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
      const { getByText} = render(
        <FolderContextCreate>
          <ModelActionContextCreate>
            <SideBar />
          </ModelActionContextCreate>
        </FolderContextCreate>
      );
      fireEvent.click(getByText("New"));
      expect(getByText("Cancel")).toBeInTheDocument();
    });
  });
});
