import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./OpenFolder.css";
import { useParams } from "react-router-dom";

export default function OpenFolder() {
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem("files")) || [
      { id: 1, name: "file1", folderId: 1 },
      { id: 2, name: "file1", folderId: 2 },
      { id: 3, name: "file2", folderId: 2 },
      { id: 4, name: "file1", folderId: 3 },
      { id: 5, name: "file2", folderId: 3 },
      { id: 6, name: "file3", folderId: 3 },
    ]
  );
  const { folderId } = useParams();

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  return (
    <>
      <div className="files">
        {files.map((file) => {
          if (file.folderId == folderId) {
            return (
              <>
                <div key={file.id} className="files-container">
                  <FaFileAlt className="file" size={65} />

                  <div className="file-name">{file.name}</div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
