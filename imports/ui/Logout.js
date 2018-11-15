import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router';

export default class Logout extends React.Component{
    onLogout(){
        Accounts.logout();
    }
    render() {
        return(
               
                <button className = "logoutbutton" onClick={this.onLogout.bind(this)}>Logout</button>
        )
    }
}