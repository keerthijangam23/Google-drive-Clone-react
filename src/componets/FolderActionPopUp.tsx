import React from "react";
import "../css-styles/FolderActionPopUp.css";
import { ModelActionContext } from "../Context/ModelActionContextDataFile";
import { useContext } from "react";
import { ModelActionContextData} from "../types/DashboardCommonTypes";

export type FolderActionPopUpProps = {
  isOpen: boolean;
  handleDeleteFolder: (folderId: string) => void;
  handleRenameFolder: (folderId: string, folderName: string) => void;
  handleCancel: () => void;
  handleOpenFolder: (folderId: string, folderName: string) => void;
};
const FolderActionPopUp = ({
  isOpen,
  handleDeleteFolder,
  handleRenameFolder,
  handleCancel,
  handleOpenFolder,
}: FolderActionPopUpProps) => {
  const { modelAction } = useContext<ModelActionContextData>(ModelActionContext);
  

  const folderId:string = modelAction.folderId;

  const folderName:string = modelAction.folderName;
  return isOpen ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="open"
          data-testid = "open"
          onClick={() => {
            handleOpenFolder(folderId, folderName);
          }}
        >
          Open
        </div>
        <div
          className="del"
          data-testid="del"
          onClick={() => {
            handleDeleteFolder(folderId);
          }}
        >
          Delete
        </div>
        <div
          className="rename"
          data-testid="rename"
          onClick={() => {
            handleRenameFolder(folderId, folderName);
          }}
        >
          Rename
        </div>
        <div className="cancel" data-testid="cancel" onClick={() => handleCancel()}>
          Cancel
        </div>
      </div>
    </div>
  ) : null;
};

export default FolderActionPopUp;
