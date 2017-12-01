import React from "react";
import styled from "styled-components";
import Responsive from "react-responsive";
import Calendar from "./Calendar";
import Guests from "./Guests";
import Price from "./Price";
import InstantBook from "./InstantBook";
import CalendarButton from "./Calendar/Button";
import GuestsButton from "./Guests/Button";

export const FiltersWrapper = styled.div`
  padding-top: 12px;
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
  background-color: white;
`;

export const ButtonWrapper = styled.div`
  margin-right: 12px;
`;

class Filters extends React.Component {
  state = {
    isOpen: false,
    openedFilter: null,

    dates: {
      startDate: null,
      endDate: null
    },

    guests: {
      adults: 0,
      children: 0,
      infants: 0
    },

    roomType: {
      entire: false,
      personal: false,
      shared: false
    }
  };

  openFilter = key => {
    this.setState({ openedFilter: key });
  };

  onDatesApply = (startDate, endDate) => {
    const dates = {
      startDate,
      endDate
    };

    this.setState({
      dates,
      openedFilter: null
    });
  };

  onGuestsApply = (adults, children, infants) => {
    const guests = {
      adults,
      children,
      infants
    };

    this.setState({
      guests,
      openedFilter: null
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <FiltersWrapper>
            <ButtonWrapper>
              {this.state.openedFilter === "dates" ? (
                <Calendar
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                  onApply={this.onDatesApply}
                  onCancel={this.openFilter}
                />
              ) : (
                <CalendarButton
                  openFilter={() => this.openFilter("dates")}
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                />
              )}
            </ButtonWrapper>
            <ButtonWrapper>
              {this.state.openedFilter === "guests" ? (
                <Guests
                  adults={this.state.guests.adults}
                  children={this.state.guests.children}
                  infants={this.state.guests.infants}
                  onApply={this.onGuestsApply}
                  onCancel={this.openFilter}
                />
              ) : (
                <GuestsButton
                  openFilter={() => this.openFilter("guests")}
                  adults={this.state.guests.adults}
                  children={this.state.guests.children}
                  infants={this.state.guests.infants}
                />
              )}
            </ButtonWrapper>
            <DesktopButtons>
              <div />

              <div />

              <div />
            </DesktopButtons>
          </FiltersWrapper>
        </div>
      </Wrapper>
    );
  }
}
export default Filters;
