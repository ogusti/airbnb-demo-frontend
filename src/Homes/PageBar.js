import React from "react";
import styled from "styled-components";

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

export const NavigationList = styled.nav`
  display: flex;
  justify-content: center;
`;

export const PageBar = styled.div`text-align: center;`;

export const Interpretation = styled.span`
  color: #383838;
  display: inline-block;
  font-weight: bold;
  margin-top: 21px;
  margin-bottom: 39px;
`;

export const Recommendation = styled.p`
  color: #636363;
  margin: 0 0 25px 0;
`;

export default function() {
  return (
    <PageBar>
      <NavigationList>
        <Link href="#">1</Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <Link href="#">...</Link>
        <Link href="#">17</Link>
        <Link href="#">></Link>
      </NavigationList>
      <Interpretation>1 – 18 of 300+ Rentals</Interpretation>
      <Recommendation>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Recommendation>
    </PageBar>
  );
}
