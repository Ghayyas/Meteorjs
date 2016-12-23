import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todoList/todoList';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);
function onReady(){
  angular.bootstrap(document,['simple-todos']);
}

if(Meteor.isCordova){
  angular.element(document).on('deviceready',onReady);
}
else{
  angular.element(document).ready(onReady);
}
console.log('todoList',todosList);
