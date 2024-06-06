import React, { useState } from "react";
import TableRow from "./TableRow";
import '../styles/dataentry.scss'
export interface Assessment {
  title: string;
  type: string;
  suppliers: number;
  score: string | number;
  risk: "Low" | "Medium" | "High";
  status: "Pending" | "Complete";
  result: string;
  actions: string[];
  selected?: boolean;
}
const initialData: Assessment[] = [
  {
    title: "Assessment 1",
    type: "BRSR",
    suppliers: 20,
    score: "-",
    risk: "Medium",
    status: "Pending",
    result: "-",
    actions: ["View", "Delete"],
  },
  {
    title: "Assessment 2",
    type: "BRSR",
    suppliers: 25,
    score: 98,
    risk: "Low",
    status: "Complete",
    result: "View",
    actions: ["Share", "Delete"],
  },
  {
    title: "Assessment 3",
    type: "BRSR",
    suppliers: 35,
    score: 22,
    risk: "High",
    status: "Complete",
    result: "View",
    actions: ["Share", "Delete"],
  },
  {
    title: "Assessment 3",
    type: "Custom",
    suppliers: 49,
    score: 23,
    risk: "Medium",
    status: "Complete",
    result: "View",
    actions: ["Share", "Delete"],
  },
  {
    title: "Assessment 3",
    type: "Custom",
    suppliers: 100,
    score: 42,
    risk: "Medium",
    status: "Complete",
    result: "View",
    actions: ["Share", "Delete"],
  },
];
const DataEntry = () => {
  const [data, setData] = useState<Assessment[]>(initialData);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map((item) => ({ ...item, selected: newSelectAll })));
  };

  const handleRowChange = (index: number) => {
    const newData = [...data];
    newData[index].selected = !newData[index].selected;
    setData(newData);
    setSelectAll(newData.every((item) => item.selected));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </th>
            <th>ASSESSMENT TITLE</th>
            <th>TYPE</th>
            <th>NO. OF SUPPLIERS</th>
            <th>SCORE</th>
            <th>RISK CLASSIFICATION</th>
            <th>STATUS</th>
            <th>RESULT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              index={index}
              handleRowChange={handleRowChange}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataEntry;
