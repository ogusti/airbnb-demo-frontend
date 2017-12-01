import React from "react";
import styled from "styled-components";
import internet from "./internet.svg";
import family from "./family.svg";
import parking from "./parking.svg";
import wifi from "./wifi.svg";
import downArrow from "../downArrow.svg";

const Amenities = styled.ul`
  font-size: 16px;
  color: #383838;
  padding: 23px 0 23px 0;
  border-bottom: 1px solid #eaebf0;
  font-family: CircularAir-Light, sans-serif;
`;

const Title = styled.h3`
  font-family: CircularAir-Book, sans-serif;
  color: #383838;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`;

const TopRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

const BottomRow = styled.div`
  display: flex;
  margin-top: 16px;

  @media only screen and (min-width: 320px) {
    margin-top: 24px;
  }
`;

const Amenity = styled.li`
  display: flex;
  align-items: center;
  width: 50%;
  font-family: CircularAir-Light, sans-serif;
  font-size: 14px;
  color: #383838;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 320px) {
    font-size: 16px;
  }
`;

const Img = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-family: CircularAir-Book, sans-serif;
  font-size: 16px;
  padding: 0px;
  margin-top: 23px;
  color: #0f7276;
  display: block;
`;

const ShowAllButton = styled.button`
  border: none;
  background-color: white;
  font-family: CircularAir-Book, sans-serif;
  font-size: 16px;
  padding: 0px;
  margin-top: 23px;
  color: #0f7276;
  display: block;
  cursor: pointer;
`;
const ShowAllText = styled.span`
  margin-right: 8px;
`;

const ShowAllImage = styled.img`
  vertical-align: middle;
`;

export default () => (
  <Amenities>
    <Title>Amenities</Title>
    <TopRow>
      <Amenity>
        <Img src={internet} />
        Internet
      </Amenity>
      <Amenity>
        <Img src={family} />
        Family/kid friendly
      </Amenity>
    </TopRow>
    <BottomRow>
      <Amenity>
        <Img src={wifi} />
        Wireless Internet
      </Amenity>
      <Amenity>
        <Img src={parking} />
        Free parking on premises
      </Amenity>
    </BottomRow>
    <ShowAllButton>
      <ShowAllText>Show all amenities</ShowAllText>
      <ShowAllImage src={downArrow} />
    </ShowAllButton>
  </Amenities>
);
