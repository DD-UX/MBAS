(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('securebox', Securebox);


  /**
   * securebox component
   * @returns {{restrict: string, scope: {active: boolean, isText: boolean, textSource: string, isImage: boolean, imageSource: string, isVideo: boolean, videoSource: array, isAudio: boolean, audioSource: array, classes: string, title: string, warning: string}, templateUrl: string}}
   * @constructor
   */
  function Securebox() {
    return {
      restrict: 'E',
      scope: {
        active: '=?',
        isText: '=?',
        textSource: '=?',
        isImage: '=?',
        imageSource: '=?',
        isVideo: '=?',
        videoSource: '=?',
        isAudio: '=?',
        audioSource: '=?',
        classes: '@',
        title: '=?',
        warning: '@'
      },
      templateUrl: '/_securebox-directive.html',
      link: function(scope, elem) {
        scope.active = scope.active || false;
        scope.warning = scope.warning || 'This content might be sensitive content. Click to display';

        elem.on('click', function() {
          scope.active = true;
          if (scope.active) {
            elem.off('click');
          }
          scope.$applyAsync();
        });
      }
    };
  }

})(angular);
