import {useState } from "react";
import { createContext } from "react";
import React from "react";
import "../css-styles/Dashboard.css";
import {
  ModelActionContextData,
  ModelAction,
} from "../types/DashboardCommonTypes";

export const ModelActionContext = createContext<ModelActionContextData>({
  modelAction: {
    action: "",
    folderId: "",
    folderName: "",
  },
  setModelAction: () => {},
});
const ModelActionContextCreate = ({children}:any) => {
  const [modelAction, setModelAction] = useState<ModelAction>({
    action: "",
    folderId: "",
    folderName: "",
  });

  return (
    <div>
      <ModelActionContext.Provider value={{ modelAction, setModelAction }}>
        {children}
      </ModelActionContext.Provider>
    </div>
  );
};
export default ModelActionContextCreate;
