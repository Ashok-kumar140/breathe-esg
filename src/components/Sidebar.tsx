import React, { useState } from "react";
import {
  MdOutlineBarChart,
  MdOutlineGridView,
  MdPieChartOutlined,
  MdOutlineSummarize,
  MdOutlineSupervisedUserCircle,
  MdAutoGraph,
} from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { sidebarLinks } from "../data/sidebarLinks";
import logo from "../assets/logo.png";
import "../styles/sidebar.scss";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function checkPath(route:string) {
    return matchPath(route, location.pathname);
  }

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" loading="lazy" />
          <span>BREATHE ESG</span>
        </div>
        <div className={`sidebar-links`}>
          {sidebarLinks.map((link) => (
            <div key={link.id} className={` ${checkPath(link.path)?"active":""} ${link.name==='Logout'?" logout":""}`}
            onClick={()=>navigate(link.path)}
            >
              <div >
                {link.id === 1 && <MdOutlineBarChart />}
                {link.id === 2 && <MdOutlineGridView />}
                {link.id === 3 && <MdPieChartOutlined />}
                {link.id === 4 && <MdOutlineSummarize />}
                {link.id === 5 && <MdOutlineBarChart />}
                {link.id === 6 && <MdOutlineSupervisedUserCircle />}
                {link.id === 7 && <MdAutoGraph />}
                {link.id === 8 && <TbTarget />}
                {link.id === 9 && <IoLogOutOutline />}
              </div>
              <span > {link.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
