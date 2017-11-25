import React from "react";
import styled from "styled-components";
import downArrowSvg from "../../UI/downarrow.svg";
import starPicture from "../../UI/star.svg";

const Overview = styled.div`
  padding: 15px 24px 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  background-color: #ffffff;

  @media only screen and (min-width: 320px) {
  }
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #383838;
  font-size: 24px;
  font-weight: bold;
`;

const PerNight = styled.span`
  font: 12px;
  color: #636363;
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 11px;
`;

export const Star = styled.img`
  margin-right: 4px;
`;

const ControlsGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 0.75rem;
  border: 1px solid rgba(118, 118, 118, 0.2);
  color: #636363;
  font-size: 14px;
  font-family: inherit;
  background: #ffffff;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  font-size: 12px;
  text-align: center;
`;

export const Count = styled.span`
  font-size: 12px;
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

const CheckInInput = Input.extend`
  border-right: none;
`;

const GuestsButton = styled.button`
  margin-top: 8px;
  padding: 12px 208px 12px 12px;
  margin-bottom: 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  color: #636363;
  font-size: 14px;
  text-align: left;
  background: #ffffff url(${downArrowSvg}) right 20px center no-repeat;
  display: block;
  width: 100%;
  font-family: inherit;
  vertical-align: middle;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

export default function() {
  return (
    <Overview>
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
      <ControlsGroup>
        <Label>
          Check in
          <CheckInInput placeholder="mm/dd/yyyy" name="checkin" />
        </Label>
        <Label>
          Check out
          <Input placeholder="mm/dd/yyyy" name="checkout" />
        </Label>
      </ControlsGroup>
      <Label>
        Guests
        <GuestsButton>1 guest</GuestsButton>
      </Label>
      <RequestButton>Request to book</RequestButton>
      <Paragraph>You won’t be charged yet</Paragraph>
    </Overview>
  );
}
