import React, { Component } from "react";

class Mydata extends Component {
  render() {
    console.log("Mydatajs rendering...");
    return (
      <div>
        <p onClick={this.props.click}>
          Hello my name is {this.props.name} and my Age is {this.props.age}.
          <span style={{ color: "red" }}> {this.props.children}</span>
        </p>
      </div>
    );
  }
}
export default Mydata;
