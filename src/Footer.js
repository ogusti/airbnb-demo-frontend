import React from "react";
import styled from "styled-components";
import twitter from "./Footer/twitter.svg";
import facebook from "./Footer/facebook.svg";
import instagram from "./Footer/instagram.png";
import logo from "./Footer/logo.svg";
import downarrow from "./Footer/downarrow.svg";

const Footer = styled.footer`
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 36px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Rights = styled.div`
  font-size: 12px;
  margin-left: 13px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const LinkList = styled.a`
  display: block;
  margin: 8px 0;
  color: #636363;
`;

const A = styled.a`
  text-decoration: none;
  margin-left: 25px;
  vertical-align: middle;
  color: #636363;
`;

const Select = styled.div`margin-bottom: 152px;`;

const OriginalSelect = styled.select`opacity: 0;`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DesignedSelect = styled.div`
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

export default function() {
  return (
    <Footer>
      <div className="container">
        <Content>
          <Select>
            <OriginalSelect>
              <option value="Zhenya" />
              <option value="Poschadi" />
            </OriginalSelect>
            <DesignedSelect>
              <span>English</span>
            </DesignedSelect>
            <OriginalSelect>
              <option value="" />
              <option value="" />
            </OriginalSelect>
            <DesignedSelect>
              <span>United States dollar</span>
            </DesignedSelect>
          </Select>
          <div>
            <Title>Airbnb</Title>
            <LinkList href="">About us</LinkList>
            <LinkList href="">Careers</LinkList>
            <LinkList href="">Press</LinkList>
            <LinkList href="">Policies</LinkList>
            <LinkList href="">Help</LinkList>
            <LinkList href="">Diversity & Belongin</LinkList>
          </div>
          <div>
            <Title>Discover</Title>
            <LinkList href="">Trust & Safety</LinkList>
            <LinkList href="">Travel Credit</LinkList>
            <LinkList href="">Airbnb Citizen</LinkList>
            <LinkList href="">Business Travel</LinkList>
            <LinkList href="">Guidebooks</LinkList>
            <LinkList href="">Airbnbmag</LinkList>
          </div>
          <div>
            <Title>Hosting</Title>
            <LinkList href="">Why Host</LinkList>
            <LinkList href="">Hospitality</LinkList>
            <LinkList href="">Responsible Hosting</LinkList>
            <LinkList href="">Community Center</LinkList>
          </div>
        </Content>
        <Wrapper>
          <Logo>
            <img src={logo} alt="logo" />
            <Rights>© Airbnb Inc.</Rights>
          </Logo>
          <Nav>
            <A href="">Terms</A>
            <A href="">Privacy</A>
            <A href="">Site map</A>
            <A>
              <img src={facebook} alt="facebook" />
            </A>
            <A>
              <img src={twitter} alt="twitter" />
            </A>
            <A>
              <img src={instagram} alt="instagram" />
            </A>
          </Nav>
        </Wrapper>
      </div>
    </Footer>
  );
}
