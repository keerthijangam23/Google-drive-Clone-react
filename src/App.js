import OpenFolder from "./OpenFolder";
// import Main from "./Main";
import Dashboard from "./Dashboard";
import "./style.css";
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
