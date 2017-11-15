import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 992px) {
    margin: 0;
    height: 100%;
    width: 100%;
    margin-top: -25px;
  }
`;

export default props => {
  return (
    <Wrapper>
      <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
    </Wrapper>
  );
};
