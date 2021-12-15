import React from "react";
import "./App.css";
import Ads from "./components/Ads";
import Header from "./components/Header";
import ShapeCalculator from "./components/ShapeCalculator";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header title="Shape Calculator" />
      <div className="main-container">
        <Welcome title="Welcome to Shape Calculator">
          <p>
            <b>
              Shape Calculator is an interactive web application. To the right
              you will find the 3 step application. Follow the instructions in
              each step. Clicking cancel will take you back to step 1. Enjoy!
            </b>
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her not to do so, because
            there were thousands of bad Commas.
          </p>
        </Welcome>
        <ShapeCalculator />
        <Ads placeholder="120 x 240 Ad (Vertical Banner)" />
      </div>
    </div>
  );
}

export default App;
