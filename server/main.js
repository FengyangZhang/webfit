import { Meteor } from 'meteor/meteor';
import {Weights} from './../imports/api/weights';
import {Posts} from './../imports/api/posts';
import {Mongo} from 'meteor/mongo'; 


Meteor.startup(() => {
    
});

Meteor.methods({
    'insert': function(id, task, score){
        Weights.insert({userId:id, task:task, score:score});
    },
    'insertp': function(id, post, m){
        var curDate = new Date;
        var curTime = curDate.toLocaleString();
        Posts.insert({userId:id, posts:post, time: curTime, mood:m});
    }
});

Meteor.publish('weights', function weightsPublication() {
    return Weights.find();
});
Meteor.publish('posts', function postsPublication() {
    return Posts.find();
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
