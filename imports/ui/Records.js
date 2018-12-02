import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SigninTB from './../ui/SigninTB';
import {Weights} from './../api/weights';
import {Posts} from './../api/posts';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import echarts from 'echarts/lib/echarts';
import Dropdown from 'react-dropdown';
import Dropdownmenu from './../ui/Dropdownmenu';
import Chart from './../ui/chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Records extends TrackerReact(React.Component){

 
    constructor(props){
        super(props);
        const subscription = Meteor.subscribe('weights');
        const subscription2 = Meteor.subscribe('posts');

        this.state = {
            task: "",
            score: "",
            subscription: subscription,
            subscription2: subscription2,
            selected:"weight",
            post:"",
            mood:0,
        };

        this.addEntry= this.addEntry.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleSelectChange = this. handleSelectChange.bind(this);
        this.handlepost = this.handlepost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMoodChange = this. handleMoodChange.bind(this);
    }

    componentWillUnmount() {
        this.state.subscription.stop();
    }
    
    handleTaskChange(event) {
        this.setState({task: event.target.value});
    }

    handleScoreChange(event) {
        this.setState({score: event.target.value});
    }
    handleSelectChange(event) {
        this.setState({selected: event.target.value});
    }
    handlepost(event) {
        this.setState({post: event.target.value});
    }
    handleMoodChange(m) {
        this.setState({mood: m});
    }
    addEntry() {
        Meteor.call('insert', Meteor.userId(), this.state.selected, this.state.score);
        this.setState({score: ""});        
    }
    handleSubmit(event) {
        Meteor.call('insertp', Meteor.userId(),this.state.post, this.state.mood);
        this.setState({post: "", mood:0});
    }

    render(){
        var myWeights = Weights.find({ userId: Meteor.userId() }).fetch();
        var myPosts = Posts.find({ userId: Meteor.userId() }).fetch().reverse();
        var reclist = [];
        var i = 0;
        var renderList = myWeights.map((entry, index) => {
            if (entry.task == this.state.selected){
                reclist.push({'x':i,'y':parseFloat(entry.score)});
                i+=1;
            const desc = <p>{entry.score}</p>;
        }
        });
        var renderPosts = myPosts.map((entry, index) => {
            const desc = entry.posts;
            const time = entry.time;
            const icon = ( ()=>{
                switch(entry.mood) {
                    case 0: 
                        break;
                    case 1:
                        return (
                                <FontAwesomeIcon className="moodIcon" icon="smile-wink"/>
                        );
                        break;
                    case 2:
                        return (
                                <FontAwesomeIcon className="moodIcon" icon="angry"/>
                        );
                        break;
                    case 3:
                        return (
                                <FontAwesomeIcon className="moodIcon" icon="tired"/>
                        );
                        break;
                    case 4:
                        return (
                                <FontAwesomeIcon className="moodIcon" icon="sad-cry"/>
                        );
                        break;
                }
            })();
            return (
                <p className = "postitem" key = {index}>
                    <div>
                        {desc+"  @  "}
                        {time}
                    </div>
                    {icon}
                </p>
            );
        
        });
        
        
        const prompt = renderList.length == 0 ? "Start recording~" : "";

        const scoreInput = <input className="scoreInput" type = "text"  value={this.state.score}
            onChange ={this.handleScoreChange}
        />;
        const addButton = <input type="button" value="add" className = "addbutton" onClick={() => this.addEntry()} />;
        const addPanel = (
        <div>
            {scoreInput}
            {addButton}
        </div>
        );
        const submitPanel = ( ()=>{
            switch(this.state.mood) {
                case 0: 
                    return (<div>
                        <FontAwesomeIcon className="moodIcon" icon="smile-wink" width="10px" onClick={this.handleMoodChange.bind(this, 1)}/>
                        <FontAwesomeIcon className="moodIcon" icon="angry" width="10px" onClick={this.handleMoodChange.bind(this, 2)}/>
                        <FontAwesomeIcon className="moodIcon" icon="tired" width="10px" onClick={this.handleMoodChange.bind(this, 3)}/>
                        <FontAwesomeIcon className="moodIcon" icon="sad-cry" width="10px" onClick={this.handleMoodChange.bind(this, 4)}/>
                        <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>
                        </div>
                    );
                    break;
                case 1:
                    return (<div>
                            <FontAwesomeIcon className="moodIcon" icon="smile-wink"/>
                            <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>
                            </div>
                    );
                    break;
                case 2:
                    return (<div>
                            <FontAwesomeIcon className="moodIcon" icon="angry"/>
                            <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>
                            </div>
                    );
                    break;
                case 3:
                    return (<div>
                            <FontAwesomeIcon className="moodIcon" icon="tired"/>
                            <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>
                            </div>
                    );
                    break;
                case 4:
                    return (<div>
                            <FontAwesomeIcon className="moodIcon" icon="sad-cry"/>
                            <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>
                            </div>
                    );
                    break;
            }
        })();
        return (
        <div>
            <SigninTB title = "Lemon fitness"/>
            
            <div className = "wrapper1">
            {/* <Dropdownmenu/> */}
            <div className = "left">
            <select className = "select" onChange={this.handleSelectChange.bind(this)} value={this.state.selected}>
            <option value ="weight" selected="selected">Weight</option>
            <option value ="Bench">Bench</option>
            <option value ="Deadpull">Dead pull</option>
            <option value ="Squat">Squat</option>
            <option value ="Overhead">Overhead</option>

            </select>
            <p className = "recordstext">Your {this.state.selected} Records:</p>
                {prompt}
                {addPanel}
                {renderList}
                <br></br>
                
                <div className="chart">
                <Chart data={reclist}/>
                </div>
                </div>
                <div className = "right">
                    <form className = "saysth">
                        <div> 
                            <textarea name = "post"  className = "post" placeholder = "what's on your mind?" onChange ={this.handlepost} value={this.state.post}></textarea>
                            {submitPanel}
                        </div>
                    </form>
                    <div className = "preposts">
                    <h2>Posts</h2>
                    {renderPosts}

                    </div>
                </div>
                
            </div>
        </div>
        );
    }
};




