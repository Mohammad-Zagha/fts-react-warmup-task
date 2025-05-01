import React from "react";
import { MemberItem } from "./MemberItem";
import { Button } from "./Button";
import "./TeamSelectionCard.css";
import { SearchInput } from "./SearchInput";

export const TeamSelectionCard = () => {
  const members = [
    { name: "Corolien Bloeme", selected: false },
    { name: "Sun Jun", selected: true },
    { name: "Song Bao", selected: false },
    { name: "Olivia Arribas", selected: true },
    { name: "Bonginkosi Mdladlana", selected: false },
    { name: "Arina Belomestnykh", selected: true },
    { name: "Jacqueline Likoki", selected: true },
  ];

  return (
    <div className="team-selection-card">
      <h2 className="card-title">Add members to Front-end development team</h2>
      <div className="wrapper">
        <SearchInput placeholder="Find members" />

        <div className="members-list">
          {members.map((member, index) => (
            <MemberItem
              key={index}
              name={member.name}
              selected={member.selected}
            />
          ))}
        </div>

        <div className="action-buttons">
          <Button text="Cancel" variant="secondary" />
          <Button text="SAVE" variant="primary" />
        </div>
      </div>
    </div>
  );
};
