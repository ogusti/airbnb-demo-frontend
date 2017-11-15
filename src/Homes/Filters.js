import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 16px;
  font: inherit;
  font-size: 14px;
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-right: 12px;
`;

export const Filters = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding: 12px 0;
  margin-bottom: 24px;
`;

export default function() {
  return (
    <Filters>
      <div className="container">
        <Button>Dates</Button>
        <Button>Guest</Button>
        <Button>Room types</Button>
        <Button>Price</Button>
        <Button>Instant book</Button>
        <Button>More filters</Button>
      </div>
    </Filters>
  );
}
