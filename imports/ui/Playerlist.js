import React from 'react';
import {Players} from './../api/player'
import Player from './../ui/Player';

export default class Playerlist extends React.Component{

    renderlbkg(){
        return(
            
            <div className = "lb2kg">          
       
            <input className="input" type = "text" name = "lb" placeholder = "lb" />
            <button className="button--round">to</button>
            <input className="input" type = "text" name = "kg" placeholder = "kg" />
            </div>
        );

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