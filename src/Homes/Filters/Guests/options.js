import React from "react";
import styled from "styled-components";
import Options from "./Options";

export default props => (
  <div>
    <Content>
      <Option title="Adults" />
      <Option title="Children" note="Ages 2 — 12" />
      <InfantsWrapper>
        <Option title="Infants" note="Under 2" />
      </InfantsWrapper>
    </Content>
  </div>
);
