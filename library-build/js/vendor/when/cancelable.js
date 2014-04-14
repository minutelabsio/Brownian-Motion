/** @license MIT License (c) copyright B Cavalier & J Hann */

(function(e){e(["require","./when"],function(e){var t=e("./when");return function(e,n){var r=t.defer();return e.cancel=function(){return e.reject(n(e))},e.promise.then(r.resolve,r.reject,r.notify),e.promise=r.promise,e}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});