/** @license MIT License (c) copyright B Cavalier & J Hann */

(function(e){e(["require","./when"],function(e){var t;return t=e("./when"),function n(e,r,i,s){return t(s,function(s){function o(s,o){return t(i(s),function(){return n(e,r,i,o)})}return t(r(s),function(n){return n?s:t.resolve(e(s)).spread(o)})})}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});