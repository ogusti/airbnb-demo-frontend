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
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={2}
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Desktop>
    <Tablet>
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={1}
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Tablet>
    <Mobile>
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        numberOfMonths={2}
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
        orientation="verticalScrollable"
      />
    </Mobile>
  </div>
);
