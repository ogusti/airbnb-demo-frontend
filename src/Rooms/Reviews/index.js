import React from "react";
import styled from "styled-components";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import starPicture from "../../UI/star.svg";
import search from "./search.svg";
import Grades from "./Grades";
import Review from "./Review";

const Reviews = styled.div`margin-top: 48px;`;

const Top = styled.div`
  @media only screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MainTitle = styled.h2`
  font-size: 24px;
  line-height: 33px;
  font-weight: bold;
  color: #383838;
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: normal;
  }
`;

const Star = styled.img`
  margin-right: 4px;
  width: 15px;
  vertical-align: middle;
  @media only screen and (min-width: 320px) {
    width: 20px;
  }
`;

const Stars = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-left: 12px;

  @media only screen and (min-width: 320px) {
    margin-left: 16px;
  }
`;

const Search = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 2px;
  margin-top: 16px;
  width: 100%;

  @media only screen and (min-width: 500px) {
    margin-top: 0;
    width: 229px;
  }
`;

const SearchImg = styled.img`
  padding: 12px;
  @media only screen and (min-width: 320px) {
    padding: 8;
  }
`;

const SearchInput = styled.input`
  font-size: 14px;
  color: #383838;
  border: none;
  padding: 12px 12px 12px;
  outline: none;

  @media only screen and (min-width: 320px) {
    padding: 8px 8px 8px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default props => (
  <div className="container">
    <div className="col-lg-8">
      <Reviews>
        <Top>
          <Wrapper>
            <MainTitle>113 Reviews</MainTitle>
            <Stars>
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
              <Star src={starPicture} alt="star" />
            </Stars>
          </Wrapper>
          <Search>
            <SearchImg src={search} />
            <SearchInput placeholder="Search reviews" />
          </Search>
        </Top>
      </Reviews>
      <Grades />{" "}
      <Review name="Marlee" registrationDate="November 2017" avatar={photo1}>
        This was one of my favourite places we stayed in all on Colombia. A very
        peaceful setting and a great spot to unwind.
      </Review>
      <Review name="Michelle" registrationDate="November 2017" avatar={photo2}>
        What an absolutely wonderful place to stay! Yudy and Victoria were so
        kind and lovely, even after we arrived super late due to problems at the
        airport, and Hernando our driver was super friendly and really patient
        with our little Spanish. Victoria was a lovely host and gave us.
      </Review>
    </div>
  </div>
);