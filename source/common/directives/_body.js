(function(angular, $) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('body', Body);


  Body.$inject = ['snSkrollr'];

  function Body(snSkrollr) {
    return {
      restrict: 'E',
      link: function(scope) {
        
        // OS and Browser detection library
        function initEnvDetection() {
          scope.envDetection = $.pgwBrowser();
          console.info('User Agent: ', scope.envDetection.userAgent);          
          console.info('Browser Name: ', scope.envDetection.browser.name);
          console.info('Browser Full Version: ', scope.envDetection.browser.fullVersion);          
          console.info('OS Name: ', scope.envDetection.os.name);
          console.info('OS Full Version: ', scope.envDetection.os.fullVersion);
        }
        initEnvDetection();
        
        angular.element(window).on('PgwBrowser::StopResizing', function() {
          initEnvDetection();
          scope.$applyAsync();
        });


        // Skrollr parallax library
        function clearParallax(stateName) {
          if (stateName !== 'parallax') {
            snSkrollr.destroy();
          } else {
            snSkrollr.init();
          }
        }

        scope.$on('$stateChangeSuccess', function(event, toState) {
          clearParallax(toState.name);
        });
      }
    };
  }

})(angular,jQuery);
