import React, { Component } from "react";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Arrow from "./Experiences/arrow.svg";
import styled from "styled-components";
import Chum from "./PopularReservations/Chum.png";
import Korean from "./PopularReservations/Korean.png";
import SeaFood from "./PopularReservations/Seafood.png";
import German from "./PopularReservations/German.png";

const A = styled.a`
  padding-right: 10px;
  display: inline-block;
  color: black;
`;
const Headline = styled.h2`font-size: 32px;`;

const WhatItIs = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
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

const Price = styled.div`
  display: block;
  font-size: 18px;
  text-align: left;
  margin-top: 5px;
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
              <Headline>Popular reservations around the world</Headline>
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
                <img src={Chum} alt="speakeasy" />
                <WhatItIs>speakeasy</WhatItIs>
                <Title>Chumley’s</Title>
                <Price>About $60 per person</Price>
              </Card>
              <Card>
                <img src={Korean} alt="hanjan" />
                <WhatItIs>Korean gastropub</WhatItIs>
                <Title>Hanjan</Title>
                <Price>About $50 per person</Price>
              </Card>
              <Card>
                <img src={German} alt="german cafe" />
                <WhatItIs>German american</WhatItIs>
                <Title>Prime Meats</Title>
                <Price>About $55 per person</Price>
              </Card>
              <Card>
                <img src={SeaFood} alt="seafood" />
                <WhatItIs>Fine seafood</WhatItIs>
                <Title>Seaprice</Title>
                <Price>About $70 per person</Price>
              </Card>
            </Gallery>
          </Container>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
