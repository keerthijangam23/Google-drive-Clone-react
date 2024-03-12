import MainContent from "./MainContent";
import SideBar from "./SideBar";
import "../css-styles/Dashboard.css";
import ModelActionContextCreate from "../Context/ModelActionContextCreate";
import FolderContextCreate from "../Context/FolderContextCreate";
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
