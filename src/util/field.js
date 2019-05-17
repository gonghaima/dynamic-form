import React from "react";
export default (field, key, setVal) => {
  return (
    <input
      type="text"
      key={key}
      defaultValue={field.initialValue}
      onChange={e => setVal({ ...field, initialValue: e.target.value })}
    />
  );
};
