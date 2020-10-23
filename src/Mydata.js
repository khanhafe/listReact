import React from "react";

const mydata = (props) => {
  return (
    <p onClick={props.click}>
      Hello my name is {props.name} and my Age is {props.age}.
      <span style={{ color: "red" }}> {props.children}</span>
    </p>
  );
};
export default mydata;
