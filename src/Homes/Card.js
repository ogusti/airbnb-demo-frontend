import React from "react";
import styled from "styled-components";
import StarPicture from "../UI/star.svg";

export const Dot = styled.span``;

export const Card = styled.div`
  margin-right: 16px;
  margin-bottom: 40px;
`;

export const TopInfo = styled.div`
  margin-top: 7px;
  text-align: left;
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

export const Star = styled.img`margin: 7px 4px 0 0;`;

export const MiddleInfo = styled.div`
  text-align: left;
  margin-top: 7px;

  @media (min-width: 320px) {
    font-size: 13px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  display: inline;
  font-size: 15px;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const BottomInfo = styled.div`text-align: left;`;

export const SubInfo = styled.span`font-size: 12px;`;

export default function(props) {
  return (
    <Card>
      <img src={props.img} alt={props.alt} />
      <TopInfo>
        <Price>${props.price}</Price>
        <Description>{props.description}</Description>
      </TopInfo>
      <MiddleInfo>
        {props.type} <Dot>·</Dot> {props.beds}
      </MiddleInfo>
      <BottomInfo>
        <Stars>
          <Star src={StarPicture} alt="star" />
          <Star src={StarPicture} alt="star" />
          <Star src={StarPicture} alt="star" />
          <Star src={StarPicture} alt="star" />
          <Star src={StarPicture} alt="star" />
        </Stars>
        <SubInfo>
          {props.sub} <Dot>·</Dot> Superhost
        </SubInfo>
      </BottomInfo>
    </Card>
  );
}
