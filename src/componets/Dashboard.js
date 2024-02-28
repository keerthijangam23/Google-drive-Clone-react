import React, { useEffect, useState } from "react";
import Folder from "./Folder";
import Sidebar from "./sidebar";
import "../css-styles/Dashboard.css"

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
      />

      <Sidebar
          setFolders={setFolders}
          setModelAction={setModelAction}
          modelAction={modelAction}

      />
    </>
  );
};

export default Dashboard;
