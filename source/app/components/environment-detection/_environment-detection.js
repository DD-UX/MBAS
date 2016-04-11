(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `src/app/home`, however, could exist several additional folders representing
   * additional modules that would then be listed as dependencies of this one.
   * For example, a `note` section could have the submodules `note.create`,
   * `note.delete`, `note.edit`, etc.
   *
   * Regardless, so long as dependencies are managed correctly, the build process
   * will automatically take take of the rest.
   *
   * The dependencies block here is also where component dependencies should be
   * specified, as shown below.
   */
  var module = window.mainApp + '.environment-detection';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('EnvDetectionController', EnvDetectionController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('environment-detection', {
      url: '/environment-detection',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header.html'
        },
        'main': {
          controller: 'EnvDetectionController',
          templateUrl: '/_environment-detection.html'
        }
      },
      data: {
        pageTitle: '<Angular><Sass><Bootstrap 4><Middleman 4>'
      }
    });
  }

  //Adding injections for EnvDetectionController
  EnvDetectionController.$inject = ['$scope'];

  /**
   * EnvDetectionController
   * @param $scope
   * @constructor
   */
  function EnvDetectionController($scope) {
    $scope.hello = '';
  }

})(angular);
