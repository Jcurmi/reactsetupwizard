import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetials extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Detials" />
          <TextField
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />

          <TextField
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />

          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetials;
