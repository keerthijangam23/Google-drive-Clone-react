import { useState } from "react";
import "../css-styles/ModelPop.css";
export default function ModelPopup({ handleSubmit, handleClose, val }) {
  let name = val.name ? val.name : "Untitled folder";
  const [folderName, setFolderName] = useState(name);
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{val.name ? "Rename" : "Create"}</h2>
        <br />
        <input
          className="folder-input"
          type="text"
          onChange={(event) => {
            setFolderName(event.target.value);
          }}
          value={folderName}
        />
        <div className="folder-buttons-container">
          <button className="cancel-button" onClick={() => handleClose()}>
            Cancel
          </button>
          <button
            className="create-button"
            onClick={(e) => {
              handleSubmit({ id: val.id, name: folderName });
            }}
          >
            {val.name ? "Rename" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
