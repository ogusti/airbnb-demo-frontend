import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Card from "./Card";
import Map from "./Map";
import Filters from "./Filters.js";
import PageBar from "./PageBar.js";

import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import home4 from "./home4.png";
import home5 from "./home5.png";
import home6 from "./home6.png";

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 162px;
`;

export default function() {
  return (
    <div>
      <Filters />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <Gallery>
              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home1}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub={97}
              />

              <Card
                price={82}
                description="Your private 3 bedr. riad and exclusi…"
                img={home2}
                alt="La Salentina"
                type="Entire house"
                beds="5 beds"
                sub={161}
              />

              <Card
                price={200}
                description="Dreamy Tropical Tree House"
                img={home3}
                alt="Tropical Tree House"
                type="Entrie treehouse"
                beds="1 bed"
                sub={364}
              />

              <Card
                price={110}
                description="Best location old town luxury loft"
                img={home4}
                alt="Old town luxury loft"
                type="Entrie apartment"
                beds="1 bed"
                sub={369}
              />

              <Card
                price={83}
                description="Lussuoso. Vista incantevole."
                img={home5}
                alt="Lussuoso"
                type="Entire apartment"
                beds="6 bed"
                sub={105}
              />

              <Card
                price={72}
                description="In the historical center of Lecce"
                img={home6}
                alt="Historical center of Lecce"
                type="Entire house"
                beds="3 beds"
                sub={221}
              />
            </Gallery>
            <PageBar />
          </div>
          <div className="col-lg-4">
            <Map center={{ lat: 61, lng: 24 }} zoom={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
