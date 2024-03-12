import { useState } from "react";
import { createContext } from "react";
import React from "react";
import "../css-styles/Dashboard.css";
import { Folder, FolderContextData } from "../types/DashboardCommonTypes";

export const data: Folder[] = [
  { id: "1", name: "folder1" },
  { id: "2", name: "folder2" },
];
export const FoldersContext = createContext<FolderContextData>({
  folders: data,
  setFolders: () => {},
});
const FolderContextCreate = ({ children }: any) => {
  const [folders, setFolders] = useState<Folder[]>(
    JSON.parse(localStorage.getItem("folders")!) || data
  );
  return (
    <div>
      <FoldersContext.Provider value={{ folders, setFolders }}>
        {children}
      </FoldersContext.Provider>
    </div>
  );
};

export default FolderContextCreate;
