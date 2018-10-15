import React from 'react';

class Converter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            leftval: "",
            rightval: "",
        };
        this.leftType = this.props.left;
        this.rightType = this.props.right;
        this.handleLeftChange = this.handleLeftChange.bind(this);
        this.handleRightChange = this.handleRightChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLeftChange(event) {
        this.setState({leftval: event.target.value});
    }

    handleRightChange(event) {
        this.setState({rightval: event.target.value});
    }

    handleClick() {
        let leftval = parseFloat(this.state.leftval);
        let rightval = parseFloat(this.state.rightval);
        if (leftval && rightval) {
            return
        }
        else if (leftval) {
            if (this.leftType=="kg" && this.rightType=="lb") {
                this.setState({
                    leftval: leftval,
                    rightval: leftval * 2.20462
                })
            }
        }
        else {
            if (this.leftType=="kg" && this.rightType=="lb") {
                this.setState({
                    leftval: rightval / 2.20462,
                    rightval: rightval,
                })
            }
        }
    }
    render() {
        return(
            <div>          
                <input className="input" type = "text" value={this.state.leftval}
                    onChange ={this.handleLeftChange}
                    placeholder = {this.props.left}/>
                <button className="convert" onClick={this.handleClick}>to</button>
                <input className="input" type = "text" value={this.state.rightval}
                    onChange ={this.handleRightChange}
                    placeholder = {this.props.right}/>
            </div>
        );
    }
}

export default class Playerlist extends React.Component{

    constructor(props) {
        super(props);
    }
      
    renderConverter(i, left, right){
        return (
            <Converter
                left={left}
                right={right}
            />
        );
    }
    // renderCalculate(){

    //     return(
    //         <div className = "calculator">         
    //         <form onSubmit={this.handleSubmit}>                   
    //         Weight: <input className="input" type = "text" name = "weight" placeholder = "" />kg<br></br>
    //         Height: <input className="input" type = "text" name = "height" placeholder = "" />cm<br></br>
    //         Age:&nbsp;&nbsp;&nbsp;&nbsp; <input className="input" type = "text" name = "age" placeholder = "" />years old<br></br>
    //         </form>
    //         </div>

    //     );
    render(){
        return (
            <div>
                {this.renderConverter(0, "kg", "lb")}
                {/* {this.renderCalculate()} */}
            </div>
        );
    }
    
}