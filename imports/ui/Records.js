import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SigninTB from './../ui/SigninTB';
import {Weights} from './../api/weights';


export default class Records extends React.Component{
    constructor(props){
        super(props);
        Meteor.subscribe('weights');
        this.state = {
           weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        };

        this.addWeight= this.addWeight.bind(this);
    }

    addWeight() {
        Meteor.call('insert', Meteor.userId(), 1);
        this.setState({
            weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        });
    }

    render(){
        var myWeights = this.state.weightsList;
        renderList = myWeights.map((entry, index) => {
            if (index == 0) {
                return (
                    <li key={index}>
                        <p className="intro">Add an item below.</p>
                    </li>
                );
            }
            else {
                const desc = <p>{'Item #' + index + ' is ' + entry.weight}</p>;
                return (
                    <li key={index}>
                        {desc}
                    </li>
                );
            }
        });
        return (
        <div>
        <SigninTB title = "Lemon fitness"/>
        <div className = "wrapper">
        <button className="button button--round" onClick = {() => this.addWeight()}>add</button>
        {renderList}
        </div>
        </div>
        );
    }
};


