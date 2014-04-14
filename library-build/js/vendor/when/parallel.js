/** @license MIT License (c) copyright 2011-2013 original author or authors */

(function(e){e(["require","./when"],function(e){var t,n;return t=e("./when"),n=Array.prototype.slice,function(r){return t.all(n.call(arguments,1)).then(function(e){return t.map(r,function(t){return t.apply(null,e)})})}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});