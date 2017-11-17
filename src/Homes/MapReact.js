import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import mapPointer from "./mapPointer.svg";

const Wrapper = styled.div`
  @media (min-width: 992px) {
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
`;

const MapPointer = styled.a`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 25px;
  right: 8px;
  background-image: url(${mapPointer});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

export default props => {
  return (
    <div>
      <Wrapper>
        <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
      </Wrapper>
      <MapPointer />
    </div>
  );
};
