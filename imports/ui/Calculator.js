import React from 'react';
export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bmi: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render(){
        return(
            <div>         
                <form className = "calForm">
                    <div>
                        <p>
                            <label>Weight(kg): </label>
                            <input type = "text" name = "weight" placeholder = "" />
                        </p>  
                        <p>
                            <label>Height(cm): </label>
                            <input type = "text" name = "height" placeholder = "" />
                        </p>  
                        <p>
                            <label>Age(years): </label>
                            <input type = "text" name = "age" placeholder = "" />
                        </p>
                        <input type="submit" value="Submit" />  
                    </div>
                </form>
            </div>
        );
    }
}