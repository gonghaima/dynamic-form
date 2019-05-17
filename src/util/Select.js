import React from "react";
export default ({ field: { options }, setVal }) => (
  <select>
    {options.map(opt => {
      return <option>{opt.value}</option>;
    })}
  </select>
);
