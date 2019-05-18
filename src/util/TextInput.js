import React from "react";
export default ({ field, setVal }) => {
  /** validate here onChange */
  //const [currentInputValue, setCValue] = useState(field.initialValue);
  return (
    <input
      type="text"
      defaultValue={field.initialValue}
      onChange={() => {}}
      onBlur={e => setVal({ ...field, initialValue: e.target.value })}
    />
  );
};
