import React from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
import Signup from './../imports/ui/Signup'
import Login from './../imports/ui/Login'
import { Router, Route, browserHistory } from 'react-router'


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path = "/Signup" component = {Signup}/>
        <Route path = "/Login" component = {Login}/>
    </Router>
  );

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let title = 'Lemon Fitness'
        let subtitle = 'elva'     
        // need to be showed in one div.
        // ReactDOM.render(<App title = {title}/>, document.getElementById('app')); 
        ReactDOM.render(routes, document.getElementById('app')); 
    });
  
    
});
// Meteor.startup(() => {
// ReactDOM.render((
//     <BrowserRouter>
//         <Route path = "/" component = {App} />
//         {/* <Route path="/" component={Login}/>
//         <Route path="/signup" component={Signup}/> */}
//     </BrowserRouter>
// ),
//     document.getElementById('app')
// );
// });
//   Meteor.startup(() => {
//     ReactDOM.render(routes, document.getElementById('app'));
//   });
  