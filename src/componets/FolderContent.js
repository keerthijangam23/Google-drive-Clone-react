import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../css-styles/FolderContent.css";
import { useParams } from "react-router-dom";

export default function FolderContent() {
  const { folderId } = useParams();
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem("files")) || [
      { id: 1, name: "file1", folderId: 1 },
      { id: 2, name: "file1", folderId: 2 },
      { id: 3, name: "file2", folderId: 2 },
      { id: 4, name: "file1", folderId: 3 },
      { id: 5, name: "file2", folderId: 3 },
      { id: 6, name: "file3", folderId: 3 },
      { id: 7, name: "file3", folderId: 5 },
      { id: 9, name: "file2", folderId: 4 },
    ]
  );

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  return (
      <div className="files">
        {files.map((file) => {
          if (file.folderId === Number(folderId)) {
            return (
                <div key={file.id} className="files-container">
                  <FaFileAlt className="file" size={65} />
                  <div className="file-name">{file.name}</div>
                </div>
            );
          }
        })}
      </div>
  );
}
