import React, { Component } from "react";
import "./fonts.css";
import Header from "./Header";
import ExploreAirbnb from "./ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import PopularReservations from "./PopularReservations";
import FeaturedDestinations from "./FeaturedDestinations";
import { Container, FluidContainer, ScrollContainer } from "./Containers";
import Footer from "./Footer";
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
