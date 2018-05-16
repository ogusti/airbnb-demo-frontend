import React from "react";
import styled from "styled-components";

const Option = styled.div`
  margin-top: 24px;
  margin-left: 16px;
  display: flex;
`;

const State = styled.div`
  width: 40px;
  height: 40px;
  right: 24px;
  position: absolute;
  bottom: -1px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;
  color: #383838;
`;

const Description = styled.p`
  font-family: CircularAir-Light, sans-serif;
  margin-top: 4px;
  font-size: 14px;
  color: #383838;
  width: 200px;
  white-space: normal;
`;

const Checkbox = styled.div`
  width: 64px;
  height: 40px;
  position: absolute;
  right: 16px;
  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  margin-top: 16px;
  border-radius: 24px;
`;

export default props => (
  <Option>
    <div>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
    <Checkbox>f</Checkbox>
  </Option>
);
