import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';
import {Task} from '../../api/task.js';
import {Meteor} from 'meteor/meteor';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.hideCompleted = false;
    this.helpers({
      task(){
        const selector = {};
        if(this.getReactively('hideCompleted')){
          selector.checked = {
            $ne: true
          }
        }
        
        
        return Task.find({},{
          
          checked:{
            $ne: true

          },  
          
          sort:{
            createdAt: -1
          }
        });
      },
      incrementCount(){
        return Task.find({
          checked:{
            $ne:true
          }
        }).count();
      },
      currentUser(){
        return Meteor.user()
      }
    });
    // this.tasks = [{
    //   text: 'This is task 1'
    // }, {
    //   text: 'This is task 2'
    // }, {
    //   text: 'This is task 3'
    // }];
  }
  
  add(e){
    if (!Meteor.userId()) {
      window.alert('You need to login in first');
          this.name = "";

      // throw new Meteor.Error('not-authorized');
    }
    else{
    if(e == undefined){
      window.alert('Please Enter something');
    }
   else if(e == ''){
      window.alert('Please Enter something');
      
    }
    else{
    // this.tasks.push({text:e});
    Task.insert({
      text:e,
      createdAt: new Date,
      owner: Meteor.userId(),
      username: Meteor.user().username
    })
    this.name = "";
  }
 }
}


 delete(i){
   
  var d = window.confirm("Are you Sure You want to remove this ?");
   if(d){
     console.log('i',Task);
      Task.remove(i._id);
  //   var index = this.tasks.indexOf(i);

  //   if (index > -1) {
  //   this.tasks.splice(index, 1);
  // }

 }
}
edit(ind){
 
    var asked = window.prompt('Enter your Item',ind.text); 
  // console.log('ind', typeof(asked),asked);
  if(asked !== null){
   
  Task.update(ind._id, {
         $set: {
             text: asked
         },
        });  
    
    
   //   for(var i=0;i < this.tasks.length;i++){
  //   if(Task._id == ind._id){
  //       this.tasks[i].text= asked; 
  //       break;
  //   }
  // }
 }
}
}
 
export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todoList/todoList.html',
    controller: ['$scope',TodosListCtrl]
  });