import { useState } from "react";
import React from "react";
import "../css-styles/ModelPop.css";
import { HandleSubmitType } from "./MainContent";

type ModelPopupProps = {
  handleSubmit: ({id , name}:HandleSubmitType) => void;
  handleClose: () => void;
  idValue: number ;
  nameValue: string ;
};
const ModelPopup= ({
  handleSubmit,
  handleClose,
  idValue,
  nameValue,
}: ModelPopupProps) => {
  let name = nameValue ? nameValue : "Untitled folder";
  const [folderName, setFolderName] = useState(name);
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{nameValue ? "Rename" : "Create"}</h2>

        <input
          className="folder-input"
          type="text"
          onChange={(event) => {
            setFolderName(event.target.value);
          }}
          placeholder={folderName}
        />
        <div className="folder-buttons-container">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="create-button"
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
