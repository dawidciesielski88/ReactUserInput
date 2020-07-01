import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import "./UserOutput/UserOutput.css";

class App extends Component {
  state = {
    userName: "superdave",
  };

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Dawid" />
      </div>
    );
  }
}

export default App;
