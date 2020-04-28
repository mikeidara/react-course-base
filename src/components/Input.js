import React from "react";

const Input = ({ handleMemberChange, member }) => (
  <input type="text" value={member} onChange={handleMemberChange} />
);

export default Input;
