import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { createContext } from "react";

export const FoldersContext = createContext();
export const ModelActionContext = createContext();

const Dashboard = () => {
  const [folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders")) ||  [
      { id: 1, name: "folder1" },
      { id: 2, name: "folder2" },
    ]  );

  const [modelAction, setModelAction] = useState({
    action: null,
    folderId: null,
    folderName: null,
    isSelected: false,
  });

  // useEffect(() => {
  //   localStorage.setItem("folders", JSON.stringify(folders));
  // }, [folders]);

  return (
      <FoldersContext.Provider value={{ folders, setFolders }}>
        <ModelActionContext.Provider value={{ modelAction, setModelAction }}>
          <SideBar />
          <MainContent />
        </ModelActionContext.Provider>
      // </FoldersContext.Provider>
  );
};

export default Dashboard;
