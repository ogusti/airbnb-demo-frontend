import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 7px 16px;
  font: inherit;
  font-size: 14px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-right: 12px;

  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

const FilterItem = styled.button`
  padding: 7px 15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font: 14px "CircularAir-Book", sans-serif;
  line-height: 16px;
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 53px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  background: #fff;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  margin-top: -24px;
  justify-content: space-between;
`;

export class DropDown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div>
        <FilterItem onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          {this.state.isOpen ? "Check in — Check out " : this.props.name}
        </FilterItem>

        {this.state.isOpen && (
          <ModalWrapper>
            {this.props.children}
            <Footer>
              <Button>Cancel</Button>
              <Button isApply>Apply</Button>
            </Footer>
          </ModalWrapper>
        )}
      </div>
    );
  }
}
