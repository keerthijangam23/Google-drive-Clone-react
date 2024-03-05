import { useState} from "react";
import React from "react";
import "../css-styles/ModelPop.css";
export default function ModelPopup({
  handleSubmit,
  handleClose,
  id,
  nameValue,
}) {
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
              handleSubmit({ id: id,name: folderName });
            }}
          >
            {nameValue ? "Rename" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
