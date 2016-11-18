import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todoList/todoList';
 
angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);
console.log('todoList',todosList);
