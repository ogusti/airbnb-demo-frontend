import React from "react";
import styled from "styled-components";
import Option from "./Option";
import home1Icon from "./home1.svg";
import home2Icon from "./home2.svg";
import home3Icon from "./home3.svg";

const Wrapper = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 9px;
  padding-bottom: 0px;
`;

export default props => (
  <Wrapper>
    <Option
      title="Entrie home"
      description="Have a place to yourself"
      icon={home1Icon}
    />
    <Option
      title="Private room"
      description="Have your own room and share some common spaces"
      icon={home2Icon}
    />
    <Option
      title="Shared room"
      description="Stay in a shared space, like a common room"
      icon={home3Icon}
    />
  </Wrapper>
);
