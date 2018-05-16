import React from "react";
import styled from "styled-components";
import arrow from "../arrow.svg";

export const Link = styled.a`
  display: block;
  text-align: center;
  line-height: 32px;
  color: #008489;
  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;

  &:first-child {
    background-color: #008489;
    color: white;
    border-radius: 50%;
  }

  &:last-child {
    border: 1px solid #008489;
    border-radius: 50%;
    line-height: 28px;
  }
`;

const NavigationList = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export default function() {
  return (
    <NavigationList>
      <Link href="#">1</Link>
      <Link href="#">2</Link>
      <Link href="#">3</Link>
      <Link href="#">...</Link>
      <Link href="#">17</Link>
      <Link href="#">
        <img src={arrow} alt="next page" />
      </Link>
    </NavigationList>
  );
}
