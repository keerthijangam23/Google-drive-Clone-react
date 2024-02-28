import React from "react";
import "./sidebar.css";
import ModelPopup from "./ModelPop";

const Sidebar = ({ setFolders, setModelAction, modelAction }) => {

  const handleNewButtonClick = () => {
    setModelAction({ action: "create", folderId: null });
  };

  const handleFolderCreation = (message) => {
    if (message !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { id: prevFolders.length + 1, name: message },
      ]);

      setModelAction({ action: null, folderId: null });
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
      {modelAction.action ==="create" && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return (
              handleFolderCreation(name)
            );
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null });
          }}
          val={{ id: modelAction.folderId, name: modelAction.folderName }}
        />
      )}
    </>
  );
};

export default Sidebar;
