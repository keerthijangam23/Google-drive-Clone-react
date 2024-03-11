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