import React from "react";
import "../Css/Home.css";
import { AiFillHome } from "react-icons/ai";
import "../Css/Sidebar.css";
import { GiOfficeChair } from "react-icons/gi";
import { RiHealthBookFill, RiComputerFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar">
        <li>
          <p style={{ display: "flex", cursor: "pointer" }}>
            <AiFillHome
              style={{ color: "rgb(55, 136, 184)", fontSize: "17px" }}
            />
            <span>Home</span>
          </p>
        </li>
        <li>
          <p style={{ display: "flex", cursor: "pointer" }}>
            <RiComputerFill style={{ color: "blue", fontSize: "17px" }} />
            <span>Phones</span>
          </p>
        </li>
        <li>
          <p style={{ display: "flex", cursor: "pointer" }}>
            <GiOfficeChair style={{ color: "orange", fontSize: "17px" }} />
            <span>Tablets</span>
          </p>
        </li>
        <li>
          <p style={{ display: "flex", cursor: "pointer" }}>
            <FaCode style={{ color: "red", fontSize: "17px" }} />
            <span>Desktops</span>
          </p>
        </li>
        <li>
          <p style={{ display: "flex", cursor: "pointer" }}>
            <RiHealthBookFill style={{ color: "purple", fontSize: "17px" }} />
            <span>Laptops</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
