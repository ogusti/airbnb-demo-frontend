import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Header,
  LogoSearch,
  Input,
  OriginalSelect,
  DesignedSelect,
  BlockWithLinks,
  Title,
  LinkList,
  Wrapper,
  Logo,
  Rights,
  Nav
} from "./Styled";

export const ReactRouterLink = styled(Link)`
  text-decoration: none;
  margin-left: 25px;
`;
export const ReactRouterLogoLink = styled(Link)``;

export default function() {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <div className="col-md-7 col-lg-6">
            <LogoSearch>
              <ReactRouterLogoLink to="/">
                <Logo src={logo} alt="logo" />
              </ReactRouterLogoLink>
              <Input type="text" placeholder="Try &quot;Miami&quot;" />
            </LogoSearch>
          </div>
          <Nav>
            <ReactRouterLink to="/">Become a host</ReactRouterLink>
            <ReactRouterLink to="/">Help</ReactRouterLink>
            <ReactRouterLink to="/">Sign Up</ReactRouterLink>
            <ReactRouterLink to="/">Log In</ReactRouterLink>
          </Nav>
        </Wrapper>
      </div>
    </Header>
  );
}
