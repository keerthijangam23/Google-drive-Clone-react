import React from "react";
import FolderClickpop from "./FolderClickpop";
import ModelPopup from "./ModelPop";

const Sidebar = ({
  handleFolderCreation,
  handleDeleteFolder,
  modelAction,
  setModelAction,
  deletingFolderId,
  renameFolder,
  handleRenameFolder,
  handleOpenFolder,
}) => {
  return (
    <>
      <div className="side">
        <img
          className="drive-image"
          src="https://tse1.mm.bing.net/th?id=OIP.nAzvj5hw-KpsOtwXu-EOFQHaGo&pid=Api&rs=1&c=1&qlt=95&w=139&h=124"
        />
        <br />
        <button
          className="item"
          onClick={() => setModelAction({ action: "create", folderId: null })}
        >
          New
        </button>
      </div>

      {modelAction.action && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return modelAction.action === "create"
              ? handleFolderCreation(name)
              : modelAction.folderName &&
                  (handleRenameFolder(id, name),
                  setModelAction({
                    action: null,
                    folderId: null,
                    folderName: null,
                  }));
          }}
          handleClose={() => {
            setModelAction({ action: null, folderId: null });
          }}
          val={{ id: modelAction.folderId, name: modelAction.folderName }}
        />
      )}

      {modelAction.folderId && (
        <FolderClickpop
          trigger={true}
          setModelAction={setModelAction}
          handleDeleteFolder={handleDeleteFolder}
          folderId={deletingFolderId}
          folderName={renameFolder}
          handleRenameFolder={handleRenameFolder}
          handleOpenFolder={handleOpenFolder}
        />
      )}
    </>
  );
};

export default Sidebar;
