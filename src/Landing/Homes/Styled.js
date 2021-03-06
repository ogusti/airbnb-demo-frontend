import ButtonArrow from "../../UI/buttonArrow.svg";
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

export const Headline = styled.h2`
  font-size: 32px;
  margin: 0;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`margin-right: 17px;`;

export const SeeAll = styled.div`margin: auto 0;`;
