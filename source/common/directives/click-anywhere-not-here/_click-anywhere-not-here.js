(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to execute some code on clicking something but this
   */
  angular.module(module)
    .directive('clickAnywhereNotHere', ClickAnywhereNotHere);
  
  // Injections
  ClickAnywhereNotHere.$inject = ['$document'];

  /**
   * Click anywhere not here
   * @returns {{restrict: string}}
   * @constructor
   */
  function ClickAnywhereNotHere($document) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        // Prevent any propagation on clicking directive elements
        elem.on("click.notHere", function(e){
          e.stopImmediatePropagation();
        });
        
        // Method bypassed in directive attribute
        function applyMethod(){
          scope.$apply(attr.clickAnywhereNotHere);
        }
        
        // On click event execute method bypassed
        $document.on('click', applyMethod);
        
        // On destroy detach events
        scope.$on('$destroy', function(){
          elem.off('click.notHere');
          $document.off('click', applyMethod);
        });
        
      }
    };
  }

})(angular);
