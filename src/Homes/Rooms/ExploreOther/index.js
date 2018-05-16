import React from "react";
import styled from "styled-components";

const ExploreOther = styled.div`
  margin-bottom: 48px;
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

const Places = styled.div`
  color: #636363;
  font-size: 14px;
  margin-top: 24px;
  font-family: CircularAir-Light, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (min-width: 400px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const Description = styled.p`
  font-family: CircularAir-Light, sans-serif;
  font-size: 16px;
  color: #383838;
  display: inline;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
  }
`;

const NavigationTitle = styled.span`
  font-size: 18px;
  font-family: CircularAir-Light, sans-serif;
  color: #383838;
  margin-right: 8px;
`;

const Dot = styled.span`
  font-size: 12px;
  color: #0f7276;
  margin: 0px 8px;
  align-self: center;

  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
`;

const Navigation = styled.nav`
  background-color: white;
  display: flex;
  padding-top: 11px;
  padding-bottom: 11px;
  flex-wrap: wrap;
`;

const NavigationButton = styled.button`
  border: none;
  background-color: white;
  font-family: CircularAir-Light, sans-serif;
  font-size: 16px;
  padding: 0px;
  cursor: pointer;
  color: #636363;
`;

const ListOfPlaces = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled.a`
  font-size: 14px;
  font-family: CircularAir-Light, sans-serif;
  color: #636363;
  @media only screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export default props => (
  <div className="container">
    <ExploreOther>
      <MainTitle>Explore other options in and around Armenia</MainTitle>
      <Places>
        <NavigationTitle>More places to stay in Armenia:</NavigationTitle>
        <Navigation>
          <NavigationButton>Overview</NavigationButton>
          <Dot>·</Dot>
          <NavigationButton>Reviews</NavigationButton>
          <Dot>·</Dot>
          <NavigationButton>The Host</NavigationButton>
          <Dot>·</Dot>
          <NavigationButton>Location</NavigationButton>
        </Navigation>
      </Places>
      <ListOfPlaces>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Cartagena Vacation Rentals</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Bucaramanga</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Manuel Antonio</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Cartagena De Indias (Distrito Turistico Y Cultural)</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Quito</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Santander de Quilichao</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>San Andrés Vacation Rentals</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Bogota</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Santa Marta (Distrito Turistico Cultural E Historico)</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Rionegro</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Anapoima</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Puerto Rico</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Willemstad Vacation Rentals</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Cali</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Chia</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Cartagena Vacation Rentals</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Ibague</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-4">
          <Link>Medellin</Link>
        </div>
      </ListOfPlaces>
    </ExploreOther>
  </div>
);