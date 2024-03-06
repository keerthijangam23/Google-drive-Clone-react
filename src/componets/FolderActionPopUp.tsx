import React from "react";
import "../css-styles/FolderActionPopUp.css";
import { ModelActionContext } from "./Dashboard";
import { useContext } from "react";

export type FolderActionPopUpProps = {
  isOpen: boolean;
  handleDeleteFolder: (folderId: number) => void;
  handleRenameFolder: (folderId: number, folderName: string) => void;
  handleCancel: () => void;
  handleOpenFolder: (folderId: number, folderName: string) => void;
};
const FolderActionPopUp = ({
  isOpen,
  handleDeleteFolder,
  handleRenameFolder,
  handleCancel,
  handleOpenFolder,
}: FolderActionPopUpProps) => {
  const { modelAction } = useContext(ModelActionContext);

  const folderId = modelAction.folderId;

  const folderName = modelAction.folderName;

  return isOpen ? (
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
