import React, { Component } from "react";
import Arrow from "./Experiences/arrow.svg";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import styled from "styled-components";
import CapeTown from "./FeaturedDestinations/Capetown.png";
import LosAngeles from "./FeaturedDestinations/Losangeles.png";
import Miami from "./FeaturedDestinations/Miami.png";
import Paris from "./FeaturedDestinations/Paris.png";
import Seoul from "./FeaturedDestinations/Seoul.png";
import Tokyo from "./FeaturedDestinations/Tokyo.png";

const A = styled.a`
  padding-right: 10px;
  display: inline-block;
`;
const Headline = styled.h2`font-size: 32px;`;

const Title = styled.div`
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
`;

const Card = styled.div`margin-right: 17px;`;

const Wrapper = styled.div`margin-right: 17px;`;

const SeeAll = styled.div`margin: auto 0;`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <FluidContainer>
          <Wrapper>
            <TopRow>
              <Headline>Featured Destinations</Headline>
              <SeeAll>
                <A href="#">See all</A>
                <img src={Arrow} alt="more" />
              </SeeAll>
            </TopRow>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Gallery>
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
