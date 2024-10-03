import React from "react";
import { useSidebar } from "../../context/SidebarContext"; // Adjust the path as needed
import { AiFillHome, AiOutlineHistory, AiOutlineLike } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import {
  MdOutlineWatchLater,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { IoClose } from "react-icons/io5"; // Close icon
import "./../Navbar/Navbar.css";

const Slidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Apply conditional styling based on the isOpen state */}
      <div className={`side-nav ${isOpen ? "open" : "closed"}`}>
        {/* Close button only visible when sidebar is open */}
        {isOpen && (
          <div
            className="close-btn"
            onClick={closeSidebar}
          >
            <IoClose /> {/* Close icon */}
          </div>
        )}
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <AiFillHome />
          </div>
          Home
        </div>
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <RiVideoLine />
          </div>
          Shorts
        </div>
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <MdOutlineSubscriptions />
          </div>
          Subscription
        </div>
        <hr />
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <MdOutlineVideoLibrary />
          </div>
          Library
        </div>
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <AiOutlineHistory />
          </div>
          History
        </div>
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <MdOutlineWatchLater />
          </div>
          Watch later
        </div>
        <div
          className="mini-box d-flex align-items-center"
          onClick={closeSidebar}
        >
          <div className="mini-icon font">
            <AiOutlineLike />
          </div>
          Liked videos
        </div>
      </div>
    </>
  );
};

export default Slidebar;
