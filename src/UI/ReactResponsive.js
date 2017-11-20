import React from "react";
import styled from "styled-components";
import Responsive from "react-responsive";

export const Desktop = props => <Responsive {...props} minWidth={1124} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={1124} />
);
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
