(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `source/app/components/_securebox`, however, could exist several additional folders representing
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
  var module = window.mainApp + '.securebox';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('SecureboxController', SecureboxController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('securebox', {
      url: '/securebox',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header__view.html'
        },
        'main': {
          controller: 'SecureboxController',
          templateUrl: '/_securebox__view.html'
        }
      },
      data: {
        pageTitle: 'MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass'
      }
    });
  }

  //Adding injections for SecureboxController
  SecureboxController.$inject = ['$scope', '$sce'];

  /**
   * SecureboxController
   * @param $scope
   * @constructor
   */
  function SecureboxController($scope, $sce) {

    // Text sample
    $scope.text = {
      title: 'Text title',
      src: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    // Video sample
    $scope.video = {
      title: 'Video title',
      src: [{
        video: $sce.trustAsResourceUrl('http://www.w3schools.com/html/mov_bbb.mp4'),
        type: 'video/mp4'
      }, {
        video: $sce.trustAsResourceUrl('http://www.w3schools.com/html/mov_bbb.ogg'),
        type: 'video/ogg'
      }]
    };

    // Audio sample
    $scope.audio = {
      title: 'Audio title',
      src: [{
        audio: $sce.trustAsResourceUrl('https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg'),
        type: 'audio/ogg'
      }]
    };

    // Image sample
    $scope.image = {
      title: 'Some fancy alt',
      src: '/assets/images/securebox/landscape.jpg'
    };
  }
})(angular);
