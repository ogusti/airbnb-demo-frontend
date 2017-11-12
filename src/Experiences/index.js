import React from "react";
import styled from "styled-components";
import { Container, FluidContainer, ScrollContainer } from "../Containers";
import Arrow from "../arrow.svg";
import StarPicture from "../star.svg";
import ForestPicture from "./forest.png";
import MountainPicture from "./mountain.png";
import SalsaPicture from "./salsa.png";
import SeaPicture from "./sea.png";
import { RightButton, Headline, Link, TopRow, SeeAll } from "./Styled";
import {
  TopInfo,
  Price,
  Description,
  BottomInfo,
  Stars,
  Star,
  Reviews,
  Gallery,
  Card
} from "../Card";

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
