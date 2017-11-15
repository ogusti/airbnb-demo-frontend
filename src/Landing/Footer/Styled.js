import styled from "styled-components";
import downarrow from "../../UI/downarrow.svg";

export const Footer = styled.footer`
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 36px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Rights = styled.div`
  font-size: 12px;
  margin-left: 13px;
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
    justify-content: space-between;
    flex-basis: 100%;
  }
`;

export const OriginalSelect = styled.select`opacity: 0;`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
`;

export const DesignedSelect = styled.div`
  display: flex;
  height: 48px;
  width: 230px;
  padding-left: 14px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 5px;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;

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
  @media (max-width: 576px) {
    display: none;
  }
`;
