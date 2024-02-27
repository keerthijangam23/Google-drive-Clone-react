import { useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";

export default function Folder({ folders, setModelAction }) {
  return (
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
              isSelected: false,
            })
          }
        >
          <FcOpenedFolder size={65} />
          <div className="folder-name">{val.name}</div>
        </div>
      ))}
    </div>
  );
}
