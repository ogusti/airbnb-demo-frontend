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

const Wrapper = styled.div`
  @media (min-width: 320px) {
    padding-bottom: 24px;
  }

  @media (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function() {
  return (
    <div>
      <Filters />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <Gallery>
              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home1}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />

              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home2}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />

              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home3}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />

              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home4}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />

              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home5}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />

              <Card
                price={82}
                description="La Salentina, see, nature & relax"
                img={home6}
                alt="La Salentina"
                type="Entire house"
                beds="9 beds"
                sub="9"
              />
            </Gallery>
            <PageBar />
          </div>
          <div className="col-lg-4">
            <Map center={{ lat: 30, lng: 20 }} zoom={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
