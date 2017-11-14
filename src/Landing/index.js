import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import styled from "styled-components";

import ExploreAirbnb from "./ExploreAirbnb";
import Experiences from "./Experiences";
import Homes from "./Homes";
import PopularReservations from "./PopularReservations";
import FeaturedDestinations from "./FeaturedDestinations";
import Footer from "./Footer";

export default function() {
  return (
    <div>
      <ExploreAirbnb />
      <Experiences />
      <Homes />
      <PopularReservations />
      <FeaturedDestinations />
      <Footer />
    </div>
  );
}
