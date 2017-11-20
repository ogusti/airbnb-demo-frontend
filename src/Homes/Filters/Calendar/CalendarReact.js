import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { Desktop, Mobile, Tablet } from "../../../UI/ReactResponsive";
import MobileFullscreen from "./MobileFullscreen";

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
      <MobileFullscreen
        autoFocus
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={12}
        daySize={43}
        orientation="verticalScrollable"
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Mobile>
  </div>
);
