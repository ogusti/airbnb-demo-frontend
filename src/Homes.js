import React, { Component } from "react";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Arrow from "./Experiences/arrow.svg";
import styled from "styled-components";
import FirstHome from "./Home/Private.png";
import SecondHome from "./Home/Salentina.png";
import ThirdHome from "./Home/Tropical.png";
import StarPicture from "./star.svg";

const A = styled.a`
  padding-right: 10px;
  display: inline-block;
`;
const Headline = styled.h2`font-size: 32px;`;

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
const Description = styled.div`
  display: inline;
  font-size: 15px;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;
const TopInfo = styled.div`
  margin-top: 7px;
  text-align: left;
  font-weight: bold;
`;
const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;
const MiddleInfo = styled.div`
  text-align: left;
  margin-top: 7px;
`;
const BottomInfo = styled.div`text-align: left;`;

const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

const Span = styled.span`margin: 7px 4px 0 0;`;

const Card = styled.div`margin-right: 17px;`;

const Wrapper = styled.div`margin-right: 17px;`;

const SeeAll = styled.div`margin: auto 0;`;

const Dot = styled.span``;

const DopInfo = styled.span`font-size: 12px;`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <FluidContainer>
          <Wrapper>
            <TopRow>
              <Headline>Homes</Headline>
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
                  <DopInfo>
                    97 <Dot>·</Dot> Superhost
                  </DopInfo>
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
                  <DopInfo>
                    97 <Dot>·</Dot> Superhost
                  </DopInfo>
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
                  <DopInfo>
                    97 <Dot>·</Dot> Superhost
                  </DopInfo>
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
