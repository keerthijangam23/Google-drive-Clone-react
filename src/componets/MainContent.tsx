import { useState, useEffect } from "react";
import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ModelPopup from "./ModelPop";
import FolderActionPopUp from "./FolderActionPopUp";
import "../css-styles/MainContent.css";
import { FoldersContext, ModelActionContext } from "./Dashboard";
import { useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Folder ,ModelAction} from "./Dashboard";
import { FolderContextData, ModelActionContextData } from "./Dashboard";

export type HandleSubmit = {
  id: string;
  name: string;
};
const MainContent = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { folders, setFolders } = useContext<FolderContextData>(FoldersContext);

  const { modelAction, setModelAction } =
    useContext<ModelActionContextData>(ModelActionContext);

  const handleDeleteFolder = (folderId: string) => {
    setFolders((prevFolders: Folder[]) =>
      prevFolders.filter(
        (folder: { id: string; name: string }) => folder.id !== folderId
      )
    );

    setModelAction({
      action: "",
      folderId: '',
      folderName: "",
    });
  };

  const handleRenameFolder = (folderId: string, folderName: string) => {
    setIsOpen(false);
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });
    if (folderName !== "") {
      folders.map((folder: { id: string; name: string }) => {
        folder.id === folderId
          ? (folder.name = folderName)
          : (folder.name = folder.name);
      });
    } else alert("Folder name can not be empty");

    setFolders(folders);
  };

  const handleCancel = () => {
    setModelAction({ action: "", folderId: '', folderName: "" });
  };

  const handleOpenFolder = (folderId: string, folderName: string) => {
    navigate(`/folder/${folderId}`);
    setModelAction({
      action: "",
      folderId: folderId,
      folderName: folderName,
    });
  };
  const handleSubmitInside = (id: string, name: string) => {
    return (
      modelAction.folderId &&
      (handleRenameFolder(id, name),
      setModelAction({
        action: "",
        folderId: '',
        folderName: "",
      }))
    );
  };
  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders, handleRenameFolder]);

  return (
    <>
      <div className="folders">
        {folders.map((val: { id: string; name: string }) => (
          <div className="folder-container" key={val.id}>
            <div className="folder-dot-icon">
              <FcOpenedFolder size={40} />
              <MoreVertIcon
                onClick={() =>
                  setModelAction({
                    action: "",
                    folderId: val.id,
                    folderName: val.name,
                  })
                }
                style={{ height: "20px", width: "20px" }}
              />
            </div>

            <div className="folder-name">{val.name}</div>
          </div>
        ))}
      </div>

      {modelAction.action === "rename" && (
        <ModelPopup
          handleSubmit={({ id, name }: HandleSubmit): void => {
            handleSubmitInside(id, name);
          }}
          handleClose={() => {
            setModelAction({ action: "", folderId: '', folderName: "" });
          }}
          idValue={modelAction.folderId}
          nameValue={modelAction.folderName}
        />
      )}

      {modelAction.folderId !== '' && (
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
};
export default MainContent;
