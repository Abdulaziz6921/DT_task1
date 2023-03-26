import React from "react";
import "./Sidebar.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: open ? "132px" : "392px" }} className="sidebar">
      <div
        className="title"
        style={{ justifyContent: open ? "flex-end" : "space-between" }}
      >
        <p className="txt" style={{ display: open ? "none" : "block" }}>
          Journey Board
        </p>
        <p id="arrow" onClick={handleSidebar}>
          <BsFillArrowRightCircleFill
            style={{ display: open ? "block" : "none" }}
          />
          <BsFillArrowLeftCircleFill
            style={{ display: open ? "none" : "block" }}
          />
        </p>
      </div>

      <ul style={{ display: open ? "none" : "block" }}>
        <li>
          <p>Explore the world of management</p>
        </li>
        <li>Technical Project Management</li>
        <li>Threadbuild</li>
        <li>Structure your points</li>
        <li>4SA Methods</li>
      </ul>
    </div>
  );
};

export default Sidebar;
