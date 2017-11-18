import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={1124} />;
const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={1124} />
);
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export default props => (
  <div>
    <Desktop>
      <DayPickerRangeController numberOfMonths={2} />
    </Desktop>
    <Tablet>
      <DayPickerRangeController numberOfMonths={1} />
    </Tablet>
    <Mobile>
      <DayPickerRangeController numberOfMonths={2} orientation="vertical" />
    </Mobile>
  </div>
);
