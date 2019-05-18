import React from "react";
export default ({ field, setVal }) => (
  <select onChange={e => setVal({ ...field, initialValue: e.target.value })}>
    {field.options.map((opt, idx) => {
      return <option key={`${opt.title}${idx}`}>{opt.value}</option>;
    })}
  </select>
);
