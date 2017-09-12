import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

function DashBoardController($scope, $reactive){
  'ngInject';
  $reactive(this).attach($scope);
}

function config($stateProvider){
  'ngInject';
}

export default angular.module('dashboard', [
  angularMeteor,
  uiRouter
])
  .controller('DashBoardController', DashBoardController)
  .config(config);