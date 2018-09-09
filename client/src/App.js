import React, { Component } from "react";
import AppNavbar from "./Components/AppNavBar";
import ShoppingList from "./Components/ShoppingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./Components/AppNavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
