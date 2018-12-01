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
        };

        this.addEntry= this.addEntry.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleSelectChange = this. handleSelectChange.bind(this);
        this.handlepost = this.handlepost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    addEntry() {
        Meteor.call('insert', Meteor.userId(), this.state.selected, this.state.score);
        // this.setState({
        //     weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        // });
    }
    handleSubmit(event) {
        Meteor.call('insertp', Meteor.userId(),this.state.post);
        
    }

    handleDropdpwn() {      
        console.log(drop);
     
    }
      
    render(){
        this.handleDropdpwn;
        var myWeights = Weights.find({ userId: Meteor.userId() }).fetch();
        var myPosts = Posts.find({ userId: Meteor.userId() }).fetch();
        console.log(">>>" + myPosts);
        console.log(">>>" + myWeights);
        var reclist = [];
        var i = 0;
        var renderList = myWeights.map((entry, index) => {
            if (entry.task == this.state.selected){
                reclist.push({'x':i,'y':parseFloat(entry.score)});
                i+=1;
            const desc = <p>{entry.score}</p>;
            // return (
            //     <li key = {index}>
            //         {/* {desc} */}
            //     </li>
            // );
        }
        });
        var renderPosts = myPosts.map((entry, index) => {
            const desc = <p>{entry.posts}</p>;
            console.log("hhhh" + myPosts);
            return (
                <p className = "postitem" key = {index}>
                    {desc}
                </p>
            );
        
        });
        
        //折线图
        
        const prompt = renderList.length == 0 ? "Start recording~" : "";

        // const taskInput = <input className="taskInput" type = "text" value={this.state.selected}
        //     onChange ={this.handleTaskChange}
        // />;
        const scoreInput = <input className="scoreInput" type = "text"  value={this.state.scoreInput}
            onChange ={this.handleScoreChange}
        />;
        const addButton = <input type="button" value="add" className = "addbutton" onClick={() => this.addEntry()} />;
        const addPanel = (
        <div>
            {/* {taskInput} */}
            {scoreInput}
            {addButton}
        </div>
        );
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
                
                {/* <div id="main" style={{ width: 400, height: 400 }}></div> */}
                <br></br>
                
                <div className="chart">
                <Chart data={reclist}/>
                </div>
                </div>
                <div className = "right">
                <form className = "saysth">
                        <div> 
                            <textarea name = "post"  className = "post" placeholder = "what's on your mind?" onChange ={this.handlepost}></textarea>
                            <input type="button" className = "postbutton" value="Submit" onClick={this.handleSubmit}/>                  
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




