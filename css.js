(function(root, factory){
  if(typeof define === 'function' && define.amd) {
    define([], factory);
  } else if(typeof module === 'object' && module.exports){
    module.exports = factory();
  }else {
    root.css = factory();
  }
}(this, function(){
  'use strict';

  function CSS() {

  }

  CSS.prototype.css = function(element, prop, val){

  }

  return new CSS();
}));