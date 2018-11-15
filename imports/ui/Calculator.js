import React from 'react';
export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weight: "",
            height: "",
            age: "",
            calculated: false,
            bmi: "",
            gender: "male",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleMaleChange = this.handleMaleChange.bind(this);
        this.handleFemaleChange = this.handleFemaleChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    handleSubmit(event) {
        height = this.state.height;
        weight = this.state.weight;
        age = this.state.age;
        bmi = weight / (height/100 * height/100);
        gender = this.state.gender;
        let bmr;
        if(gender === "male") {
            bmr = 13.7 * weight + 5.0 * height - 6.8 * age + 66;
        }
        else {
            bmr = 9.6 * weight + 1.8 * height - 4.7 * age + 655;
        }
        this.setState({
            calculated: true,
            bmi: bmi,
            bmr: bmr,
        })
    }

    handleHeightChange(event) {
        this.setState({height: event.target.value});
    }
    handleWeightChange(event) {
        this.setState({weight: event.target.value});
    }
    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }
    handleMaleChange(event) {
        this.setState({gender: "male"});
    }
    handleFemaleChange(event) {
        this.setState({gender: "female"});
    }
    render(){
        return(
            this.state.calculated ?
            (
                <div>
                    <b>Your BMI is {this.state.bmi}, calculated as {this.state.weight}kg / ({this.state.height/100}m ^ 2).</b>
                    <br/>
                    <b>Your BMR is {this.state.bmr}, calculated as 
                        {this.state.gender === "male" ? (
                            13.7 + "*" + this.state.weight + "kg" + "+" + 5.0 + "*" + this.state.height + "cm" 
                                + "-" + 6.8 + "*" + this.state.age + "years" + "+" + 66 + "."
                        ) :(
                            9.6 + "*" + this.state.weight + "kg" + "+" + 1.8 + "*" + this.state.height + "cm" 
                                + "-" + 4.7 + "*" + this.state.age + "years" + "+" + 655 + "."
                        )}
                    </b>
                </div>
            ) : (
                <div>         
                    <form className = "calForm">
                        <div>
                            <b><text>Input your information to get you BMI and BMR: </text></b>
                            <p>
                                <label>Weight(kg): </label>
                                <input type = "text" name = "weight"  placeholder = "" onChange ={this.handleWeightChange}/>
                            </p>  
                            <p>
                                <label>Height(cm): </label>
                                <input type = "text" name = "height" placeholder = "" onChange ={this.handleHeightChange}/>
                            </p>  
                            <p>
                                <label>Age(years): </label>
                                <input type = "text" name = "age" placeholder = "" onChange ={this.handleAgeChange}/>
                            </p>
                            <p>
                                <label>Gender: </label>
                                <input type = "radio" name = "gender" onChange={this.handleMaleChange}
                                    defaultChecked={this.state.gender === "male"} /> male     
                                <input type = "radio" name = "gender" onChange={this.handleFemaleChange}
                                    defaultChecked={this.state.gender != "male"} /> female
                            </p>
                            <input type="button" value="Submit" onClick={this.handleSubmit}/>  
                            <input type="reset" value="Clear" />
                        </div>
                    </form>
                </div>
            )
        );
    }
}


// 