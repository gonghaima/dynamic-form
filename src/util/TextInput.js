import React, { useState } from "react";
export default ({ field, setVal }) => {
  /** validate here onChange */
  //const [currentInputValue, setCValue] = useState(field.initialValue);

  const [currentField, setCurrentField] = useState(field);

  field.valid = true;
  const required =
    currentField && currentField.required ? currentField.required : true;
  const validateTxt = ele => {
    // debugger;
    console.log("www");

    const {
      badInput,
      customError,
      patternMismatch,
      rangeOverflow,
      rangeUnderflow,
      stepMismatch,
      tooLong,
      tooShort,
      typeMismatch,
      valid,
      valueMissing
    } = ele.validity;
    const newField = { ...field, valid };
    // debugger;
    setCurrentField(newField);
  };
  return (
    <>
      <input
        type="text"
        defaultValue={field.initialValue}
        onChange={e => validateTxt(e.target)}
        onBlur={e => setVal({ ...field, initialValue: e.target.value })}
        required={required}
      />
      {currentField && currentField.valid ? <></> : <span>Required *</span>}
    </>
  );
};
