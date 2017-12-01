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

const GuestsButton = props => {
  return (
    <div>
      {(props.adults === 0) & (props.children === 0) & (props.infants === 0) ? (
        <Button onClick={props.openFilter}>Guests</Button>
      ) : (
        <Button active onClick={props.openFilter}>
          {(props.adults > 0 || props.children > 0) & (props.infants === 0) ? (
            <span>{props.adults + props.children + " Guests"}</span>
          ) : (
            <span>
              {props.adults +
                props.children +
                " Guests, " +
                props.infants +
                " infants"}
            </span>
          )}
        </Button>
      )}
    </div>
  );
};
export default GuestsButton;
