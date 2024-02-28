import React from "react";
import "./FolderClickpop.css";

const FolderClickpop = ({
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
        <br />
        <div
          className="del"
          onClick={() => {
            handleDeleteFolder(folderId);
          }}
        >
          Delete
        </div>
        <br />
        <div
          className="rename"
          onClick={() => {
             handleRenameFolder(folderId,folderName)
            // handleSubmit(folderId,folderName);
          }}
        >
          Rename
        </div>
        <br />
        <div className="cancel" onClick={() => handleCancel()}>
          Cancel
        </div>
        <br />
      </div>
    </div>
  ) : null;
};

export default FolderClickpop;
