import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import starPicture from "../../../UI/star.svg";

const Navigation = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-right: 4px;
`;
const PerNight = styled.span`
  font: 12px;
  color: #636363;
`;

const RequestButton = styled.button`
  border-radius: 4px;
  font-family: CircularAir-Book, sans-serif;
  font-weight: bold;
  color: white;
  background-color: #ff5a5f;
  border: none;
  padding: 12px 16px;
  font-size: 16px;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
  }
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 11px;
`;

export const Star = styled.img`
  margin-right: 4px;
`;

export const Count = styled.span`
  font-size: 12px;
`;

export default () => (
  <div className="container">
    <Navigation>
      <div>
        <div>
          <Price>$41</Price>
          <PerNight>per night</PerNight>
        </div>
        <Stars>
          <Star src={starPicture} alt="star" />
          <Star src={starPicture} alt="star" />
          <Star src={starPicture} alt="star" />
          <Star src={starPicture} alt="star" />
          <Star src={starPicture} alt="star" />
        </Stars>
        <Count>111</Count>
      </div>
      <RequestButton>Request to book</RequestButton>
    </Navigation>
  </div>
);
