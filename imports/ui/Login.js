import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : ''
        };
    }
    onSubmit(e){
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        
        Meteor.loginWithPassword({email},password, (err) => {
            console.log('Login callback',err);
        });
    }

    render(){
        return (
            <div>
            <TitleBar title = "Lemon fitness"/>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <input type = "email" ref = "email" name = "email" placeholder = "Email"/>
                <input type = "password" ref = "password" name = "password" placeholder = "Password"/>
                <button> Login </button>
            </form>
            <Link to = "/Signup"> Don't have an account? </Link>
            </div>
       
    );

    }
}
