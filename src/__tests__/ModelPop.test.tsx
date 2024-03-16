import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import ModelPopup from "../componets/ModelPop";

describe("ModelPOpup testing", () => {
  test("checking whether model Pop up  is rendering or not", () => {
    const handleSubmit = jest.fn();
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <ModelPopup
        idValue={"1"}
        nameValue={"folder1"}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
    );
    const folderInput = getByTestId("folder-input");
    expect(folderInput).toBeInTheDocument();

    fireEvent.change(folderInput, { target: { value: "folder12" } });
    expect(screen.getByTestId("folder-input")).toHaveValue("folder12");

    const cancelButton = getByTestId("cancel-button");
    fireEvent.click(cancelButton);
    expect(handleClose).toHaveBeenCalled();

    const createButton = getByTestId("create-button");
    fireEvent.click(createButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
