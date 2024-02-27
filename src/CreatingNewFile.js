import ModelPopup from "./ModelPop";
import "./CreatingNewFile.css";
export default function CreatingNewFile({
  handleFileCreation,
  modelActionFile,
  setModelActionFile,
}) {
  return (
    <>
      <div className="side-button">
        <button
          className="new-file-button"
          onClick={() =>
            setModelActionFile({
              action: "create",
            })
          }
        >
          New-File
        </button>
      </div>
      {modelActionFile.action && (
        <ModelPopup
          handleSubmit={({ id, name }) => {
            return modelActionFile.action === "create" && handleFileCreation(name);
          }}
          handleClose={() => {
            setModelActionFile({ action: null, folderId: null });
          }}
          val={{ id: modelActionFile.folderId, name: modelActionFile.folderName }}
        />
      )}
    </>
  );
}
