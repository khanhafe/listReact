import React, { Component } from "react";

class Validationform extends Component {
  state = {
    formData: {},
    errors: {}
  };
  handleOnChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;

    this.setState({
      formData
    });
    console.log(formData);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      let formData = {};
      formData["name"] = "";
      formData["email"] = "";
      formData["comment"] = "";
      this.setState({ formData: formData });

      alert("Demo Form is submited");
    }
  };

  validateForm = () => {
    let forenteredData = this.state.formData;
    let errors = {};
    let isValid = true;
    if (!forenteredData["name"]) {
      isValid = false;
      errors["name"] = "please enter name";
    }
    if (!forenteredData["email"]) {
      isValid = false;
      errors["email"] = "please enter Email";
    }
    if (!forenteredData["password"]) {
      isValid = false;
      errors["password"] = "please enter password";
    }
    this.setState({
      errors: errors
    });
    return isValid;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name :<input type="text" name="name" onChange={this.handleOnChange} />
          {this.state.errors["name"]}
          <br />
          Email :
          <input type="text" name="email" onChange={this.handleOnChange} />
          {this.state.errors.email}
          <br />
          Password :
          <input
            type="password"
            name="password"
            onChange={this.handleOnChange}
          />
          {this.state.errors.password}
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Validationform;
