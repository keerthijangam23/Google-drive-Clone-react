import { useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { createContext } from "react";
import React from "react";
import "../css-styles/Dashboard.css";

export type Folder= {
  id: string;
  name: string;
};

export type FolderContextData = {
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export type ModelAction = {
  action: string;
  folderId: string;
  folderName: string;
};

export type ModelActionContextData = {
  modelAction: ModelAction;
  setModelAction: React.Dispatch<React.SetStateAction<ModelAction>>;
};
export const data: Folder[] = [
  { id: "1", name: "folder1" },
  { id: "2", name: "folder2" },
];
export const FoldersContext = createContext<FolderContextData>({
  folders: data,
  setFolders: () => {},
});
export const ModelActionContext = createContext<ModelActionContextData>({
  modelAction: {
    action: "",
    folderId: '',
    folderName: "",
  },
  setModelAction: () => {},
});

const Dashboard = () => {
  const [folders, setFolders] = useState<Folder[]>(
    JSON.parse(localStorage.getItem("folders")!) || data
  );

  const [modelAction, setModelAction] = useState<ModelAction>({
    action: "",
    folderId: '',
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
