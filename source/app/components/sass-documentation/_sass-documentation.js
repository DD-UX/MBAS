(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `source/app/components/_sass-documentation`, however, could exist several additional folders representing
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
  var module = window.mainApp + '.sass-documentation';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('SassDocController', SassDocController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('sass-documentation', {
      url: '/sass-documentation',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header__view.html'
        },
        'main': {
          controller: 'SassDocController',
          templateUrl: '/_sass-documentation__view.html'
        }
      },
      data: {
        pageTitle: 'MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass'
      }
    });
  }

  //Adding injections for SassDocController
  SassDocController.$inject = ['$scope'];

  /**
   * SassDocController
   * @param $scope
   * @constructor
   */
  function SassDocController($scope) {

  }

})(angular);
