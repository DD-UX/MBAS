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
  var module = window.mainApp + '.home';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('HomeController', HomeController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header.html'
        },
        'main': {
          controller: 'HomeController',
          templateUrl: '/_home.html'
        }
      },
      data: {
        pageTitle: '<Angular><Sass><Bootstrap 4><Middleman 4>'
      }
    });
  }

  //Adding injections for HomeController
  HomeController.$inject = ['$scope', '$cookies'];

  /**
   * HomeController
   * @param $scope
   * @constructor
   */
  function HomeController($scope, $cookies) {
    $scope.welcomeAlerts = $cookies.get('offWelcomeMessage') ? [] : [{
//    $scope.welcomeAlerts = false ? [] : [{
      type: 'info',
      msg: '<h2 class="main__title">MBAS (Middleman 4 + Bootstrap 4 + Angular + Sass)</h2>' +
        '<p>The sake of this is to have a wide range of tools and do not recreate the wheel over and over.</p>' +
        '<p>Is plenty of custom elements so please make sure the one you are looking for is not created before code ' +
        'it, you might not need go further than simply style it.</p>' +
        '<p>Middleman is used to contain the whole project starter.</p>' +
        '<p>Bootstrap 4 is powering the layouts and you can access to its Sass core on <code>/source/assets/sass/_bootstrap-variables.scss</code>.</p>' +
        '<p>Angular handles the data binding, routing and general UX, there are a bunch of cool form elements and more ready to be used. Find the core of the app at <code>/source/app</code> and directives at <code>/source/common</code>.</p>' +
        '<p>Sass enhance the developer experience at the moment of coding, there are functions, mixins, shared-components, custom variables and more within <code>/source/assets/sass</code>.</p>' +
        '<p>And have fun, otherwise what\'s the point? <i class="fa fa-2x fa-smile-o"></i></p>' +
        '<p class="pull-right"><b>DD</b></p>'
    }];

    $scope.closeAlert = function(index) {
      $scope.welcomeAlerts.splice(index, 1);
      $cookies.put('offWelcomeMessage', true);
    };
  }

})(angular);
