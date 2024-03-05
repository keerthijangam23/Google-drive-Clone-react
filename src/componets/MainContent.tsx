import { useState, useEffect } from "react";
import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ModelPopup from "./ModelPop.tsx";
import FolderActionPopUp from "./FolderActionPopUp.tsx";
import "../css-styles/MainContent.css";
import { FoldersContext, ModelActionContext } from "./Dashboard.tsx";
import { useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FoldersType } from "./Dashboard.tsx";
import { folderContextData, modelActionContext } from "./Dashboard.tsx";

const MainContent: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { folders, setFolders } = useContext<folderContextData>(FoldersContext);

  const { modelAction, setModelAction } =
    useContext<modelActionContext>(ModelActionContext);

  const handleDeleteFolder = (folderId: number | string | null) => {
    setFolders((prevFolders: FoldersType[]) =>
      prevFolders.filter(
        (folder: { id: number | string; name: string }) => folder.id !== folderId
      )
    );

    setModelAction({
      action: null,
      folderId: null,
      folderName: null,
    });
  };

  const handleRenameFolder = (
    folderId: number | string | null,
    folderName: string | null
  ) => {
    setIsOpen(false);
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });
    if (folderName !== "") {
      folders.map((folder: { id: number | string; name: string | null }) => {
        folder.id === folderId
          ? (folder.name = folderName)
          : (folder.name = folder.name);
      });
    } else alert("Folder name can not be empty");

    setFolders(folders);
  };

  const handleCancel = () => {
    setModelAction({ action: null, folderId: null, folderName: null });
  };

  const handleOpenFolder = (
    folderId: number | string | null,
    folderName: string | null
  ) => {
    navigate(`/folder/${folderId}`);
    setModelAction({
      action: null,
      folderId: folderId,
      folderName: folderName,
    });
  };
  const handleSubmitInside = (id: number, name: string) => {
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
        {folders.map((val: { id: number | string; name: string }) => (
          <div className="folder-container" key={val.id}>
            <div className="folder-dot-icon">
              <FcOpenedFolder size={40} />
              <MoreVertIcon
                onClick={() =>
                  setModelAction({
                    action: null,
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
          handleSubmit={({ id, name }) => {
            handleSubmitInside(id, name);
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null, folderName: null });
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
};
export default MainContent;
