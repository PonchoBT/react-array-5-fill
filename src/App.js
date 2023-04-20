import React from "react";

const names = Array(5).fill("");

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>Elemento {index}</li>
      ))}
    </ul>
  );
}

export default NameList;
