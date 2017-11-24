import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { StickyContainer, Sticky } from "react-sticky";
import SectionUnderHeader from "./SectionUnderHeader";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Reviews from "./Reviews";
import NavigationList from "../Homes/NavigationList";
import TheHost from "./TheHost";
import MapReact from "../UI/Map";
import SimilarListings from "./SimilarListings";
import ExploreOther from "./ExploreOther";
import Footer from "../Landing/Footer";
import SectionUnderFooter from "./SectionUnderFooter";

const ShortDescription = styled.div`
  color: #636363;
  font-size: 18px;
  margin-top: 16px;
  font-family: CircularAir-Light, sans-serif;
  @media only screen and (min-width: 320px) {
    margin-top: 8px;
  }
`;

export default function() {
  return (
    <div>
      <SectionUnderHeader />
      <Navigation />
      <Overview />
      <Reviews />
      <NavigationList />
      <TheHost />
      <div className="container">
        <MapReact center={{ lat: 61, lng: 24 }} zoom={9} />
        <ShortDescription>
          Exact location information is provided after a booking is confirmed.
        </ShortDescription>
      </div>
      <SimilarListings />
      <ExploreOther />
      <Footer />
      <SectionUnderFooter />
    </div>
  );
}
