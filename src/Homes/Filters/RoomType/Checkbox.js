import React from "react";
import styled from "styled-components";
import iconCheckOn from "./check.svg";

const Trigger = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;

  background-color: ${props => (props.isCheck ? "#0F7276" : "#fff")};
  background-image: url(${props => (props.isCheck ? iconCheckOn : "none")});
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  cursor: pointer;
`;

const Checkbox = props => {
  const toggle = () => {
    props.onChange(!props.checked, props.id);
  };

  return <Trigger isCheck={props.checked} onClick={toggle} />;
};

export default Checkbox;
