import styled from "styled-components";
import ButtonArrow from "../buttonArrow.svg";

export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

export const Paragraph = styled.p`
  margin-left: 24px;
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
