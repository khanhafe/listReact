import React, { Component } from "react";
import "./styles.css";
import Mydata from "./Mydata";

class App extends Component {
  state = {
    person: [
      { name: "Hafeez", age: "29" },
      { name: "Mujju", age: "29" },
      { name: "Afshan", age: "24" }
    ]
  };

  switchNameHandler = (myParameter) => {
    this.setState({
      person: [
        { name: myParameter, age: "29" },
        { name: "Mujju", age: "30" },
        { name: "Afshan", age: "24" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <Mydata
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Mydata
          click={this.switchNameHandler.bind(this, "Khan")}
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        >
          He is very special
        </Mydata>
        <Mydata
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <button onClick={() => this.switchNameHandler("arfaaz")}>
          Try me!
        </button>
      </div>
    );
  }
}
export default App;
