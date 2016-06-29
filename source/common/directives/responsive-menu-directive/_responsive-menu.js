(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('responsiveMenu', ResponsiveMenu);
  
  // Adding injections for ResponsiveMenu method
  ResponsiveMenu.$inject = ['$window', '$timeout'];

  /**
   * responsive menu component
   * @returns {{restrict: string, scope: {isActive: boolean, classes: string, menuElements: object}, templateUrl: string}}
   * @constructor
   */
  function ResponsiveMenu($window, $timeout) {
    return {
      restrict: 'E',
      scope: {
        isActive: '=?',
        anchorClasses: '@',
        menuElements: '='
      },
      templateUrl: '/_responsive-menu__tpl.html',
      link: function(scope, elem) {
        $timeout(function(){
          // Setting `nav` to check offset().left
          // and Logo so the `nav` never overlaps on `resize`
          var nav = elem.find('.nav'),
              logo = $('.navbar-brand'),
              $w = $($window);
          
          // Add `width` property to each menu element
          _.forEach(scope.menuElements, function(value, key){
            value.width = elem.find('.nav-item').eq(key).width();
          });
          
          // Uncomment and see new processed menu with widths
          //// console.log(scope.menuElements);
          
          function processNav(extraDistance){
            var logoOffset = logo.offset().left + logo[0].offsetWidth,
                navOffset = nav.offset().left + extraDistance;
            
            if ( _.gte(navOffset, logoOffset) ){
              console.log(navOffset);
              console.log(logoOffset);              
            } else {
              console.log("reached");
            }
          }
          
          
          
          // Process Responsive menu on init
          processNav(10);
          
          // Process Responsive menu on resize
          $w.bind('resize.doResize', function() {
            processNav(10);         
          });
          
          scope.$on("$destroy",function (){
            $w.off("resize.doResize"); //remove the handler added earlier
          });

          
        }, 500);
      }
    };
  }

})(angular);
