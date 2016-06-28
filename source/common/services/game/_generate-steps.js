(function(angular, $) {
  'use strict';

  var module = window.mainApp + '.common';
  
  /**
   * Service generate pieces in the game
   */
  angular.module(module, [])
    .service('generateSteps', generateSteps);

//  GenerateSteps.$inject = ['snSkrollr'];

  function generateSteps() {
    var context = this,
        Step = function (){
          this.size = 100;
          this.uuid = _.uniqueId('step_');
        };
    
    return {
      steps: context.steps || [],
      generateStep: function(){
        var step = new Step();
        this.steps.push(step);
      }
    };
  }

})(angular,jQuery);
