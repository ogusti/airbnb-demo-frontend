import styled from "styled-components";
import searchPicture from "./search.svg";

export const Header = styled.header`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  font: 16px "CircularAir-Book", sans-serif;
  line-height: 24px;
  background-image: url(${searchPicture});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin-left: 25px;
`;
