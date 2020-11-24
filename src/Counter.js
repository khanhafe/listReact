import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0
  };
  changeCounter = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + 5 };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - 5 };
        });
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div
        style={{ border: "4px solid red", marginTop: "20px", height: "200px" }}
      >
        <div>my Result :{this.props.ctr} </div>
        <br />
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={() => this.changeCounter("add", 5)}>Add</button>
        <button onClick={() => this.changeCounter("sub", 5)}>Subtract</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
