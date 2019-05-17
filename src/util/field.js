import React from "react";
import TextInput from "./TextInput";
import Select from "./Select";
export default props => {
  if (props.field.component === "input")
    return <TextInput key={`${props.field.name}${props.id}`} {...props} />;
  if (props.field.component === "select")
    return <Select key={`${props.field.name}${props.id}`} {...props} />;
  return <span key={`notImplemented${props.id}`}>Not implemented</span>;
};
