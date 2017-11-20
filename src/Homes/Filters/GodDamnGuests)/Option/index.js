import React from "react";
import styled from "styled-components";
import minusImg from "./img/minus.svg";
import plusImg from "./img/plus.svg";

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 18px;
`;

const Title = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const Note = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-top: 7px;
`;

const Stepper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.img`cursor: pointer;`;

const Counter = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  font-weight: 200;
  padding: 0px 19px;
`;

export default props => (
  <Option>
    <div>
      <Title>{props.title}</Title>
      {props.note && <Note>{props.note}</Note>}
    </div>
    <Stepper>
      <Button src={minusImg} />
      <Counter>0</Counter>
      <Button src={plusImg} />
    </Stepper>
  </Option>
);
