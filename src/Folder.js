import { useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ModelPopup from "./ModelPop";
import FolderClickpop from "./FolderClickpop";

export default function Folder({ folders,setFolders,modelAction, setModelAction }) {
  const navigate = useNavigate(); 
  const [trigger, setTrigger] = useState(true);

  const handleFolderCreation = (message) => {
    if (message !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { id: prevFolders.length + 1, name: message },
      ]);

      setModelAction({ action: null, folderId: null });
    } else alert("Folder name can not be empty");
  };
  
  const handleDeleteFolder = (folderId) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );
    setModelAction({ action: null, folderId: null, folderName: null });
  };

  const handleRenameFolder = (folderId, folderName) => {
    setTrigger(false);
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });

    folders.map((folder) => {
      folder.id === folderId
        ? (folder.name = folderName)
        : (folder.name = folder.name);
    });
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

  return (
    <>
    <div className="folders">
      {folders.map((val) => (
        <div
          className="folder-container"
          key={val.id}
          onClick={() =>
            setModelAction({
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

    {modelAction.action && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return modelAction.action === "create"
              ? handleFolderCreation(name)
              : modelAction.folderName &&
                  (handleRenameFolder(id, name),
                  setModelAction({
                    action: null,
                    folderId: null,
                    folderName: null,
                  }));
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null });
          }}
          val={{ id: modelAction.folderId, name: modelAction.folderName }}
        />
      )}

      {modelAction.folderId && (
        <FolderClickpop
          trigger={trigger}
          setModelAction={setModelAction}
          handleDeleteFolder={handleDeleteFolder}
          folderId={modelAction.folderId}
          folderName={modelAction.folderName}
          handleRenameFolder={handleRenameFolder}
          handleCancel={handleCancel}
          handleOpenFolder={handleOpenFolder}
          
        />
      )}
    </>
  );
}
