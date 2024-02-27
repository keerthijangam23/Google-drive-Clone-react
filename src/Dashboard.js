import React, { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import Sidebar from "./sidebar";
import OpenFolder from "./OpenFolder";
import Folder from "./Folder";

const Dashboard = () => {
  const [folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders")) ||
     [
      { id: 1, name: "folder1" },
      { id: 2, name: "folder2" },
    ]
  );

  const [modelAction, setModelAction] = useState({
    action: null,
    folderId: null,
    folderName: null,
    isSelected: false,
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

    folders.map((folder) => {
      folder.id === folderId
        ? (folder.name = folderName)
        : (folder.name = folder.name);
    });
    setFolders(folders);
  };

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [handleFolderCreation,handleDeleteFolder,handleRenameFolder]);

  return (
    <>
      <Folder folders={folders} modelAction={modelAction} setModelAction={setModelAction}/>

      <Sidebar
        handleFolderCreation={handleFolderCreation}
        handleDeleteFolder={handleDeleteFolder}
        modelAction={modelAction}
        setModelAction={setModelAction}
        deletingFolderId={modelAction.folderId}
        renameFolder={modelAction.folderName}
        handleRenameFolder={handleRenameFolder}
      />
      {/* {modelAction.isSelected && (
        <OpenFolder
          folderId={modelAction.folderId}
          modelAction={modelAction}
          setModelAction={setModelAction}
        />
      )} */}
    </>
  );
};

export default Dashboard;
