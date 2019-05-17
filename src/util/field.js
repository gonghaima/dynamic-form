import React from "react";
import TextInput from "./TextInput";
export default props => {
  if (props.field.component === "input")
    return <TextInput key={props.id} {...props} />;
  return <span>Not implemented</span>;
};
