import React, { Component } from "react";
import "./styles.css";
import Mydata from "./Mydata";

class App extends Component {
  state = {
    person: [
      { name: "Hafeez", age: "29" },
      { name: "Mujju", age: "29" },
      { name: "Afshan", age: "24" }
    ],
    showPerson: false
  };

  deletePersonData = (personindex) => {
    const persons = this.state.person;
    persons.splice(personindex, 1);
    this.setState({ person: persons });
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

  toggleEventHandler = () => {
    const personstatus = this.state.showPerson;
    this.setState({
      showPerson: !personstatus
    });
  };

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((personinfo, index) => {
            return (
              <Mydata
                click={() => this.deletePersonData(index)}
                name={personinfo.name}
                age={personinfo.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {persons}
        <button onClick={() => this.switchNameHandler("arfaaz")}>
          Try me!
        </button>
        <br />

        <button onClick={this.toggleEventHandler}>Toggle Person</button>
      </div>
    );
  }
}
export default App;
