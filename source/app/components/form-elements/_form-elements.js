(function(angular) {
  'use strict';
  
  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `source/app/components/_form-elements`, however, could exist several additional folders representing
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
  var module = window.mainApp + '.form-elements';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more 'self-contained'.
   */
  .config(Config)
    /**
     * And of course we define a controller for our route.
     */
    .controller('FormElementsController', FormElementsController);

  //Add injections to Config method
  Config.$inject = ['$stateProvider'];

  /**
   * Config
   * @param $stateProvider
   * @constructor
   */
  function Config($stateProvider) {
    $stateProvider.state('form-elements', {
      url: '/form-elements',
      views: {
        'header': {
          controller: 'HeaderController',
          templateUrl: '/_header.html'
        },
        'main': {
          controller: 'FormElementsController',
          templateUrl: '/_form-elements.html'
        }
      },
      data: {
        pageTitle: 'MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass'
      }
    });
  }

  //Adding injections for FormElementsController
  FormElementsController.$inject = ['$scope'];

  /**
   * FormElementsController
   * @param $scope
   * @constructor
   */
  function FormElementsController($scope) {

    /**
     * Custom Select code sample
     */
    $scope.selectOptions = [{
      id: '1',
      name: 'Option 1',
      value: 'opt1'
    }, {
      id: '2',
      name: 'Option 2',
      value: 'opt2'
    }, {
      id: '3',
      name: 'Option 3',
      value: 'opt3'
    }];

    $scope.defaultSelectedOption = $scope.selectOptions[0];


    /**
     * Custom Radio buttons code sample
     */
    $scope.radioOptions = [{
      id: '1',
      name: 'Radio 1',
      value: 'rad1'
    }, {
      id: '2',
      name: 'Radio 2',
      value: 'rad2'
    }, {
      id: '3',
      name: 'Radio 3',
      value: 'rad3'
    }];

    $scope.defaultRadioOption = $scope.radioOptions[0];

    }

})(angular);
