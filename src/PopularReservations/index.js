import React, { Component } from "react";
import { Container, FluidContainer, ScrollContainer } from "../Containers";
import Arrow from "../arrow.svg";
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
import { Card, Subheading, Price } from "../Card";

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
                <Price>About $60 per person</Price>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={Korean} alt="hanjan" />
                <Subheading>Korean gastropub</Subheading>
                <Title>Hanjan</Title>
                <Price>About $50 per person</Price>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={German} alt="german american" />
                <Subheading>German american</Subheading>
                <Title>Prime Meats</Title>
                <Price>About $55 per person</Price>
              </Card>
            </div>
            <div className="col-xs-3">
              <Card>
                <img src={SeaFood} alt="seafood" />
                <Subheading>Fine seafood</Subheading>
                <Title>Seaprice</Title>
                <Price>About $70 per person</Price>
              </Card>
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
