import React, { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import Sidebar from "./sidebar";
import OpenFolder from "./OpenFolder";

const Dashboard = () => {
  const [folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders")) || [
      { id: 1, name: "folder1" },
      { id: 2, name: "folder2" },
    ]
  );
  const [folder, setfolder] = useState(`files ${null}`);
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem(folder)) ||
    [
      { id: 1, name: "file1", folderId: 1 },
      { id: 2, name: "file2", folderId: 2 },
    ]
  );
  const [modelAction, setModelAction] = useState({
    action: null,
    folderId: null,
    folderName: null,
    isSelected:false
  });

  const handleFolderCreation = (message) => {
    if (message !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { id: prevFolders.length + 1, name: message },
      ]);

      setModelAction({ action: null, folderId: null });
    } else alert("Folder name can not be empty");
  };

  const handleDeleteFolder = (folderId) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );
    setModelAction({ action: null, folderId: null, folderName: null });
  };

  const handleRenameFolder = (folderId, folderName) => {
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });

    folders.forEach((folder) => {
      folder.id === folderId
        ? (folder.name = folderName)
        : (folder.name = folder.name);
    });
    setFolders(folders);
  };

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  useEffect(
    (folder) => {
      localStorage.setItem(folder, JSON.stringify(files));
    },
    [files]
  );

  return (
    <>
      <div className="folders">
        {folders.map((val) => (
          <div
            className="folder-container"
            key={val.id}
            onClick={() =>
              setModelAction({
                action: null,
                folderId: val.id,
                folderName: val.name,
                isSelected:false
              }) && setfolder(`files ${val.id}`)
            }
          >
            <FcOpenedFolder size={65} />
            <div className="folder-name">{val.name}</div>
          </div>
        ))}
      </div>

      <Sidebar
        handleFolderCreation={handleFolderCreation}
        handleDeleteFolder={handleDeleteFolder}
        modelAction={modelAction}
        setModelAction={setModelAction}
        deletingFolderId={modelAction.folderId}
        renameFolder={modelAction.folderName}
        handleRenameFolder={handleRenameFolder}
      />
      {modelAction.isSelected && (
        <OpenFolder
          folderId={modelAction.folderId}
          files={files.filter((file) => file.folderId === modelAction.folderId)}
          setFiles={setFiles}
          folder={folder}
        />
      )}
    </>
  );
};

export default Dashboard;
