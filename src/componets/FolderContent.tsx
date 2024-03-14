import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../css-styles/FolderContent.css";
import { useParams } from "react-router-dom";

export type File = {
  id: number;
  name: string;
  folderId: number;
};
export const Filesdata: File[] = [
  { id: 1, name: "file1", folderId: 1 },
  { id: 2, name: "file2", folderId: 1 },
  { id: 3, name: "file1", folderId: 2 },
  { id: 4, name: "file3", folderId: 2 },
  { id: 5, name: "file3", folderId: 2 }
 
];
export default function FolderContent() {
  const { folderId} = useParams<string>();
  const [files, setFiles] = useState<File[]>(
    JSON.parse(localStorage.getItem("files")!) || Filesdata
  );

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  return (
    <div className="files">
      {files.map((file: File) => {
        if (file.folderId === Number(folderId)) {
          return (
            <div key={file.id} data-testid = "file" className="files-container" >
              <FaFileAlt size={65} />
              <div className="file-name">{file.name}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
