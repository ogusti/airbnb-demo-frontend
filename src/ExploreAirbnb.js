import React from "react";
import styled from "styled-components";
import homePicture from "./ExploreAirbnb/Home.png";
import experiencesPicture from "./ExploreAirbnb/Experiences.png";
import restarauntsPicture from "./ExploreAirbnb/Restaraunts.png";
import { Container, FluidContainer, ScrollContainer } from "./Containers";

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font: 32px "CircularAir-Bold", sans-serif;
  line-height: 34px;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Img = styled.img`
  width: 96px;
  height: 72px;
  @media only screen and (max-width: 400px) {
    width: auto;
    height: auto;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;

const P = styled.div`
  margin-left: 24px;
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export default function() {
  return (
    <div className="container">
      <FluidContainer>
        <Title>Explore Airbnb</Title>
      </FluidContainer>
      <ScrollContainer>
        <Container>
          <Categories>
            <div className="row">
              <div className="col-xs-4">
                <Wrapper>
                  <Img src={homePicture} alt="Homes" />
                  <P>Homes</P>
                </Wrapper>
              </div>
              <div className="col-xs-4">
                <Wrapper>
                  <Img src={experiencesPicture} alt="Experiences" />
                  <P>Experiences</P>
                </Wrapper>
              </div>
              <div className="col-xs-4">
                <Wrapper>
                  <Img src={restarauntsPicture} alt="Restaurants" />
                  <P>Restaurants</P>
                </Wrapper>
              </div>
            </div>
          </Categories>
        </Container>
      </ScrollContainer>
    </div>
  );
}
