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
            task: "",
            score: "",
            weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        };

        this.addEntry= this.addEntry.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
    }

    handleTaskChange(event) {
        this.setState({task: event.target.value});
    }

    handleScoreChange(event) {
        this.setState({score: event.target.value});
    }

    addEntry() {
        Meteor.call('insert', Meteor.userId(), this.state.task, this.state.score);
        this.setState({
            weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        });
    }

    render(){
        var myWeights = this.state.weightsList;
        var renderList = myWeights.map((entry, index) => {
            const desc = <p>{'For ' + entry.task + ', your record is ' + entry.score}</p>;
            return (
                <li key={index}>
                    {desc}
                </li>
            );
        });

        const prompt = renderList.length == 0 ? "Start recording~" : "This is your records:";

        const taskInput = <input className="taskInput" type = "text" value={this.state.taskInput}
            onChange ={this.handleTaskChange}
        />;
        const scoreInput = <input className="scoreInput" type = "text" value={this.state.scoreInput}
            onChange ={this.handleScoreChange}
        />;
        const addButton = <input type="button" value="add" onClick={() => this.addEntry()} style={{backgroundColor: "#37BC9B"}}/>;
        const addPanel = (
        <div>
            {taskInput}
            {scoreInput}
            {addButton}
        </div>
);
        return (
        <div>
        <SigninTB title = "Lemon fitness"/>
        <div className = "wrapper">
        {prompt}
        {addPanel}
        {renderList}
        </div>
        </div>
        );
    }
};


