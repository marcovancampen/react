import React, { useState, useEffect } from "react";

const Heading = ({ content }) => {
  const [naam, setNaam] = useState();
  useEffect(() => {
    console.log("test");
    setNaam(content);
  }, []);

  const test = () => {
    alert("je moeder");
  };

  return (
    <div>
      <h1>{naam}</h1>
      <button onClick={() => setNaam(naam + 1)}>klik</button>
    </div>
  );
};

export default Heading;
