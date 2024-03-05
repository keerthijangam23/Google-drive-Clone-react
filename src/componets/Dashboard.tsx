import React, { useState } from "react";
import MainContent from "./MainContent.tsx";
import SideBar from "./SideBar.tsx";
import { createContext } from "react";
import "../css-styles/Dashboard.css"

export const FoldersContext = createContext();
export const ModelActionContext = createContext();

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

  return (
    <div className="dashboard">
    <FoldersContext.Provider value={{ folders, setFolders }}>
      <ModelActionContext.Provider value={{ modelAction, setModelAction }}>
        <SideBar />
        <MainContent />
      </ModelActionContext.Provider>
    </FoldersContext.Provider>
    </div>
  );
};

export default Dashboard;
