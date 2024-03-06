import { useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { createContext } from "react";
import React from "react";
import "../css-styles/Dashboard.css";

export type FoldersType = {
  id: number;
  name: string;
};

export type folderContextData = {
  folders: FoldersType[];
  setFolders: React.Dispatch<React.SetStateAction<FoldersType[]>>;
};

export type ModelActionType = {
  action: string;
  folderId: number;
  folderName: string;
};

export type modelActionContext = {
  modelAction: ModelActionType;
  setModelAction: React.Dispatch<React.SetStateAction<ModelActionType>>;
};
export const data: FoldersType[] = [
  { id: 1, name: "folder1" },
  { id: 2, name: "folder2" },
];
export const FoldersContext = createContext<folderContextData>({
  folders: data,
  setFolders: () => {},
});
export const ModelActionContext = createContext<modelActionContext>({
  modelAction: {
    action: "",
    folderId: 0,
    folderName: "",
  },
  setModelAction: () => {},
});

const Dashboard = () => {
  const [folders, setFolders] = useState<FoldersType[]>(
    JSON.parse(localStorage.getItem("folders")!) || data
  );

  const [modelAction, setModelAction] = useState<ModelActionType>({
    action: "",
    folderId: 0,
    folderName: "",
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
