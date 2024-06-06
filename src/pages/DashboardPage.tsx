import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/dashboard.scss";
import { BiBuildings } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import profileImg from '../assets/profile.png'
const DashboardPage = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />

        <div className="left-box">
          <div className="top-bar">
            <div className="left-part">
              <img src={logo} alt="" />
              <div>View Name</div>
              <select name="" id="">
                <option value="">
                  <BiBuildings />
                  North India Region
                </option>
              </select>
            </div>
            <div className="right-part">
              <FaRegBell />
              <span>John Doe</span>
              <div>
                <img src={profileImg} alt="" />
              </div>
            </div>

          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
