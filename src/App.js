import React, { Component } from "react";
import "./Fonts.css";
import Header from "./Header";
import ExploreAirbnb from "./ExploreAirbnb.js";
import Experiences from "./Experiences.js";
import Homes from "./Homes.js";
import PopularReservations from "./PopularReservations.js";
import FeaturedDestinations from "./FeaturedDestinations.js";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Footer from "./Footer.js";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ExploreAirbnb />
        <Experiences />
        <Homes />
        <PopularReservations />
        <FeaturedDestinations />
        <Footer />
      </div>
    );
  }
}

export default App;
