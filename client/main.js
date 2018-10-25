import React from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
import Signup from './../imports/ui/Signup'
import Login from './../imports/ui/Login'
import Logout from '../imports/ui/Logout';
import Records from '../imports/ui/Records';
import { Router, Route, browserHistory } from 'react-router';


const unauthenticatedPages = ['/','/Signup','/Login'];
const authenticatedPages = ['/Link','/Records'];
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path = "/Signup" component = {Signup}/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Logout" component = {Logout}/>
        <Route path = "/Records" component = {Records}/>
    </Router>
  );

Tracker.autorun(() => {
    const isAuthenticated = Meteor.userId();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isUnauthenticatedPage && isAuthenticated){
        browserHistory.push('/Records');
    }
    else if (isAuthenticatedPage && !isAuthenticated){
        browserHistory.push('/');
    }
});

Meteor.startup(()=>{
        ReactDOM.render(routes, document.getElementById('app'));    
});
