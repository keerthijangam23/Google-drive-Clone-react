import React from "react";
import "../css-styles/FolderActionPopUp.css";

const FolderActionPopUp = ({
  handleDeleteFolder,
  folderId,
  folderName,
  handleRenameFolder,
  handleCancel,
  handleOpenFolder,
  trigger,
}) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="open"
          onClick={() => {
            handleOpenFolder(folderId, folderName);
          }}
        >
          Open
        </div>
        <div
          className="del"
          onClick={() => {
            handleDeleteFolder(folderId);
          }}
        >
          Delete
        </div>
        <div
          className="rename"
          onClick={() => {
            handleRenameFolder(folderId, folderName);
          }}
        >
          Rename
        </div>
        <div className="cancel" onClick={() => handleCancel()}>
          Cancel
        </div>
      </div>
    </div>
  ) : null;
};

export default FolderActionPopUp;
