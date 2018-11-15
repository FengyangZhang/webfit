import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SigninTB from './../ui/SigninTB';


export default class App extends React.Component{
    
    render(){
        let userId = Meteor.userId(); 
        return (
        <div>
        <SigninTB title = "Lemon fitness"/>
        <div className = "wrapper">
        <button className="button button--round" onClick = {() =>{Meteor.users.insert({"weight":1})}}>add</button>
         
        </div>
        </div>
        );
    }
};


