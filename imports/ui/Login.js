import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { Component } from "react";
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import {Accounts} from 'meteor/accounts-base';
export default class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          uid: "",
          password: ""
        };
      }
    
      validateForm() {
        return this.state.uid.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
        render(){
    return (
        <div>

        <TitleBar title = "Lemon fitness"/>
        <div className="Login">      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="uid" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="uid"
              value={this.state.uid}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Link to = "Signup">Don't have an account?</Link>
        </form>
      </div>
    </div>
    );
    }
}
