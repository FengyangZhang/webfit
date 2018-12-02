import React from 'react';
import TitleBar from './../ui/TitleBar';
import MainPanel from './../ui/MainPanel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink, faAngry, faTired, faSadCry } from '@fortawesome/free-solid-svg-icons'

library.add(faSmileWink);
library.add(faAngry);
library.add(faTired);
library.add(faSadCry);
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