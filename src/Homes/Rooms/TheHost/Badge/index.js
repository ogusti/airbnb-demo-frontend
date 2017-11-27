import React from "react";
import styled from "styled-components";
import badge from "./badge.png";

const Badge = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media only screen and (min-width: 320px) {
    margin-top: 0px;
    margin-left: 32px;
  }
`;

const BadgeImage = styled.img``;

const Text = styled.span`
  font-size: 18px;
  color: #636363;
  margin-left: 16px;
`;

export default props => (
  <Badge>
    <BadgeImage src={badge} />
    <Text>Verified</Text>
  </Badge>
);
