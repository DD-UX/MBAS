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
        
        scope.closeMenu = function(){
          scope.menuElements.is_open = false;
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
            
            // If mobile has elements let's check if can bring some element back into desktop && Checking for enough space to bring back some menu element
            if ( !_.isEmpty(scope.menuElements.mobile) && _.lt(logoEnd + _.last(scope.menuElements.mobile).width, navOffset) ){
              // Execute when nav is not overlapping the logo
              scope.menuElements.desktop.push(scope.menuElements.mobile.pop());
            }            
            // Execute when nav overlaps the logo
            else if ( _.lt(navOffset, logoEnd) && !_.isEmpty(scope.menuElements.desktop) ) {
              scope.menuElements.mobile.push(scope.menuElements.desktop.pop());
              processNav();
            } else {return;}
            
            // Apply changes in the scope
            scope.isMobileEmpty = _.isEmpty(scope.menuElements.mobile);
            scope.$apply();
          }          
          
          // Process Responsive menu on resize and trigger to init
          $w.on('resize.processNav', function() {
            processNav();         
          }).trigger('resize.processNav');
          
          scope.$on("$destroy",function (){
            $w.off("resize.processNav"); //remove the handler added earlier
          });

          
        });
      }
    };
  }

})(angular);
