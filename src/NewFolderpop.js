
// import React from "react";
// import "./popup.css";
// export function NewFolder({
//   trigger,
//   message,
//   handleChange,
//   handleFolderCreation,
//   setButtonpop,
// }) {
//   return trigger ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <h3>Create-Folder</h3>
//         <input
//           placeholder="foldername"
//           value={message}
//           onChange={handleChange}
//         ></input>
//         <br /> <br />
//         <button
//           style={{ marginRight: "100px" }}
//           className="crbtn"
//           onClick={() => {
//             handleFolderCreation(message);
//           }}
//         >
//           create
//         </button>
//         <button className="cabtn" onClick={() => setButtonpop(false)}>
//           cancel
//         </button>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }




import React from "react";
import "./popup.css";
export function NewFolder({
  trigger,
  message,
  handleChange,
  handleFolderCreation,
  setButtonpop,
}) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Create-Folder</h3>
        <input
          placeholder="foldername"
          value={message}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <button
          style={{ marginRight: "100px" }}
          className="crbtn"
          onClick={() => {
            handleFolderCreation(message);
          }}
        >
          create
        </button>
        <button className="cabtn" onClick={() => setButtonpop({action: null, folderId: null})}>
          cancel
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

