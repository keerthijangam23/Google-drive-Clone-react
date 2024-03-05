import { useState } from "react";
import MainContent from "./MainContent.tsx";
import SideBar from "./SideBar.tsx";
import { createContext } from "react";
import React from "react";
import "../css-styles/Dashboard.css";

export type FoldersType = {
  id: number | string;
  name: string;
};

export type folderContextData = {
  folders: FoldersType[];
  setFolders: React.Dispatch<React.SetStateAction<FoldersType[]>>;
};

export type ModelActionType = {
  action: string | null;
  folderId: number | string | null;
  folderName: string | null;
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
    action: null,
    folderId: null,
    folderName: null,
  },
  setModelAction: () => {},
});

const Dashboard: React.FC = () => {
  const [folders, setFolders] = useState<FoldersType[]>(
    JSON.parse(localStorage.getItem("folders")!) || data
  );

  const [modelAction, setModelAction] = useState<ModelActionType>({
    action: null,
    folderId: null,
    folderName: null,
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
