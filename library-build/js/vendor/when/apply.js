/** @license MIT License (c) copyright B Cavalier & J Hann */

(function(e){e([],function(){var e=Object.prototype.toString;return function(t){return function(n){if(e.call(n)!="[object Array]")throw new Error("apply called with non-array arg");return t.apply(null,n)}}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});