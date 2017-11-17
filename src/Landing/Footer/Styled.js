import styled from "styled-components";
import downarrow from "../../UI/downarrow.svg";

export const Footer = styled.footer`
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-bottom: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 36px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    margin-left: 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 18px;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 400px) {
    margin-top: 12px;
  }
`;

export const Rights = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-left: 13px;
  white-space: nowrap;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const LinkList = styled.a`
  display: block;
  margin: 8px 0;
  color: #636363;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-left: 25px;
  vertical-align: middle;
  color: #636363;
`;

export const Select = styled.div`
  flex-basis: 23.3%;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
`;

export const DesignedSelect = styled.div`
  display: flex;
  padding: 20px 0 20px 14px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
  justify-content: space-between;
  font-family: CircularAir-Light, sans-serif;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }

  &:after {
    content: "";
    width: 16px;
    height: 9px;
    margin-right: 13px;
    margin-left: 12px;
    background-image: url(${downarrow});
    background-repeat: no-repeat;
  }
`;

export const BlockWithLinks = styled.div`
  white-space: nowrap;
  font-size: 15px;
  line-height: 18px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
