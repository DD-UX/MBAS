(function(angular) {
  'use strict';

  var module = window.mainApp + '.parallax';
  angular.registerModule(module, [
    'ui.router',
    'sn.skrollr' // Parallax library
  ]);

})(angular);
