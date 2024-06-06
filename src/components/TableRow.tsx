/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";

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

interface TableRowProps {
  item: Assessment;
  index: number;
  handleRowChange: (index: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  item,
  index,
  handleRowChange,
}) => {
  const {
    title,
    type,
    suppliers,
    score,
    risk,
    status,
    result,
    actions,
    selected,
  } = item;

  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => handleRowChange(index)}
        />
      </td>
      <td data-label="ASSESSMENT TITLE">{title}</td>
      <td data-label="TYPE">{type}</td>
      <td data-label="NO. OF SUPPLIERS">{suppliers}</td>
      <td data-label="SCORE">{score}</td>
      <td data-label="RISK CLASSIFICATION" className={risk.toLowerCase()}>
        {risk}
      </td>
      <td data-label="STATUS" className={status.toLowerCase()}>
        {status}
      </td>
      <td data-label="RESULT">
        <a href="#">{result}</a>
      </td>
      <td  data-label="ACTIONS">
        <CiShare2 style={{"margin":"0px 10px"}} />
        <BsTrash />
      </td>
    </tr>
  );
};

export default TableRow;
