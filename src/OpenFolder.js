import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./OpenFolder.css"
export default function OpenFolder() {
  const [files, setfiles] = useState(
     JSON.parse(localStorage.getItem("files")) || 
    [
      { id: 1, name: "file1" },
      { id: 2, name: "file2" },
    ]
  );
  useEffect(() => {
     localStorage.setItem("files", JSON.stringify(files));
  }, [files]);
  return (
    <div className="files">
      {files.map((val) => (
        <div className="files-container" key={val.id}>
          <FaFileAlt className = "file"size={65} />
          <div className="file-name">{val.name}</div>
        </div>
      ))}
    </div>
  );
}







