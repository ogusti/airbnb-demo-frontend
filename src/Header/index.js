import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import {
  Header,
  LogoSearch,
  Input,
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
    <Header>
      <div className="container">
        <Wrapper>
          <div className="col-md-7 col-lg-6">
            <LogoSearch>
              <img src={logo} alt="logo" />
              <Input type="text" placeholder="Try &quot;Miami&quot;" />
            </LogoSearch>
          </div>
          <Nav>
            <Link href="">Become a host</Link>
            <Link href="">Help</Link>
            <Link href="">Sign Up</Link>
            <Link href="">Log In</Link>
          </Nav>
        </Wrapper>
      </div>
    </Header>
  );
}
