import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';
 
class TodosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
  
  add(e){
    if(e == undefined){
      window.alert('Please Enter something');
    }
   else if(e == ''){
      window.alert('Please Enter something');
      
    }
    else{
    this.tasks.push({text:e});
    this.name = "";
  }
 }
 delete(i){
   
  var d = window.confirm("Are you Sure You want to remove this ?");
   if(d){
    var index = this.tasks.indexOf(i);

    if (index > -1) {
    this.tasks.splice(index, 1);
  }

 }
}
edit(ind){
 
    var asked = window.prompt('Enter your Item',ind.text); 
  // console.log('ind', typeof(asked),asked);
  if(asked !== null){
    for(var i=0;i < this.tasks.length;i++){
    if(this.tasks[i].$$hashKey == ind.$$hashKey){
        this.tasks[i].text= asked; 
        break;
    }
  }
 }
}
}
 
export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todoList/todoList.html',
    controller: [TodosListCtrl]
  });