import React from "react";
import "./MemberItem.css";
import { IoMdPerson } from "react-icons/io";

export const MemberItem = ({ name, selected = false }) => {
  return (
    <div className="member-item">
      <div className="member-info">
        <span className="member-icon">
          <IoMdPerson color={selected ? "#242E4C" : "#9297A6"} />
        </span>
        <span className={`member-name ${!selected ? "dimmed" : ""}`}>
          {name}
        </span>
      </div>
      <div className={`selection-indicator ${selected ? "selected" : ""}`}>
        {selected && <span className="checkmark"></span>}
      </div>
    </div>
  );
};
