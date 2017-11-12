import ButtonArrow from "../buttonArrow.svg";
import styled from "styled-components";

export const RightButton = styled.div`
  position: absolute;
  right: -0.5%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-image: url(${ButtonArrow});
  background-size: 10px 18px;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  top: 83px;

  @media only screen and (min-width: 1200px) {
    top: 105px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Link = styled.a`
  padding-right: 10px;
  display: inline-block;
`;
export const Headline = styled.h2`font-size: 32px;`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 24px;
`;
export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const Description = styled.p`
  display: inline;
  font-size: 15px;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;
export const TopInfo = styled.div`
  margin-top: 7px;
  text-align: left;
  font-weight: bold;
`;
export const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;
export const MiddleInfo = styled.div`
  text-align: left;
  margin-top: 7px;
`;
export const BottomInfo = styled.div`text-align: left;`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

export const Star = styled.img`margin: 7px 4px 0 0;`;

export const Card = styled.div`margin-right: 17px;`;

export const Wrapper = styled.div`margin-right: 17px;`;

export const SeeAll = styled.div`margin: auto 0;`;

export const Dot = styled.span``;

export const DopInfo = styled.span`font-size: 12px;`;
