import React from 'react';
import TitleBar from './../ui/TitleBar';
import Playerlist from './../ui/Playerlist';
import AddPlayer from './../ui/AddPlayer';

export default class App extends React.Component{
    render(){
        return (
            <div>
            <TitleBar title = {this.props.title}/>
            <div className = "wrapper">       
            <Playerlist players = {this.props.players}/>              
            
            </div>
        </div>
        );
    }
};