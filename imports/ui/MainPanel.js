import React from 'react';
import Converter from './../ui/Converter';
import Calculator from './../ui/Calculator';
import Accumulate from './../ui/Accumulate';

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
    render(){
        return (
            <div className = "outter">
                <div className="converterList">
                    {this.renderConverter(0, "kg", "lb")}
                    {this.renderConverter(1, "cm", "inch")}
                </div>
                <br/>
                <br/>
                <div className="calculator">
                    <Calculator/>
                </div>
                <div className="itemList">
                    <Accumulate/>
                </div>
            </div>
        );
    }
    
}