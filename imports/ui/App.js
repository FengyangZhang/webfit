import React from 'react';
import TitleBar from './../ui/TitleBar';
import MainPanel from './../ui/MainPanel';

export default class App extends React.Component{
    render(){
        return (
            <div>
            <TitleBar title = "Lemon fitness"/>
            
            <div className = "wrapper">       
            <MainPanel panel/>
            </div>
        </div>
        );
    }
};