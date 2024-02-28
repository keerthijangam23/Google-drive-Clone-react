import OpenFolder from "./componets/FolderContent";
import Dashboard from "./componets/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/folder/:folderId" element={<OpenFolder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
