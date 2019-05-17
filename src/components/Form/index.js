import React, { useState, useEffect } from "react";
import formMatadata from "../../mocks/formData";
import generateField from "../../util/field";

export default () => {
  const data = formMatadata;
  const fields = data[0].sections[0].fields;
  const [formState, setFormState] = useState(fields);
  const setVal = updatedField => {
    let tmpFd = fields.slice().map(fd => {
      return fd.name === updatedField.name ? updatedField : fd;
    });
    setFormState(tmpFd);
  };
  useEffect(() => {
    console.log(JSON.stringify(formState));
  }, [formState]);

  return fields.map((field, id) => generateField({ field, id, setVal }));
};
