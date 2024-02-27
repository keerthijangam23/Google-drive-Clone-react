import React from "react";
import "./sidebar.css";

const Sidebar = ({ handleNewButtonClick }) => {
  return (
    <>
      <div className="side">
        <img className="drive-image" src="./Images/drivePic.jpg" />
        <br />
        <button className="new-button" onClick={() => handleNewButtonClick()}>
          New
        </button>
      </div>
    </>
  );
};

export default Sidebar;
