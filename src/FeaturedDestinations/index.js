import React, { Component } from "react";
import Arrow from "../arrow.svg";
import { Container, FluidContainer, ScrollContainer } from "../Containers";
import ButtonArrow from "../buttonArrow.svg";
import styled from "styled-components";
import CapeTown from "./capetown.png";
import LosAngeles from "./losAngeles.png";
import Miami from "./miami.png";
import Paris from "./paris.png";
import Seoul from "./seoul.png";
import Tokyo from "./tokyo.png";

const RightButton = styled.div`
  position: absolute;
  right: -0.5%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-image: url(${ButtonArrow});
  background-size: 10px 18px;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  top: 83px;

  @media only screen and (min-width: 1200px) {
    top: 105px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Link = styled.a`
  padding-right: 10px;
  display: inline-block;
`;

const Headline = styled.h2`font-size: 32px;`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  margin-top: 8px;
  padding-bottom: 64px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Card = styled.div`margin-right: 17px;`;

const Wrapper = styled.div`margin-right: 17px;`;

const SeeAll = styled.div`
  margin: auto 0;
  white-space: nowrap;
`;

class App extends Component {
  render() {
    return (
      <div>
        <FluidContainer>
          <Wrapper>
            <TopRow>
              <Headline>Featured Destinations</Headline>
              <SeeAll>
                <Link href="#">See all</Link>
                <img src={Arrow} alt="more" />
              </SeeAll>
            </TopRow>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Gallery>
              <RightButton />
              <Card>
                <img src={Paris} alt="Paris" />
                <Title>Paris</Title>
              </Card>
              <Card>
                <img src={Miami} alt="Miami" />
                <Title>Miami</Title>
              </Card>
              <Card>
                <img src={Tokyo} alt="Tokyo" />
                <Title>Tokyo</Title>
              </Card>
              <Card>
                <img src={CapeTown} alt="Capetown" />
                <Title>Cape Town</Title>
              </Card>
              <Card>
                <img src={Seoul} alt="Seoul" />
                <Title>Seoul</Title>
              </Card>
              <Card>
                <img src={LosAngeles} alt="Los Angeles" />
                <Title>Los Angeles</Title>
              </Card>
            </Gallery>
          </Container>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
