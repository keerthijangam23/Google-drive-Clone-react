import React from "react";
import "../css-styles/FolderActionPopUp.css";
import { ModelActionContext } from "./Dashboard.tsx";
import { useContext } from "react";

export type FolderActionPopUpProps = {
  isOpen: boolean;
  handleDeleteFolder: (folderId: number | string | null) => void;
  handleRenameFolder: (
    folderId: number | string | null,
    folderName: string | null
  ) => void;
  handleCancel: () => void;
  handleOpenFolder: (
    folderId: number | string | null,
    folderName: string | null
  ) => void;
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
