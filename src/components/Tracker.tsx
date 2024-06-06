import React from "react";
import { MdTrackChanges, MdOutlineReviews } from "react-icons/md";
import "../styles/tracker.scss";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Tracker = () => {
  return (
    <>
      <div className="tracker-bar">
        <div className="left-part">
          <div>
            <div className="first">
              <p>PENDING TRACKERS</p>
              <span>45/60</span>
            </div>
            <div className="logo1">
              <MdTrackChanges style={{ width: "25px", height: "25px" }} />
            </div>
          </div>
          <div>
            <div className="first">
              <p>PENDING REVIEWS</p>
              <span>3</span>
            </div>
            <div className="logo1">
              <MdOutlineReviews style={{ width: "25px", height: "25px" }} />
            </div>
          </div>
        </div>
        <div>
          <span>Autosaved at 12:31 pm</span>
        </div>
      </div>
      <div className="search-component">
        <form>
          <div className="">
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                style={{ height: "12px", width: "12px" }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            <input
              type="search"
              id="search-dropdown"
              className="p-2.5 w-full z-20 text-sm text-gray-900  rounded-lg border-s-2 border border-gray-500 focus:border-blue-500 "
              placeholder="Search for business unit..."
              required
            />
          </div>
        </form>
      </div>
      <Table className="table">
        <Thead>
          <Tr>
            <Th>MONTH</Th>
            <Th>STATUS</Th>
            <Th>COMPLETION %</Th>
            <Th>BUSINESS UNIT</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Jan 2023</Td>
            <Td>
              <span className="pending">PENDING APPROVAL (1/12)</span>
            </Td>
            <Td>20%</Td>
            <Td>Business unit 1</Td>
          </Tr>
          <Tr>
            <Td>Feb 2023</Td>
            <Td>
              <span className="approved">APPROVED (2/12)</span>
            </Td>
            <Td>30%</Td>
            <Td>Business unit 1</Td>
          </Tr>
          <Tr>
            <Td>Mar 2023</Td>
            <Td className="incomplete">INCOMPLETE (4/12)</Td>
            <Td>50%</Td>
            <Td>Business unit 1</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default Tracker;
