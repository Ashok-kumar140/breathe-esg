import React, { useState } from "react";
import { TbBuilding } from "react-icons/tb";

import "../styles/datamanager.scss";
import Tracker from "./Tracker";
import DataEntry from "./DataEntry";

const DataManager = () => {
  const [trackerActive, setTrackerActive] = useState(false);
  return (
    <>
      <div className="top-bar">
        <div className="left-part">
          <div
            className={`${trackerActive ? "" : "active-btn"}`}
            onClick={() => setTrackerActive(false)}
          >
            <TbBuilding className={`${trackerActive ? "" : "active-btn"}`} />
            <span>DATA ENTRY</span>
          </div>
          <div
            className={`${trackerActive ? "active-btn" : ""}`}
            onClick={() => setTrackerActive(true)}
          >
            <TbBuilding className={`${trackerActive ? "active-btn" : ""}`} />
            <span>TRACKER</span>
          </div>
        </div>
        <div className="right-part1">
          <div>
            <span>For:</span>
            <select name="" id="">
              <option value="">FY 2023-24</option>
              <option value="">FY 2022-23</option>
              <option value="">FY 2021-22</option>
              <option value="">FY 2020-21</option>
              <option value="">FY 2019-20</option>
            </select>
          </div>
          <div className="btn">
            <span>Submit for Approval</span>
          </div>
        </div>
      </div>
      {trackerActive ? <Tracker /> : <DataEntry />}
    </>
  );
};

export default DataManager;
