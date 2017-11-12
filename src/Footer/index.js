import React from "react";
import styled from "styled-components";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.png";
import logo from "./logo.svg";
import downarrow from "./downarrow.svg";
import {
  Footer,
  Content,
  Select,
  OriginalSelect,
  DesignedSelect,
  BlockWithLinks,
  Title,
  LinkList,
  Link,
  Wrapper,
  Logo,
  Rights,
  Nav
} from "./Styled";

export default function() {
  return (
    <Footer>
      <div className="container">
        <Content>
          <Select>
            <OriginalSelect>
              <option value="" />
              <option value="" />
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
          <BlockWithLinks>
            <Title>Airbnb</Title>
            <LinkList href="">About us</LinkList>
            <LinkList href="">Careers</LinkList>
            <LinkList href="">Press</LinkList>
            <LinkList href="">Policies</LinkList>
            <LinkList href="">Help</LinkList>
            <LinkList href="">Diversity & Belongin</LinkList>
          </BlockWithLinks>
          <BlockWithLinks>
            <Title>Discover</Title>
            <LinkList href="">Trust & Safety</LinkList>
            <LinkList href="">Travel Credit</LinkList>
            <LinkList href="">Airbnb Citizen</LinkList>
            <LinkList href="">Business Travel</LinkList>
            <LinkList href="">Guidebooks</LinkList>
            <LinkList href="">Airbnbmag</LinkList>
          </BlockWithLinks>
          <BlockWithLinks>
            <Title>Hosting</Title>
            <LinkList href="">Why Host</LinkList>
            <LinkList href="">Hospitality</LinkList>
            <LinkList href="">Responsible Hosting</LinkList>
            <LinkList href="">Community Center</LinkList>
          </BlockWithLinks>
        </Content>
        <Wrapper>
          <Logo>
            <img src={logo} alt="logo" />
            <Rights>© Airbnb Inc.</Rights>
          </Logo>
          <Nav>
            <Link href="">Terms</Link>
            <Link href="">Privacy</Link>
            <Link href="">Site map</Link>
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
          </Nav>
        </Wrapper>
      </div>
    </Footer>
  );
}
