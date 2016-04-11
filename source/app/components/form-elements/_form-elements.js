(function(angular) {
  'use strict';

  angular.module('starter.form-elements')

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
