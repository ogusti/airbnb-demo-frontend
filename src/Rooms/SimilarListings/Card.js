import React from "react";
import styled from "styled-components";
import starPicture from "../../UI/star.svg";
import { Link as RLink } from "react-router-dom";

export const Dot = styled.span``;

export const Card = styled.div`
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TopInfo = styled.div`
  text-align: left;
  margin-top: 1px;
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

export const Star = styled.img`
  margin-right: 4px;
`;

export const MiddleInfo = styled.div`
  text-align: left;
  font-family: CircularAir-Light, sans-serif;
  margin-top: 1px;

  @media (min-width: 320px) {
    font-size: 13px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  font-weight: bold;
  display: inline;
  font-size: 15px;
  line-height: 18px;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const BottomInfo = styled.div`
  text-align: left;
  margin-top: 4px;
`;

export const Price = styled.span`
  font-size: 15px;
  font-family: CircularAir-Light, sans-serif;
`;

export const TypeInfo = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0px;
`;

export const Count = styled.span`
  font-size: 12px;
`;

export default function(props) {
  return (
    <div className="col-xs-4 col-md-4 col-lg-4">
      <Card>
        <RLink to="/rooms">
          <Img src={props.img} alt={props.alt} />
          <TopInfo>
            <TypeInfo>
              {props.type} <Dot>·</Dot> {props.beds}
            </TypeInfo>
            <Description>{props.description}</Description>
          </TopInfo>
          <Price>${props.price} per night</Price>
          <BottomInfo>
            <Stars>
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
            </Stars>
            <Count>{props.count}</Count>
          </BottomInfo>
        </RLink>
      </Card>
    </div>
  );
}
