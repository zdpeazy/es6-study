"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function n(n,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,a,r){return a&&n(e.prototype,a),r&&n(e,r),e}}();input.map(function(n){return n+1});var Calc=function(){function n(){_classCallCheck(this,n),console.log("Calc constructor")}return _createClass(n,[{key:"add",value:function(n,e){return n+e}}]),n}(),c=new Calc;console.log(c.add(4,5));