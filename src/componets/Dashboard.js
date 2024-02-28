import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

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
    // <SetModelActionContext.Provider value={setModelAction}>
    <>
      {/* uesContext for most used props */}
      <SideBar
        setFolders={setFolders}
        setModelAction={setModelAction}
        modelAction={modelAction}
      />
      <MainContent
        folders={folders}
        setFolders={setFolders}
        modelAction={modelAction}
        setModelAction={setModelAction}
      />

      {/* </SetModelActionContext.Provider> */}
    </>
  );
};

export default Dashboard;
