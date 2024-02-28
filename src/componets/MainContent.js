import { useState, useEffect } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ModelPopup from "./ModelPop";
import FolderActionPopUp from "./FolderActionPopUp";
import "../css-styles/MainContent.css";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext } from "react";

export default function MainContent() {
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(true);
  const foldersContext = useContext(FoldersContext);
  const modelActionContext = useContext(ModelActionContext);

  const handleDeleteFolder = (folderId) => {
    foldersContext.setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );
    modelActionContext.setModelAction({
      action: null,
      folderId: null,
      folderName: null,
    });
  };

  const handleRenameFolder = (folderId, folderName) => {
    setTrigger(false);
    modelActionContext.setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });
    if (folderName !== "") {
      foldersContext.folders.map((folder) => {
        folder.id === folderId
          ? (folder.name = folderName)
          : (folder.name = folder.name);
      });
    } else alert("Folder name can not be empty");

    foldersContext.setFolders(foldersContext.folders);
  };

  const handleCancel = () => {
    modelActionContext.setModelAction({ action: null, folderId: null });
  };

  const handleOpenFolder = (folderId, folderName) => {
    navigate(`/folder/${folderId}`);
    modelActionContext.setModelAction({
      action: null,
      folderId: folderId,
      folderName: folderName,
      isSelectd: true,
    });
  };

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(foldersContext.folders));
  }, [foldersContext.folders, handleRenameFolder]);

  return (
    <>
      <div className="folders">
        {foldersContext.folders.map((val) => (
          <div
            className="folder-container"
            key={val.id}
            onClick={() =>
              modelActionContext.setModelAction({
                action: null,
                folderId: val.id,
                folderName: val.name,
                // isSelected: false,
              })
            }
          >
            <FcOpenedFolder size={65} />
            <div className="folder-name">{val.name}</div>
          </div>
        ))}
      </div>

      {modelActionContext.modelAction.action === "rename" && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return (
              modelActionContext.modelAction.folderId &&
              (handleRenameFolder(id, name),
              modelActionContext.setModelAction({
                action: null,
                folderId: null,
                folderName: null,
              }))
            );
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

      {modelActionContext.modelAction.folderId && (
        <FolderActionPopUp
          trigger={trigger}
          handleDeleteFolder={handleDeleteFolder}
          handleRenameFolder={handleRenameFolder}
          handleCancel={handleCancel}
          handleOpenFolder={handleOpenFolder}
        />
      )}
    </>
  );
}
