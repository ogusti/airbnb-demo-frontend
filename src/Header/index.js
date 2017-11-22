import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import { Header, LogoSearch, Input, Wrapper, Logo, Nav } from "./Styled";

const Link = styled(RLink)`
  text-decoration: none;
  margin-left: 25px;
`;
const LogoLink = styled(RLink)``;

export default function() {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <div className="col-md-7 col-lg-6">
            <LogoSearch>
              <LogoLink to="/">
                <Logo src={logo} alt="logo" />
              </LogoLink>
              <Input type="text" placeholder="Try &quot;Miami&quot;" />
            </LogoSearch>
          </div>
          <Nav>
            <Link to="/">Become a host</Link>
            <Link to="/">Help</Link>
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
          </Nav>
        </Wrapper>
      </div>
    </Header>
  );
}
