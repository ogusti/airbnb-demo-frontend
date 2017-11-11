import React, { Component } from "react";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Arrow from "./Experiences/arrow.svg";
import ButtonArrow from "./ButtonArrow.svg";
import styled from "styled-components";
import Chum from "./PopularReservations/Chum.png";
import Korean from "./PopularReservations/Korean.png";
import SeaFood from "./PopularReservations/Seafood.png";
import German from "./PopularReservations/German.png";

const RightButton = styled.div`
  position: absolute;
  right: 14.4%;
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

  @media only screen and (min-width: 1200px) {
    top: 150.2%;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Link = styled.a`
  padding-right: 10px;
  display: inline-block;
  color: black;
`;
const Headline = styled.h2`font-size: 32px;`;

const WhatItIs = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 0;
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
  positon: relative;
`;

const Price = styled.p`
  display: block;
  font-size: 18px;
  text-align: left;
  margin-top: 5px;
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
            <Gallery>
              <RightButton />
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
                <img src={German} alt="german american" />
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
