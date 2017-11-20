import React from "react";
import styled from "styled-components";
import Option from "./Option";
import Wrapper from "../SingleFilterWrapper";

const Content = styled.div`
  padding-left: 16px;
  padding-right: 14px;
  padding-top: 13px;
  padding-bottom: 16px;
`;

const InfantsWrapper = styled.div`padding-top: 5px;`;

export default props => (
  <Wrapper onCancel={props.onCancel} onApply={props.onApply}>
    <Content>
      <Option title="Adults" />
      <Option title="Children" note="Ages 2 — 12" />
      <InfantsWrapper>
        <Option title="Infants" note="Under 2" />
      </InfantsWrapper>
    </Content>
  </Wrapper>
);
