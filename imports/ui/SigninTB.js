import React from 'react';
import {Link} from 'react-router';
import Logout from './../ui/Logout';
export default class SigninTB extends React.Component{
    renderSubtitle(){
       if (this.props.subtitle){
           return <h2>Created by {this.props.subtitle}</h2>
       }
    }
    render(){
        return(
            <div className="title-bar">
            <div className = "login">
            <Logout/>
            </div>
            <div className = "wrapper">
            
                <h1>{this.props.title}</h1>
                
                {this.renderSubtitle()}
                </div>
            </div>
        );
    }
}