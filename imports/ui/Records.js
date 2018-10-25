import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';



export default class App extends React.Component{
    render(){
        return (
            <div>
            <p> hello </p>
            <Logout/>
            </div>
        );
    }
};