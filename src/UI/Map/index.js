import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import mapPointer from "./mapPointer.svg";

const Wrapper = styled.div`
  height: 192px;
  width: 100%;
  @media only screen and (min-width: 320px) {
    height: 474px;
  }
  @media only screen and (min-width: 768px) {
    612px
  }
`;

export default props => {
  return (
    <div>
      <Wrapper>
        <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
      </Wrapper>
    </div>
  );
};
