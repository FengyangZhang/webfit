import React from 'react';
import {Players} from './../api/player'
import Player from './../ui/Player';

export default class Playerlist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            kg: "",
            lb: ""
        };
        this.handleChangeKg = this.handleChangeKg.bind(this);
        this.handleChangeLb = this.handleChangeLb.bind(this);
    }
      
    renderlbkg(){
        return(
            
            <div className = "lb2kg">          
       
            <input className="input" type = "text" name = "lb" 
                placeholder = "lb" ref={lb_value=>this.lb_value=lb_value} value={this.state.lb}
                onChange={this.handleChangeLb.bind(this)}/>
            <button className="button--round" onClick={this.updateKgAndLb.bind(this)}>to</button>
            <input className="input" type = "text" name = "kg"
                placeholder = "kg" ref={kg_value=>this.kg_value=kg_value} value={this.state.kg}
                onChange={this.handleChangeKg.bind(this)} />
            </div>
        );

    }
    handleChangeKg(event){
        this.setState({kg: event.target.value});
    }
    handleChangeLb(event){
        this.setState({lb: event.target.value});
    }

    updateKgAndLb() {
        const lb_value = this.lb_value.value;
        const kg_value = this.kg_value.value;
        if(kg_value == 0) {
            this.setState({
                kg: lb_value/2
            });
        }
        else if(lb_value == 0) {
            this.setState({
                lb: kg_value*2
            });
        }
    }
  
    
    renderCalculate(){

        return(
            <div className = "calculator">         
            <form onSubmit={this.handleSubmit}>                   
            Weight: <input className="input" type = "text" name = "weight" placeholder = "" />kg<br></br>
            Height: <input className="input" type = "text" name = "height" placeholder = "" />cm<br></br>
            Age:&nbsp;&nbsp;&nbsp;&nbsp; <input className="input" type = "text" name = "age" placeholder = "" />years old<br></br>
            </form>
            </div>

        );
        
    
}
    render(){
        return <div>
            {this.renderlbkg()}
            {this.renderCalculate()}
        </div>
    }
    
}

Playerlist.PropTypes = {
    players:React.PropTypes.array.isRequires
}