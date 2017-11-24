import React from "react";
import styled from "styled-components";
import { DropDown } from "./DropDown";
import Responsive from "react-responsive";
import CalendarReact from "./Calendar";
import Guests from "./Guests";
import RoomType from "./RoomType";
import Price from "./Price";
import InstantBook from "./InstantBook";

export const Filters = styled.div`
  padding: 12px 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
  top: 80px;
  display: flex;
  white-space: nowrap;
`;

export const DesktopButtons = styled.div`
  display: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  height: 57px;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <Filters>
          <DropDown name="Dates" subName="Check in — Check out">
            <CalendarReact />
          </DropDown>
          <DropDown name="Guests" subName="Guests">
            <Guests />
          </DropDown>
          <DesktopButtons>
            <DropDown name="Room type" subName="Room type">
              <RoomType />
            </DropDown>
            <DropDown name="Price" subName="Price">
              <Price />
            </DropDown>
            <DropDown name="Instant book" subName="Instant book">
              <InstantBook />
            </DropDown>
          </DesktopButtons>
          <DropDown name="More filters" subName="More filters" />
        </Filters>
      </div>
    </Wrapper>
  );
}
