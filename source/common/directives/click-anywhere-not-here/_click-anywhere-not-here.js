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
        elem.on("click", function(e){
          e.stopImmediatePropagation();
        });
        
        function applyMethod(){
          console.log("sdasd");
          scope.$apply(attr.clickAnywhereNotHere);
        }
        
        $document.on('click', applyMethod);
        
        scope.$on('$destroy', function(){
          elem.off('click');
          $document.off('click', applyMethod);
        });
        
      }
    };
  }

})(angular);
