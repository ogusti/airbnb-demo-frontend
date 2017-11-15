import React, { Component } from "react";
import Arrow from "../../UI/arrow.svg";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../UI/Containers";
import styled from "styled-components";
import CapeTown from "./capetown.png";
import LosAngeles from "./losAngeles.png";
import Miami from "./miami.png";
import Paris from "./paris.png";
import Seoul from "./seoul.png";
import Tokyo from "./tokyo.png";
import { Gallery, Card, Title } from "../../UI/Card";
import { RightButton, Headline, TopRow, SeeAll, Wrapper, Link } from "./Styled";

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
