(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to create a nice responsive menu
   * Identifies `.responsive-navbar` class in the body
   * and look for two elements in the _header partial:
   * `[responsive-navbar="mobile"]` to set content from
   * `[responsive-navbar="desktop"]` and backwards
   */
  angular.module(module)
    .directive('responsiveNavbar', ResponsiveNavbar);

  ResponsiveNavbar.$inject = ['$timeout'];

  /**
   * ResponsiveNavbar component
   * @returns {{restrict: string, link: function}}
   * @constructor
   */
  function ResponsiveNavbar($timeout, $stateProvider, $rootScope) {
    return {
      restrict: 'C',      
      link: function(scope, elem) {
        $timeout(function(){
          var desktopNav = elem.find('[responsive-navbar="desktop"]'),
              desktopNavContext = desktopNav.find('.nav'),
              mobileNav = elem.find('[responsive-navbar="mobile"]'),
              mobileNavContext = mobileNav.find('.nav'),
              ww = window.innerWidth,
              hamburgerIcon = angular.element('.hamburger-toggle'),
              page = angular.element('[ui-view="main"]'),
              desktopNavItems = desktopNav.find('.nav-item:not(.hamburger-toggle)'),
              desktopNavItemsLength = desktopNavItems.length,
              getNavItemSizes = function(){
                var arr = [];
                for (i = 0; i < desktopNavItemsLength; i++) {
                  arr.push(desktopNavItems.eq(i).outerWidth());
                }
                return arr;
              },
              originalNavItemSizes = getNavItemSizes();
          
              function contract() {
                var w = 0,
                    logoW = angular.element('.navbar-brand').outerWidth(),
                    outerWidth = desktopNav.width() - logoW - hamburgerIcon.width() - 50;

                for (i = 0; i < desktopNavItemsLength; i++) {
                  w += desktopNavItems.eq(i).outerWidth();
                  if (w > outerWidth) {
                    desktopNavItems.eq(i).prependTo(mobileNavContext);
                    scope.isMobileNavLoaded = mobileNav.find('.nav-item').length;
                    break;
                  }
                }
              }
          
              scope.isMobileNavLoaded = mobileNav.find('.nav-item').length;
          
              contract();
          
              function expand() {
                var w = 0,
                    mobileNavItems = mobileNav.find('.nav-item'),
                    mobileNavItemsLength = mobileNavItems.length,
                    logoW = angular.element('.navbar-brand').outerWidth(),
                    outerWidth = desktopNav.width() - logoW - hamburgerIcon.width() - 50;

                for (i = 0; i < mobileNavItemsLength; i++) {
                  w += originalNavItemSizes[i];
                  if (w <= outerWidth) {
                    mobileNavItems.eq(i).insertBefore(hamburgerIcon);
                    scope.isMobileNavLoaded = mobileNav.find('.nav-item').length;
                    break;
                  }
                }
              }
          
              function toggleMobileNav() {
                hamburgerIcon.toggleClass('active');                
                page.toggleClass('bounceOutLeft','bounceInLeft').toggle(400);
              }
          
              window.addEventListener("resize", function (e) {
                window.innerWidth > ww ? expand() : contract();
                ww = window.innerWidth;
                if ((!mobileNav.find('.nav-item').length) && hamburgerIcon.hasClass('active')){
                  toggleMobileNav();
                }                
                
              }, false);
          
              hamburgerIcon.on('click', function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
                
                toggleMobileNav();
              });
        
        
        });
      }
    };
  }

})(angular);
