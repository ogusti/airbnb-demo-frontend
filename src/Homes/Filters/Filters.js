import React from "react";
import styled from "styled-components";
import { DropDown } from "./DropDown";
import Responsive from "react-responsive";
import CalendarReact from "./Calendar/CalendarReact";
import Guests from "./Guests";

export const Filters = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding: 12px 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
  top: 80px;
  display: flex;
`;

export const DesktopButtons = styled.div`
  display: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function() {
  return (
    <div className="container">
      <Filters>
        <DropDown name="Dates">
          <CalendarReact />
        </DropDown>
        <DropDown name="Guest">
          <Guests />
        </DropDown>
        <DesktopButtons>
          <DropDown name="Room type" />
          <DropDown name="Price" />
          <DropDown name="Instant book" />
        </DesktopButtons>
        <DropDown name="More filters" />
      </Filters>
    </div>
  );
}
