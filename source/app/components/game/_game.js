(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `source/app/game`, however, could exist several additional folders representing
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
  var module = window.mainApp + '.game';
  angular.registerModule(module, ['ui.router']);
  
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
  .controller('GameController', GameController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('game', {
      url: '/game',
      views: {
        'header': {
          controller: null,
          templateUrl: null
        },
        'main': {
          controller: 'GameController',
          templateUrl: '/_game__view.html'
        }
      },
      data: {
        pageTitle: 'Game'
      }
    });
  }

  //Adding injections for GameController
  GameController.$inject = ['$scope', '$cookies', 'generateSteps'];

  /**
   * GameController
   * @param $scope
   * @constructor
   */
  function GameController($scope, $cookies, generateSteps) {
    
    // Generate a Step element
    generateSteps.generateStep();
    
    // Check for steps already generated
    console.log(generateSteps.steps);
    
    // Generate another Step element
    generateSteps.generateStep();
    
    // Check again for steps generated
    console.log(generateSteps.steps);
  }

})(angular);
