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
        <button onClick={this.props.onAdd}>Add 10</button>
        <button onClick={this.props.onSub}>Subtract 5</button>
        <hr />
        <button onClick={this.props.showResult}>Show Result</button>
        {this.props.result.map((el) => (
          <li>{el.value}</li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    result: state.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onAdd: () => dispatch({ type: "ADD", val: 10 }),
    onSub: () => dispatch({ type: "SUB", val: 5 }),
    showResult: () => dispatch({ type: "SHOW_RESULT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
