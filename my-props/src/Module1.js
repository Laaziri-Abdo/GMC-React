import React from "react";

export default function Module1(props) {
  return (
    <>
      <label >{props.inputLabel}</label>
      <input name={props.inputName} type="text" />
      <div>{props.children}</div>
    </>
  );
}
