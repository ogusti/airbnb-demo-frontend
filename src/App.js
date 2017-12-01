import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import styled from "styled-components";
import "./fonts.css";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";
import Rooms from "./Homes/Rooms";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={Homes} />
          <Route path="/rooms" component={Rooms} />
        </div>
      </Router>
    );
  }
}

export default App;
