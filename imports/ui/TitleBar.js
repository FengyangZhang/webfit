import React from 'react';
import {Link} from 'react-router';
export default class TitleBar extends React.Component{
    renderSubtitle(){
       if (this.props.subtitle){
           return <h2>Created by {this.props.subtitle}</h2>
       }
    }
    render(){
        return(
            <div className="title-bar">
            <div className = "login">
            <Link to = "/Login" className = "logintitle">Login</Link>&nbsp;
            <Link to = "/Signup" className = "logintitle">Sign Up</Link>
            </div>
            <div className = "wrapper">
            
                <h1>{this.props.title}</h1>
                
                {this.renderSubtitle()}
                </div>
            </div>
        );
    }
}