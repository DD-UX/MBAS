(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('customSelect', CustomSelect)
    .directive('customCheckbox', CustomCheckbox)
    .directive('customRadio', CustomRadio)
    .directive('customFileField', CustomFileField);


  /**
   * .custom-select component
   * @returns {{restrict: string, scope: {selectedOption: string, optionsMap: string, disabledIf: string, decoyStyles: string, name: string, caretsHtml: string}, templateUrl: string}}
   * @constructor
   */
  function CustomSelect() {
    return {
      restrict: 'E',
      scope: {
        selectedOption: '=',
        optionsMap: '=',
        disabledIf: '=',
        decoyStyles: '@',
        name: '@',
        caretsHtml: '@'
      },
      templateUrl: '/custom-select.html'
    };
  }

  /**
   * <custom-checkbox></custom-checkbox>
   * @returns {{restrict: string, scope: {model: string, disabledIf: string, decoyStyles: string, label: string, name: string, checkIconHtml: string}, templateUrl: string}}
   * @constructor
   */
  function CustomCheckbox() {
    return {
      restrict: 'E',
      scope: {
        model: '=',
        disabledIf: '=',
        decoyStyles: '@',
        label: '@',
        name: '@',
        checkIconHtml: '@'
      },
      templateUrl: '/custom-checkbox.html'
    };
  }

  /**
   * <custom-radio></custom-radio>
   * @returns {{restrict: string, scope: {model: string, disabledIf: string, decoyStyles: string, label: string, name: string, checkIconHtml: string}, templateUrl: string}}
   * @constructor
   */
  function CustomRadio() {
    return {
      restrict: 'E',
      scope: {
        model: '=',
        disabledIf: '=',
        decoyStyles: '@',
        label: '@',
        name: '@',
        checkIconHtml: '@'
      },
      templateUrl: '/custom-radio.html'
    };
  }

  //Injections for customFileField
  CustomFileField.$inject = ['$timeout'];
  /**
   * <custom-file-field></custom-file-field>
   * @param $timeout
   * @returns {{restrict: string, scope: {model: string, disabledIf: string, isMultiple: string, decoyStyles: string, defaultMsg: string, name: string, uploadIconHtml: string}, templateUrl: string, link: Function}}
   * @constructor
   */
  function CustomFileField($timeout) {
    return {
      restrict: 'E',
      scope: {
        model: '=',
        disabledIf: '=',
        isMultiple: '=',
        decoyStyles: '@',
        defaultMsg: '@',
        name: '@',
        uploadIconHtml: '@'
      },
      templateUrl: '/custom-file-field.html',
      link: function(scope, elem) {
        $timeout(function() {

          var $fileField = elem[0].querySelector('input[type="file"]');

          $fileField.addEventListener('change', function() {
            scope.model = angular.element($fileField)[0].files;
            scope.$applyAsync('model');
          }, false);
        });
      }
    };
  }


})(angular);
