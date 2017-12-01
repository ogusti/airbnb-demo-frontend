import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font: 14px "CircularAir-Book", sans-serif;
  display: block;
  border: 1px solid;
  border-color: ${props => (props.active ? "#000" : "rgba(72, 72, 72, 0.2)")};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.4rem 0.78rem;
  white-space: nowrap;
  transition: 0.25s ease-out;
  background: ${props => (props.active ? "#008489;" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#383838")};
  cursor: pointer;
`;

const CalendarButton = props => {
  const startDateString = props.startDate && props.startDate.format("MMM Do");
  const endDateString = props.endDate && props.endDate.format("MMM Do");
  return (
    <div>
      {props.startDate === null ? (
        <Button onClick={props.openFilter}>Dates</Button>
      ) : (
        <Button active onClick={props.openFilter}>
          {startDateString || "Check in"} — {endDateString || "Check out"}
        </Button>
      )}
    </div>
  );
};
export default CalendarButton;
