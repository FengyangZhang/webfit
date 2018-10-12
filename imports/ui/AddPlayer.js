import React from 'react';
import {Players} from '../api/player';

export default class AddPlayer extends React.Component{
    handleSubmit(e){
    let playername = e.target.playerName.value;
    let playerscore = e.target.playerScore.value;
    
    e.preventDefault(); //this will gonna to stop the full page refreshed from occuring when the form gets submitted.
    if(playername){
        e.target.playerName.value = '';
       
        Players.insert({
            name:playername,
            score:parseInt(playerscore)
        });
    }
    }
    render(){
        return(   
        <div className = "item">         
         <form onSubmit={this.handleSubmit}>
             <input type = "text" name = "playerName" placeholder = "Player name" />
             <input type = "text" name = "playerScore" placeholder = "Player score" />
             <button className="button">Add player</button>
         </form>        
        
       
        </div>
       );
    }
}