import React from "react";
import styled from "styled-components";
import homePicture from "./home.png";
import experiencesPicture from "./experiences.png";
import restarauntsPicture from "./restaraunts.png";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../UI/Containers";
import { Title, Img, Wrapper } from "./Styled";
import { Categories, Paragraph } from "../../UI/Card";
import { Link as RLink } from "react-router-dom";

const Link = styled(RLink)``;

export default function() {
  return (
    <div>
      <FluidContainer>
        <Title>Explore Airbnb</Title>
      </FluidContainer>
      <ScrollContainer>
        <Container>
          <Categories>
            <div className="row">
              <div className="col-xs-4">
                <Link to="/homes">
                  <Wrapper>
                    <Img src={homePicture} alt="Homes" />
                    <Paragraph>Homes</Paragraph>
                  </Wrapper>
                </Link>
              </div>
              <div className="col-xs-4">
                <Link to="/">
                  <Wrapper>
                    <Img src={experiencesPicture} alt="Experiences" />
                    <Paragraph>Experiences</Paragraph>
                  </Wrapper>
                </Link>
              </div>
              <div className="col-xs-4">
                <Link to="/">
                  <Wrapper>
                    <Img src={restarauntsPicture} alt="Restaurants" />
                    <Paragraph>Restaurants</Paragraph>
                  </Wrapper>
                </Link>
              </div>
            </div>
          </Categories>
        </Container>
      </ScrollContainer>
    </div>
  );
}
