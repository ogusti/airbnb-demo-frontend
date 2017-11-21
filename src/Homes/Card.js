import React from "react";
import styled from "styled-components";
import StarPicture from "../UI/star.svg";

export const Dot = styled.span``;

export const Card = styled.div`margin-bottom: 40px;`;

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

export const Star = styled.img`margin-right: 4px;`;

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
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const BottomInfo = styled.div`
  text-align: left;
  margin-top: 4px;
`;

export const SubInfo = styled.span`font-size: 12px;`;

export default function(props) {
  return (
    <div className="col-xs-12 col-md-6 col-lg-6">
      <Card>
        <Img src={props.img} alt={props.alt} />
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
    </div>
  );
}
