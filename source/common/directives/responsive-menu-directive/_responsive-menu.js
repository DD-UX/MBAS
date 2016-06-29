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
        menuElements: '=',
        menuMobileElements: '='
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
            value.width = elem.find('.nav-item').eq(key).outerWidth(true);
          });
          
          // Uncomment to compare the sum of the nav elements with navbar width (desktop)
//          console.log("Widths sum: ", _.sumBy(scope.menuElements, 'width'));
//          console.log("Nav width: ", nav.width());
          
          // Uncomment and see new processed menu with widths
//          console.log(scope.menuElements);
          
          function processNav(extraDistance){
            extraDistance = extraDistance || 50;
            
            var logoEnd = logo.offset().left + logo[0].offsetWidth,
                navOffset = nav.offset().left - extraDistance;
            
            // Checking Navbar has width or returning the function
            if (nav.width() === 0) {
              return;
            }
            
            // Checking if navbar overlaps the logo
            if ( !_.isEmpty(scope.menuMobileElements) ){
              
              if ( _.lt(
                    logoEnd + _.last(scope.menuMobileElements).width
                    , navOffset
                ) ){
                  // Execute when nav is not overlapping the logo
                  scope.menuElements.push(scope.menuMobileElements.pop());
                }
                            
            }
            
            if ( _.lt(navOffset, logoEnd) && !_.isEmpty(scope.menuElements) ) {
              // Execute when nav overlaps the logo
              scope.menuMobileElements.push(scope.menuElements.pop());
              console.log(_.last(scope.menuMobileElements).width);
            }
            
            scope.$apply();
          }
          
          
          
          // Process Responsive menu on init
          processNav();
          
          // Process Responsive menu on resize
          $w.bind('resize.doResize', function() {
            processNav();         
          });
          
          scope.$on("$destroy",function (){
            $w.off("resize.doResize"); //remove the handler added earlier
          });

          
        }, 500);
      }
    };
  }

})(angular);
