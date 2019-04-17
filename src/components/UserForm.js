import React, { Component } from "react";
import FormUserDetails from "./FormUserDetials";
import FormPersonalDetails from "./FormPersonalDetials";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Previous to the next step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return <Success />;
    }
    return <div />;
  }
}

export default UserForm;
