import React from "react";
import logo from "./Header/Logo.svg";
import styled from "styled-components";
import searchPicture from "./Header/Search.svg";

const Header = styled.header`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
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

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  margin-left: 25px;
`;

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
