import React from "react";
import "../css-styles/FolderActionPopUp.css";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext } from "react";

const FolderActionPopUp = ({
  handleDeleteFolder,
  handleRenameFolder,
  handleCancel,
  handleOpenFolder,
  trigger,
}) => {
  const modelActionContext = useContext(ModelActionContext);
  const folderId = modelActionContext.modelAction.folderId;
  const folderName = modelActionContext.modelAction.folderName;

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
