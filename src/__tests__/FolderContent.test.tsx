import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("full app rendering/navigating", async () => {
  render(<App />);

  const folderPopUPButton = screen.getAllByTestId("folder-pop-up");
  fireEvent.click(folderPopUPButton[0]);
  const openButton = screen.getByText("Open");
  fireEvent.click(openButton);
  const files = screen.getAllByTestId("files");
  const file = files[0];
  expect(file).toBeInTheDocument();
});
