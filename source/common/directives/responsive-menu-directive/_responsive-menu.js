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
        anchorClasses: '@',
        menuElements: '='
      },
      templateUrl: '/_responsive-menu__tpl.html',
      link: function(scope, elem) {
        // if menuElements is not defined stop the execution
        if (_.isUndefined( scope.menuElements ) ){
          return;
        }
        
        $timeout(function(){
          // Setting `nav` to check offset().left
          // and Logo so the `nav` never overlaps on `resize`
          var nav = elem.find('.nav'),
              logo = $('.navbar-brand'),
              $w = $($window);
          
          // Add `width` property to each menu element
          _.forEach(scope.menuElements.desktop, function(value, key){
            value.width = elem.find('.nav-item').eq(key).outerWidth(true);
          });
          
          // Uncomment to compare the sum of the nav elements with navbar width (desktop)
//          console.log("Widths sum: ", _.sumBy(scope.menuElements.desktop, 'width'));
//          console.log("Nav width: ", nav.width());
          
          // Uncomment and see new processed menu with widths
//          console.log(scope.menuElements.desktop);
          
          function processNav(extraDistance){
            extraDistance = extraDistance || 50;
            
            var logoEnd = logo.offset().left + logo[0].offsetWidth,
                navOffset = nav.offset().left - extraDistance;
            
            // Checking Navbar has width or returning the function
            if (nav.width() === 0) {
              return;
            }
            
            // Checking if navbar overlaps the logo
            if ( !_.isEmpty(scope.menuElements.mobile) ){
              // Checking for enough space to bring back some menu element
              if ( _.lt(
                    logoEnd + _.last(scope.menuElements.mobile).width
                    , navOffset
                ) ){
                  // Execute when nav is not overlapping the logo
                  scope.menuElements.desktop.push(scope.menuElements.mobile.pop());
                }
                            
            }
            
            if ( _.lt(navOffset, logoEnd) && !_.isEmpty(scope.menuElements.desktop) ) {
              // Execute when nav overlaps the logo
              scope.menuElements.mobile.push(scope.menuElements.desktop.pop());
              if ( _.lt(navOffset, logoEnd) && !_.isEmpty(scope.menuElements.desktop) ) {
                processNav();                
              }
            }
            
            // Apply changes in the scope
            scope.isMobileEmpty = _.isEmpty(scope.menuElements.mobile);
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

          
        });
      }
    };
  }

})(angular);
