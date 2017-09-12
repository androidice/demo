import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

function DemoController($scope, $reactive){
  'ngInject';
  $reactive(this).attach($scope);
  $scope.title = 'Hello world';
}

function config($locationProvider,$stateProvider, $urlRouterProvider){
  'ngInject';
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}

export default angular.module('demo', [
  angularMeteor,
  uiRouter
])
  .controller('DemoController', DemoController)
  .config(config)
