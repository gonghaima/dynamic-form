import React from "react";
export default ({ field, setVal }) => (
  <input
    type="text"
    defaultValue={field.initialValue}
    onChange={e => setVal({ ...field, initialValue: e.target.value })}
  />
);
