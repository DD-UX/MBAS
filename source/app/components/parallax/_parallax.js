(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `source/app/components/_parallax`, however, could exist several additional folders representing
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
  var module = window.mainApp + '.parallax';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('ParallaxController', ParallaxController);

  Config.$inject = ['$stateProvider', 'snSkrollrProvider'];

  function Config($stateProvider, snSkrollrProvider) {
    $stateProvider.state('parallax', {
      url: '/parallax',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header__view.html'
        },
        'main': {
          controller: 'ParallaxController',
          templateUrl: '/_parallax__view.html'
        }
      },
      data: {
        pageTitle: 'Parallax all around you!'
      }
    });

    // Skrollr Parallax library
    snSkrollrProvider.config = {
      smoothScrolling: true
    };
  }

  //Adding injections for ParallaxController
  ParallaxController.$inject = ['$scope'];

  /**
   * ParallaxController
   * @param $scope
   * @constructor
   */
  function ParallaxController($scope) {

  }









})(angular);
