import React from 'react';
export default class Accumulate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [{
                item: "",
                calories: 0,
            }],
            itemName: "",
            caInput: "",
        };

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleCaChange = this.handleCaChange.bind(this);
        this.addEntry = this.addEntry.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }
    handleItemChange(event) {
        this.setState({itemName: event.target.value});
    }

    handleCaChange(event) {
        this.setState({caInput: event.target.value});
    }

    addEntry() {
        let itemName = this.state.itemName;
        let caInput = this.state.caInput;
        const list = this.state.list.slice();
        this.setState({
            list: list.concat([{
                item: itemName,
                calories: caInput,
            }]),
            itemName: "",
            caInput: "",
        });
    }

    deleteEntry(index) {
        const list = this.state.list.slice();
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    }

    render() {
        let renderList;
        renderList = this.state.list.map((entry, index) => {
            if (index == 0) {
                return (
                    <li key={index}>
                        <p className="intro"></p>
                    </li>
                );
            }
            else {
                const desc = <p>{'Item #' + index + ' is ' + entry.item + ', '+ entry.calories + ' calories'}</p>;
                const deleteButton = 
                    <input type="button" value="delete" onClick={() => this.deleteEntry(index)}/>
                return (
                    <li key={index}>
                        {desc}
                        {deleteButton}
                    </li>
                );
            }
        });
        const itemInput = <input className="itemInput" type = "text" value={this.state.itemName}
                    onChange ={this.handleItemChange}
                    />;
        const caloriesInput = <input className="caInput" type = "text" value={this.state.caInput}
                    onChange ={this.handleCaChange}
                    />;
        const addButton = <input type="button" value="add" onClick={() => this.addEntry()} style={{backgroundColor: "#37BC9B"}}/>;
        const addPanel = (
            <div>
                {itemInput}
                {caloriesInput}
                {addButton}
            </div>
        );
        return (
            <div>
                {/* <ul>{renderList}</ul>
                <br/>
                <br/>
                {addPanel} */
              }
            </div>
        );
    }
}