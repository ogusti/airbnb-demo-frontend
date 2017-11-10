import React from "react";
import styled from "styled-components";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Arrow from "./Experiences/arrow.svg";
import BigArrow from "./big-arrow.svg";
import StarPicture from "./star.svg";
import ForestPicture from "./Experiences/forest.png";
import MountainPicture from "./Experiences/mountain.png";
import SalsaPicture from "./Experiences/salsa.png";
import SeaPicture from "./Experiences/sea.png";

const Headline = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const A = styled.a`
  padding-right: 10px;
  display: inline-block;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const SeeAll = styled.div`margin: auto 0;`;

const TopInfo = styled.div`
  margin-top: 7px;
  text-align: left;
`;

const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Description = styled.div`
  display: inline;
  font-size: 15px;
`;

const BottomInfo = styled.div`text-align: left;`;

const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

const Span = styled.span`margin: 7px 4px 0 0;`;

const Reviews = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`margin-right: 17px;`;

export default function() {
  return (
    <div className="container">
      <FluidContainer>
        <Card>
          <TopRow>
            <Headline>Experiences</Headline>
            <SeeAll>
              <A href="#">See all</A>
              <img src={Arrow} alt="more" />
            </SeeAll>
          </TopRow>
        </Card>
      </FluidContainer>
      <ScrollContainer>
        <Container>
          <Gallery>
            <Card>
              <img src={ForestPicture} alt="forest" />
              <TopInfo>
                <Price>$29</Price>
                <Description>Forest therapy</Description>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                </Stars>
                <Reviews>44 reviews</Reviews>
              </BottomInfo>
            </Card>
            <Card>
              <img src={MountainPicture} alt="forest" />
              <TopInfo>
                <Price>$69</Price>
                <Description>While watching</Description>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                </Stars>
                <Reviews>46 reviews</Reviews>
              </BottomInfo>
            </Card>
            <Card>
              <img src={SeaPicture} alt="forest" />
              <TopInfo>
                <Price>$69</Price>
                <Description>Table Mountain Summit, Cable Car Down</Description>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                </Stars>
                <Reviews>44 reviews</Reviews>
              </BottomInfo>
            </Card>
            <Card>
              <img src={SalsaPicture} alt="forest" />
              <TopInfo>
                <Price>$50</Price>
                <Description>Forest Therapy</Description>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                  <Span>
                    <img src={StarPicture} alt="star" />
                  </Span>
                </Stars>
                <Reviews>44 reviews</Reviews>
              </BottomInfo>
            </Card>
          </Gallery>
        </Container>
      </ScrollContainer>
    </div>
  );
}
