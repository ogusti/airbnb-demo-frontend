import React from "react";
import styled from "styled-components";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../UI/Containers";
import Arrow from "../../UI/arrow.svg";
import StarPicture from "../../UI/star.svg";
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
  Card,
  About
} from "../../UI/Card";

export default function() {
  return (
    <div>
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
                <About>Forest therapy</About>
              </TopInfo>
              <BottomInfo>
                <Stars>
                  <Star src={StarPicture} alt="star" />
                  <Star src={StarPicture} alt="stadr" />
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
                <About>While watching</About>
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
                <About>Table Mountain Summit, Cable Car Down</About>
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
                <About>Forest Therapy</About>
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
