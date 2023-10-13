import React, { useState } from "react";
import "./styles.css";
import { InputMember } from "./component/InputMember";
import { SelectMember } from "./component/SelectMember";
import { SubMember } from "./component/SubMember";

export const App = () => {
  const [memberText, setMemberText] = useState("");
  const [memberEverton, setMemberEverton] = useState([]);
  const [startingEverton, setStartingEverton] = useState([]);

  const onChangeMemberText = (event) => setMemberText(event.target.value);

  const onClickAdd = () => {
    if (memberText === "") return;
    const newMember = [...memberEverton, memberText];
    setMemberEverton(newMember);
    setMemberText("");
    //alert(memberText);
  };

  const onClickDelete = (index) => {
    const newMember = [...memberEverton];
    newMember.splice(index, 1);
    setMemberEverton(newMember);
    //alert(index);
  };

  const onClickSelect = (index) => {
    const newStarting = [...startingEverton, memberEverton[index]];
    setStartingEverton(newStarting);
    const newMember = [...memberEverton];
    newMember.splice(index, 1);
    setMemberEverton(newMember);
    //alert(index);
  };

  const onClickSub = (index) => {
    const newMember = [...memberEverton, startingEverton[index]];
    setMemberEverton(newMember);
    const newStarting = [...startingEverton];
    newStarting.splice(index, 1);
    setStartingEverton(newStarting);
    //alert(index);
  };

  return (
    <>
      <InputMember
        memberText={memberText}
        onChange={onChangeMemberText}
        onClick={onClickAdd}
        disabled={memberEverton.length >= 35}
      />
      {memberEverton.length >= 35 && (
        <p style={{ color: "red" }}>※登録できる選手は35人までです</p>
      )}
      <SelectMember
        members={memberEverton}
        onClickSelect={onClickSelect}
        onClickDelete={onClickDelete}
      />
      <SubMember memberSub={startingEverton} onClickSub={onClickSub} />
    </>
  );
};
