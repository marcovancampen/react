import React from "react";
const heading = ({ content }) => {
  const test = () => {
    alert("je moeder");
  };
  return (
    <div>
      <h1>{content}</h1>
      <button onClick={test}>je moeder</button>
    </div>
  );
};
export default heading;
