// import React from "react";

// const FolderClickpop = ({
//   trigger,
//   setTrigger,
//   handleDeleteFolder,
//   folderId,
//   handleRenameFolder
// }) => {
//   return trigger ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <div className="Open">Open</div>
//         <br />
//         <div className="del" onClick={() => handleDeleteFolder(folderId)}>
//           Delete
//         </div>
//         <br />
//         <div className="Rename" onClick={() => handleRenameFolder(folderId)}>Rename</div>
//         <br />
//         <div className="Cancel" onClick={() => setTrigger(null)}>
//           Cancel
//         </div>
//         <br />
//       </div>
//     </div>
//   ) : null;
// };

// export default FolderClickpop;

import React from "react";
import { useState } from "react";
import "./popup.css";

const FolderClickpop = ({
  setModelAction,
  handleDeleteFolder,
  folderId,
  folderName,
  handleRenameFolder,
}) => {
  const [trigger, setTrigger] = useState(true);
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="Open">Open</div>
        <br />
        <div
          className="del"
          onClick={() => {
            console.log("clicked delete");
            handleDeleteFolder(folderId);
          }}
        >
          Delete
        </div>
        <br />
        <div
          className="Rename"
          onClick={() => {
            setTrigger(false);
            handleRenameFolder(folderId, folderName);
          }}
        >
          Rename
        </div>
        <br />
        <div
          className="Cancel"
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
