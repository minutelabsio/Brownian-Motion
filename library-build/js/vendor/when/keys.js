/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 */

(function(e){e(["require","./when"],function(e){function o(e){return u(e,a)}function u(e,r){return t(e,function(e){function s(n,s,o){var u,a;u={},a=0,i(e,function(e,i){++a,t(e,r).then(function(e){u[i]=e,--a||n(u)},s,o)}),a||n(u)}return n(s)})}function a(e){return e}var t,n,r,i,s;return t=e("./when"),n=t.promise,r={all:o,map:u},s={}.hasOwnProperty,i=Object.keys?function(e,t){Object.keys(e).forEach(function(n){t(e[n],n)})}:function(e,t){for(var n in e)s.call(e,n)&&t(e[n],n)},r})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e(require)});