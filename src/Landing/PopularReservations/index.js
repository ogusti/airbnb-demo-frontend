import React, { Component } from "react";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../UI/Containers";
import Arrow from "../../UI/arrow.svg";
import styled from "styled-components";
import Chum from "./chum.png";
import Korean from "./korean.png";
import SeaFood from "./seafood.png";
import German from "./german.png";
import {
  RightButton,
  Headline,
  Link,
  SeeAll,
  Title,
  Wrapper,
  TopRow
} from "./Styled";
import { Card, Subheading, Price } from "../../UI/Card";

const ThinPrice = Price.extend`
  margin-top: 4px;
  font-size: 18px;
  font-family: CircularAir-Light, sans-serif;
  font-weight: normal;
`;

export default function() {
  return (
    <div>
      <FluidContainer>
        <Wrapper>
          <TopRow>
            <Headline>Popular reservations around the world</Headline>
            <SeeAll>
              <Link href="#">See all</Link>
              <img src={Arrow} alt="more" />
            </SeeAll>
          </TopRow>
        </Wrapper>
      </FluidContainer>
      <ScrollContainer>
        <Container>
          <RightButton />
          <div className="row">
            <div className="col-xs-3">
              <Card>
                <img src={Chum} alt="speakeasy" />
                <Subheading>speakeasy</Subheading>
                <Title>Chumley’s</Title>
                <ThinPrice>About $60 per person</ThinPrice>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={Korean} alt="hanjan" />
                <Subheading>Korean gastropub</Subheading>
                <Title>Hanjan</Title>
                <ThinPrice>About $50 per person</ThinPrice>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={German} alt="german american" />
                <Subheading>German american</Subheading>
                <Title>Prime Meats</Title>
                <ThinPrice>About $55 per person</ThinPrice>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={SeaFood} alt="seafood" />
                <Subheading>Fine seafood</Subheading>
                <Title>Seaprice</Title>
                <ThinPrice>About $70 per person</ThinPrice>
              </Card>
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
