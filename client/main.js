import React from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/player';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import Playerlist from './../imports/ui/Playerlist';
import App from './../imports/ui/App';

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let players = Players.find({},{
            sort:{
                score:1
            }
        }).fetch();
        let title = 'Lemon Fitness'
        let subtitle = 'elva'     
        // need to be showed in one div.
        ReactDOM.render(<App title = {title} players = {players}/>, document.getElementById('app')); 
       
    });
  
    
});