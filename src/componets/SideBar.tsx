import React from "react";
import "../css-styles/SideBar.css";
import ModelPopup from "./ModelPop";
import {
  FoldersContext,
  FoldersType,
  ModelActionContext,
  folderContextData,
  modelActionContext,
} from "./Dashboard";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { HandleSubmitType } from "./MainContent";

const SideBar: React.FC  = () => {
  const { folders, setFolders } = useContext<folderContextData>(FoldersContext);

  const { modelAction, setModelAction } = useContext<modelActionContext>(ModelActionContext);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 3);

  const handleNewButtonClick = () => {
    setModelAction({ action: "create", folderId: 0, folderName: '' });
  };

  const handleFolderCreation = (id: number, message: string) => {
    if (message !== "") {
      setFolders((prevFolders):FoldersType[] => [
        ...prevFolders,
        { id: Number(small_id), name: message },
      ]);

      setModelAction({ action: '', folderId: 0, folderName: '' });
    } else alert("Folder name can not be empty");
  };
  return (
    <>
      <div className="side">
        <div className="drive">
          <img className="drive-image" src="./Images/drivePic.jpg" />
          <h2>Drive</h2>
        </div>
        <div className="new-button">
          <Button
            onClick={() => handleNewButtonClick()}
            className="new-button"
            startIcon={<AddIcon className="add-icon" />}
          >
            New
          </Button>
        </div>
      </div>
      {modelAction.action === "create" && (
        <ModelPopup
          handleSubmit={({ id, name }:HandleSubmitType):void => {
            handleFolderCreation(id, name);
          }}
          handleClose={() => {
            setModelAction({ action: '', folderId: 0,folderName:'' });
          }}
          idValue={modelAction.folderId}
          nameValue={modelAction.folderName}
        />
      )}
    </>
  );
};

export default SideBar;
