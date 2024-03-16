import { render, screen, fireEvent } from "@testing-library/react";
import FolderActionPopUp from "../componets/FolderActionPopUp";

describe("Testing the popup it appears when we click on vertical dots of each folder", () => {
  test("testing for Open text", () => {
    const handleDeleteFolder = jest.fn();
    const handleRenameFolder = jest.fn();
    const handleCancel = jest.fn();
    const handleOpenFolder = jest.fn();
    render(
      <FolderActionPopUp
        isOpen={true}
        handleDeleteFolder={handleDeleteFolder}
        handleRenameFolder={handleRenameFolder}
        handleCancel={handleCancel}
        handleOpenFolder={handleOpenFolder}
      />
    );

    const openButton = screen.getByTestId("open");
    fireEvent.click(openButton);
    expect(handleOpenFolder).toHaveBeenCalled();

    const renameButton = screen.getByTestId("rename");
    fireEvent.click(renameButton);
    expect(handleRenameFolder).toHaveBeenCalled();

    const delteButton = screen.getByTestId("del");
    fireEvent.click(delteButton);
    expect(handleDeleteFolder).toHaveBeenCalled();

    const cancelButton = screen.getByTestId("cancel");
    fireEvent.click(cancelButton);
    expect(handleCancel).toHaveBeenCalled();
  });
});
