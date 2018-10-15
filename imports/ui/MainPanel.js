import React from 'react';
import Converter from './../ui/Converter';
import Calculator from './../ui/Calculator';

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
        return (
            <Calculator/>
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
                <div className="calculator">
                    {this.renderCalculate()}
                </div>
            </div>
        );
    }
    
}