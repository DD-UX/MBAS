(function(angular) {
  'use strict';
  /**
   * Header controller
   */
  var module = window.mainApp + '.partials';

  angular.module(module)
    .controller('HeaderController', HeaderController);

  // Adding injections for HeaderController method
  HeaderController.$inject = ['$scope'];

  /**
   * HeaderController
   * @param $scope
   * @constructor
   */
  function HeaderController($scope) {
    // Menu elements
    $scope.menu = [
      {
        name: "Sass documentation",
        sref: "sass-documentation",
        order: 0
      },
      {
        name: "Form elements",
        sref: "form-elements",
        order: 0
      },
      {
        name: "Environment detection",
        sref: "environment-detection",
        order: 0
      },
      {
        name: "Parallax layout",
        sref: "parallax",
        order: 0
      },
      {
        name: "Securebox modules",
        sref: "securebox",
        order: 0
      }
    ];
    
    $scope.mobileMenu = [];
  }


})(angular);
