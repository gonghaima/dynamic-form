import React from "react";
export default ({ field, setVal }) => {
  /** validate here onChange */
  //const [currentInputValue, setCValue] = useState(field.initialValue);
  const style = {
    display: "flex"
  };
  const setRadioGroupValue = e => {
    field.initialValue = e.target.value;
    setVal(field);
  };
  return (
    <div style={style}>
      {field.options.map((opt, idx) => {
        return (
          <div key={`radiogroupoption${idx}`}>
            <input
              id={`${opt.title}${idx}`}
              name={field.name}
              type="radio"
              key={`${opt.title}radio${idx}`}
              value={opt.value}
              defaultChecked={field.initialValue === opt.value}
              onChange={setRadioGroupValue}
            />
            <label
              htmlFor={`${opt.title}${idx}`}
              key={`${opt.title}radiolabel${idx}`}
            >
              {opt.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};
