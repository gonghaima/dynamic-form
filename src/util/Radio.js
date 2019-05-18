import React from "react";
export default ({ field, setVal }) => {
  /** validate here onChange */
  //const [currentInputValue, setCValue] = useState(field.initialValue);
  const style = {
    display: "flex"
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
