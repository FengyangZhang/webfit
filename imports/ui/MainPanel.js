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
        let leftval = this.state.leftval;
        let rightval = this.state.rightval;
        if (leftval) {
            if (this.leftType=="kg" && this.rightType=="lb") {
                this.setState({
                    leftval: leftval,
                    rightval: leftval * 2.20462
                })
            }
            else if (this.leftType=="cm" && this.rightType=="inch") {
                this.setState({
                    leftval: leftval,
                    rightval: leftval * 0.393701
                })
            }
        }
        else if (rightval) {
            if (this.leftType=="kg" && this.rightType=="lb") {
                this.setState({
                    leftval: rightval / 2.20462,
                    rightval: rightval,
                })
            }
            else if (this.leftType=="cm" && this.rightType=="inch") {
                this.setState({
                    leftval: rightval / 0.393701,
                    rightval: rightval,
                })
            }
        }
        else {
            return;
        }
    }
    render() {
        return(
            <div>          
                <input className="convertInput" type = "text" value={this.state.leftval}
                    onChange ={this.handleLeftChange}
                    placeholder = {this.props.left}/>
                <button className="convertButton" onClick={this.handleClick}>to</button>
                <input className="convertInput" type = "text" value={this.state.rightval}
                    onChange ={this.handleRightChange}
                    placeholder = {this.props.right}/>
            </div>
        );
    }
}

export default class MainPanel extends React.Component{

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
    renderCalculate(){
        return(
            <div className = "calculator">         
                <form className = "calForm">
                    <div style={{textAlign:"center", width:"100%"}}>
                        <p>
                            <label>Weight: </label>
                            <input type = "text" name = "weight" placeholder = "" />
                        </p>  
                        <p>
                            <label>Height: </label>
                            <input type = "text" name = "height" placeholder = "" />
                        </p>  
                        <p>
                            <label>Age: </label>
                            <input type = "text" name = "age" placeholder = "" />
                        </p>  
                        </div>
                </form>
            </div>
        );
    }
    render(){
        return (
            <div>
                <div className="converterList">
                    {this.renderConverter(0, "kg", "lb")}
                    {this.renderConverter(1, "cm", "inch")}
                </div>
                <br/>
                <br/>
                <div>
                    {this.renderCalculate()}
                </div>
            </div>
        );
    }
    
}