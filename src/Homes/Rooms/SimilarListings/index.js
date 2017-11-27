import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Card from "./Card";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../../UI/Containers";

const Report = styled.a`
  color: #0f7276;
  display: block;
  font-size: 18px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 16px;
  @media only screen and (min-width: 320px) {
    margin-top: 24px;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MainTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
  font-weight: bold;
  color: #383838;
  margin: 48px 0 16px 0;
  @media only screen and (min-width: 320px) {
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: normal;
  }
`;
export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px 0 -15px;
`;

export default function() {
  return (
    <div>
      <div className="container">
        <Report>Report this listing</Report>
        <MainTitle>Similar listings</MainTitle>
      </div>
      <div className="container">
        <ScrollContainer>
          <Container>
            <Gallery>
              <Card
                img={home1}
                type="Entire apartment"
                beds={3}
                description="Apartamento, piscina y parqueadero para 8 personas"
                price={50}
                count={4}
              />

              <Card
                img={home2}
                type="Entire apartment"
                beds={9}
                description="Full apartment in the best area of the city"
                price={51}
                count={3}
              />
              <Card
                img={home3}
                type="Entire apartment"
                beds={9}
                description="Beautiful Apartament North Armenia Quindio"
                price={45}
                count={3}
              />
            </Gallery>
          </Container>
        </ScrollContainer>
      </div>
    </div>
  );
}
