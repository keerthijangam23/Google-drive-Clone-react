import React from "react";
import "../css-styles/SideBar.css";
import ModelPopup from "./ModelPop";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext } from "react";

const SideBar = () => {
  const foldersContext = useContext(FoldersContext);

  const modelActionContext = useContext(ModelActionContext);

  const handleNewButtonClick = () => {
    modelActionContext.setModelAction({ action: "create", folderId: null });
  };

  const handleFolderCreation = (message) => {
    if (message !== "") {
      foldersContext.setFolders((prevFolders) => [
        ...prevFolders,
        { id: prevFolders.length + 1, name: message },
      ]);

      modelActionContext.setModelAction({ action: null, folderId: null });
    } else alert("Folder name can not be empty");
  };
  return (
    <>
      <div className="side">
        <img className="drive-image" src="./Images/drivePic.jpg" />
        <br />
        <button className="new-button" onClick={() => handleNewButtonClick()}>
          New
        </button>
      </div>
      {modelActionContext.modelAction.action === "create" && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return handleFolderCreation(name);
          }}
          handleClose={() => {
            modelActionContext.setModelAction({ action: null, folderId: null });
          }}
          val={{
            id: modelActionContext.modelAction.folderId,
            name: modelActionContext.modelAction.folderName,
          }}
        />
      )}
    </>
  );
};

export default SideBar;
