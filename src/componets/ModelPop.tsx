import { useState } from "react";
import React from "react";
import "../css-styles/ModelPop.css";
import { HandleSubmit } from "./MainContent";

type ModelPopupProps = {
  idValue: string;
  nameValue: string;
  handleSubmit: ({ id, name }: HandleSubmit) => void;
  handleClose: () => void;
};
const ModelPopup = ({
  idValue,
  nameValue,
  handleSubmit,
  handleClose,
}: ModelPopupProps) => {
  let name:string = nameValue ? nameValue : "Untitled folder";
  const [folderName, setFolderName] = useState<string>(name);
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{nameValue ? "Rename Folder" : "Create Folder"}</h2>

        <input
          className="folder-input"
          data-testid = "folder-input"
          type="text"
          onChange={(event) => {
            setFolderName(event.target.value);
          }}
          value={folderName}
        />
        <div className="folder-buttons-container">
          <button className="cancel-button" data-testid="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="create-button"
            data-testid="create-button"
            onClick={() => {
              handleSubmit({ id: idValue, name: folderName });
            }}
          >
            {nameValue ? "Rename" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModelPopup;
