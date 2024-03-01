import React from "react";
import "../css-styles/SideBar.css";
import ModelPopup from "./ModelPop";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext} from "react";
import { v4 as uuid } from "uuid";

const SideBar = () => {
  const { folders, setFolders } = useContext(FoldersContext);

  const { modelAction, setModelAction } = useContext(ModelActionContext);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 3);
 

  const handleNewButtonClick = () => {
    setModelAction({ action: "create", folderId: null });
  };

  const handleFolderCreation = (id,message) => {
    if (message !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { id: small_id, name: message },
      ]);

      setModelAction({ action: null, folderId: null });
    } else alert("Folder name can not be empty");
  };
  return (
    <>
      <div className="side">
        <img className="drive-image" src="./Images/drivePic.jpg" />
        <button className="new-button" onClick={() => handleNewButtonClick()}>
          New
        </button>
      </div>
      {modelAction.action === "create" && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
             handleFolderCreation(id,name);
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null });
          }}
          id={modelAction.folderId}
          nameValue={modelAction.folderName}
        />
      )}
    </>
  );
};

export default SideBar;
