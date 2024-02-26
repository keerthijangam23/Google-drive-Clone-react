// import React, { useState } from "react";
// import { FcOpenedFolder } from "react-icons/fc";
// import Sidebar from "./sidebar";

// const Context = () => {
//   const [store, setStore] = useState([
//     { id: 1, name: "folder1" },
//     { id: 2, name: "folder2" }
//   ]);
//   const [message, setMessage] = useState("");
//   const [Buttonpop, setButtonpop] = useState(false);
//   const [Deletepop, setDeletepop] = useState(null);
//   const [Renamepop, setRenamepop] = useState(null);
//   const [renameValue, setRenameValue] = useState("");
//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleFolderCreation = (message) => {
//     if (message !== "") {
//       setStore((prevStore) => [
//         ...prevStore,
//         { id: prevStore.length + 1, name: message }
//       ]);
//       setMessage("");
//       setButtonpop(false);
//     } else {
//       alert("Folder name should not be empty");
//     }
//   };

//   const handleDeleteFolder = (folderId) => {
//     setStore((prevStore) =>
//       prevStore.filter((folder) => folder.id !== folderId)
//     );
//     setDeletepop(null);
//   };

//   const handleRenameFolder = (folderId) => {
//     setDeletepop(false)
//     setRenamepop(folderId);
//     const folder = store.find((folder) => folder.id === folderId);
//     setRenameValue(folder.name);
//   };

//   const handleRenameChange = (event) => {
//     setRenameValue(event.target.value);
//   };

//   const handleRenameSubmit = (folderId) => {
//     setStore((prevStore) =>
//       prevStore.map((folder) =>
//         folder.id === folderId ? { ...folder, name: renameValue } : folder
//       )
//     );
//     setRenamepop(null);
//   };

//   return (
//     <>
//       <div className="folders">
//         {store.map((val) => (
//           <div
//             className="folder-container"
//             key={val.id}
//             onClick={() => setDeletepop(val.id)}
//           >
//             <FcOpenedFolder size={65} />
//             {Renamepop === val.id ? (
//               <input
//                  style={{maxWidth:"50px",maxHeight:"40px"}}
//                 type="text"
//                 value={renameValue}
//                 onChange={handleRenameChange}
//                 onBlur={() => handleRenameSubmit(val.id)}
//                 autoFocus
//               />
//             ) : (
//               <div style={{ width: "60px", height: "60px", marginLeft: "5px" }}>
//                 {val.name}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <Sidebar
//         handleChange={handleChange}
//         handleFolderCreation={handleFolderCreation}
//         handleDeleteFolder={handleDeleteFolder}
//         message={message}
//         Buttonpop={Buttonpop}
//         setButtonpop={setButtonpop}
//         Deletepop={Deletepop}
//         setDeletepop={setDeletepop}
//         handleRenameFolder={handleRenameFolder}
//       />
//     </>
//   );
// };
// export default Context;

import React, { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import Sidebar from "./sidebar";


const Dashboard = () => {
  
  const [Folders, setFolders] = useState(JSON.parse(localStorage.getItem('folders')) || [
    { id: 1, name: "folder1" },
    { id: 2, name: "folder2" },
  ]);
  const [modelAction, setModelAction] = useState({
    action: null,
    folderId: null,
    folderName: null,
  }); //create, delete, rename

  console.log("folders array", Folders);

  const handleFolderCreation = (message) => {
    console.log("creating folder");
    if (message !== "") {
      setFolders((prevFolders) => [
        ...prevFolders,
        { id: prevFolders.length + 1, name: message },
      ]);

      setModelAction({ action: null, folderId: null });
    } else alert("Folder name can not be empty");
  };

  const handleDeleteFolder = (folderId) => {
    console.log("inside handleDeleteFolder:", folderId);
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );
    setModelAction({ action: null, folderId: null });
  };

  const handleRenameFolder = (folderId, folderName) => {
    setModelAction({
      action: "rename",
      folderId: folderId,
      folderName: folderName,
    });
    console.log("FolderId:folderName", folderId, folderName);
    Folders.forEach((folder) => {
      folder.id === folderId
        ? (folder.name = folderName)
        : (folder.name = folder.name);
    });
    setFolders(Folders);
    // setModelAction({ action: null, folderId: null, folderName:null });
  };

  

  const handleOpenFolder = (folderId) => {
    // const newFolders = [
    //   { id: 1, name: "f1" },
    //   { id: 2, name: "f2" },
    // ];
    // setFolders(newFolders);
  };

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(Folders));
  }, [handleFolderCreation, handleDeleteFolder, handleRenameFolder]);

  return (
    <>
      <div className="folders">
        {Folders.map((val) => (
          <div
            className="folder-container"
            key={val.id}
            onClick={() =>
              setModelAction({
                action: null,
                folderId: val.id,
                folderName: val.name,
              })
            }
          >
            <FcOpenedFolder size={65} />
            <div style={{ width: "50px", marginLeft: "5px" }}>{val.name}</div>
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
        handleOpenFolder={handleOpenFolder}
      />
    </>
  );
};

export default Dashboard;
