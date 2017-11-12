import React from "react";
import styled from "styled-components";
import homePicture from "./home.png";
import experiencesPicture from "./experiences.png";
import restarauntsPicture from "./restaraunts.png";
import { Container, FluidContainer, ScrollContainer } from "../Containers";
import { Title, Img, Wrapper } from "./Styled";
import { Categories, Paragraph } from "../Card";

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
                  <Paragraph>Homes</Paragraph>
                </Wrapper>
              </div>
              <div className="col-xs-4">
                <Wrapper>
                  <Img src={experiencesPicture} alt="Experiences" />
                  <Paragraph>Experiences</Paragraph>
                </Wrapper>
              </div>
              <div className="col-xs-4">
                <Wrapper>
                  <Img src={restarauntsPicture} alt="Restaurants" />
                  <Paragraph>Restaurants</Paragraph>
                </Wrapper>
              </div>
            </div>
          </Categories>
        </Container>
      </ScrollContainer>
    </div>
  );
}
