import MainContent from "./MainContent";
import SideBar from "./SideBar";
import "../css-styles/Dashboard.css";
import ModelActionContextCreate from "../Context/ModelActionContextDataFile";
import FolderContextCreate from "../Context/FoldersContextData";
const Dashboard = () => {
  
  return (
    <FolderContextCreate>
   <ModelActionContextCreate>
    <div className="dashboard">
      <SideBar />
      <MainContent />
    </div>
    </ModelActionContextCreate>
    </FolderContextCreate>
  );
};

export default Dashboard;
