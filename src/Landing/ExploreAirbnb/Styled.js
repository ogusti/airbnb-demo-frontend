import styled from "styled-components";
import ButtonArrow from "./buttonArrow.svg";

export const Title = styled.h1`
  font: 32px "CircularAir-Bold", sans-serif;
  line-height: 34px;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  width: 96px;
  height: 72px;
  @media only screen and (max-width: 400px) {
    width: auto;
    height: auto;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;
