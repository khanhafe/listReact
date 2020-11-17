import React, { Component } from "react";

class Validationform extends Component {
  validateForm = () => {
    console.log("form button clicked");
    return false;
  };
  render() {
    return (
      <div>
        <form onSubmit={this.validateForm}>
          Name :<input type="text" name="name" />
          <br />
          Email :<input type="text" name="email" />
          <br />
          Password :<input type="password" name="name" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Validationform;
