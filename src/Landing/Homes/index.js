import React, { Component } from "react";
import {
  Container,
  FluidContainer,
  ScrollContainer
} from "../../UI/Containers";
import Arrow from "../../UI/arrow.svg";
import ButtonArrow from "../../UI/buttonArrow.svg";
import styled from "styled-components";
import FirstHome from "./private.png";
import SecondHome from "./salentina.png";
import ThirdHome from "./tropical.png";
import StarPicture from "../../UI/star.svg";
import { Link as RLink } from "react-router-dom";
import {
  BottomInfo,
  Description,
  Dot,
  SubInfo,
  MiddleInfo,
  TopInfo,
  Price,
  Star,
  Stars,
  Card,
  Gallery
} from "../../UI/Card";
import { RightButton, Headline, TopRow, SeeAll, Wrapper } from "./Styled";

const Link = styled(RLink)`
  padding-right: 10px;
  display: inline-block;
`;

class App extends Component {
  render() {
    return (
      <div>
        <FluidContainer>
          <Wrapper>
            <TopRow>
              <Headline>Homes</Headline>
              <SeeAll>
                <Link to="/homes">See all</Link>
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
                <img src={FirstHome} alt="first home" />
                <TopInfo>
                  <Price>$82</Price>
                  <Description>La Salentina, see, nature & relax</Description>
                </TopInfo>
                <MiddleInfo>
                  Entire house <Dot>·</Dot> 9 beds
                </MiddleInfo>
                <BottomInfo>
                  <Stars>
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                  </Stars>
                  <SubInfo>
                    97 <Dot>·</Dot> Superhost
                  </SubInfo>
                </BottomInfo>
              </Card>
              <Card>
                <img src={SecondHome} alt="second home" />
                <TopInfo>
                  <Price>$82</Price>
                  <Description>
                    Your private 3 bedr. riad and exclusi…
                  </Description>
                </TopInfo>
                <MiddleInfo>
                  Entire house <Dot>·</Dot> 9 beds
                </MiddleInfo>
                <BottomInfo>
                  <Stars>
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                  </Stars>
                  <SubInfo>
                    97 <Dot>·</Dot> Superhost
                  </SubInfo>
                </BottomInfo>
              </Card>
              <Card>
                <img src={ThirdHome} alt="third home" />
                <TopInfo>
                  <Price>$200</Price>
                  <Description>Dreamy Tropical Tree House</Description>
                </TopInfo>
                <MiddleInfo>
                  Entire house <Dot>·</Dot> 9 beds
                </MiddleInfo>
                <BottomInfo>
                  <Stars>
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                    <Star src={StarPicture} alt="star" />
                  </Stars>
                  <SubInfo>
                    97 <Dot>·</Dot> Superhost
                  </SubInfo>
                </BottomInfo>
              </Card>
            </Gallery>
          </Container>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
