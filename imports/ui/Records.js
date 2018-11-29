import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SigninTB from './../ui/SigninTB';
import {Weights} from './../api/weights';
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

    // componentDidMount() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('main'));

    //     var myWeights = Weights.find({ task: "weight lift" }).fetch();
    //     console.log(myWeights);
        
    //     const mapToArray = [1,2,3,4,5];
    //     // 绘制图表
    //     myChart.setOption({
    //         title: { text: '' },
    //         tooltip: {},
    //         xAxis: {
    //             data: []
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '',
    //             type: 'bar',
    //             data: mapToArray,
    //         }]
    //     });
    // }
    constructor(props){
        super(props);
        const subscription = Meteor.subscribe('weights');
        this.state = {
            task: "",
            score: "",
            subscription: subscription,
            selected:"weight",

        };

        this.addEntry= this.addEntry.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this. handleSelectChange = this. handleSelectChange.bind(this);
        
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
    
    addEntry() {
        Meteor.call('insert', Meteor.userId(), this.state.selected, this.state.score);
        // this.setState({
        //     weightsList: Weights.find({ userId: Meteor.userId() }).fetch(),
        // });
    }
    handleDropdpwn() {      
        console.log(drop);
     
    }
      
    render(){
        this.handleDropdpwn;
        var myWeights = Weights.find({ userId: Meteor.userId() }).fetch();
        console.log(myWeights);
        var reclist = [];
        var i = 0;
        var renderList = myWeights.map((entry, index) => {
            if (entry.task == this.state.selected){
                reclist.push({'x':i,'y':parseInt(entry.score)});
                i+=1;
            const desc = <p>{entry.score}</p>;
            return (
                <li key = {index}>
                    {desc}
                </li>
            );
        }
        console.log(reclist);
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
            
            <div className = "wrapper">
            {/* <Dropdownmenu/> */}
           
            <select className = "select" onChange={this.handleSelectChange.bind(this)} value={this.state.selected}>
            <option value ="weight" selected="selected">Weight</option>
            <option value ="weight-lifting">Weight-lifting</option>
            </select>
            <p className = "recordstext">Your {this.state.selected} Records:</p>
              
                {prompt}
                {addPanel}
                {renderList}
                
                {/* <div id="main" style={{ width: 400, height: 400 }}></div> */}
                <Chart />
            </div>
        </div>
        );
    }
};




