import React, { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";

export default props => {
  //const { state, dispatch } = useStore();
  const { state, dispatch } = props.store;
  const [localState, setState] = useState({ key: "" });

  const handleChange = e => {
    setState({ key: e.target.value });
  };

  useEffect(() => {
    dispatch({
      type: "updateTemplateField",
      payload: { key: props.field, value: localState.key }
    });
  }, [dispatch, localState.key, props.field]);
  const handleBlur = e => {
    dispatch({
      type: "updateTemplateField",
      payload: { key: e.target.id, value: localState.key }
    });
  };
  return (
    <div className="input-field col s12">
      <input
        id={props.field}
        type="text"
        className="blue-grey lighten-5"
        onChange={handleChange}
        value={localState.key}
        onBlur={handleBlur}
      />
      <label htmlFor={props.field} className="left-indent">
        {props.title}
      </label>
      <small className="red-text">
        {!state.template_payload[props.field].valid &&
          state.template_payload[props.field].errorMsg}
      </small>
    </div>
  );
};
