import "../styles/Header.css";
import { useState } from "react";
import logo from "../assets/logo-mobile.svg";
import { useParams } from "react-router-dom";
import elipsis from "../assets/icon-vertical-ellipsis.svg";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const {activeBoard} = useParams()

  console.log(activeBoard)
  
  return (
    <div className="headerContainer">
      <header>
        <div className="logoContainer">
          <img className="logo" src={logo} alt="logo" />
          <h3 className="logoText">kanban</h3>
        </div>
        <div className="taskTitleBox">
        <h3>ferno</h3>
        </div>
        
        <div className="taskManagement">
            <button className="addBtn">+AddNewTask</button>
            <img className="elipsis" src={elipsis}
          alt="menu for deleting or editing board" />
          </div>
      </header>
    </div>
  );
}
