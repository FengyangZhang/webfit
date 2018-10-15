import React from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let title = 'Lemon Fitness'
        let subtitle = 'elva'     
        // need to be showed in one div.
        ReactDOM.render(<App title = {title}/>, document.getElementById('app')); 
       
    });
  
    
});