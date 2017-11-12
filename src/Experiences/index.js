import React from "react";
import styled from "styled-components";
import { Container, FluidContainer, ScrollContainer } from "../Containers";
import ButtonArrow from "../buttonArrow.svg";
import Arrow from "../arrow.svg";
import StarPicture from "../star.svg";
import ForestPicture from "./forest.png";
import MountainPicture from "./mountain.png";
import SalsaPicture from "./salsa.png";
import SeaPicture from "./sea.png";

const RightButton = styled.div`
  position: absolute;
  right: -0.5%;
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
  top: 155px;

  @media only screen and (min-width: 1200px) {
    top: 191px;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Headline = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const Link = styled.a`
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

const Description = styled.p`
  display: inline;
  font-size: 15px;
`;

const BottomInfo = styled.div`text-align: left;`;

const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

const Star = styled.img`margin: 7px 4px 0 0;`;

const Reviews = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
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
              <Link href="#">See all</Link>
              <img src={Arrow} alt="more" />
            </SeeAll>
          </TopRow>
        </Card>
      </FluidContainer>
      <ScrollContainer>
        <Container>
          <Gallery>
            <RightButton />
            <Card>
              <img src={ForestPicture} alt="forest" />
              <TopInfo>
                <Price>$29</Price>
                <Description>Forest therapy</Description>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
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
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
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
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
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
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="star" />
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
