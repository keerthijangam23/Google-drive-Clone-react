import React, { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [Folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders")) || [
      { id: 1, name: "folder1" },
      { id: 2, name: "folder2" },
    ]
  );
  const [modelAction, setModelAction] = useState({
    action: null,
    folderId: null,
    folderName: null,
  });

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
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });

    Folders.forEach((folder) => {
      folder.id === folderId
        ? (folder.name = folderName)
        : (folder.name = folder.name);
    });
    setFolders(Folders);
  };

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(Folders));
  }, [Folders]);

  return (
    <>
      <div className="folders">
        {Folders.map((val) => (
          <div
            className="folder-container"
            key={val.id}
            onClick={() =>
              setModelAction({
                action: null,
                folderId: val.id,
                folderName: val.name,
              })
            }
          >
            <FcOpenedFolder size={65} />
            <div style={{ width: "50px", marginLeft: "5px" }}>{val.name}</div>
          </div>
        ))}
      </div>

      <Sidebar
        handleFolderCreation={handleFolderCreation}
        handleDeleteFolder={handleDeleteFolder}
        modelAction={modelAction}
        setModelAction={setModelAction}
        deletingFolderId={modelAction.folderId}
        renameFolder={modelAction.folderName}
        handleRenameFolder={handleRenameFolder}
      />
    </>
  );
};

export default Dashboard;
