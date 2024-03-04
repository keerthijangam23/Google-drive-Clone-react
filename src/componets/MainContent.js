import { useState, useEffect } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ModelPopup from "./ModelPop";
import FolderActionPopUp from "./FolderActionPopUp";
import "../css-styles/MainContent.css";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MainContent() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const { folders, setFolders } = useContext(FoldersContext);

  const { modelAction, setModelAction } = useContext(ModelActionContext);

  const handleDeleteFolder = (folderId) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );

    setModelAction({
      action: null,
      folderId: null,
      folderName: null,
    });
  };

  const handleRenameFolder = (folderId, folderName) => {
    setIsOpen(false);
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });
    if (folderName !== "") {
      folders.map((folder) => {
        folder.id === folderId
          ? (folder.name = folderName)
          : (folder.name = folder.name);
      });
    } else alert("Folder name can not be empty");

    setFolders(folders);
  };

  const handleCancel = () => {
    setModelAction({ action: null, folderId: null });
  };

  const handleOpenFolder = (folderId, folderName) => {
    navigate(`/folder/${folderId}`);
    setModelAction({
      action: null,
      folderId: folderId,
      folderName: folderName,
      isSelectd: true,
    });
  };
  const handleSubmitInside = (id, name) => {
    return (
      modelAction.folderId &&
      (handleRenameFolder(id, name),
      setModelAction({
        action: null,
        folderId: null,
        folderName: null,
      }))
    );
  };
  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders, handleRenameFolder]);

  return (
    <>
      <div className="folders">
        {folders.map((val) => (
          <div
            className="folder-container"
            key={val.id}
            
          >
            <div className="folder-dot-icon">
            <FcOpenedFolder size={40} />
            <MoreVertIcon onClick={() =>
              setModelAction({
                action: null,
                folderId: val.id,
                folderName: val.name,
                // isSelected: false,
              })
            } style={{height:"20px",width:"20px"}}/>
            </div>
            <div className="folder-name">{val.name}</div>
          </div>
        ))}
      </div>

      {modelAction.action === "rename" && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            handleSubmitInside(id, name);
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null });
          }}
          id={modelAction.folderId}
          nameValue={modelAction.folderName}
        />
      )}

      {modelAction.folderId && (
        <FolderActionPopUp
          isOpen={isOpen}
          handleDeleteFolder={handleDeleteFolder}
          handleRenameFolder={handleRenameFolder}
          handleCancel={handleCancel}
          handleOpenFolder={handleOpenFolder}
        />
      )}
    </>
  );
}
