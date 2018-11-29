import React from 'react';
import {Link} from 'react-router';
import TitleBar from './../ui/TitleBar';
import Logout from './../ui/Logout';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SigninTB from './../ui/SigninTB';
import {Weights} from './../api/weights';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import echarts from 'echarts/lib/echarts';
import Dropdown from 'react-dropdown';


const options = [
    'weight', 'weight-lifting'
  ]
  
  const arrowClosed = (
    <span className="arrow-closed" />
  )
  const arrowOpen = (
    <span className="arrow-open" />
  )
  
  export default class Dropdownmenu extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        selected: ''
      }
    }  
    render () {
      const defaultOption = this.state.selected
      return (
        <section>
          <Dropdown
            arrowClosed={arrowClosed}
            arrowOpen={arrowOpen}
            options={options}
            value={defaultOption}
            placeholder="Your option"
          /> 
       </section>
    
      )
    }
  }
  

// import React from 'react';
// import {Link} from 'react-router';
// import TitleBar from './../ui/TitleBar';
// import Logout from './../ui/Logout';
// import {Accounts} from 'meteor/accounts-base';
// import {Meteor} from 'meteor/meteor';
// import SigninTB from './../ui/SigninTB';
// import {Users} from './../api/users';


// export default class App extends React.Component{
    
//     render(){
//         let userId = Meteor.userId(); 
//         return (
//         <div>
//         <SigninTB title = "Lemon fitness"/>
//         <div className = "wrapper">
//          {/* Meteor.users.update(this.userId, {$set: {blurb: newText}}); */}
//          <button className="button button--round" onClick = {() =>{Meteor.users.update(this.userId, {$set: {blurb: newText}})}}>add</button>
       
//         </div>
//         </div>
//         );
//     }
// };


