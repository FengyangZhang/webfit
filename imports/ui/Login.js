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
                <div className = "wrapper">
                    <div className = "Login">
                        <form className = "Loginform" onSubmit = {this.onSubmit.bind(this)}>
                            <p><label>Email: </label><input className = "email" type = "email" ref = "email" name = "email" placeholder = "Email"/></p>
                            <p><label>Password:</label><input className = "password" type = "password" ref = "password" name = "password" placeholder = "Password"/></p>
                            <p><input type = "submit" value="Login"/></p>
                            <p>
                                <div className = "link">
                                 <Link to = "/Signup"> Don't have an account? </Link> 
                                </div>  
                            </p>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
    );

    }
}
