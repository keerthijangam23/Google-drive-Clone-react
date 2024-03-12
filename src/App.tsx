import Dashboard from "./componets/Dashboard";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FolderContent from "./componets/FolderContent";
import ModelActionContextCreate from "./Context/ModelActionContextCreate";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/folder/:folderId" element={<FolderContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
