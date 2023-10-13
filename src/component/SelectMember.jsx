import React from "react";

export const SelectMember = (props) => {
  const { members, onClickSelect, onClickDelete } = props;
  return (
    <div className="member-area">
      <p className="title">EVETRON member</p>
      <ul>
        {members.map((member, index) => {
          return (
            <div key="member" className="list-row">
              <li>{member}</li>
              <button onClick={() => onClickSelect(index)}>select</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
