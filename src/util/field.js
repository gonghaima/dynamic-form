import React from "react";
import TextInput from "./TextInput";
export default props => {
  return <TextInput key={props.id} {...props} />;
};
