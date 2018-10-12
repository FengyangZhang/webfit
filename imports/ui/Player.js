import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/player';
export default class Player extends React.Component{
    render(){
        
        return( 
            <div  key={this.props.player._id} className = "item">
            <p>
            {this.props.player.name}'s score is {this.props.player.score}
            </p>
            <button className="button button--round" onClick = {() =>{Players.update({_id:this.props.player._id},{$inc:{score:1}});}}>+</button>
            <button className="button button--round" onClick = {() =>{Players.update({_id:this.props.player._id},{$inc:{score:-1}});}}>-</button>
            <button className="button button--round" onClick = {() =>{Players.remove({_id:this.props.player._id});}}>X</button>
            </div>
        );         
        
    }
}
Player.propTypes = {
    player:React.PropTypes.object.isRequired

};

