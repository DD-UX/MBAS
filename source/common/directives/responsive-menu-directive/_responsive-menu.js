(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to handle the responsive menu
   */
  angular.module(module)
    .directive('responsiveMenu', ResponsiveMenu);
  
  // Adding injections for ResponsiveMenu method
  ResponsiveMenu.$inject = ['$window', '$timeout'];

  /**
   * responsive menu component
   * @returns {{restrict: string, scope: {anchorClasses: string, menuElements: object}, templateUrl: string}}
   * @constructor
   */
  function ResponsiveMenu($window, $timeout) {
    return {
      restrict: 'A',
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
        
        // is mobile menu open?
        scope.closeMenu = function(){
          scope.menuElements.is_open = false;
        }
        
        $timeout(function(){
          // Setting `nav` to check offset().left
          // and Logo so the `nav` never overlaps on `resize`
          var nav = elem.find('.nav'),
              logo = $('.navbar-brand'),
              $w = $($window),
              processNav =  function (extraDistance){
                var extraDistance = extraDistance || 100,
                    logoEnd = logo.offset().left + logo[0].offsetWidth,
                    navOffset = nav.offset().left - extraDistance;

                // Hide elements which depend on mobile array
                scope.isMobileEmpty = _.isEmpty(scope.menuElements.mobile);

                // Checking Navbar has width or returning the function
                if (nav.width() === 0) {
                  return;
                }

                // If mobile has elements let's check if can bring some element back into desktop && Checking for enough space to bring back some menu element
                if ( !_.isEmpty(scope.menuElements.mobile) && _.lt(logoEnd + _.last(scope.menuElements.mobile).width, navOffset) ){
                  // Execute when nav is not overlapping the logo
                  scope.menuElements.desktop.push(scope.menuElements.mobile.pop());
                }            
                // Execute when nav overlaps the logo
                else if ( _.lt(navOffset, logoEnd) && !_.isEmpty(scope.menuElements.desktop) ) {
                  scope.menuElements.mobile.push(scope.menuElements.desktop.pop());
                }

                // Apply changes in the scope
                scope.isMobileEmpty = _.isEmpty(scope.menuElements.mobile);
                scope.$apply();
              };
          
          // First store `width` of each menu element in the desktop navbar
          _.forEach(scope.menuElements.desktop, function(value, key){
            value.width = elem.find('.nav-item').eq(key).outerWidth(true);
          });
          
          // Then init processNav function for each element in the menu
          _.forEach(scope.menuElements.desktop, function(){
            processNav();
          });
          
          // Process Responsive menu on resize
          $w.on('resize.processNav', function() {
            processNav();
          });
          
          // On destroy Angular practice
          scope.$on("$destroy",function (){
            $w.off("resize.processNav"); //remove the handler added earlier
          });

          
        });
      }
    };
  }

})(angular);
