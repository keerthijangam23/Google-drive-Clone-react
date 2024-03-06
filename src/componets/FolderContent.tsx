import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../css-styles/FolderContent.css";
import { useParams } from "react-router-dom";

export type FilesType = {
  id: number;
  name: string;
  folderId: number;
};
export const Filesdata: FilesType[] = [
  { id: 1, name: "file1", folderId: 1 },
  { id: 2, name: "file1", folderId: 1 },
  { id: 3, name: "file2", folderId: 2 },
  { id: 4, name: "file1", folderId: 2 },
  { id: 5, name: "file2", folderId: 2 },
];
export default function FolderContent() {
  const { folderId } = useParams();
  const [files, setFiles] = useState(
    JSON.parse(localStorage.getItem("files")!) || Filesdata
  );

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  return (
    <div className="files">
      {files.map((file: FilesType) => {
        if (file.folderId === Number(folderId)) {
          return (
            <div key={file.id} className="files-container">
              <FaFileAlt size={65} />
              <div className="file-name">{file.name}</div>
            </div>
          );
        }
      })}
    </div>
  );
}