import React from "react";

export const SubMember = (props) => {
  const { memberSub, onClickSub } = props;
  return (
    <div className="starting-area">
      <p className="title">Starting member</p>
      <ul>
        {memberSub.map((member, index) => {
          return (
            <div key="member" className="list-row">
              <li>{member}</li>
              <button onClick={() => onClickSub(index)}>sub</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
