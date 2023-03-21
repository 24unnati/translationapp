import React from "react";

const Langauage = ({ onChange }) => {
  return (
    <select
      onChange={onChange}
      style={{
        width: "200px",
        height: "40px",
        fontSize: "20px",
        margin: "100px 100px",
      }}
    >
      <option>Select language</option>
      <option value={"en"}>English</option>
      <option value={"ch"}>Chinese</option>
      <option value={"ko"}>Korean</option>
      <option value={"gu"}>Gujarati</option>
    </select>
  );
};

export default Langauage;
