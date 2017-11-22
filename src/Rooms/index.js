import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import SectionUnderHeader from "./SectionUnderHeader";
import Navigation from "./Navigation";

export default function() {
  return (
    <div>
      <SectionUnderHeader />
      <Navigation />
    </div>
  );
}
