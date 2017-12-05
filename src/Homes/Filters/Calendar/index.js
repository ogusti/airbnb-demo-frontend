import React, { Component } from "react";
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

const Footer = styled.div`
  width: 100%;
  display: flex;
  margin-top: -24px;
  justify-content: space-between;
  background: #fff;
`;

const Button = styled.button`
  width: 110px;
  height: 64px;
  background: none;
  border: none;
  font: 16px "CircularAir-Book";
  color: ${props => (props.isApply ? "#0F7276" : "#383838")};
  cursor: pointer;
  outline: none;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Link = styled.button`
  font: 14px "CircularAir-Book", sans-serif;
  display: block;
  border: 1px solid;
  border-color: ${props =>
    props.active ? "#01524c" : "rgba(72, 72, 72, 0.2)"};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.4rem 0.78rem;
  white-space: nowrap;
  transition: 0.25s ease-out;
  background: #008489;
  color: ${props => (props.active ? "#fff" : "#383838")};
`;

const Popup = styled.div`
  position: absolute;
  top: 100%;
  z-index: 9;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-top: 8px;
`;

class Dates extends Component {
  state = {
    focusedInput: "startDate",
    startDate: this.props.startDate,
    endDate: this.props.endDate
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onApply = () => {
    this.props.onApply(this.state.startDate, this.state.endDate);
  };

  onCancel = () => {
    this.props.onCancel(null);
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const startDateString = startDate && startDate.format("MMM Do");
    const endDateString = endDate && endDate.format("MMM Do");

    return (
      <div>
        <Mobile>
          <MobileFullscreen closeFilter={this.onCancel} />
        </Mobile>
        <Tablet>
          <Wrapper>
            <Link active onClick={this.onCancel}>
              {startDateString || "Check in"} — {endDateString || "Check out"}
            </Link>

            <Popup>
              <DayPickerRangeController
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                numberOfMonths={1}
                isDayBlocked={day => day.isBefore(moment(), "day")}
                hideKeyboardShortcutsPanel
              />
              <Footer>
                <Button onClick={this.onCancel}>Cancel</Button>
                <Button isApply onClick={this.onApply}>
                  Apply
                </Button>
              </Footer>
            </Popup>
          </Wrapper>
        </Tablet>
        <Desktop>
          <Wrapper>
            <Link active onClick={this.onCancel}>
              {startDateString || "Check in"} — {endDateString || "Check out"}
            </Link>
            <Popup>
              <DayPickerRangeController
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                numberOfMonths={2}
                isDayBlocked={day => day.isBefore(moment(), "day")}
                hideKeyboardShortcutsPanel
              />
              <Footer>
                <Button onClick={this.onCancel}>Cancel</Button>
                <Button isApply onClick={this.onApply}>
                  Apply
                </Button>
              </Footer>
            </Popup>
          </Wrapper>
        </Desktop>
      </div>
    );
  }
}
export default Dates;
