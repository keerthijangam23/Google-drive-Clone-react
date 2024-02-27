import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./OpenFolder.css";
export default function OpenFolder({ folderId, files, setFiles, folder }) {
  const [initialfiles, setInitialfiles] = useState(
    JSON.parse(localStorage.getItem(folder)) || files
  );

  useEffect(() => {
    localStorage.setItem(folder, JSON.stringify(files));
  }, [files]);
  return (
    <div className="files">
      {initialfiles.map((val) => (
        <div className="files-container" key={val.id}>
          <FaFileAlt className="file" size={65} />
          <div className="file-name">{val.name}</div>
        </div>
      ))}
    </div>
  );
}
