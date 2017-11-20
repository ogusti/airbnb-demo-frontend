import React from "react";
import styled from "styled-components";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Value = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 18px;
`;

const Title = styled.div`
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const Note = styled.div`
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-top: 7px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.img`cursor: pointer;`;

const Number = styled.div`
  font-size: 18px;
  color: #383838;
  font-weight: 200;
  padding: 0px 19px;
`;

export default props => (
  <Value>
    <div>
      <Title>{props.title}</Title>
      {props.note && <Note>{props.note}</Note>}
    </div>
    <Option>
      <Button src={minus} />
      <Number>0</Number>
      <Button src={plus} />
    </Option>
  </Value>
);
