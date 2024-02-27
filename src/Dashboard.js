import React, { useEffect, useState } from "react";
import Folder from "./Folder";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders")) || [
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

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  return (
    <>
      <Folder
        folders={folders}
        setFolders={setFolders}
        modelAction={modelAction}
        setModelAction={setModelAction}
        handleFolderCreation={handleFolderCreation}
      />

      <Sidebar
        handleFolderCreation={handleFolderCreation}
        handleNewButtonClick={handleNewButtonClick}
      />
    </>
  );
};

export default Dashboard;
