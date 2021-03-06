import React, { Component } from "react";
import "./styles.css";
import Mydata from "./Mydata";
import PropTypes from "prop-types";
import Aux from "./hoc/Auxi";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Validationform from "./Validationform";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      person: [
        { name: "Hafeez", age: "29" },
        { name: "Mujju", age: "29" },
        { name: "Afshan", age: "24" }
      ],
      showPerson: false
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props);
    return null;
  }
  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  deletePersonData = (personindex) => {
    const persons = [...this.state.person];
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
      <Aux>
        <BrowserRouter>
          <li>
            <Link to="/validation">validate Form</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>

          <div className="App">
            <h1>{this.props.title}</h1>
            {persons}
            <button onClick={() => this.switchNameHandler("arfaaz")}>
              Try me!
            </button>
            <br />

            <button onClick={this.toggleEventHandler}>Toggle Person</button>
          </div>
          <Route exact path="/validation" component={Validationform} />
          <Route exact path="/counter" component={Counter} />
        </BrowserRouter>
      </Aux>
    );
  }
}

App.propTypes = {
  age: PropTypes.number
};

export default App;
