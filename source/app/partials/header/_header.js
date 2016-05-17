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
    // Place your controller's code here
  }


})(angular);
