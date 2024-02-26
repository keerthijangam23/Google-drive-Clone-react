import React from "react";
import { useState } from "react";
import "./popup.css";
import { useNavigate } from "react-router-dom";

const FolderClickpop = ({
  setModelAction,
  handleDeleteFolder,
  folderId,
  folderName,
  handleRenameFolder,
}) => {
  const [trigger, setTrigger] = useState(true);
  const navigate = useNavigate();
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="open"
          onClick={() => {
            navigate(`/folder/${folderId}`);
          }}
        >
          Open
        </div>
        <br />
        <div
          className="del"
          onClick={() => {
            handleDeleteFolder(folderId);
          }}
        >
          Delete
        </div>
        <br />
        <div
          className="rename"
          onClick={() => {
            setTrigger(false);
            handleRenameFolder(folderId, folderName);
          }}
        >
          Rename
        </div>
        <br />
        <div
          className="cancel"
          onClick={() => setModelAction({ action: null, folderId: null })}
        >
          Cancel
        </div>
        <br />
      </div>
    </div>
  ) : null;
};

export default FolderClickpop;
