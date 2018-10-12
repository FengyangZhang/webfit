import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/player';
import {Mongo} from 'meteor/mongo'; 

Meteor.startup(()=>{



});
// return playersList.map(function(player){
//     return <p key={player._id}>{player.name}'s score is {player.score}</p>;

// });
// class Person {
//     constructor(name = 'Anonymous', age = '0'){
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting(){
//         // return 'Hi, I am' + this.name + '.'
//         return `Hi, I am ${this.name}`;
//     }
//     getPersonDescription(){
//         return `${this.name} is ${this.age} years old.`
//     }
//   }
//   class Employee extends Person{
//     constructor(name,age,title){
//         super(name,age);
//         this.title = title;
//     }
//     getGreeting(){
//         if(this.title){
//             return `Hi, I am ${this.name}. I work as a ${this.title}`;

//         }else{
//             return super.getGreeting();
//         }
//     }
//     hasJob(){
//         return !!this.title;
//     }

//   }
//   class Programmer extends Person{
//       constructor(name,age,perferredLanguage = 'assembly'){
//           super(name,age);
//           this.perferredLanguage = perferredLanguage;
//       }
//       getGreeting(){
//           return `Hi, I am ${this.name}, I am ${this.age} years old, and my prefered programming language is ${this.perferredLanguage}`;
//       }
//   }
//   let me = new Programmer('ELva',23,'python');
//   console.log(me.getGreeting());
//   let userone = new Programmer();
//   console.log(userone.getGreeting());
