/**
 * PhysicsJS v1.0.0-rc1 - 2014-03-18
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

// ---
// inside: src/intro.js

(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. 
        module.exports = factory.call(root);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function(){ return factory.call(root) });
    } else {
        // Browser globals (root is window)
        root.Physics = factory.call(root);
    }
}(this, function () {

'use strict';

var window = this;
var document = window.document;

var Physics = function Physics(){

    return Physics.world.apply(Physics, arguments);
};

Physics.util = {};


// ---
// inside: lib/lodash.js

/**
 * @license
 * Lo-Dash 2.2.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern exports="none" iife="(function(window){%output%;lodash.extend(Physics.util, lodash);}(this));" include="isObject,isFunction,isArray,isPlainObject,uniqueId,uniq,filter,find,each,random,extend,transform,clone,throttle,bind,sortedIndex,shuffle" --minify --output lib/lodash.js`
 */
;(function(H){function N(a,b,c){c=(c||0)-1;for(var d=a?a.length:0;++c<d;)if(a[c]===b)return c;return-1}function Da(a,b){var c=typeof b;a=a.l;if("boolean"==c||null==b)return a[b]?0:-1;"number"!=c&&"string"!=c&&(c="object");var d="number"==c?b:na+b;a=(a=a[c])&&a[d];return"object"==c?a&&-1<N(a,b)?0:-1:a?0:-1}function Ea(a){var b=this.l,c=typeof a;if("boolean"==c||null==a)b[a]=!0;else{"number"!=c&&"string"!=c&&(c="object");var d="number"==c?a:na+a,b=b[c]||(b[c]={});"object"==c?(b[d]||(b[d]=[])).push(a):
b[d]=!0}}function I(){return ba.pop()||[]}function oa(){return ca.pop()||{k:null,l:null,"false":!1,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1}}function O(){}function z(a){a.length=0;ba.length<pa&&ba.push(a)}function qa(a){var b=a.l;b&&qa(b);a.k=a.l=a.object=a.number=a.string=null;ca.length<pa&&ca.push(a)}function Fa(a,b,c){b||(b=0);typeof c=="undefined"&&(c=a?a.length:0);var d=-1;c=c-b||0;for(var e=Array(0>c?0:c);++d<c;)e[d]=a[b+d];return e}function f(){}function ra(a,
b,c,d,e){if(c){var g=c(a);if(typeof g!="undefined")return g}if(t(a)){var k=A.call(a);if(!q[k])return a;var l=u[k];switch(k){case P:case Q:return new l(+a);case R:case S:return new l(a);case T:return g=l(a.source,Ga.exec(a)),g.lastIndex=a.lastIndex,g}}else return a;k=da(a);if(b){var h=!d;d||(d=I());e||(e=I());for(var p=d.length;p--;)if(d[p]==a)return e[p];g=k?l(a.length):{}}else g=k?Fa(a):ea({},a);k&&(v.call(a,"index")&&(g.index=a.index),v.call(a,"input")&&(g.input=a.input));if(!b)return g;d.push(a);
e.push(g);(k?J:F)(a,function(a,k){g[k]=ra(a,b,c,d,e)});h&&(z(d),z(e));return g}function B(a,b,c){if(typeof a!="function")return fa;if(typeof b=="undefined")return a;var d=a.__bindData__||x.funcNames&&!a.name;if(typeof d=="undefined"){var e=ga&&Ha.call(a);x.funcNames||!e||Ia.test(e)||(d=!0);if(x.funcNames||!d)d=!x.funcDecomp||ga.test(e),sa(a,d)}if(true!==d&&d&&d[1]&1)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,
d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,h){return a.call(b,c,d,e,h)}}return ta(a,b)}function K(a,b,c,d,e,g){if(c){var k=c(a,b);if(typeof k!="undefined")return!!k}if(a===b)return 0!==a||1/a==1/b;if(a===a&&!(a&&n[typeof a]||b&&n[typeof b]))return!1;if(null==a||null==b)return a===b;var l=A.call(a),h=A.call(b);l==ha&&(l=C);h==ha&&(h=C);if(l!=h)return!1;switch(l){case P:case Q:return+a==+b;case R:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case T:case S:return a==String(b)}h=l==U;if(!h){if(v.call(a,
"__wrapped__")||v.call(b,"__wrapped__"))return K(a.__wrapped__||a,b.__wrapped__||b,c,d,e,g);if(l!=C)return!1;var l=a.constructor,p=b.constructor;if(l!=p&&!(D(l)&&l instanceof l&&D(p)&&p instanceof p))return!1}p=!e;e||(e=I());g||(g=I());for(l=e.length;l--;)if(e[l]==a)return g[l]==b;var f=0,k=!0;e.push(a);g.push(b);if(h){l=a.length;f=b.length;k=f==a.length;if(!k&&!d)return k;for(;f--;)if(h=l,p=b[f],d)for(;h--&&!(k=K(a[h],p,c,d,e,g)););else if(!(k=K(a[f],p,c,d,e,g)))break;return k}V(b,function(b,h,l){if(v.call(l,
h))return f++,k=v.call(a,h)&&K(a[h],b,c,d,e,g)});k&&!d&&V(a,function(a,b,c){if(v.call(c,b))return k=-1<--f});p&&(z(e),z(g));return k}function W(a,b,c,d,e,g){var k=b&1,l=b&2,h=b&4,f=b&8,s=b&16,r=b&32,Ja=a;if(!l&&!D(a))throw new TypeError;s&&!c.length&&(b&=-17,s=c=!1);r&&!d.length&&(b&=-33,r=d=!1);var m=a&&a.__bindData__;if(m)return!k||m[1]&1||(m[4]=e),!k&&m[1]&1&&(b|=8),!h||m[1]&4||(m[5]=g),s&&X.apply(m[2]||(m[2]=[]),c),r&&X.apply(m[3]||(m[3]=[]),d),m[1]|=b,W.apply(null,m);if(!k||l||h||r||!(x.fastBind||
y&&s))q=function(){var m=arguments,n=k?e:this;if(h||s||r)if(m=ia.call(m),s&&Ka.apply(m,c),r&&X.apply(m,d),h&&m.length<g)return b|=16,W(a,f?b:b&-4,m,null,e,g);l&&(a=n[Ja]);return this instanceof q?(n=ja(a.prototype),m=a.apply(n,m),t(m)?m:n):a.apply(n,m)};else{if(s){var n=[e];X.apply(n,c)}var q=s?y.apply(a,n):y.call(a,e)}sa(q,ia.call(arguments));return q}function ja(a){return t(a)?Y(a):{}}function La(a){var b,c;if(!a||A.call(a)!=C||(b=a.constructor,D(b)&&!(b instanceof b)))return!1;V(a,function(a,b){c=
b});return typeof c=="undefined"||v.call(a,c)}function D(a){return typeof a=="function"}function t(a){return!(!a||!n[typeof a])}function ua(a,b,c){var d=[];b=f.createCallback(b,c,3);c=-1;var e=a?a.length:0;if(typeof e=="number")for(;++c<e;){var g=a[c];b(g,c,a)&&d.push(g)}else F(a,function(a,c,e){b(a,c,e)&&d.push(a)});return d}function ka(a,b,c){b=f.createCallback(b,c,3);c=-1;var d=a?a.length:0;if(typeof d=="number")for(;++c<d;){var e=a[c];if(b(e,c,a))return e}else{var g;F(a,function(a,c,d){if(b(a,c,
d))return g=a,!1});return g}}function J(a,b,c){var d=-1,e=a?a.length:0;b=b&&typeof c=="undefined"?b:B(b,c,3);if(typeof e=="number")for(;++d<e&&false!==b(a[d],d,a););else F(a,b);return a}function va(a,b,c){if(typeof c=="number"){var d=a?a.length:0;c=0>c?la(0,d+c):c||0}else if(c)return c=wa(a,b),a[c]===b?c:-1;return N(a,b,c)}function wa(a,b,c,d){var e=0,g=a?a.length:e;c=c?f.createCallback(c,d,1):fa;for(b=c(b);e<g;)d=e+g>>>1,c(a[d])<b?e=d+1:g=d;return e}function xa(a,b,c,d){typeof b!="boolean"&&null!=b&&
(c=(d=c)&&d[b]===a?null:b,b=!1);null!=c&&(c=f.createCallback(c,d,3));d=-1;var e;e=(e=f.indexOf)===va?N:e;var g=a?a.length:0,k=[],l=!b&&g>=Ma&&e===N,h=c||l?I():k;if(l){var p;p=h;var s=-1,r=p.length,n=p[0],m=p[r/2|0],q=p[r-1];if(n&&typeof n=="object"&&m&&typeof m=="object"&&q&&typeof q=="object")p=!1;else{n=oa();n["false"]=n["null"]=n["true"]=n.undefined=!1;m=oa();m.k=p;m.l=n;for(m.push=Ea;++s<r;)m.push(p[s]);p=m}p?(e=Da,h=p):(l=!1,h=c?h:(z(h),k))}for(;++d<g;)if(p=a[d],s=c?c(p,d,a):p,b?!d||h[h.length-
1]!==s:0>e(h,s))(c||l)&&h.push(s),k.push(p);l?(z(h.k),qa(h)):c&&z(h);return k}function ta(a,b){return 2<arguments.length?W(a,17,ia.call(arguments,2),null,b):W(a,1,null,null,b)}function ya(a,b,c){var d,e,g,k,l,h,f,n=0,r=!1,q=!0;if(!D(a))throw new TypeError;b=la(0,b)||0;if(true===c)var m=!0,q=!1;else t(c)&&(m=c.leading,r="maxWait"in c&&(la(b,c.maxWait)||0),q="trailing"in c?c.trailing:q);var u=function(){var c=b-(G()-k);0>=c?(e&&clearTimeout(e),c=f,e=h=f=za,c&&(n=G(),g=a.apply(l,d))):h=setTimeout(u,c)},
v=function(){h&&clearTimeout(h);e=h=f=za;if(q||r!==b)n=G(),g=a.apply(l,d)};return function(){d=arguments;k=G();l=this;f=q&&(h||!m);if(false===r)var c=m&&!h;else{e||m||(n=k);var t=r-(k-n);0>=t?(e&&(e=clearTimeout(e)),n=k,g=a.apply(l,d)):e||(e=setTimeout(v,t))}h||b===r||(h=setTimeout(u,b));c&&(g=a.apply(l,d));return g}}function fa(a){return a}function Aa(a,b,c){var d=null==a,e=null==b;null==c&&(typeof a=="boolean"&&e?(c=a,a=1):e||typeof b!="boolean"||(c=b,e=!0));d&&e&&(b=1);a=+a||0;e?(b=a,a=0):b=+b||0;
d=Na();return c||a%1||b%1?Oa(a+d*(b-a+parseFloat("1e-"+((d+"").length-1))),b):a+Pa(d*(b-a+1))}var za,ba=[],ca=[],Qa=0,na=+new Date+"",Ma=75,pa=40,Ga=/\w*$/,Ia=/^function[ \n\r\t]+\w/,ga=/\bthis\b/,ha="[object Arguments]",U="[object Array]",P="[object Boolean]",Q="[object Date]",R="[object Number]",C="[object Object]",T="[object RegExp]",S="[object String]",q={"[object Function]":!1};q[ha]=q[U]=q[P]=q[Q]=q[R]=q[C]=q[T]=q[S]=!0;var Z={leading:!1,maxWait:0,trailing:!1},Ba={configurable:!1,enumerable:!1,
value:null,writable:!1},n={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};H=n[typeof H]&&H||this;var E=[],ma=Object.prototype,w=RegExp("^"+String(ma.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Pa=Math.floor,Ha=Function.prototype.toString,L=w.test(L=Object.getPrototypeOf)&&L,v=ma.hasOwnProperty,G=w.test(G=Date.now)&&G||function(){return+new Date},X=E.push,A=ma.toString,Ka=E.unshift,Ca=function(){try{var a={},b=w.test(b=Object.defineProperty)&&
b,c=b(a,a,a)&&b}catch(d){}return c}(),y=w.test(y=A.bind)&&y,Y=w.test(Y=Object.create)&&Y,M=w.test(M=Array.isArray)&&M,$=w.test($=Object.keys)&&$,la=Math.max,Oa=Math.min,Na=Math.random,ia=E.slice,E=w.test(H.attachEvent),E=y&&!/\n|true/.test(y+E),u={};u[U]=Array;u[P]=Boolean;u[Q]=Date;u["[object Function]"]=Function;u[C]=Object;u[R]=Number;u[T]=RegExp;u[S]=String;var x=f.support={};x.fastBind=y&&!E;x.funcDecomp=!w.test(H.WinRTError)&&ga.test(function(){return this});x.funcNames=typeof Function.name=="string";
Y||(ja=function(a){if(t(a)){O.prototype=a;var b=new O;O.prototype=null}return b||{}});var sa=Ca?function(a,b){Ba.value=b;Ca(a,"__bindData__",Ba)}:O,da=M||function(a){return a&&typeof a=="object"&&typeof a.length=="number"&&A.call(a)==U||!1},M=function(a){var b,c=[];if(!a||!n[typeof a])return c;for(b in a)v.call(a,b)&&c.push(b);return c},aa=$?function(a){return t(a)?$(a):[]}:M,ea=function(a,b,c){var d,e=a,g=e;if(!e)return g;var k=arguments,f=0,h=typeof c=="number"?2:k.length;if(3<h&&"function"==typeof k[h-
2])var p=B(k[--h-1],k[h--],2);else 2<h&&"function"==typeof k[h-1]&&(p=k[--h]);for(;++f<h;)if((e=k[f])&&n[typeof e])for(var q=-1,r=n[typeof e]&&aa(e),t=r?r.length:0;++q<t;)d=r[q],g[d]=p?p(g[d],e[d]):e[d];return g},V=function(a,b,c){var d;if(!a||!n[typeof a])return a;b=b&&typeof c=="undefined"?b:B(b,c,3);for(d in a)if(false===b(a[d],d,a))break;return a},F=function(a,b,c){if(!a||!n[typeof a])return a;b=b&&typeof c=="undefined"?b:B(b,c,3);for(var d=-1,e=n[typeof a]&&aa(a),g=e?e.length:0;++d<g&&(c=e[d],false!==
b(a[c],c,a)););return a};f.assign=ea;f.bind=ta;f.createCallback=function(a,b,c){var d=typeof a;if(null==a||"function"==d)return B(a,b,c);if("object"!=d)return function(b){return b[a]};var e=aa(a),g=e[0],f=a[g];return 1!=e.length||f!==f||t(f)?function(b){for(var c=e.length,d=!1;c--&&(d=K(b[e[c]],a[e[c]],null,!0)););return d}:function(a){a=a[g];return f===a&&(0!==f||1/f==1/a)}};f.debounce=ya;f.filter=ua;f.forEach=J;f.forIn=V;f.forOwn=F;f.keys=aa;f.shuffle=function(a){var b=-1,c=a?a.length:0,d=Array(typeof c=="number"?c:0);J(a,function(a){var c=Aa(++b);d[b]=d[c];d[c]=a});return d};f.throttle=function(a,b,c){var d=!0,e=!0;if(!D(a))throw new TypeError;false===c?d=!1:t(c)&&(d="leading"in c?c.leading:d,e="trailing"in c?c.trailing:e);Z.leading=d;Z.maxWait=b;Z.trailing=e;return ya(a,b,Z)};f.transform=function(a,b,c,d){var e=da(a);b=B(b,d,4);null==c&&(e?c=[]:(d=a&&a.constructor,c=ja(d&&d.prototype)));(e?J:F)(a,function(a,d,e){return b(c,a,d,e)});return c};f.uniq=xa;f.each=J;f.extend=ea;f.select=ua;f.unique=xa;f.clone=
function(a,b,c,d){typeof b!="boolean"&&null!=b&&(d=c,c=b,b=!1);return ra(a,b,typeof c=="function"&&B(c,d,1))};f.find=ka;f.identity=fa;f.indexOf=va;f.isArray=da;f.isFunction=D;f.isObject=t;f.isPlainObject=function(a){if(!a||A.call(a)!=C)return!1;var b=a.valueOf,c=typeof b=="function"&&(c=L(b))&&L(c);return c?a==c||L(a)==c:La(a)};f.random=Aa;f.sortedIndex=wa;f.uniqueId=function(a){var b=++Qa;return String(null==a?"":a)+b};f.detect=ka;f.findWhere=ka;f.VERSION="2.2.1";f.extend(Physics.util,f)})(this);

// ---
// inside: src/util/decorator.js

/**
 * Facilitates creation of decorator service functions
 *
 * @example
 * 
 * var service = Decorator('service', {
 *      // prototype methods...
 *      method: function( args ){
 *      }
 * });
 *
 * // define
 * service( 'name', (optional)'parent-name', function decorator( parent ){
 *
 *      // extend further...
 *      return {
 *          // overrides
 *          init: function( cfg ){
 *              parent.init.call(this, cfg);
 *          }
 *      };
 * });
 * 
 * // instantiate
 * var options = { key: 'val' };
 * var instance = service( 'name', options );
 */
var Decorator = Physics.util.decorator = function Decorator( type, baseProto ){

    var registry = {}
        ,proto = {}
        ;

    // transform callback that only extends functions
    var transformFn = function transformFn( to, val, key, from ){

        var desc = Object.getOwnPropertyDescriptor( from, key );
        if ( desc.get || desc.set ){

            Object.defineProperty( to, key, desc );

        } else if ( Physics.util.isFunction( desc.value ) ){

            to[ key ] = desc.value;
        }
    };

    // extend that supports getters/setters
    var extend = function extend( to, from ){

        return Physics.util.transform( from, transformFn, to );
    };

    // http://ejohn.org/blog/objectgetprototypeof/
    /* jshint -W103 */
    var getProto = Object.getPrototypeOf;
    if ( typeof getProto !== 'function' ) {
        if ( typeof 'test'.__proto__ === 'object' ) {
            getProto = function(object){
                return object.__proto__;
            };
        } else {
            getProto = function(object){
                // May break if the constructor has been tampered with
                return object.constructor.prototype;
            };
        }
    }
    /* jshint +W103 */

    var objectCreate = Object.create;
    if (typeof objectCreate !== 'function') {
        objectCreate = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    /**
     * Apply mixin methods to decorator base
     * @param  {String|Object} key The method name. OR object with many key: fn pairs.
     * @param  {Function} val The function to assign
     * @return {void}
     */
    var mixin = function mixin( key, val ){

        if ( typeof key === 'object' ){
            proto = extend(proto, key);
            proto.type = type;
            return;
        }

        if ( key !== 'type' && Physics.util.isFunction( val ) ){
            proto[ key ] = val;
        }
    };

    // @TODO: not sure of the best way to make the constructor names
    // transparent and readable in debug consoles...
    mixin( baseProto );

    /**
     * Factory function for definition and instantiation of subclasses.
     * If class with "name" is not defined, the "decorator" parameter is required to define it first.
     * @param  {String} name       The class name
     * @param  {String} parentName (optional) The name of parent class to extend
     * @param  {Function} decorator (optional) The decorator function that should define and return methods to extend (decorate) the base class
     * @param  {Object} cfg        (optional) The configuration to pass to the class initializer
     * @return {void|Object}       If defining without the "cfg" parameter, void will be returned. Otherwise the class instance will be returned
     */
    var factory = function factory( name, parentName, decorator, cfg ){

        var instance
            ,result
            ,parent = proto
            ,tmp
            ;

        // set parent if specified
        if ( typeof parentName !== 'string' ){

            // ... otherwise reassign parameters
            cfg = decorator;
            decorator = parentName;

        } else {

            // extend the specified module
            parent = registry[ parentName ];

            if ( !parent ){

                throw 'Error: "' + parentName + '" ' + type + ' not defined';
            }

            parent = parent.prototype;
        }

        if ( typeof decorator === 'function' ){

            result = registry[ name ];

            if ( result ){

                result.prototype = extend(result.prototype, decorator( getProto(result.prototype) ));
                
            } else {
                // newly defined
                // store the new class
                result = registry[ name ] = function constructor( opts ){
                    if (this.init){
                        this.init( opts );
                    }
                };

                result.prototype = objectCreate( parent );
                result.prototype = extend(result.prototype, decorator( parent, result.prototype ));
            }

            result.prototype.type = type;
            result.prototype.name = name;
            
        } else {

            cfg = decorator || {};
            result = registry[ name ];
            if (!result){

                throw 'Error: "' + name + '" ' + type + ' not defined';
            }
        }

        if ( cfg ) {

            // create a new instance from the provided decorator
            return new result( cfg );
        }
    };

    factory.mixin = mixin;

    return factory;
};

// ---
// inside: src/util/helpers.js

/*!
 * Fast indexOf
 * @param  {Array} arr   The array to search
 * @param  {Mixed} value The value to find
 * @return {Number}       The index OR -1
 */
Physics.util.indexOf = function indexOf(arr, value) {
    var fr = 0, bk = arr.length;
    while (fr < bk) {
        bk--;
        if (arr[ fr ] === value) {
            return fr;
        }
        if (arr[ bk ] === value) {
            return bk;
        }
        fr++;
    }
    return -1;
};

/**
 * Options helper to keep track of options
 * @param  {Object} def Default options to set
 * @param  {Object} target   (optional) Where to copy the options to. Defaults to the returned function.
 * @return {function}        The options function
 */
Physics.util.options = function( def, target, callback ){

    var _def = Physics.util.extend( {}, def )
        ,fn
        ,callbacks = []
        ;

    // set options
    fn = function fn( options ){

        Physics.util.extend(target, _def, options);
        for ( var i = 0, l = callbacks.length; i < l; ++i ){
            callbacks[ i ]( target );
        }
        return target;
    };

    // add defaults
    fn.defaults = function defaults( def ){
        return Physics.util.extend( _def, def );
    };

    fn.onChange = function( cb ){
        callbacks.push( cb );
    };

    target = target || fn;

    return fn;
};



// ---
// inside: src/util/noconflict.js

(function( window ){

    var _Physics = window.Physics;

    /**
     * Restore the original reference to the global window.Physics variable.
     * Does nothing if PhysicsJS doesn't have a reference in global scope
     * @return {Physics} The PhysicsJS reference
     */
    Physics.noConflict = function(){

        if ( window.Physics === Physics ) {
            window.Physics = _Physics;
        }
        
        return Physics;
    };

})( this );

// ---
// inside: src/util/pubsub.js

(function(){

    /**
     * PubSub implementation (fast)
     */
    var PubSub = function PubSub(){

        if (!(this instanceof PubSub)){
            return new PubSub();
        }
    };

    PubSub.prototype = {

        /**
         * Subscribe callback(s) to a topic(s).
         * 
         * @param  {String|Object}   topic The topic name, or a config with key/value pairs of { topic: callbackFn, ... }
         * @param  {Function} fn The callback function (if not using Object as previous argument)
         * @param  {Object}   scope (optional) The scope to bind callback to
         * @param  {Number}   priority (optional) The priority of the callback (higher = earlier)
         * @return {this}
         */
        on: function( topic, fn, scope, priority ){

            var listeners
                ,orig
                ,idx
                ;

            // ensure topics hash is initialized
            this._topics = this._topics || (this._topics = {});

            // check if we're subscribing to multiple topics
            // with an object
            if ( Physics.util.isObject( topic ) ){

                for ( var t in topic ){
                    
                    this.on( t, topic[ t ], fn, scope );
                }

                return this;
            }

            listeners = this._topics[ topic ] || (this._topics[ topic ] = []);
            orig = fn;

            if ( Physics.util.isObject( scope ) ){
                
                fn = Physics.util.bind( fn, scope );
                fn._bindfn_ = orig;
                fn._one_ = orig._one_;

            } else if (!priority) {

                priority = scope;
            }

            fn._priority_ = priority;

            idx = Physics.util.sortedIndex( listeners, fn, '_priority_' );

            listeners.splice( idx, 0, fn );
            return this;
        },

        /**
         * Unsubscribe callback(s) from topic(s).
         * 
         * @param  {String|Object|Boolean}   topic The topic name, or a config with key/value pairs of { topic: callbackFn, ... }, or true to remove all listeners for all topics 
         * @param  {Function} fn The original callback function OR true to remove all listeners for specified topic
         * @return {this}
         */
        off: function( topic, fn ){

            var listeners
                ,listn
                ;

            if ( !this._topics ){
                // nothing subscribed
                return this;
            }

            if ( topic === true ){
                // purge all listeners
                this._topics = {};
                return this;
            }

            // check if we're subscribing to multiple topics
            // with an object
            if ( Physics.util.isObject( topic ) ){

                for ( var t in topic ){
                    
                    this.off( t, topic[ t ] );
                }

                return this;
            }

            listeners = this._topics[ topic ];

            if (!listeners){
                return this;
            }

            if ( fn === true ){
                // purge all listeners for topic
                this._topics[ topic ] = [];
                return this;
            }

            for ( var i = 0, l = listeners.length; i < l; i++ ){
                
                listn = listeners[ i ];

                if ( listn._bindfn_ === fn || listn === fn ){
                    listeners.splice( i, 1 );
                    break;
                }
            }

            return this;
        },

        /**
         * Publish data to a topic
         * @param  {String} topic The topic name
         * @param  {Object|String} data The data to send
         * @return {this}
         */
        emit: function( topic, data ){

            if ( !this._topics ){
                // nothing subscribed
                return this;
            }

            var listeners = this._topics[ topic ]
                ,l = listeners && listeners.length
                ,handler
                ;

            if ( !l ){
                return this;
            }

            // reverse iterate so priorities work out correctly
            while ( l-- ){
                
                handler = listeners[ l ];
                handler( data, {
                    // event data
                    topic: topic,
                    handler: handler
                });

                // if _one_ flag is set, the unsubscribe
                if ( handler._one_ ){
                    listeners.splice( l, 1 );
                }
            }

            return this;
        },

        one: function( topic, fn, scope ){

            // check if we're subscribing to multiple topics
            // with an object
            if ( Physics.util.isObject( topic ) ){

                for ( var t in topic ){
                    
                    this.one( t, topic[ t ], fn, scope );
                }

                return this;
            }

            // set the _one_ flag
            fn._one_ = true;
            this.on( topic, fn, scope );

            return this;
        }
    };
    
    Physics.util.pubsub = PubSub;
})();

// ---
// inside: src/util/request-anim-frame.js

// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now){
    Date.now = function() { return new Date().getTime(); };
}

(function() {
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || // iOS6 is buggy
            !window.requestAnimationFrame || 
            !window.cancelAnimationFrame
        ) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());


// ---
// inside: src/util/scratchpad.js

/**
 * scratchpad
 * thread-safe management of temporary (voletile)
 * objects for use in calculations
 */
(function(){

    // constants
    var SCRATCH_MAX_SCRATCHES = 100; // maximum number of scratches
    var SCRATCH_MAX_INDEX = 10; // maximum number of any type of temp objects
    var SCRATCH_USAGE_ERROR = 'Error: Scratchpad used after .done() called. (Could it be unintentionally scoped?)';
    var SCRATCH_INDEX_OUT_OF_BOUNDS = 'Error: Scratchpad usage space out of bounds. (Did you forget to call .done()?)';
    var SCRATCH_MAX_REACHED = 'Error: Too many scratchpads created. (Did you forget to call .done()?)';

    // cache previously created scratches
    var scratches = [];
    var numScratches = 0;

    var ScratchCls = function ScratchCls(){

        // private variables
        this.objIndex = 0;
        this.arrayIndex = 0;
        this.vectorIndex = 0;
        this.aabbIndex = 0;
        this.transformIndex = 0;
        this.objectStack = [];
        this.arrayStack = [];
        this.vectorStack = [];
        this.aabbStack = [];
        this.transformStack = [];

        if (++numScratches >= SCRATCH_MAX_SCRATCHES){
            throw SCRATCH_MAX_REACHED;
        }
    };

    ScratchCls.prototype = {

        /**
         * Declare that your work is finished. Release temp objects for use elsewhere. Must be called when immediate work is done.
         */
        done: function(){

            this._active = false;
            this.objIndex = this.arrayIndex = this.vectorIndex = this.aabbIndex = this.transformIndex = 0;
            // add it back to the scratch stack for future use
            scratches.push(this);
        },

        /**
         * Get a temporary object (dirty)
         * @return {Object} The temporary (dirty) object
         */
        object: function(){

            var stack = this.objectStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.objIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.objIndex++ ] || stack[ stack.push({}) - 1 ];
        },

        /**
         * Get a temporary array.
         * @return {Array} Temporary (dirty) array
         */
        array: function(){

            var stack = this.arrayStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.arrIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.arrIndex++ ] || stack[ stack.push([]) - 1 ];
        },

        /**
         * Get a temporary Vector
         * @return {Vector} The temporary (dirty) vector.
         */
        vector: function(){

            var stack = this.vectorStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.vectorIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.vectorIndex++ ] || stack[ stack.push(Physics.vector()) - 1 ];
        },

        /**
         * Get a temporary AABB
         * @return {AABB} The temporary (dirty) AABB
         */
        aabb: function(){

            var stack = this.aabbStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.aabbIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.aabbIndex++ ] || stack[ stack.push(Physics.aabb()) - 1 ];
        },

        /**
         * Get a temporary Transform
         * @return {Transform} The temporary (dirty) transform
         */
        transform: function(){

            var stack = this.transformStack;

            if (!this._active){
                throw SCRATCH_USAGE_ERROR;
            }

            if (this.transformIndex >= SCRATCH_MAX_INDEX){
                throw SCRATCH_INDEX_OUT_OF_BOUNDS;
            }

            return stack[ this.transformIndex++ ] || stack[ stack.push(Physics.transform()) - 1 ];
        }
    };
    
    /**
     * Get a new scratchpad to work from. Call .done() when finished.
     * @return {ScratchCls} The scratchpad
     */
    Physics.scratchpad = function(){

        var scratch = scratches.pop() || new ScratchCls();
        scratch._active = true;
        return scratch;
    };

})();

// ---
// inside: src/util/ticker.js

/**
 * The Ticker singleton for easily binding callbacks to requestAnimationFrame
 */
(function(window){
        
    var active = false
        ,ps = Physics.util.pubsub()
        ,perf = window.performance
        ;

    function now(){
        // http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
        return (perf && perf.now) ?
            (perf.now() + perf.timing.navigationStart) : 
            Date.now();
    }

    /**
     * Publish a tick to subscribed callbacks
     * @private
     * @param  {Number} time The current time
     * @return {void}
     */
    function step( time ){

        if (!active){
            return;
        }

        window.requestAnimationFrame( step );
        ps.emit( 'tick', time );
    }

    /**
     * Start the ticker
     * @return {this}
     */
    function start(){
        
        active = true;
        step();
        return this;
    }

    /**
     * Stop the ticker
     * @return {this}
     */
    function stop(){

        active = false;
        return this;
    }

    /**
     * Subscribe a callback to the ticker
     * @param  {Function} listener The callback function
     * @return {this}
     */
    function subscribe( listener ){

        ps.on('tick', listener);
        return this;
    }

    /**
     * Unsubscribe a callback from the ticker
     * @param  {Function} listener Original callback added
     * @return {this}
     */
    function unsubscribe( listener ){

        ps.off('tick', listener);
        return this;
    }

    /**
     * Determine if ticker is currently running
     * @return {Boolean} True if running
     */
    function isActive(){

        return !!active;
    }

    // API
    Physics.util.ticker = {
        now: now,
        start: start,
        stop: stop,
        on: subscribe,
        off: unsubscribe,
        isActive: isActive
    };

}(this));

// ---
// inside: src/math/aabb.js

(function(){

    /**
     * Axis Aligned Bounding Box implementation
     * @param {Object|Number} minX Either an object with the aabb values, or the minimum x value
     * @param {Number} minY Minimum y value
     * @param {Number} maxX Maximum x value
     * @param {Number} maxY Maximum y value
     */
    var AABB = function AABB( minX, minY, maxX, maxY ){

        // enforce instantiation
        if ( !(this instanceof AABB) ){

            return new AABB( minX, minY, maxX, maxY );
        }

        this._pos = Physics.vector();
        
        this.set( minX, minY, maxX, maxY );
    };

    /**
     * Set the aabb values
     * @param {Object|Number} minX Either an object with the aabb values, or the minimum x value
     * @param {Number} minY Minimum y value
     * @param {Number} maxX Maximum x value
     * @param {Number} maxY Maximum y value
     * @return {this}
     */
    AABB.prototype.set = function set( minX, minY, maxX, maxY ){

        if ( Physics.util.isObject(minX) ){

            this._pos.clone( minX.pos );
            this._hw = minX.halfWidth;
            this._hh = minX.halfHeight;
            
            return this;
        }

        this._pos.set( 0.5 * (maxX + minX), 0.5 * (maxY + minY) );
        this._hw = 0.5 * (maxX - minX);
        this._hh = 0.5 * (maxY - minY);
        return this;
    };

    /**
     * Get the aabb values as a plain object
     * @return {Object} The aabb values
     */
    AABB.prototype.get = function get(){

        var hw = this.halfWidth()
            ,hh = this.halfHeight()
            ;

        return {
            pos: this._pos.values(),
            halfWidth: hw,
            halfHeight: hh,
            // useful for vector operations
            x: hw,
            y: hh
        };
    };

    /**
     * Get the half-width measurement of the aabb
     * @return {Number} The half-width
     */
    AABB.prototype.halfWidth = function halfWidth(){

        return this._hw;
    };

    /**
     * Get the half-height measurement of the aabb
     * @return {Number} The half-height
     */
    AABB.prototype.halfHeight = function halfHeight(){

        return this._hh;
    };

    /**
     * Check if point is inside bounds
     * @param  {Vectorish} pt The point to check
     * @return {Boolean}    True if point is inside aabb
     */
    AABB.prototype.contains = function contains( pt ){

        var x = pt.x !== undefined ? pt.x : pt.get(0)
            ,y = pt.y !== undefined ? pt.y : pt.get(1)
            ;

        return  (x > (this._pos.get(0) - this._hw)) && 
                (x < (this._pos.get(0) + this._hw)) &&
                (y > (this._pos.get(1) - this._hh)) &&
                (y < (this._pos.get(1) + this._hh));
    };

    /**
     * Apply a transformation to the aabb.
     * Rotation origin is relative to the aabb's center.
     * @param  {Transform} trans The transformation
     * @return {this}
     */
    AABB.prototype.transform = function transform( trans ){

        var hw = this._hw
            ,hh = this._hh
            ,scratch = Physics.scratchpad()
            ,bottomRight = scratch.vector().set( hw, hh )
            ,topRight = scratch.vector().set( hw, -hh )
            ;

        // translate the center
        this._pos.translate( trans );

        // rotate the corners
        bottomRight.rotate( trans );
        topRight.rotate( trans );

        // we need to keep the box oriented with the axis, but expand it to
        // accomodate the rotation
        this._hw = Math.max( Math.abs(bottomRight.get(0)), Math.abs(topRight.get(0)) );
        this._hh = Math.max( Math.abs(bottomRight.get(1)), Math.abs(topRight.get(1)) );

        scratch.done();
        return this;
    };

    // Static methods
    /**
     * Check if a point is inside an aabb
     * @param  {AABB|Object} aabb The aabb instance or aabb values
     * @param  {Vectorish} pt   The point to check
     * @return {Boolean}      True if point is inside aabb
     */
    AABB.contains = function( aabb, pt ){

        var x = pt.x !== undefined ? pt.x : pt.get(0)
            ,y = pt.y !== undefined ? pt.y : pt.get(1)
            ;

        aabb = aabb.get ? aabb.get() : aabb;

        return  (x > (aabb.pos.x - aabb.halfWidth)) && 
                (x < (aabb.pos.x + aabb.halfWidth)) &&
                (y > (aabb.pos.y - aabb.halfHeight)) &&
                (y < (aabb.pos.y + aabb.halfHeight));
    };

    Physics.aabb = AABB;
}());

// ---
// inside: src/math/gjk.js

/**
 * Gilbert–Johnson–Keerthi object collison algorithm
 * For general information about GJK see: 
 *  - http://www.codezealot.org/archives/88
 *  - http://mollyrocket.com/849
 */
(function(){

    // the algorithm doesn't always converge for curved shapes.
    // need these constants to dictate how accurate we want to be.
    var gjkAccuracy = 0.0001;
    var gjkMaxIterations = 100;

    // get the next search direction from two simplex points
    var getNextSearchDir = function getNextSearchDir( ptA, ptB, dir ){

        var ABdotB = ptB.normSq() - ptB.dot( ptA )
            ,ABdotA = ptB.dot( ptA ) - ptA.normSq()
            ;

        // if the origin is farther than either of these points
        // get the direction from one of those points to the origin
        if ( ABdotB < 0 ){

            return dir.clone( ptB ).negate();

        } else if ( ABdotA > 0 ){

            return dir.clone( ptA ).negate();

        // otherwise, use the perpendicular direction from the simplex
        } else {

            // dir = AB = B - A
            dir.clone( ptB ).vsub( ptA );
            // if (left handed coordinate system) 
            // A cross AB < 0 then get perpendicular counterclockwise
            return dir.perp( (ptA.cross( dir ) > 0) );
        }
    };

    /**
     * Figure out the closest points on the original objects
     * from the last two entries of the simplex
     * @param  {Array} simplex
     * @return {Object}
     */
    var getClosestPoints = function getClosestPoints( simplex ){

        // see http://www.codezealot.org/archives/153
        // for algorithm details

        // we know that the position of the last point 
        // is very close to the previous. (by nature of the distance test)
        // this won't give great results for the closest
        // points algorithm, so let's use the previous two
        var len = simplex.length
            ,last = simplex[ len - 2 ]
            ,prev = simplex[ len - 3 ]
            ,scratch = Physics.scratchpad()
            ,A = scratch.vector().clone( last.pt )
            // L = B - A
            ,L = scratch.vector().clone( prev.pt ).vsub( A )
            ,lambdaB
            ,lambdaA
            ;

        if ( L.equals(Physics.vector.zero) ){

            // oh.. it's a zero vector. So A and B are both the closest.
            // just use one of them
            scratch.done();
            return {

                a: last.a,
                b: last.b
            };
        }

        lambdaB = - L.dot( A ) / L.normSq();
        lambdaA = 1 - lambdaB;

        if ( lambdaA <= 0 ){
            // woops.. that means the closest simplex point
            // isn't on the line it's point B itself
            scratch.done();
            return {
                a: prev.a,
                b: prev.b
            };
        } else if ( lambdaB <= 0 ){
            // vice versa
            scratch.done();
            return {
                a: last.a,
                b: last.b
            };
        }

        // guess we'd better do the math now...
        var ret = {
            // a closest = lambdaA * Aa + lambdaB * Ba
            a: A.clone( last.a ).mult( lambdaA ).vadd( L.clone( prev.a ).mult( lambdaB ) ).values(),
            // b closest = lambdaA * Ab + lambdaB * Bb
            b: A.clone( last.b ).mult( lambdaA ).vadd( L.clone( prev.b ).mult( lambdaB ) ).values()
        };

        scratch.done();
        return ret;
    };

    /**
     * Implementation agnostic GJK function.
     * @param  {Function} support The support function. Must return an object containing 
     *                            the witness points (.a, .b) and the support point (.pt).
     *                            Recommended to use simple objects. Eg: return { a: {x: 1, y:2}, b: {x: 3, y: 4}, pt: {x: 2, y: 2} }
     *                            Signature: function(<Physics.vector> axis).
     *                            axis: The axis to use
     * @param {Physics.vector} seed The starting direction for the simplex
     * @return {Object} The algorithm information containing properties: .overlap (bool), and .simplex (Array)
     */
    var gjk = function gjk( support, seed, checkOverlapOnly, debugFn ){

        var overlap = false
            ,noOverlap = false // if we're sure we're not overlapping
            ,distance = false
            ,simplex = []
            ,simplexLen = 1
            // setup a scratchpad of temporary cheap objects
            ,scratch = Physics.scratchpad()
            // use seed as starting direction or use x axis
            ,dir = scratch.vector().clone(seed || Physics.vector.axis[ 0 ])
            ,last = scratch.vector()
            ,lastlast = scratch.vector()
            // some temp vectors
            ,v1 = scratch.vector()
            ,v2 = scratch.vector()
            ,ab
            ,ac
            ,sign
            ,tmp
            ,iterations = 0
            ;

        // get the first Minkowski Difference point
        tmp = support( dir );
        simplexLen = simplex.push( tmp );
        last.clone( tmp.pt );
        // negate d for the next point
        dir.negate();

        // start looping
        while ( ++iterations ) {

            // swap last and lastlast, to save on memory/speed
            last.swap(lastlast);
            // push a new point to the simplex because we haven't terminated yet
            tmp = support( dir );
            simplexLen = simplex.push( tmp );
            last.clone( tmp.pt );

            if ( debugFn ){
                debugFn( simplex );
            }

            if ( last.equals(Physics.vector.zero) ){
                // we happened to pick the origin as a support point... lucky.
                overlap = true;
                break;
            }
            
            // check if the last point we added actually passed the origin
            if ( !noOverlap && last.dot( dir ) <= 0.0 ) {
                // if the point added last was not past the origin in the direction of d
                // then the Minkowski difference cannot possibly contain the origin since
                // the last point added is on the edge of the Minkowski Difference

                // if we just need the overlap...
                if ( checkOverlapOnly ){
                    break;
                }

                noOverlap = true;
            }

            // if it's a line...
            if ( simplexLen === 2 ){

                // otherwise we need to determine if the origin is in
                // the current simplex and act accordingly

                dir = getNextSearchDir( last, lastlast, dir );
                // continue...

            // if it's a triangle... and we're looking for the distance
            } else if ( noOverlap ){

                // if we know there isn't any overlap and
                // we're just trying to find the distance...
                // make sure we're getting closer to the origin
                dir.normalize();
                tmp = lastlast.dot( dir );
                if ( Math.abs(tmp - last.dot( dir )) < gjkAccuracy ){

                    distance = -tmp;
                    break;
                }

                // if we are still getting closer then only keep
                // the points in the simplex that are closest to
                // the origin (we already know that last is closer
                // than the previous two)
                // the norm is the same as distance(origin, a)
                // use norm squared to avoid the sqrt operations
                if (lastlast.normSq() < v1.clone(simplex[ 0 ].pt).normSq()) {
                    
                    simplex.shift();

                } else {
                    
                    simplex.splice(1, 1);
                }

                dir = getNextSearchDir( v1.clone(simplex[ 1 ].pt), v2.clone(simplex[ 0 ].pt), dir );
                // continue...

            // if it's a triangle
            } else {

                // we need to trim the useless point...

                ab = ab || scratch.vector();
                ac = ac || scratch.vector();

                // get the edges AB and AC
                ab.clone( lastlast ).vsub( last );
                ac.clone( simplex[ 0 ].pt ).vsub( last );

                // here normally people think about this as getting outward facing
                // normals and checking dot products. Since we're in 2D
                // we can be clever...
                sign = ab.cross( ac ) > 0;
                
                if ( sign ^ (last.cross( ab ) > 0) ){

                    // ok... so there's an XOR here... don't freak out
                    // remember last = A = -AO
                    // if AB cross AC and AO cross AB have the same sign
                    // then the origin is along the outward facing normal of AB
                    // so if AB cross AC and A cross AB have _different_ (XOR) signs
                    // then this is also the case... so we proceed...

                    // point C is dead to us now...
                    simplex.shift();

                    // if we haven't deduced that we've enclosed the origin
                    // then we know which way to look...
                    // morph the ab vector into its outward facing normal
                    ab.perp( !sign );
                    
                    // swap
                    dir.swap( ab );
                    
                    // continue...

                    // if we get to this if, then it means we can continue to look along
                    // the other outward normal direction (ACperp)
                    // if we don't see the origin... then we must have it enclosed
                } else if ( sign ^ (ac.cross( last ) > 0) ){
                    // then the origin is along the outward facing normal 
                    // of AC; (ACperp)

                    // point B is dead to us now...
                    simplex.splice(1, 1);

                    ac.perp( sign );
                    
                    // swap
                    dir.swap( ab );
                    
                    // continue...

                } else {

                    // we have enclosed the origin!
                    overlap = true;
                    // fewf... take a break
                    break;
                }
            }

            // woah nelly... that's a lot of iterations.
            // Stop it!
            if (iterations > gjkMaxIterations){
                scratch.done();
                return {
                    simplex: simplex,
                    iterations: iterations,
                    distance: 0,
                    maxIterationsReached: true
                };
            }
        }

        // free workspace
        scratch.done();

        tmp = {
            overlap: overlap,
            simplex: simplex,
            iterations: iterations
        };

        if ( distance !== false ){

            tmp.distance = distance;
            tmp.closest = getClosestPoints( simplex );
        }

        return tmp;
    };

    Physics.gjk = gjk;

})();

// ---
// inside: src/math/transform.js

(function(){
    
    /**
     * Vector Transformations class for rotating and translating vectors
     * @class Transform
     */

    /**
     * Transform Constructor / Factory
     * @param {Physics.vector|Physics.transform} vect (optional) vector to use for translation or a transform to copy
     * @param {Number} angle (optional) Angle (radians) to use for rotation
     * @param {Vectorish} origin (optional) Origin of the rotation
     */
    var Transform = function Transform( vect, angle, origin ) {

        if (!(this instanceof Transform)){
            return new Transform( vect, angle );
        }

        this.v = Physics.vector();
        this.o = Physics.vector(); // origin of rotation
        
        if ( vect instanceof Transform ){

            this.clone( vect );
            return;
        }

        if (vect){
            this.setTranslation( vect );
        }

        this.setRotation( angle || 0, origin );
    };

    /**
     * Set the translation portion of the transform
     * @param {Physics.vector} vect
     */
    Transform.prototype.setTranslation = function( vect ){

        this.v.clone( vect );
        return this;
    };

    /**
     * Set the rotation portion of the transform
     * @param {Number} angle
     * @param {Vectorish} origin (optional) Origin of the rotation
     */
    Transform.prototype.setRotation = function( angle, origin ){

        this.cosA = Math.cos( angle );
        this.sinA = Math.sin( angle );

        if ( origin ){
            this.o.clone( origin );
        } else {
            this.o.zero();
        }

        return this;
    };

    /**
     * Clone another transform. Or clone self into new transform.
     * @param  {Physics.transform} t (optional) the transform to clone
     * @return {Physics.transform|this}
     */
    Transform.prototype.clone = function( t ){

        if ( t ){

            this.setTranslation( t.v );
            this.cosA = t.cosA;
            this.sinA = t.sinA;
            this.o.clone( t.o );

            return this;
        }

        return new Transform( this );
    };

    Physics.transform = Transform;

})();

// ---
// inside: src/math/vector.js

(function(window){

    // http://jsperf.com/vector-storage-test/2

    // cached math functions
    // TODO: might be faster not to do this???
    var sqrt = Math.sqrt
        ,min = Math.min
        ,max = Math.max
        ,acos = Math.acos
        ,atan2 = Math.atan2
        ,TWOPI = Math.PI * 2
        ,typedArrays = !!window.Float64Array
        ;

    /**
     * Vector Constructor / Factory
     * @param {Number|Physics.vector} x (optional) Either the x coord. Or a vector to copy.
     * @param {Number} y (optional) The y coord.
     */
    var Vector = function Vector(x, y) {

        // enforce instantiation
        if ( !(this instanceof Vector) ){

            return new Vector( x, y );
        }

        // arrays to store values
        // x = _[0]
        // y = _[1]
        // norm = _[3]
        // normsq = _[4]
        

        if (typedArrays){
            this._ = new Float64Array(5);
        } else {
            this._ = [];
        }

        if (x && (x.x !== undefined || x._ && x._.length)){

            this.clone( x );

        } else {

            this.recalc = true; //whether or not recalculate norms
            this.set( x || 0.0, y || 0.0 );
        }
    };

    /**
     * Methods
     */

    /**
     * Sets the components of this Vector.
     */
    Vector.prototype.set = function(x, y) {

        this.recalc = true;

        this._[0] = x || 0.0;
        this._[1] = y || 0.0;
        return this;
    };

    /**
     * Get component
     * @param  {Integer} n The nth component. x is 1, y is 2, ...
     * @return {Integer} component value
     */
    Vector.prototype.get = function( n ){

        return this._[ n ];
    };

    /**
     * Add Vector to this
     */
    Vector.prototype.vadd = function(v) {

        this.recalc = true;

        this._[0] += v._[0];
        this._[1] += v._[1];
        return this;
    };

    /**
     * Subtract Vector from this
     */
    Vector.prototype.vsub = function(v) {

        this.recalc = true;

        this._[0] -= v._[0];
        this._[1] -= v._[1];
        return this;
    };

    /**
     * Add scalars to Vector's components
     */
    Vector.prototype.add = function(x, y){
        
        this.recalc = true;

        this._[0] += x;
        this._[1] += y === undefined? x : y;
        return this;
    };

    /**
     * Subtract scalars to Vector's components
     */
    Vector.prototype.sub = function(x, y){
        
        this.recalc = true;

        this._[0] -= x;
        this._[1] -= y === undefined? x : y;
        return this;
    };

    /* 
     * Multiply by a scalar
     */
    Vector.prototype.mult = function(m) {
        
        if ( !this.recalc ){

            this._[4] *= m * m;
            this._[3] *= m;
        }

        this._[0] *= m;
        this._[1] *= m;
        return this;
    };

    /* 
     * Get the dot product
     */
    Vector.prototype.dot = function(v) {

        return (this._[0] * v._[0]) + (this._[1] * v._[1]);
    };

    /** 
     * Get the cross product (in a left handed coordinate system)
     */
    Vector.prototype.cross = function(v) {

        return ( - this._[0] * v._[1]) + (this._[1] * v._[0]);
    };

    /**
     * Scalar projection of this along v
     */
    Vector.prototype.proj = function(v){

        return this.dot( v ) / v.norm();
    };


    /**
     * Vector project this along v
     */
    Vector.prototype.vproj = function(v){

        var m = this.dot( v ) / v.normSq();
        return this.clone( v ).mult( m );
    };

    /**
     * Angle between this and vector. Or this and x axis.
     * @param  {Vector} v (optional) other vector
     * @return {Number} Angle in radians
     */
    Vector.prototype.angle = function(v){

        var ang;

        if ( this.equals( Vector.zero ) ){
            
            if ( v ){
                return v.angle();
            } else {
                return NaN;
            }

        } else {

            if ( v && !v.equals( Vector.zero ) ){
                ang = atan2( this._[1] * v._[0] - this._[0] * v._[1], this._[0] * v._[0] + this._[1] * v._[1]);
            } else {
                ang = atan2( this._[ 1 ], this._[ 0 ] );    
            }
        }
        
        while (ang > Math.PI){
            ang -= TWOPI;
        }

        while (ang < -Math.PI){
            ang += TWOPI;
        }

        return ang;
    };

    /**
     * Angle created between three points; left -> this -> right.
     * @param  {Vector} v (optional) other vector
     * @return {Number} Angle in radians
     */
    Vector.prototype.angle2 = function( left, right ){

        var x1 = left._[0] - this._[0]
            ,y1 = left._[1] - this._[1]
            ,x2 = right._[0] - this._[0]
            ,y2 = right._[1] - this._[1]
            ,ang = atan2( y1 * x2 - x1 * y2, x1 * x2 + y1 * y2)
            ;

        while (ang > Math.PI){
            ang -= TWOPI;
        }

        while (ang < -Math.PI){
            ang += TWOPI;
        }

        return ang;
    };

    /**
     * Get the norm (length)
     */
    Vector.prototype.norm = function() {

        if (this.recalc){
            this.recalc = false;
            this._[4] = (this._[0] * this._[0] + this._[1] * this._[1]);
            this._[3] = sqrt( this._[4] );
        }
        
        return this._[3];
    };

    /**
     * Get the norm squared
     */
    Vector.prototype.normSq = function() {

        if (this.recalc){
            this.recalc = false;
            this._[4] = (this._[0] * this._[0] + this._[1] * this._[1]);
            this._[3] = sqrt( this._[4] );
        }

        return this._[4];
    };

    /** 
     * Get distance to other Vector
     */
    Vector.prototype.dist = function(v) {
      
        var dx, dy;
        return sqrt(
            (dx = (v._[0] - this._[0])) * dx + 
            (dy = (v._[1] - this._[1])) * dy
        );
    };

    /**
     * Get distance squared to other Vector
     */
    Vector.prototype.distSq = function(v) {

        var dx, dy;
        return (
            (dx = (v._[0] - this._[0])) * dx + 
            (dy = (v._[1] - this._[1])) * dy
        );
    };

    /**
     * Change vector into a vector perpendicular
     * @param {Boolean} ccw Set to true if want to go in the negative (counterclockwise) direction
     * @return {this}
     */
    Vector.prototype.perp = function( ccw ) {

        var tmp = this._[0]
            ;

        if ( ccw ){

            // x <-> y
            // negate y
            this._[0] = this._[1];
            this._[1] = -tmp;

        } else {

            // x <-> y
            // negate x
            this._[0] = -this._[1];
            this._[1] = tmp;
        }

        return this;
    };

    /**
     * Normalises this Vector, making it a unit Vector
     */
    Vector.prototype.normalize = function() {

        var m = this.norm();

        // means it's a zero Vector
        if ( m === 0 ){
            return this;
        }

        m = 1/m;

        this._[0] *= m;
        this._[1] *= m;

        this._[3] = 1.0;
        this._[4] = 1.0;

        return this;
    };

    /**
     * Apply a transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.transform = function( t ){

        var sinA = t.sinA
            ,cosA = t.cosA
            ,x = t.o._[ 0 ]
            ,y = t.o._[ 1 ]
            ;

        this._[ 0 ] -= x;
        this._[ 1 ] -= y;

        // rotate about origin "o" then translate
        return this.set(
            this._[ 0 ] * cosA - this._[ 1 ] * sinA + x + t.v._[ 0 ], 
            this._[ 0 ] * sinA + this._[ 1 ] * cosA + y + t.v._[ 1 ]
        );
    };

    /**
     * Apply an inverse transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.transformInv = function( t ){

        var sinA = t.sinA
            ,cosA = t.cosA
            ,x = t.o._[ 0 ]
            ,y = t.o._[ 1 ]
            ;

        this._[ 0 ] -= x + t.v._[ 0 ];
        this._[ 1 ] -= y + t.v._[ 1 ];

        // inverse translate then inverse rotate about origin "o"
        return this.set(
            this._[ 0 ] * cosA + this._[ 1 ] * sinA + x, 
            - this._[ 0 ] * sinA + this._[ 1 ] * cosA + y
        );
    };

    /**
     * Apply the rotation portion of transform to this vector
     * @param  {Physics.transform|Number} t The transform OR a number representing the angle to rotate by
     * @param  {Vector} o If number is specified for rotation angle, then this is a vector representing the rotation origin
     */
    Vector.prototype.rotate = function( t, o ){

        var sinA
            ,cosA
            ,x = 0
            ,y = 0
            ;

        if ( typeof t === 'number' ){
            sinA = Math.sin( t );
            cosA = Math.cos( t );

            if ( o ){
                x = (o.x || o._[ 0 ]) | 0;
                y = (o.y || o._[ 1 ]) | 0;
            }
        } else {
            sinA = t.sinA;
            cosA = t.cosA;
        
            x = t.o._[ 0 ];
            y = t.o._[ 1 ];
        }
            
        this._[ 0 ] -= x;
        this._[ 1 ] -= y;

        return this.set(
            this._[ 0 ] * cosA - this._[ 1 ] * sinA + x, 
            this._[ 0 ] * sinA + this._[ 1 ] * cosA + y
        );
    };

    /**
     * Apply an inverse rotation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.rotateInv = function( t ){

        return this.set(
            (this._[ 0 ] - t.o._[ 0 ]) * t.cosA + (this._[ 1 ] - t.o._[ 1 ]) * t.sinA + t.o._[ 0 ], 
            -(this._[ 0 ] - t.o._[ 0 ]) * t.sinA + (this._[ 1 ] - t.o._[ 1 ]) * t.cosA + t.o._[ 1 ]
        );
    };

    /**
     * Apply the translation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.translate = function( t ){

        return this.vadd( t.v );
    };

    /**
     * Apply an inverse translation portion of transform to this vector
     * @param  {Physics.transform} t The transform
     */
    Vector.prototype.translateInv = function( t ){

        return this.vsub( t.v );
    };


    /**
     * Returns clone of current Vector
     * Or clones provided Vector to this one
     */
    Vector.prototype.clone = function(v) {
        
        // http://jsperf.com/vector-storage-test

        if (v){

            if (!v._){

                return this.set( v.x, v.y );
            }
            
            this.recalc = v.recalc;

            if (!v.recalc){
                this._[3] = v._[3];
                this._[4] = v._[4];
            }

            this._[0] = v._[0];
            this._[1] = v._[1];

            return this;
        }

        return new Vector( this );
    };

    /**
     * Swap values with other vector
     * @param  {Vector} v
     * @return {this}
     */
    Vector.prototype.swap = function(v){

        var _ = this._;
        this._ = v._;
        v._ = _;

        _ = this.recalc;
        this.recalc = v.recalc;
        v.recalc = _;
        return this;
    };

    /**
     * Create a litteral object
     */
    Vector.prototype.values = function(){

        return {
            x: this._[0],
            y: this._[1]
        };
    };


    /**
     * Zero the Vector
     */
    Vector.prototype.zero = function() {

        this._[3] = 0.0;
        this._[4] = 0.0;

        this._[0] = 0.0;
        this._[1] = 0.0;
        return this;
    };

    /**
     * Make this a Vector in the opposite direction
     */
    Vector.prototype.negate = function( component ){

        if (component !== undefined){

            this._[ component ] = -this._[ component ];
            return this;
        }

        this._[0] = -this._[0];
        this._[1] = -this._[1];
        return this;
    };

    /**
     * Constrain Vector components to minima and maxima
     */
    Vector.prototype.clamp = function(minV, maxV){

        minV = minV.values ? minV.values() : minV;
        maxV = maxV.values ? maxV.values() : maxV;

        this._[0] = min(max(this._[0], minV.x), maxV.x);
        this._[1] = min(max(this._[1], minV.y), maxV.y);
        this.recalc = true;
        return this;
    };

    /**
     * Render string
     */
    Vector.prototype.toString = function(){

        return '('+this._[0] + ', ' + this._[1]+')';
    };


    /**
     * Determine if equal
     * @param  {Vector} v
     * @return {boolean}
     */
    Vector.prototype.equals = function(v){

        return this._[0] === v._[0] &&
            this._[1] === v._[1] &&
            this._[2] === v._[2];
    };


    /**
     * Static functions
     */

    /** 
     * Return sum of two Vectors
     */
    Vector.vadd = function(v1, v2) {

        return new Vector( v1._[0] + v2._[0], v1._[1] + v2._[1] );
    };

    /** 
     * Subtract v2 from v1
     */
    Vector.vsub = function(v1, v2) {

        return new Vector( v1._[0] - v2._[0], v1._[1] - v2._[1] );
    };

    /**
     * Multiply v1 by a scalar m
     */
    Vector.mult = function(m, v1){

        return new Vector( v1._[0]*m, v1._[1]*m );
    };

    /** 
     * Project v1 onto v2
     */
    Vector.vproj = function(v1, v2) {

        return Vector.mult( v1.dot(v2) / v2.normSq(), v2 );
    };

    /**
     * Axis vectors for general reference
     * @type {Array}
     */
    Vector.axis = [
        new Vector(1.0, 0.0),
        new Vector(0.0, 1.0)
    ];

    /**
     * Zero vector for reference
     */
    Vector.zero = new Vector(0, 0);

    // assign
    Physics.vector = Vector;

}(this)); // end Vector class


// ---
// inside: src/core/query.js

(function (window) {

    /**
     * Group helpers
     */
    var fnTrue = function(){ return !0; }; // return true
    
    var indexOf = Physics.util.indexOf;

    /*!
     * Get test function to test on sub property
     * @param  {Function} fn   The test function
     * @param  {String}   prop The property name to test
     * @return {Function}        The wrapped function
     */
    var wrapRule = function wrapRule( fn, prop ){
        return function( thing ){
            return fn( thing[ prop ] );
        };
    };

    /*!
     * Get an equality test function
     * @param  {Mixed} toMatch The value to match
     * @param  {String} prop    (optional) The property name to test
     * @return {Function}         The test function
     */
    var $eq = function $eq( toMatch, prop ){
        return function( thing ){
            
            thing = prop ? thing[ prop ] : thing;

            var fr = 0
                ,bk
                ;
            
            if ( Physics.util.isArray( thing ) ){

                if ( Physics.util.isArray( toMatch ) ){
                    // match all
                    bk = thing.length;

                    // check lengths
                    if ( bk !== toMatch.length ){
                        return false;
                    }

                    while ( fr < bk ){
                        bk--;
                        if (
                            // check front
                            (indexOf(toMatch, thing[ fr ]) === -1) ||
                            // check back
                            (indexOf(toMatch, thing[ bk ]) === -1)
                        ) {
                            return false;
                        }
                        fr++;
                    }
                    return true;
                } else {
                    // find in array
                    return (indexOf( thing, toMatch ) > -1);
                }
            }

            // exact match
            return (thing === toMatch);
        };
    };

    /*!
     * Get a NOT equality test function
     * @param  {Mixed} toMatch The value to match
     * @param  {String} prop    (optional) The property name to test
     * @return {Function}         The test function
     */
    var $ne = function $ne( toMatch, prop ){
        var fn = $eq( toMatch, prop );
        return function( thing ){
            return !fn( thing );
        };
    };

    /*!
     * Get a test function for matching ANY in array
     * @param  {Mixed} toMatch The value array to match
     * @param  {String} prop    (optional) The property name to test
     * @return {Function}         The test function
     */
    var $in = function $in( toMatch, prop ){
        return function( thing ){

            thing = prop ? thing[ prop ] : thing;
            
            var fr = 0
                ,bk
                ;

            if ( Physics.util.isArray( thing ) ){
                bk = thing.length;

                while( fr < bk ){
                    bk--;
                    if (
                        // check front
                        (indexOf(toMatch, thing[ fr ]) > -1) ||
                        // check back
                        (indexOf(toMatch, thing[ bk ]) > -1)
                    ) {
                        return true;
                    }
                    fr++;
                }
                return false;
            }

            // if thing matches any in array
            return (indexOf(toMatch, thing) > -1);
        };
    };

    /*!
     * Get a test function for matching NOT ANY in array
     * @param  {Mixed} toMatch The value array to match
     * @param  {String} prop    (optional) The property name to test
     * @return {Function}         The test function
     */
    var $nin = function $nin( toMatch, prop ){
        var fn = $in( toMatch, prop );
        return function( thing ){
            return !fn( thing );
        };
    };

    /*!
     * Get a test function to match any body who's aabb intersects point
     * @param  {Vectorish} point The point to check
     * @return {Function}       The test function
     */
    var $at = function $at( point ){
        point = Physics.vector( point );
        return function( body ){
            var aabb = body.aabb();
            return Physics.aabb.contains( aabb, point );
        };
    };

    /*!
     * Get an AND test function
     * @param  {Function} first First function node
     * @return {Function}       Test function
     */
    var $and = function $and( first ){
        return first.next ? function( thing ){
            var fn = first;
            while ( fn ){

                if ( !fn( thing ) ){
                    return false;
                }
                fn = fn.next;
            }
            return true;
        } : first;
    };

    /*!
     * Get an OR test function
     * @param  {Function} first First function node
     * @return {function}       Test function
     */
    var $or = function $or( first ){
        return first.next ? function( thing ){
            var fn = first;
            while ( fn ){

                if ( fn( thing ) ){
                    return true;
                }
                fn = fn.next;
            }
            return false;
        } : first;
    };

    // operation hash
    var operations = {
        // $and and $or are separate
        $eq: $eq
        ,$ne: $ne
        ,$in: $in
        ,$nin: $nin
        ,$at: $at
    };

    /**
     * Query factory.
     * Creates a function that can be used to perform searches on collections of objects
     * @param {Object} rules The mongodb-like search rules
     * @return {Function} The query function
     */
    var Query = function Query( rules, /* internal use */ $op ){

        var op
            ,l
            ,rule
            ,first
            ,list
            ,fn
            ;

        if ( $op ){
            
            // parse operation choice
            if ( $op === '$or' || $op === '$and' ){

                // expect a rules array
                for ( op = 0, l = rules.length; op < l; ++op ){
                    
                    fn = Query( rules[ op ] );
                    // if first hasn't been set yet, set it and start the list there
                    // otherwise set the next node of the list
                    list = list ? list.next = fn : first = fn;
                }

                return ($op === '$or') ? $or( first ) : $and( first );
            } else if ( op = operations[ $op ] ){

                return op( rules );

            } else {
                // does not compute...
                throw 'Unknown query operation: ' + $op;
            }
        }

        // loop through rules
        for ( op in rules ){
            rule = rules[ op ];
   
            if ( op[0] === '$' ){
                // it's an operation rule
                fn = Query( rule, op );
                
            } else if ( Physics.util.isPlainObject( rule ) ) {
                // it's an object so parse subrules
                fn = wrapRule( Query( rule ), op );
            } else {
                // simple equality rule
                fn = $eq( rule, op );
            }

            // if first hasn't been set yet, set it and start the list there
            // otherwise set the next node of the list
            list = list ? list.next = fn : first = fn;
        }

        // return the rules test
        return $and( first || fnTrue );
    };

    Physics.query = Query;

})(this);


// ---
// inside: src/core/behavior.js

(function(){

    var defaults = {
        priority: 0
    };

    // Service
    Physics.behavior = Decorator('behavior', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){
            
            this.options = Physics.util.options( defaults );
            this.options( options );
        },

        /**
         * Apply the behavior to a group of bodies
         * @param  {Array} arr Array of bodies to apply to OR set to true to apply to all bodies in world
         * @return {self}
         */
        applyTo: function( arr ){

            if ( arr === true ){
                this._targets = null;
            } else {
                this._targets = Physics.util.uniq( arr );
            }
            return this;
        },

        /**
         * Get the array of bodies (by reference!) this behavior is applied to.
         * @return {Array} Array of bodies the behavior applies to
         */
        getTargets: function(){
            
            return this._targets || ( this._world ? this._world._bodies : [] );
        },

        /**
         * Set which world to apply to
         * @param {Object} world The world (or null)
         * @return {self}
         */
        setWorld: function( world ){

            if ( this.disconnect && this._world ){
                this.disconnect( this._world );
            }

            this._world = world;

            if ( this.connect && world ){
                this.connect( world );
            }

            return this;
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            if (this.behave){
                world.on('integrate:positions', this.behave, this, this.options.priority);
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            if (this.behave){
                world.off('integrate:positions', this.behave);
            }
        },

        /**
         * Default method run on every world integration
         * @abstract
         * @param  {Object} data Object containing event data, including: data.bodies = Array of world bodies to act on, data.dt = the timestep size
         * @return {void}
         */
        behave: null
    });

}());

// ---
// inside: src/core/body.js

(function(){

    var defaults = {

        // is the body hidden (not to be rendered)?
        hidden: false,
        // is the body fixed and imovable?
        fixed: false,
        // body mass
        mass: 1.0,
        // body restitution. How "bouncy" is it?
        restitution: 1.0,
        // what is its coefficient of friction with another surface with COF = 1?
        cof: 0.8,
        // what is the view object (mixed) that should be used when rendering?
        view: null
    };

    Physics.body = Decorator('body', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            var vector = Physics.vector;

            // properties set onto 
            this.options = Physics.util.options( defaults, this );
            this.options( options );

            // physical properties
            this.state = {
                pos: vector( this.x, this.y ),
                vel: vector( this.vx, this.vy ),
                acc: vector(),
                angular: {
                    pos: this.angle || 0.0,
                    vel: this.angularVelocity || 0.0,
                    acc: 0.0
                },
                old: {
                    pos: vector(),
                    vel: vector(),
                    acc: vector(),
                    angular: {
                        pos: 0.0,
                        vel: 0.0,
                        acc: 0.0
                    }
                }
            };

            // cleanup
            delete this.x;
            delete this.y;
            delete this.vx;
            delete this.vy;
            delete this.angle;
            delete this.angularVelocity;

            if (this.mass === 0){
                throw "Error: Bodies must have non-zero mass";
            }

            // shape
            this.geometry = Physics.geometry('point');
        },

        /**
         * Set which world to apply to
         * @param {Object} world The world (or null)
         * @return {self}
         */
        setWorld: function( world ){

            if ( this.disconnect && this._world ){
                this.disconnect( this._world );
            }

            this._world = world;

            if ( this.connect && world ){
                this.connect( world );
            }

            return this;
        },

        /**
         * Accelerate the body by adding supplied vector to its current acceleration
         * @param  {Vector} acc The acceleration vector
         * @return {this}
         */
        accelerate: function( acc ){

            this.state.acc.vadd( acc );
            return this;
        },

        /**
         * Apply a force at center of mass, or at point "p" relative to the center of mass
         * @param  {Vector} force The force vector
         * @param  {Vector} p     (optional) The point vector from the COM at which to apply the force
         * @return {this}
         */
        applyForce: function( force, p ){

            var scratch = Physics.scratchpad()
                ,r = scratch.vector()
                ,state
                ;
                
            // if no point at which to apply the force... apply at center of mass
            if ( !p ){
                
                this.accelerate( r.clone( force ).mult( 1/this.mass ) );

            } else if ( this.moi ) {

                // apply torques
                state = this.state;
                r.clone( p );
                // r cross F
                this.state.angular.acc -= r.cross( force ) / this.moi;
                // projection of force towards center of mass
                this.applyForce( force );

            }

            scratch.done();

            return this;
        },

        /**
         * Get the Axis aligned bounding box for the body in its current position and rotation
         * @return {Object} The aabb values
         */
        aabb: function(){

            var scratch = Physics.scratchpad()
                ,trans = scratch.transform()
                ,angle = this.state.angular.pos
                ,aabb = scratch.aabb().set( this.geometry.aabb( angle ) )
                ;

            trans.setRotation( 0 ).setTranslation(this.state.pos);
            aabb.transform( trans );

            aabb = aabb.get();
            scratch.done();
            return aabb;
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @abstract
         * @return {this}
         */
        recalc: function(){
            // override to recalculate properties
        }
    });

}());

// ---
// inside: src/core/geometry.js

(function(){

    Physics.geometry = Decorator('geometry', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            this._aabb = new Physics.aabb();
        },
        
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            return this._aabb.get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result ){

            result = result || Physics.vector();

            // not implemented.
            return result.set( 0, 0 );
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            result = result || Physics.vector();

            // not implemented.
            return result.set( 0, 0 );
        }
    });

}());

// ---
// inside: src/core/geometry-helpers.js

/**
 * Geometry helper functions
 */

/**
 * Determine if polygon hull is convex
 * @param  {Array}  hull Array of vertices (Vectorish)
 * @return {Boolean}
 */
Physics.geometry.isPolygonConvex = function( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,tmp = scratch.vector()
        ,ret = true
        ,sign = false
        ,l = hull.length
        ;

    if ( !hull || !l ){
        return false;
    }

    if ( l < 3 ){
        // it must be a point or a line...
        // which are convex
        scratch.done();
        return ret;
    }

    prev.clone( hull[ 0 ] ).vsub( tmp.clone( hull[ l - 1 ] ) );

    // loop over the edges of the hull and construct vectors of the current
    // edge and retain the last edge
    // add two to the length to do a full cycle
    for ( var i = 1; i <= l; ++i ){
        
        next.clone( hull[ i % l ] ).vsub( tmp.clone( hull[ (i - 1) % l ] ) );

        if ( sign === false ){

            // first check the sign of the first cross product
            sign = prev.cross( next );

        } else if ( (sign > 0) ^ (prev.cross( next ) > 0) ){
        
            // if the cross products are different signs it's not convex
            ret = false;
            break;
        }

        // remember the last edge
        next.swap( prev );
    }

    scratch.done();
    return ret;
};

/**
 * Gets the moment of inertia of a convex polygon
 * @see: http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 * assumptions: 
 *  * mass is unitary
 *  * axis of rotation is the origin
 * @param  {Array} hull Array of vertices (vectorish)
 * @return {Number} The polygon MOI
 */
Physics.geometry.getPolygonMOI = function( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,num = 0
        ,denom = 0
        ,tmp
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it must be a point
        // moi = 0
        scratch.done();
        return 0;
    }

    if ( l === 2 ){
        // it's a line
        // get length squared
        tmp = next.clone( hull[ 1 ] ).distSq( prev.clone( hull[ 0 ] ) );
        scratch.done();
        return tmp / 12;
    }

    prev.clone( hull[ 0 ] );

    for ( var i = 1; i < l; ++i ){
        
        next.clone( hull[ i ] );

        tmp = Math.abs( next.cross( prev ) );
        num += tmp * ( next.normSq() + next.dot( prev ) + prev.normSq() );
        denom += tmp;

        prev.swap( next );
    }

    scratch.done();
    return num / ( 6 * denom );
};

/**
 * Check if point is inside polygon hull
 * @param  {Vectorish}  pt
 * @param  {Array}  hull Array of vertices (Vectorish)
 * @return {Boolean}
 */
Physics.geometry.isPointInPolygon = function( pt, hull ){

    var scratch = Physics.scratchpad()
        ,point = scratch.vector().clone( pt )
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ang = 0
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it's a point...
        ang = point.equals( prev.clone( hull[ 0 ] ));
        scratch.done();
        return ang;
    }

    if ( l === 2 ){
        // it's a line
        ang = point.angle( prev.clone( hull[ 0 ] ));
        ang += point.angle( prev.clone( hull[ 1 ] ));
        scratch.done();
        return ( Math.abs(ang) === Math.PI );
    }

    prev.clone( hull[ 0 ] ).vsub( point );

    // calculate the sum of angles between vector pairs
    // from point to vertices
    for ( var i = 1; i <= l; ++i ){
        
        next.clone( hull[ i % l ] ).vsub( point );
        ang += next.angle( prev );
        prev.swap( next );
    }

    scratch.done();
    return ( Math.abs(ang) > 1e-6 );
};

/**
 * Get the signed area of the polygon
 * @param  {Array} hull Array of vertices
 * @return {Number} Area (positive for clockwise ordering)
 */
Physics.geometry.getPolygonArea = function getPolygonArea( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ret = 0
        ,l = hull.length
        ;

    if ( l < 3 ){
        // it must be a point or a line
        // area = 0
        scratch.done();
        return 0;
    }

    prev.clone( hull[ l - 1 ] );

    for ( var i = 0; i < l; ++i ){
        
        next.clone( hull[ i ] );

        ret += prev.cross( next );

        prev.swap( next );
    }

    scratch.done();
    return ret / 2;
};

/**
 * Get the coordinates of the centroid
 * @param  {Array} hull Polygon hull definition
 * @return {Vector} centroid
 */
Physics.geometry.getPolygonCentroid = function getPolygonCentroid( hull ){

    var scratch = Physics.scratchpad()
        ,prev = scratch.vector()
        ,next = scratch.vector()
        ,ret = Physics.vector()
        ,tmp
        ,l = hull.length
        ;

    if ( l < 2 ){
        // it must be a point
        scratch.done();
        return Physics.vector( hull[0] );
    }

    if ( l === 2 ){
        // it's a line
        // get the midpoint
        scratch.done();
        return Physics.vector((hull[ 1 ].x + hull[ 0 ].x)/2, (hull[ 1 ].y + hull[ 0 ].y)/2 );
    }

    prev.clone( hull[ l - 1 ] );

    for ( var i = 0; i < l; ++i ){
        
        next.clone( hull[ i ] );

        tmp = prev.cross( next );
        prev.vadd( next ).mult( tmp );
        ret.vadd( prev );

        prev.swap( next );
    }

    tmp = 1 / (6 * Physics.geometry.getPolygonArea( hull ));

    scratch.done();
    return ret.mult( tmp );
};

/**
 * Get the closest point on a discrete line to specified point.
 * @param  {Vectorish} pt The point
 * @param  {Vectorish} linePt1 The first endpoint of the line
 * @param  {Vectorish} linePt2 The second endpoint of the line
 * @return {Vector} The closest point
 */
Physics.geometry.nearestPointOnLine = function nearestPointOnLine( pt, linePt1, linePt2 ){

    var scratch = Physics.scratchpad()
        ,p = scratch.vector().clone( pt )
        ,A = scratch.vector().clone( linePt1 ).vsub( p )
        ,L = scratch.vector().clone( linePt2 ).vsub( p ).vsub( A )
        ,lambdaB
        ,lambdaA
        ;

    if ( L.equals(Physics.vector.zero) ){
        // oh.. it's a zero vector. So A and B are both the closest.
        // just use one of them
        scratch.done();
        return Physics.vector( linePt1 );
    }

    lambdaB = - L.dot( A ) / L.normSq();
    lambdaA = 1 - lambdaB;

    if ( lambdaA <= 0 ){
        // woops.. that means the closest simplex point
        // isn't on the line it's point B itself
        scratch.done();
        return Physics.vector( linePt2 );
    } else if ( lambdaB <= 0 ){
        // vice versa
        scratch.done();
        return Physics.vector( linePt1 );
    }

    // guess we'd better do the math now...
    p = Physics.vector( linePt2 ).mult( lambdaB ).vadd( A.clone( linePt1 ).mult( lambdaA ) );
    scratch.done();
    return p;
};



// ---
// inside: src/core/integrator.js

/**
 * Base integrator definition
 */
(function(){

    var defaults = {

        // drag applied during integration
        // 0 means vacuum
        // 0.9 means molasses
        drag: 0
    };

    Physics.integrator = Decorator('integrator', {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){
            
            this.options = Physics.util.options( defaults );
        },

        /**
         * Set which world to apply to
         * @param {Object} world The world (or null)
         * @return {self}
         */
        setWorld: function( world ){

            if ( this.disconnect && this._world ){
                this.disconnect( this._world );
            }

            this._world = world;

            if ( this.connect && world ){
                this.connect( world );
            }

            return this;
        },

        /**
         * Integrate bodies by timestep
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {this}
         */
        integrate: function( bodies, dt ){

            var world = this._world;

            this.integrateVelocities( bodies, dt );
            
            if ( world ){
                world.emit('integrate:velocities', {
                    bodies: bodies,
                    dt: dt
                });
            }

            this.integratePositions( bodies, dt );
            
            if ( world ){
                world.emit('integrate:positions', {
                    bodies: bodies,
                    dt: dt
                });
            }

            return this;
        },

        /**
         * Just integrate the velocities
         * @abstract
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         */
        integrateVelocities: function( bodies, dt ){

            throw 'The integrator.integrateVelocities() method must be overriden';
        },

        /**
         * Just integrate the positions
         * @abstract
         * @param  {Array} bodies List of bodies to integrate
         * @param  {Number} dt     Timestep size
         */
        integratePositions: function( bodies, dt ){

            throw 'The integrator.integratePositions() method must be overriden';
        }
    });

}());

// ---
// inside: src/core/renderer.js

/**
 * Base renderer class definition
 */
(function(){

    var defaults = {
        // draw meta data (fps, steps, etc)
        meta: false,
        // refresh rate of meta info
        metaRefresh: 200,

        // width of viewport
        width: 600,
        // height of viewport
        height: 600
    };

    // Service
    Physics.renderer = Decorator('renderer', {

        /**
         * Initialization
         * @param  {Object} options Options passed to the initializer
         * @return {void}
         */
        init: function( options ){

            var el = typeof options.el === 'string' ? document.getElementById(options.el) : options.el
                ;

            this.options = Physics.util.extend({}, defaults, options);

            this.el = el ? el : document.body;
            this.drawMeta = Physics.util.throttle( Physics.util.bind(this.drawMeta, this), this.options.metaRefresh );
        },

        /**
         * Set which world to apply to
         * @param {Object} world The world (or null)
         * @return {self}
         */
        setWorld: function( world ){

            if ( this.disconnect && this._world ){
                this.disconnect( this._world );
            }

            this._world = world;

            if ( this.connect && world ){
                this.connect( world );
            }

            return this;
        },

        /**
         * Render the world bodies and meta. Called by world.render()
         * @param  {Array} bodies Array of bodies in the world (reference!)
         * @param  {Object} meta  meta object
         * @return {this}
         */
        render: function( bodies, meta ){

            var body
                ,view
                ,pos
                ;

            if (this.beforeRender){

                this.beforeRender();
            }

            this._world.emit('beforeRender', {
                renderer: this,
                bodies: bodies,
                meta: meta
            });

            if (this.options.meta){
                this.drawMeta( meta );
            }

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                body = bodies[ i ];
                view = body.view || ( body.view = this.createView(body.geometry) );

                if ( !body.hidden ){
                    this.drawBody( body, view );
                }
            }

            return this;
        },

        /**
         * Create a view for the specified geometry
         * @abstract
         * @param  {Object} geometry The geometry
         * @return {Mixed} Whatever the renderer needs to render the body.
         */
        createView: function( geometry ){

            // example:
            // var el = document.createElement('div');
            // el.style.height = geometry.height + 'px';
            // el.style.width = geometry.width + 'px';
            // return el;
            throw 'You must override the renderer.createView() method.';
        },

        /**
         * Draw the meta data.
         * @abstract
         * @param  {Object} meta The meta data
         */
        drawMeta: function( meta ){
            
            // example:
            // this.els.fps.innerHTML = meta.fps.toFixed(2);
            // this.els.steps.innerHTML = meta.steps;
            throw 'You must override the renderer.drawMeta() method.';
        },

        /**
         * Draw specified body using specified view
         * @abstract
         * @param  {Object} body The body
         * @param  {Object} view The view
         */
        drawBody: function( body, view ){

            // example (pseudocode):
            // view.angle = body.state.angle
            // view.position = body.state.position
            throw 'You must override the renderer.drawBody() method.';
        }

        
    });

}());


// ---
// inside: src/core/world.js

/**
 * The world class
 */
(function(){

    var execCallbacks = function execCallbacks( fns, scope, args ){
        
        var fn
            ,ret
            ,cb = function(){
                return execCallbacks( fns, scope, args );
            }
            ;

        while ( fn = fns.shift() ){

            ret = fn.apply(scope, args);

            if (ret && ret.then){
                return ret.then( cb );
            }
        }
    };

    var defaults = {

        // default timestep
        timestep: 1000.0 / 160,
        // maximum number of iterations per step
        maxIPF: 16,
        webworker: false, // NOT YET IMPLEMENTED

        // default integrator
        integrator: 'verlet'
    };

    // begin world definitions
    /**
     * World Constructor.
     * 
     * If called with an array of functions, and any functions 
     * return a promise-like object, the remaining callbacks will 
     * be called only when that promise is resolved.
     * @param {Object}   cfg (optional) Configuration options
     * @param {Function|Array} fn  (optional) Callback function or array of callbacks called with "this" === world
     */
    var World = function World( cfg, fn ){

        // allow creation of world without "new"
        if (!(this instanceof World)){
            return new World( cfg, fn );
        }
        
        this.init( cfg, fn );
    };

    // extend pubsub
    World.prototype = Physics.util.extend({}, Physics.util.pubsub.prototype, {

        /**
         * Initialization
         * @param {Object}   cfg (optional) Configuration options
         * @param {Function} fn  (optional) Callback function or array of callbacks called with "this" === world
         * @return {void}
         */
        init: function( cfg, fn ){

            var self = this;

            if ( Physics.util.isFunction( cfg ) || Physics.util.isArray( cfg ) ){
                fn = cfg;
                cfg = {};
            }

            this._stats = {
               // statistics (fps, etc)
               fps: 0,
               ipf: 0 
            }; 
            this._bodies = [];
            this._behaviors = [];
            this._integrator = null;
            this._renderer = null;
            this._paused = false;

            // set options
            this.options = Physics.util.options( defaults );
            this.options.onChange(function( opts ){

                // set timestep
                self.timeStep( opts.timestep );
            });
            this.options( cfg );

            // add integrator
            this.add(Physics.integrator( this.options.integrator ));

            // apply the callback function
            if ( Physics.util.isFunction( fn ) ){

                execCallbacks([ fn ], this, [this, Physics] );

            } else if ( Physics.util.isArray( fn ) ){

                execCallbacks(fn, this, [this, Physics] );
            }
        },

        /**
         * Set options
         * @param  {Object} cfg Config options to set
         * @return {Object}     Options container
         */
        options: null,

        /**
         * Multipurpose add method. Add one or many bodies, behaviors, integrators, renderers...
         * @param {Object|Array} arg The thing to add, or array of things to add
         * @return {this}
         */
        add: function( arg ){

            var i = 0
                ,len = arg && arg.length || 0
                ,thing = len ? arg[ 0 ] : arg
                ;

            if ( !thing ){
                return this;
            }

            // we'll either cycle through an array
            // or just run this on the arg itself
            do {
                switch (thing.type){

                    case 'behavior':
                        this.addBehavior(thing);
                    break; // end behavior

                    case 'integrator':
                        this.integrator(thing);
                    break; // end integrator

                    case 'renderer':
                        this.renderer(thing);
                    break; // end renderer

                    case 'body':
                        this.addBody(thing);
                    break; // end body
                    
                    default:
                        throw 'Error: failed to add item of unknown type "'+ thing.type +'" to world';
                    // end default
                }

            } while ( ++i < len && (thing = arg[ i ]) );

            return this;
        },

        /**
         * Multipurpose remove method. Remove one or many bodies, behaviors, integrators, renderers...
         * @param {Object|Array} arg The thing to remove, or array of things to remove
         * @return {this}
         */
        remove: function( arg ){

            var i = 0
                ,len = arg && arg.length || 0
                ,thing = len ? arg[ 0 ] : arg
                ;

            if ( !thing ){
                return this;
            }

            // we'll either cycle through an array
            // or just run this on the arg itself
            do {
                switch (thing.type){

                    case 'behavior':
                        this.removeBehavior( thing );
                    break; // end behavior

                    case 'integrator':
                        if (thing === this._integrator){
                            this.integrator( null );
                        }
                    break; // end integrator

                    case 'renderer':
                        if (thing === this._renderer){
                            this.renderer( null );
                        }
                    break; // end renderer

                    case 'body':
                        this.removeBody( thing );
                    break; // end body
                    
                    default:
                        throw 'Error: failed to remove item of unknown type "'+ thing.type +'" from world';
                    // end default
                }

            } while ( ++i < len && (thing = arg[ i ]) );

            return this;
        },

        /**
         * Determine if object has been added to world
         * @param  {Object}  thing The object to test
         * @return {Boolean}       The test result.
         */
        has: function( thing ){

            var arr
                ,i
                ,l
                ;

            if ( !thing ){
                return false;
            }

            switch (thing.type){

                case 'behavior':
                    arr = this._behaviors;
                break; // end behavior

                case 'integrator':
                return ( this._integrator === thing );
                // end integrator

                case 'renderer':
                return ( this._renderer === thing );
                // end renderer

                case 'body':
                    arr = this._bodies;
                break; // end body
                
                default:
                    throw 'Error: unknown type "'+ thing.type +'"';
                // end default
            }

            // check array
            return (Physics.util.indexOf( arr, thing ) > -1);
        },

        /**
         * Get or Set the integrator
         * @param {Object} integrator Integrator instance to use
         * @return {this|Object} This or Integrator
         */
        integrator: function( integrator ){

            if ( integrator === undefined ){
                return this._integrator;
            }

            // do nothing if already added
            if ( this._integrator === integrator ){
                return this;
            }

            if ( this._integrator ){

                this._integrator.setWorld( null );

                this.emit( 'remove:integrator', {
                    integrator: this._integrator
                });
            }

            if ( integrator ){
                this._integrator = integrator;
                this._integrator.setWorld( this );

                this.emit( 'add:integrator', {
                    integrator: this._integrator
                });
            }

            return this;
        },

        /**
         * Get or Set renderer
         * @param  {Object} renderer The renderer to set
         * @return {this|Object}          This or Renderer
         */
        renderer: function( renderer ){

            if ( renderer === undefined ){
                return this._renderer;
            }

            // do nothing if renderer already added
            if ( this._renderer === renderer ){
                return this;
            }

            if ( this._renderer ){

                this._renderer.setWorld( null );

                this.emit( 'remove:renderer', {
                    renderer: this._renderer
                });
            }

            if ( renderer ){
                this._renderer = renderer;
                this._renderer.setWorld( this );

                this.emit( 'add:renderer', {
                    renderer: this._renderer
                });
            }

            return this;
        },

        /**
         * Get or Set timestep
         * @param  {Number} dt The timestep size
         * @return {this|Number}    This or the timestep
         */
        timeStep: function( dt ){

            if ( dt ){

                this._dt = dt;
                // calculate the maximum jump in time over which to do iterations
                this._maxJump = dt * this.options.maxIPF;

                return this;
            }

            return this._dt;
        },

        /**
         * Add behavior to the world
         * @param {Object} behavior The behavior to add
         * @return {this} 
         */
        addBehavior: function( behavior ){

            var notify;

            // don't allow duplicates
            if ( this.has( behavior ) ){
                return this;
            }

            behavior.setWorld( this );
            this._behaviors.push( behavior );

            this.emit( 'add:behavior', {
                behavior: behavior
            });

            return this;
        },

        /**
         * Get copied list of behaviors in the world
         * @return {Array} Array of behaviors
         */
        getBehaviors: function(){

            // return the copied array
            return [].concat(this._behaviors);
        },

        /**
         * Remove behavior from the world
         * @param {Object} behavior The behavior to remove
         * @return {this} 
         */
        removeBehavior: function( behavior ){

            var behaviors = this._behaviors;

            if (behavior){
                
                for ( var i = 0, l = behaviors.length; i < l; ++i ){
                    
                    if (behavior === behaviors[ i ]){
                        
                        behaviors.splice( i, 1 );
                        behavior.setWorld( null );

                        this.emit( 'remove:behavior', {
                            behavior: behavior
                        });

                        break;
                    }
                }
            }

            return this;
        },

        /**
         * Add body to the world
         * @param {Object} body The body to add
         * @return {this} 
         */
        addBody: function( body ){

            var notify;

            // don't allow duplicates
            if ( this.has( body ) ){
                return this;
            }

            body.setWorld( this );
            this._bodies.push( body );

            this.emit( 'add:body', {
                body: body
            });

            return this;
        },

        /**
         * Get copied list of bodies in the world
         * @return {Array} Array of bodies
         */
        getBodies: function(){

            // return the copied array
            return [].concat(this._bodies);
        },

        /**
         * Remove body from the world
         * @param {Object} body The body to remove
         * @return {this} 
         */
        removeBody: function( body ){

            var bodies = this._bodies;

            if (body){
                
                for ( var i = 0, l = bodies.length; i < l; ++i ){
                    
                    if (body === bodies[ i ]){
                        
                        bodies.splice( i, 1 );
                        body.setWorld( null );

                        this.emit( 'remove:body', {
                            body: body
                        });

                        break;
                    }
                }
            }

            return this;
        },

        /**
         * Find first matching body based on query rules
         * @param  {Object|Function} rules The query rules or custom function
         * @return {Object|false}       Body or false if no match
         */
        findOne: function( rules ){

            var self = this
                ,fn = (typeof rules === 'function') ? rules : Physics.query( rules )
                ;

            return Physics.util.find( self._bodies, fn ) || false;
        },

        /**
         * Find all matching bodies based on query rules
         * @param  {Object|Function} rules The query rules or custom function
         * @return {Array}       Array of matching bodies
         */
        find: function( rules ){

            var self = this
                ,fn = (typeof rules === 'function') ? rules : Physics.query( rules )
                ;

            return Physics.util.filter( self._bodies, fn );
        },

        /**
         * Do a single iteration
         * @private
         * @param  {Number} dt The timestep size
         * @return {void}
         */
        iterate: function( dt ){

            this._integrator.integrate( this._bodies, dt );
        },

        /**
         * Do a single step
         * @param  {Number} now Current unix timestamp
         * @return {this}
         */
        step: function( now ){
            
            if ( this._paused ){

                this._time = false;
                return this;
            }

            var time = this._time || (this._time = now)
                ,diff = now - time
                ,stats = this._stats
                ,dt = this._dt
                ;

            if ( !diff ){
                return this;
            }
            
            // limit number of iterations in each step
            if ( diff > this._maxJump ){

                this._time = now - this._maxJump;
                diff = this._maxJump;
            }

            // set some stats
            stats.fps = 1000/diff;
            stats.ipf = Math.ceil(diff/this._dt);

            while ( this._time < now ){
                this._time += dt;
                this.iterate( dt );
            }

            this.emit('step');
            return this;
        },

        /**
         * Render current world state using the renderer
         * @return {this}
         */
        render: function(){

            if ( !this._renderer ){
                throw "No renderer added to world";
            }
            
            this._renderer.render( this._bodies, this._stats );
            this.emit('render', {
                bodies: this._bodies,
                stats: this._stats,
                renderer: this._renderer
            });
            return this;
        },

        /**
         * Pause the world. (step calls do nothing)
         * @return {this}
         */
        pause: function(){

            this._paused = true;
            this.emit('pause');
            return this;
        },

        /**
         * Unpause the world. (step calls continue as usual)
         * @return {this}
         */
        unpause: function(){

            this._paused = false;
            this.emit('unpause');
            return this;
        },

        /**
         * Determine if world is paused
         * @return {Boolean} Is the world paused?
         */
        isPaused: function(){

            return !!this._paused;
        },

        /**
         * Destroy the world.
         * (Bwahahahahaha!)
         * @return {void}
         */
        destroy: function(){

            var self = this;
            self.pause();

            // notify before
            this.emit('destroy');

            // remove all listeners
            self.off( true );
            // remove everything
            self.remove( self.getBodies() );
            self.remove( self.getBehaviors() );
            self.integrator( null );
            self.renderer( null );
        }

    });

    Physics.world = World;
    
}());

// ---
// inside: src/integrators/verlet.js

Physics.integrator('verlet', function( parent ){

    // for this integrator we need to know if the object has been integrated before
    // so let's add a mixin to bodies

    Physics.body.mixin({

        started: function( val ){
            if ( val !== undefined ){
                this._started = true;
            }

            return !!this._started;
        }
    });


    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init
            parent.init.call(this, options);
        },

        /**
         * Velocity integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integrateVelocities: function( bodies, dt ){

            // half the timestep
            var dtdt = dt * dt
                ,drag = 1 - this.options.drag
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // Inspired from https://github.com/soulwire/Coffee-Physics
                    // @licence MIT
                    // 
                    // v = x - ox
                    // x = x + (v + a * dt * dt)

                    // use the velocity in vel if the velocity has been changed manually
                    if (state.vel.equals( state.old.vel ) && body.started()){
                            
                        // Get velocity by subtracting old position from curr position
                        state.vel.clone( state.pos ).vsub( state.old.pos );

                    } else {

                        state.old.pos.clone( state.pos ).vsub( state.vel );
                        // so we need to scale the value by dt so it 
                        // complies with other integration methods
                        state.vel.mult( dt );
                    }

                    // Apply "air resistance".
                    if ( drag ){

                        state.vel.mult( drag );
                    }

                    // Apply acceleration
                    // v += a * dt * dt
                    state.vel.vadd( state.acc.mult( dtdt ) );

                    // normalize velocity 
                    state.vel.mult( 1/dt );

                    // store calculated velocity
                    state.old.vel.clone( state.vel );

                    // Reset accel
                    state.acc.zero();

                    //
                    // Angular components
                    // 

                    if (state.angular.vel === state.old.angular.vel && body.started()){

                        state.angular.vel = (state.angular.pos - state.old.angular.pos);

                    } else {

                        state.old.angular.pos = state.angular.pos - state.angular.vel;
                        state.angular.vel *= dt;
                    }

                    state.angular.vel += state.angular.acc * dtdt;
                    state.angular.vel /= dt;
                    state.old.angular.vel = state.angular.vel;
                    state.angular.acc = 0;

                    body.started( true );

                } else {
                    // set the velocity and acceleration to zero!
                    state.vel.zero();
                    state.acc.zero();
                    state.angular.vel = 0;
                    state.angular.acc = 0;
                }
            }
        },

        /**
         * Position integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integratePositions: function( bodies, dt ){

            // half the timestep
            var dtdt = dt * dt
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // so we need to scale the value by dt so it 
                    // complies with other integration methods
                    state.vel.mult( dt );
                
                    // Store old position.
                    // xold = x
                    state.old.pos.clone( state.pos );

                    state.pos.vadd( state.vel );

                    // normalize velocity 
                    state.vel.mult( 1/dt );

                    // store calculated velocity
                    state.old.vel.clone( state.vel );

                    //
                    // Angular components
                    // 

                    
                    state.angular.vel *= dt;
                
                    state.old.angular.pos = state.angular.pos;

                    state.angular.pos += state.angular.vel;
                    state.angular.vel /= dt;
                    state.old.angular.vel = state.angular.vel;
                }
            }
        }
    };
});



// ---
// inside: src/geometries/point.js

/**
 * Point geometry
 * @module geometries/point
 */
Physics.geometry('point', function( parent ){

    // alias of default
});


// ---
// inside: src/geometries/circle.js

/**
 * Circle geometry
 * @module geometries/circle
 */
Physics.geometry('circle', function( parent ){

    var defaults = {

        radius: 1.0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);
            this.radius = options.radius;
            this._aabb = Physics.aabb();
        },
                
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            var r = this.radius
                ,aabb = this._aabb
                ;

            // circles are symetric... so angle has no effect
            if ( aabb.halfWidth() === r ){
                // don't recalculate
                return aabb.get();
            }

            return aabb.set( -r, -r, r, r ).get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result ){

            result = result || Physics.vector();

            return result.clone( dir ).normalize().mult( this.radius );
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            result = result || Physics.vector();

            // we can use the center of the circle as the core object
            // because we can project a point to the hull in any direction
            // ... yay circles!
            // but since the caller is expecting a certain margin... give it
            // to them
            return result.clone( dir ).normalize().mult( this.radius - margin );
        }
    };
});


// ---
// inside: src/geometries/convex-polygon.js

/**
 * Convex polygon geometry
 * @module geometries/convex-polygon
 */
Physics.geometry('convex-polygon', function( parent ){

    var ERROR_NOT_CONVEX = 'Error: The vertices specified do not match that of a _convex_ polygon.';

    var defaults = {

    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);
            options = Physics.util.extend({}, defaults, options);

            this.setVertices( options.vertices || [] );
        },

        /**
         * Set the vertices of the polygon shape. Vertices will be converted to be relative to the calculated centroid
         * @param {Array} hull The hull definition. Array of vectorish objects
         * @return {self}
         */
        setVertices: function( hull ){

            var scratch = Physics.scratchpad()
                ,transl = scratch.transform()
                ,verts = this.vertices = []
                ;

            if ( !Physics.geometry.isPolygonConvex( hull ) ){
                throw ERROR_NOT_CONVEX;
            }

            transl.setRotation( 0 );
            transl.setTranslation( Physics.geometry.getPolygonCentroid( hull ).negate() );

            // translate each vertex so that the centroid is at the origin
            // then add the vertex as a vector to this.vertices
            for ( var i = 0, l = hull.length; i < l; ++i ){
                
                verts.push( Physics.vector( hull[ i ] ).translate( transl ) );
            }

            this._area = Physics.geometry.getPolygonArea( verts );

            this._aabb = false;
            scratch.done();
            return this;
        },
        
        /**
         * Get axis-aligned bounding box for this object (rotated by angle if specified).
         * @param  {Number} angle (optional) The angle to rotate the geometry.
         * @return {Object}       Bounding box values
         */
        aabb: function( angle ){

            if (!angle && this._aabb){
                return this._aabb.get();
            }

            var scratch = Physics.scratchpad()
                ,p = scratch.vector()
                ,trans = scratch.transform().setRotation( angle || 0 )
                ,xaxis = scratch.vector().clone(Physics.vector.axis[0]).rotateInv( trans )
                ,yaxis = scratch.vector().clone(Physics.vector.axis[1]).rotateInv( trans )
                ,xmax = this.getFarthestHullPoint( xaxis, p ).proj( xaxis )
                ,xmin = - this.getFarthestHullPoint( xaxis.negate(), p ).proj( xaxis )
                ,ymax = this.getFarthestHullPoint( yaxis, p ).proj( yaxis )
                ,ymin = - this.getFarthestHullPoint( yaxis.negate(), p ).proj( yaxis )
                ,aabb
                ;

            aabb = new Physics.aabb( xmin, ymin, xmax, ymax );

            if (!angle){
                this._aabb = aabb;
            }

            scratch.done();
            return aabb.get();
        },

        /**
         * Get farthest point on the hull of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest hull point in local coordinates
         */
        getFarthestHullPoint: function( dir, result, data ){

            var verts = this.vertices
                ,val
                ,prev
                ,l = verts.length
                ,i = 2
                ,idx
                ;

            result = result || Physics.vector();

            if ( l < 2 ){
                if ( data ){
                    data.idx = 0;
                }
                return result.clone( verts[0] );
            }

            prev = verts[ 0 ].dot( dir );
            val = verts[ 1 ].dot( dir );

            if ( l === 2 ){
                idx = (val >= prev) ? 1 : 0;
                if ( data ){
                    data.idx = idx;
                }
                return result.clone( verts[ idx ] );
            }

            if ( val >= prev ){
                // go up
                // search until the next dot product 
                // is less than the previous
                while ( i < l && val >= prev ){
                    prev = val;
                    val = verts[ i ].dot( dir );
                    i++;
                }

                if (val >= prev){
                    i++;
                }

                // return the previous (furthest with largest dot product)
                idx = i - 2;
                if ( data ){
                    data.idx = i - 2;
                }
                return result.clone( verts[ idx ] );

            } else {
                // go down

                i = l;
                while ( i > 1 && prev >= val ){
                    i--;
                    val = prev;
                    prev = verts[ i ].dot( dir );
                }

                // return the previous (furthest with largest dot product)
                idx = (i + 1) % l;
                if ( data ){
                    data.idx = idx;
                }
                return result.clone( verts[ idx ] );                
            }
        },

        /**
         * Get farthest point on the core of this geometry
         * along the direction vector "dir"
         * returns local coordinates
         * replaces result if provided
         * @param {Vector} dir Direction to look
         * @param {Vector} result (optional) A vector to write result to
         * @return {Vector} The farthest core point in local coordinates
         */
        getFarthestCorePoint: function( dir, result, margin ){

            var norm
                ,scratch = Physics.scratchpad()
                ,next = scratch.vector()
                ,prev = scratch.vector()
                ,verts = this.vertices
                ,l = verts.length
                ,mag
                ,sign = this._area > 0
                ,data = {}
                ;

            result = this.getFarthestHullPoint( dir, result, data );

            // get normalized directions to next and previous vertices
            next.clone( verts[ (data.idx + 1) % l ] ).vsub( result ).normalize().perp( sign );
            prev.clone( verts[ (data.idx - 1 + l) % l ] ).vsub( result ).normalize().perp( !sign );

            // get the magnitude of a vector from the result vertex 
            // that splits down the middle
            // creating a margin of "m" to each edge
            mag = margin / (1 + next.dot(prev));

            result.vadd( next.vadd( prev ).mult( mag ) );
            scratch.done();
            return result;
        }
    };
});


// ---
// inside: src/bodies/circle.js

/**
 * Circle body definition
 * @module bodies/circle
 * @requires geometries/circle
 */
Physics.body('circle', function( parent ){

    var defaults = {
        radius: 1.0
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.geometry = Physics.geometry('circle', {
                radius: options.radius
            });

            this.recalc();
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @return {this}
         */
        recalc: function(){
            parent.recalc.call(this);
            // moment of inertia
            this.moi = this.mass * this.geometry.radius * this.geometry.radius / 2;
        }
    };
});


// ---
// inside: src/bodies/convex-polygon.js

/**
 * Convex Polygon Body
 * @module bodies/convex-polygon
 * @requires geometries/convex-polygon
 */
Physics.body('convex-polygon', function( parent ){

    var defaults = {
        
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init method
            parent.init.call(this, options);

            options = Physics.util.extend({}, defaults, options);

            this.geometry = Physics.geometry('convex-polygon', {
                vertices: options.vertices
            });

            this.recalc();
        },

        /**
         * Recalculate properties. Call when body physical properties are changed.
         * @return {this}
         */
        recalc: function(){
            parent.recalc.call(this);
            // moment of inertia
            this.moi = Physics.geometry.getPolygonMOI( this.geometry.vertices );
        }
    };
});


// ---
// inside: src/bodies/point.js

/**
 * Point body
 * @module bodies/point
 */
Physics.body('point', function(){});

// ---
// inside: src/behaviors/attractor.js

/**
 * Attractor behavior attracts bodies to a specific point
 * @module behaviors/attractor
 */
Physics.behavior('attractor', function( parent ){

    var defaults = {

        pos: null, // default to (0, 0)
        // how strong the attraction is
        strength: 1,
        // power of the inverse distance (2 is inverse square)
        order: 2,
        // max distance to apply it to
        max: false, // infinite
        // min distance to apply it to
        min: false // auto calc
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            var self = this;
            this._pos = new Physics.vector();
            // call parent init method
            parent.init.call( this );
            this.options.defaults( defaults );
            this.options.onChange(function( opts ){
                self._maxDist = opts.max === false ? Infinity : opts.max;
                self._minDist = opts.min ? opts.min : 10;
                self.position( opts.pos );
            });
            this.options( options );
        },

        position: function( pos ){
            
            var self = this;

            if ( pos ){
                this._pos.clone( pos );
                return self;
            }

            return this._pos.values();
        },
        
        /**
         * Apply acceleration to bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = this.getTargets()
                ,body
                ,order = this.options.order
                ,strength = this.options.strength
                ,minDist = this._minDist
                ,maxDist = this._maxDist
                ,scratch = Physics.scratchpad()
                ,acc = scratch.vector()
                ,norm
                ,g
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                body = bodies[ j ];

                // clone the position
                acc.clone( this._pos );
                acc.vsub( body.state.pos );
                // get the distance
                norm = acc.norm();

                if (norm > minDist && norm < maxDist){

                    g = strength / Math.pow(norm, order);

                    body.accelerate( acc.normalize().mult( g ) );
                }
            }

            scratch.done();
        }
    };
});


// ---
// inside: src/behaviors/body-collision-detection.js

/**
 * Body collision detection
 * @module behaviors/body-collision-detection
 */
Physics.behavior('body-collision-detection', function( parent ){

    /**
     * Get a general support function for use with GJK algorithm
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Function}       The support function
     */
    var getSupportFn = function getSupportFn( bodyA, bodyB ){

        var fn;

        fn = function( searchDir ){

            var scratch = Physics.scratchpad()
                ,tA = scratch.transform().setTranslation( bodyA.state.pos ).setRotation( bodyA.state.angular.pos )
                ,tB = scratch.transform().setTranslation( bodyB.state.pos ).setRotation( bodyB.state.angular.pos )
                ,vA = scratch.vector()
                ,vB = scratch.vector()
                ,method = fn.useCore? 'getFarthestCorePoint' : 'getFarthestHullPoint'
                ,marginA = fn.marginA
                ,marginB = fn.marginB
                ,ret
                ;

            vA = bodyA.geometry[ method ]( searchDir.rotateInv( tA ), vA, marginA ).transform( tA );
            vB = bodyB.geometry[ method ]( searchDir.rotate( tA ).rotateInv( tB ).negate(), vB, marginB ).transform( tB );

            searchDir.negate().rotate( tB );

            ret = {
                a: vA.values(),
                b: vB.values(),
                pt: vA.vsub( vB ).values() 
            };
            scratch.done();
            return ret;
        };

        fn.useCore = false;
        fn.margin = 0;

        return fn;
    };

    /**
     * Use GJK algorithm to check arbitrary bodies for collisions
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Object}       Collision result
     */
    var checkGJK = function checkGJK( bodyA, bodyB ){

        var scratch = Physics.scratchpad()
            ,d = scratch.vector()
            ,tmp = scratch.vector()
            ,overlap
            ,result
            ,support
            ,collision = false
            ,aabbA = bodyA.aabb()
            ,dimA = Math.min( aabbA.halfWidth, aabbA.halfHeight )
            ,aabbB = bodyB.aabb()
            ,dimB = Math.min( aabbB.halfWidth, aabbB.halfHeight )
            ;

        // just check the overlap first
        support = getSupportFn( bodyA, bodyB );
        d.clone( bodyA.state.pos ).vsub( bodyB.state.pos );
        result = Physics.gjk(support, d, true);

        if ( result.overlap ){

            // there is a collision. let's do more work.
            collision = {
                bodyA: bodyA,
                bodyB: bodyB
            };

            // first get the min distance of between core objects
            support.useCore = true;
            support.marginA = 0;
            support.marginB = 0;

            while ( result.overlap && (support.marginA < dimA || support.marginB < dimB) ){
                if ( support.marginA < dimA ){
                    support.marginA += 1;
                }
                if ( support.marginB < dimB ){
                    support.marginB += 1;
                }

                result = Physics.gjk(support, d);
            }

            if ( result.overlap || result.maxIterationsReached ){
                scratch.done();
                // This implementation can't deal with a core overlap yet
                return false;
            }

            // calc overlap
            overlap = Math.max(0, (support.marginA + support.marginB) - result.distance);
            collision.overlap = overlap;
            // @TODO: for now, just let the normal be the mtv
            collision.norm = d.clone( result.closest.b ).vsub( tmp.clone( result.closest.a ) ).normalize().values();
            collision.mtv = d.mult( overlap ).values();
            // get a corresponding hull point for one of the core points.. relative to body A
            collision.pos = d.clone( collision.norm ).mult( support.margin ).vadd( tmp.clone( result.closest.a ) ).vsub( bodyA.state.pos ).values();
        }

        scratch.done();
        return collision;
    };

    /**
     * Check two circles for collisions
     * @param  {Object} bodyA First circle
     * @param  {Object} bodyB Second circle
     * @return {Object}       Collision result
     */
    var checkCircles = function checkCircles( bodyA, bodyB ){

        var scratch = Physics.scratchpad()
            ,d = scratch.vector()
            ,tmp = scratch.vector()
            ,overlap
            ,collision = false
            ;
        
        d.clone( bodyB.state.pos ).vsub( bodyA.state.pos );
        overlap = d.norm() - (bodyA.geometry.radius + bodyB.geometry.radius);

        // hmm... they overlap exactly... choose a direction
        if ( d.equals( Physics.vector.zero ) ){

            d.set( 1, 0 );
        }

        // if ( overlap > 0 ){
        //     // check the future
        //     d.vadd( tmp.clone(bodyB.state.vel).mult( dt ) ).vsub( tmp.clone(bodyA.state.vel).mult( dt ) );
        //     overlap = d.norm() - (bodyA.geometry.radius + bodyB.geometry.radius);
        // }

        if ( overlap <= 0 ){

            collision = {
                bodyA: bodyA,
                bodyB: bodyB,
                norm: d.normalize().values(),
                mtv: d.mult( -overlap ).values(),
                pos: d.normalize().mult( bodyA.geometry.radius ).values(),
                overlap: -overlap
            };
        }
    
        scratch.done();
        return collision;
    };

    /**
     * Check a pair for collisions
     * @param  {Object} bodyA First body
     * @param  {Object} bodyB Second body
     * @return {Object}       Collision result
     */
    var checkPair = function checkPair( bodyA, bodyB ){

        // don't detect two fixed bodies
        if ( bodyA.fixed && bodyB.fixed ){
            return false;
        }

        if ( bodyA.geometry.name === 'circle' && bodyB.geometry.name === 'circle' ){

            return checkCircles( bodyA, bodyB );

        } else {

            return checkGJK( bodyA, bodyB );
        }
    };

    var defaults = {

        // channel to listen to for collision candidates
        // set to "true" to force check every pair of bodies in the world
        check: 'collisions:candidates',

        // channel to publish events to
        channel: 'collisions:detected'
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            if ( this.options.check === true ){

                world.on( 'integrate:velocities', this.checkAll, this );

            } else {

                world.on( this.options.check, this.check, this );
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            if ( this.options.check === true ){

                world.off( 'integrate:velocities', this.checkAll );

            } else {

                world.off( this.options.check, this.check );
            }
        },

        /**
         * Check pairs of objects that have been flagged by broad phase for possible collisions.
         * @param  {Object} data Event data
         * @return {void}
         */
        check: function( data ){

            var candidates = data.candidates
                ,pair
                ,targets = this.getTargets()
                ,collisions = []
                ,ret
                ;

            for ( var i = 0, l = candidates.length; i < l; ++i ){
                
                pair = candidates[ i ];

                if ( targets === this._world._bodies || 
                    // only check if the members are targeted by this behavior
                    (Physics.util.indexOf( targets, pair.bodyA ) > -1) &&
                    (Physics.util.indexOf( targets, pair.bodyB ) > -1)
                ){
                    ret = checkPair( pair.bodyA, pair.bodyB );

                    if ( ret ){
                        collisions.push( ret );
                    }
                }
            }

            if ( collisions.length ){

                this._world.emit( this.options.channel, {
                    collisions: collisions
                });
            }
        },

        /**
         * Check all pairs of objects in the list for collisions
         * @param  {Object} data Event data
         * @return {void}
         */
        checkAll: function( data ){

            var bodies = this.getTargets()
                ,dt = data.dt
                ,bodyA
                ,bodyB
                ,collisions = []
                ,ret
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                bodyA = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){

                    bodyB = bodies[ i ];

                    ret = checkPair( bodyA, bodyB );

                    if ( ret ){
                        collisions.push( ret );
                    }
                }
            }

            if ( collisions.length ){

                this._world.emit( this.options.channel, {
                    collisions: collisions
                });
            }
        }
    };

});

// ---
// inside: src/behaviors/body-impulse-response.js

/**
 * Body collision response
 * @module behaviors/body-collision-response
 */
Physics.behavior('body-impulse-response', function( parent ){
    
    var defaults = {
        // channel to listen to for collisions
        check: 'collisions:detected'
    };

    return {

        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );
        },

        // no applyTo method
        applyTo: false,

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.on( this.options.check, this.respond, this );
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off( this.options.check, this.respond );
        },

        /**
         * Collide two bodies by modifying their positions and velocities to conserve momentum
         * @param  {Object} bodyA   First Body
         * @param  {Object} bodyB   Second body
         * @param  {Vector} normal  Normal vector of the collision surface
         * @param  {Vector} point   Contact point of the collision
         * @param  {Vector} mtrans  Minimum transit vector that is the smallest displacement to separate the bodies
         * @param  {Boolean} contact Are the bodies in resting contact relative to each other
         * @return {void}
         */
        collideBodies: function(bodyA, bodyB, normal, point, mtrans, contact){

            var fixedA = bodyA.fixed
                ,fixedB = bodyB.fixed
                ,scratch = Physics.scratchpad()
                // minimum transit vector for each body
                ,mtv = scratch.vector().clone( mtrans )
                ;

            // do nothing if both are fixed
            if ( fixedA && fixedB ){
                scratch.done();
                return;
            }

            if ( fixedA ){

                // extract bodies
                bodyB.state.pos.vadd( mtv );
                
            } else if ( fixedB ){

                // extract bodies
                bodyA.state.pos.vsub( mtv );

            } else {

                // extract bodies
                mtv.mult( 0.5 );
                bodyA.state.pos.vsub( mtv );
                bodyB.state.pos.vadd( mtv );
            }

            // inverse masses and moments of inertia.
            // give fixed bodies infinite mass and moi
            var invMoiA = fixedA ? 0 : 1 / bodyA.moi
                ,invMoiB = fixedB ? 0 : 1 / bodyB.moi
                ,invMassA = fixedA ? 0 : 1 / bodyA.mass
                ,invMassB = fixedB ? 0 : 1 / bodyB.mass
                // coefficient of restitution between bodies
                ,cor = contact ? 0 : bodyA.restitution * bodyB.restitution
                // coefficient of friction between bodies
                ,cof = bodyA.cof * bodyB.cof
                // normal vector
                ,n = scratch.vector().clone( normal )
                // vector perpendicular to n
                ,perp = scratch.vector().clone( n ).perp()
                // collision point from A's center
                ,rA = scratch.vector().clone( point )
                // collision point from B's center
                ,rB = scratch.vector().clone( point ).vadd( bodyA.state.pos ).vsub( bodyB.state.pos )
                ,tmp = scratch.vector()
                ,angVelA = bodyA.state.angular.vel
                ,angVelB = bodyB.state.angular.vel
                // relative velocity towards B at collision point
                ,vAB = scratch.vector().clone( bodyB.state.vel )
                        .vadd( tmp.clone(rB).perp().mult( angVelB ) )
                        .vsub( bodyA.state.vel )
                        .vsub( tmp.clone(rA).perp().mult( angVelA ) )
                // break up components along normal and perp-normal directions
                ,rAproj = rA.proj( n )
                ,rAreg = rA.proj( perp )
                ,rBproj = rB.proj( n )
                ,rBreg = rB.proj( perp )
                ,vproj = vAB.proj( n ) // projection of vAB along n
                ,vreg = vAB.proj( perp ) // rejection of vAB along n (perp of proj)
                ,impulse
                ,sign
                ,max
                ,inContact = false
                ;

            // if moving away from each other... don't bother.
            if (vproj >= 0){
                scratch.done();
                return;
            }

            impulse =  - ((1 + cor) * vproj) / ( invMassA + invMassB + (invMoiA * rAreg * rAreg) + (invMoiB * rBreg * rBreg) );
            // vproj += impulse * ( invMass + (invMoi * rreg * rreg) );
            // angVel -= impulse * rreg * invMoi;

            
            if ( fixedA ){

                // apply impulse
                bodyB.state.vel.vadd( n.mult( impulse * invMassB ) );
                bodyB.state.angular.vel -= impulse * invMoiB * rBreg;
                
            } else if ( fixedB ){

                // apply impulse
                bodyA.state.vel.vsub( n.mult( impulse * invMassA ) );
                bodyA.state.angular.vel += impulse * invMoiA * rAreg;

            } else {

                // apply impulse
                bodyB.state.vel.vadd( n.mult( impulse * invMassB ) );
                bodyB.state.angular.vel -= impulse * invMoiB * rBreg;
                bodyA.state.vel.vsub( n.mult( invMassA * bodyB.mass ) );
                bodyA.state.angular.vel += impulse * invMoiA * rAreg;
            }

            // inContact = (impulse < 0.004);
            
            // if we have friction and a relative velocity perpendicular to the normal
            if ( cof && vreg ){


                // TODO: here, we could first assume static friction applies
                // and that the tangential relative velocity is zero.
                // Then we could calculate the impulse and check if the
                // tangential impulse is less than that allowed by static
                // friction. If not, _then_ apply kinetic friction.

                // instead we're just applying kinetic friction and making
                // sure the impulse we apply is less than the maximum
                // allowed amount

                // maximum impulse allowed by kinetic friction
                max = vreg / ( invMassA + invMassB + (invMoiA * rAproj * rAproj) + (invMoiB * rBproj * rBproj) );

                if (!inContact){
                    // the sign of vreg ( plus or minus 1 )
                    sign = vreg < 0 ? -1 : 1;

                    // get impulse due to friction
                    impulse *= sign * cof;
                    // make sure the impulse isn't giving the system energy
                    impulse = (sign === 1) ? Math.min( impulse, max ) : Math.max( impulse, max );
                    
                } else {

                    impulse = max;
                }

                if ( fixedA ){

                    // apply frictional impulse
                    bodyB.state.vel.vsub( perp.mult( impulse * invMassB ) );
                    bodyB.state.angular.vel -= impulse * invMoiB * rBproj;
                    
                } else if ( fixedB ){

                    // apply frictional impulse
                    bodyA.state.vel.vadd( perp.mult( impulse * invMassA ) );
                    bodyA.state.angular.vel += impulse * invMoiA * rAproj;

                } else {

                    // apply frictional impulse
                    bodyB.state.vel.vsub( perp.mult( impulse * invMassB ) );
                    bodyB.state.angular.vel -= impulse * invMoiB * rBproj;
                    bodyA.state.vel.vadd( perp.mult( invMassA * bodyB.mass ) );
                    bodyA.state.angular.vel += impulse * invMoiA * rAproj;
                }  
            }

            scratch.done();
        },

        /**
         * Respond to collision event
         * @param  {Object} data Event data
         * @return {void}
         */
        respond: function( data ){

            var self = this
                ,col
                ,collisions = Physics.util.shuffle(data.collisions)
                ;

            for ( var i = 0, l = collisions.length; i < l; ++i ){
                
                col = collisions[ i ];
                self.collideBodies( 
                    col.bodyA,
                    col.bodyB,
                    col.norm,
                    col.pos,
                    col.mtv
                );
            }
        }
    };
});


// ---
// inside: src/behaviors/constant-acceleration.js

/**
 * Constant acceleration behavior
 * @module behaviors/constant-acceleration
 */
Physics.behavior('constant-acceleration', function( parent ){

    var defaults = {

        acc: { x : 0, y: 0.0004 }
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );

            // extend options
            this._acc = Physics.vector();
            this.setAcceleration( this.options.acc );
            delete this.options.acc;
        },

        /**
         * Set the acceleration of the behavior
         * @param {Vectorish} acc The acceleration vector
         * @return {self}
         */
        setAcceleration: function( acc ){

            this._acc.clone( acc );
            return this;
        },

        /**
         * Callback run on integrate:positions event
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = this.getTargets();

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                bodies[ i ].accelerate( this._acc );
            }
        }
    };
});

// ---
// inside: src/behaviors/edge-collision-detection.js

/**
 * Edge collision detection.
 * Used to detect collisions with the boundaries of an AABB
 * @module behaviors/edge-collision-detection
 */
Physics.behavior('edge-collision-detection', function( parent ){

    /**
     * Check if a body collides with the boundary
     * @param  {Object} body   The body to check
     * @param  {AABB} bounds The aabb representing the boundary
     * @param  {Object} dummy  Dummy body supplied to the collision event
     * @return {Object}        Collision data
     */
    var checkGeneral = function checkGeneral( body, bounds, dummy ){

        var overlap
            ,aabb = body.aabb()
            ,scratch = Physics.scratchpad()
            ,trans = scratch.transform()
            ,dir = scratch.vector()
            ,result = scratch.vector()
            ,collision = false
            ,collisions = []
            ;

        // right
        overlap = (aabb.pos.x + aabb.x) - bounds.max.x;

        if ( overlap >= 0 ){

            dir.set( 1, 0 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 1,
                    y: 0
                },
                mtv: {
                    x: overlap,
                    y: 0
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // bottom
        overlap = (aabb.pos.y + aabb.y) - bounds.max.y;

        if ( overlap >= 0 ){

            dir.set( 0, 1 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 0,
                    y: 1
                },
                mtv: {
                    x: 0,
                    y: overlap
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // left
        overlap = bounds.min.x - (aabb.pos.x - aabb.x);

        if ( overlap >= 0 ){

            dir.set( -1, 0 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: -1,
                    y: 0
                },
                mtv: {
                    x: -overlap,
                    y: 0
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        // top
        overlap = bounds.min.y - (aabb.pos.y - aabb.y);

        if ( overlap >= 0 ){

            dir.set( 0, -1 ).rotateInv( trans.setRotation( body.state.angular.pos ) );

            collision = {
                bodyA: body,
                bodyB: dummy,
                overlap: overlap,
                norm: {
                    x: 0,
                    y: -1
                },
                mtv: {
                    x: 0,
                    y: -overlap
                },
                pos: body.geometry.getFarthestHullPoint( dir, result ).rotate( trans ).values()
            };

            collisions.push(collision);
        }

        scratch.done();
        return collisions;
    };

    /**
     * Check if a body collides with the boundary
     * @param  {Object} body   The body to check
     * @param  {AABB} bounds The aabb representing the boundary
     * @param  {Object} dummy  Dummy body supplied to the collision event
     * @return {Object}        Collision data
     */
    var checkEdgeCollide = function checkEdgeCollide( body, bounds, dummy ){

        return checkGeneral( body, bounds, dummy );
    };

    var defaults = {

        aabb: null,
        restitution: 0.99,
        cof: 1.0,
        channel: 'collisions:detected'
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );

            this.setAABB( this.options.aabb );
            this.restitution = this.options.restitution;
            
            this._dummy = Physics.body('_dummy', function(){}, { 
                fixed: true,
                restitution: this.options.restitution,
                cof: this.options.cof
            });
        },

        /**
         * Set the boundaries of the edge
         * @param {AABB} aabb The aabb of the boundary
         * @return {void}
         */
        setAABB: function( aabb ){

            if (!aabb) {
                throw 'Error: aabb not set';
            }

            aabb = aabb.get && aabb.get() || aabb;

            this._edges = {
                min: {
                    x: (aabb.pos.x - aabb.x),
                    y: (aabb.pos.y - aabb.y)
                },
                max: {
                    x: (aabb.pos.x + aabb.x),
                    y: (aabb.pos.y + aabb.y)  
                }
            };
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.on( 'integrate:velocities', this.checkAll, this );
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off( 'integrate:velocities', this.checkAll );
        },

        /**
         * Check all bodies for collisions with the edge
         * @param  {Object} data Event data
         * @return {void}
         */
        checkAll: function( data ){
            
            var bodies = this.getTargets()
                ,dt = data.dt
                ,body
                ,collisions = []
                ,ret
                ,bounds = this._edges
                ,dummy = this._dummy
                ;

            for ( var i = 0, l = bodies.length; i < l; i++ ){

                body = bodies[ i ];

                // don't detect fixed bodies
                if ( !body.fixed ){
                    
                    ret = checkEdgeCollide( body, bounds, dummy );

                    if ( ret ){
                        collisions.push.apply( collisions, ret );
                    }
                }
            }

            if ( collisions.length ){

                this._world.emit( this.options.channel, {
                    collisions: collisions
                });
            }
        }
    };

});

// ---
// inside: src/behaviors/interactive.js

Physics.behavior('interactive', function( parent ){

    if ( !document ){
        // must be in node environment
        return {};
    }

    var defaults = {
            // the element to monitor
            el: null,
            // minimum velocity clamp
            minVel: { x: -1, y: -1 },
            // maximum velocity clamp
            maxVel: { x: 1, y: 1 }
        }
        ,getElementOffset = function( el ){
            var curleft = 0
                ,curtop = 0
                ;

            if (el.offsetParent) {
                do {
                    curleft += el.offsetLeft;
                    curtop += el.offsetTop;
                } while (el = el.offsetParent);
            }

            return { left: curleft, top: curtop };
        }
        ,getCoords = function( e ){
            var offset = getElementOffset( e.target )
                ,obj = ( e.changedTouches && e.changedTouches[0] ) || e
                ,x = obj.pageX - offset.left
                ,y = obj.pageY - offset.top
                ;

            return {
                x: x
                ,y: y
            };
        }
        ;

    return {
        /**
         * Initialize mouse events
         * @return {[type]} [description]
         */
        init: function( options ){
            
            var self = this;

            // call parent init method
            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );

            // vars
            this.mousePos = new Physics.vector();
            this.mousePosOld = new Physics.vector();
            this.offset = new Physics.vector();

            this.el = typeof this.options.el === 'string' ? document.getElementById(this.options.el) : this.options.el

            if ( !this.el ){
                throw "No DOM element specified";
            }

            // init events
            function grab( e ){
                var pos = getCoords( e )
                    ,body
                    ;

                if ( self._world ){
                    body = self._world.findOne({ $at: new Physics.vector( pos.x, pos.y ) });

                    if ( body ){
                        // we're trying to grab a body

                        // fix the body in place
                        body.fixed = true;
                        // remember the currently grabbed body
                        self.body = body;
                        // remember the mouse offset
                        self.offset.clone( self.mousePos ).vsub( body.state.pos );

                        pos.body = body;
                        self._world.emit('interact:grab', pos);

                    } else {
                        
                        self._world.emit('interact:poke', pos);
                    }
                }
            }

            function move( e ){
                var pos = getCoords( e )
                    ;

                self.mousePosOld.clone( self.mousePos );
                // get new mouse position
                self.mousePos.set(pos.x, pos.y);
            }

            function release( e ){
                var pos = getCoords( e )
                    ,body
                    ;

                if ( self._world ){

                    // release the body
                    if (self.body){
                        self.body.fixed = false;
                        self.body = false;
                    }

                    self._world.emit('interact:release', pos);
                }
            }

            this.el.addEventListener('mousedown', grab);
            this.el.addEventListener('touchstart', grab);

            this.el.addEventListener('mousemove', move);
            this.el.addEventListener('touchmove', move);

            this.el.addEventListener('mouseup', release);
            this.el.addEventListener('touchend', release);
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            // subscribe the .behave() method to the position integration step
            world.on('integrate:positions', this.behave, this);
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            // unsubscribe when disconnected
            world.off('integrate:positions', this.behave);
        },

        behave: function(){

            var self = this
                ,state
                ;

            if ( self.body ){

                // if we have a body, we need to move it the the new mouse position.
                // we'll also track the velocity of the mouse movement so that when it's released
                // the body can be "thrown"
                state = self.body.state;
                state.pos.clone( self.mousePos ).vsub( self.offset );
                state.vel.clone( self.body.state.pos ).vsub( self.mousePosOld ).vadd( self.offset ).mult( 1 / 30 );
                state.vel.clamp( self.options.minVel, self.options.maxVel );
            }
        }
    };
});


// ---
// inside: src/behaviors/newtonian.js

/**
 * Newtonian attraction between bodies (inverse square law)
 * @module behaviors/newtonian
 */
Physics.behavior('newtonian', function( parent ){

    var defaults = {

        strength: 1,
        // max distance to apply it to
        max: false, // infinite
        // min distance to apply it to
        min: false // auto calc
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            var self = this;
            // call parent init method
            parent.init.call( this );
            this.options.defaults( defaults );
            this.options.onChange(function( opts ){
                self._maxDistSq = opts.max === false ? Infinity : opts.max * opts.max;
                self._minDistSq = opts.min ? opts.min * opts.min : 100 * opts.strength;
            });
            this.options( options );
        },
        
        /**
         * Apply newtonian acceleration between all bodies
         * @param  {Object} data Event data
         * @return {void}
         */
        behave: function( data ){

            var bodies = this.getTargets()
                ,body
                ,other
                ,strength = this.options.strength
                ,minDistSq = this._minDistSq
                ,maxDistSq = this._maxDistSq
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,normsq
                ,g
                ;

            for ( var j = 0, l = bodies.length; j < l; j++ ){
                
                body = bodies[ j ];

                for ( var i = j + 1; i < l; i++ ){
                    
                    other = bodies[ i ];
                    // clone the position
                    pos.clone( other.state.pos );
                    pos.vsub( body.state.pos );
                    // get the square distance
                    normsq = pos.normSq();

                    if (normsq > minDistSq && normsq < maxDistSq){

                        g = strength / normsq;

                        body.accelerate( pos.normalize().mult( g * other.mass ) );
                        other.accelerate( pos.mult( body.mass/other.mass ).negate() );
                    }
                }
            }

            scratch.done();
        }
    };
});


// ---
// inside: src/behaviors/rigid-constraint-manager.js

/**
 * Rigid constraints manager.
 * Handles distance constraints
 * @module behaviors/rigid-constraint-manager
 */
Physics.behavior('rigid-constraint-manager', function( parent ){

    var defaults = {

        // set a default target length
        targetLength: 20
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );

            this._constraints = [];
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            var intg = world.integrator();

            if ( intg && intg.name.indexOf('verlet') < 0 ){

                throw 'The rigid constraint manager needs a world with a "verlet" compatible integrator.';
            }

            world.on('integrate:positions', this.resolve, this);
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off('integrate:positions', this.resolve);
        },

        /**
         * Remove all constraints
         * @return {self}
         */
        drop: function(){

            // drop the current constraints
            this._constraints = [];
            return this;
        },

        /**
         * Constrain two bodies to a target relative distance
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        constrain: function( bodyA, bodyB, targetLength ){

            var cst;

            if (!bodyA || !bodyB){

                return false;
            }

            this._constraints.push(cst = {
                id: Physics.util.uniqueId('rigid-constraint'),
                bodyA: bodyA,
                bodyB: bodyB,
                targetLength: targetLength || this.options.targetLength
            });

            return cst;
        },

        /**
         * Remove a constraint
         * @param  {Mixed} indexCstrOrId Either the constraint object, the constraint id, or the numeric index of the constraint
         * @return {self}
         */
        remove: function( indexCstrOrId ){

            var constraints = this._constraints
                ,isObj
                ;

            if (typeof indexCstrOrId === 'number'){

                constraints.splice( indexCstrOrId, 1 );
                return this;   
            }

            isObj = Physics.util.isObject( indexCstrOrId );
            
            for ( var i = 0, l = constraints.length; i < l; ++i ){
                
                if ( (isObj && constraints[ i ] === indexCstrOrId) ||
                    ( !isObj && constraints[ i ].id === indexCstrOrId) ){

                    constraints.splice( i, 1 );
                    return this;
                }
            }

            return this;
        },

        /**
         * Resolve constraints
         * @return {void}
         */
        resolve: function(){

            var constraints = this._constraints
                ,scratch = Physics.scratchpad()
                ,A = scratch.vector()
                ,BA = scratch.vector()
                ,con
                ,len
                ,corr
                ,proportion
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                // move constrained bodies to target length based on their
                // mass proportions
                A.clone( con.bodyA.state.pos );
                BA.clone( con.bodyB.state.pos ).vsub( A );
                len = BA.norm();
                corr = ( len - con.targetLength ) / len;
                
                BA.mult( corr );
                proportion = con.bodyB.mass / (con.bodyA.mass + con.bodyB.mass);

                if ( !con.bodyA.fixed ){

                    BA.mult( proportion );
                    con.bodyA.state.pos.vadd( BA );
                    BA.mult( 1 / proportion );
                }

                if ( !con.bodyB.fixed ){

                    BA.mult( 1 - proportion );
                    con.bodyB.state.pos.vsub( BA );
                }
            }

            scratch.done();
        },

        /**
         * Get an array of all constraints
         * @return {Array} The array of constraint objects
         */
        getConstraints: function(){

            return [].concat(this._constraints);
        }
    };
});


// ---
// inside: src/behaviors/sweep-prune.js

/**
 * Sweep and Prune implementation for broad phase collision detection
 * @module behaviors/sweep-prune
 */
Physics.behavior('sweep-prune', function( parent ){

    var uid = 1;

    /**
     * Get a unique numeric id for internal use
     * @return {Number} Unique id
     */
    var getUniqueId = function getUniqueId(){

        return uid++;
    };

    // add z: 2 to get this to work in 3D
    var dof = { x: 0, y: 1 }; // degrees of freedom

    /**
     * return hash for a pair of ids
     * @param  {Number} id1 First id
     * @param  {Number} id2 Second id
     * @return {Number}     Hash id
     */
    function pairHash( id1, id2 ){

        if ( id1 === id2 ){

            return false;
        }

        // valid for values < 2^16
        return id1 > id2? 
            (id1 << 16) | (id2 & 0xFFFF) : 
            (id2 << 16) | (id1 & 0xFFFF)
            ;
    }
    
    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults({
                channel: 'collisions:candidates' //default channel
            });
            this.options( options );

            this.clear();
        },

        /**
         * Refresh tracking data
         * @return {void}
         */
        clear: function(){

            this.tracked = [];
            this.pairs = []; // pairs selected as candidate collisions by broad phase
            this.intervalLists = {}; // stores lists of aabb projection intervals to be sorted
            
            // init intervalLists
            for ( var xyz in dof ){

                this.intervalLists[ xyz ] = [];
            }
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.on( 'add:body', this.trackBody, this );
            world.on( 'remove:body', this.untrackBody, this );
            world.on( 'integrate:velocities', this.sweep, this );

            // add current bodies
            var bodies = world.getBodies();
            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                this.trackBody({ body: bodies[ i ] });
            }
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off( 'add:body', this.trackBody );
            world.off( 'remove:body', this.untrackBody );
            world.off( 'integrate:velocities', this.sweep );
            this.clear();
        },

        /**
         * Execute the broad phase and get candidate collisions
         * @return {Array} List of candidates
         */
        broadPhase: function(){

            this.updateIntervals();
            this.sortIntervalLists();
            return this.checkOverlaps();
        },

        /**
         * Simple insertion sort for each axis
         * @return {void}
         */
        sortIntervalLists: function(){

            var list
                ,len
                ,i
                ,hole
                ,bound
                ,boundVal
                ,left
                ,leftVal
                ,axis
                ;

            // for each axis...
            for ( var xyz in dof ){

                // get the intervals for that axis
                list = this.intervalLists[ xyz ];
                i = 0;
                len = list.length;
                axis = dof[ xyz ];

                // for each interval bound...
                while ( (++i) < len ){

                    // store bound
                    bound = list[ i ];
                    boundVal = bound.val.get( axis );
                    hole = i;

                    left = list[ hole - 1 ];
                    leftVal = left && left.val.get( axis );

                    // while others are greater than bound...
                    while ( 
                        hole > 0 && 
                        (
                            leftVal > boundVal ||
                            // if it's an equality, only move it over if 
                            // the hole was created by a minimum
                            // and the previous is a maximum
                            // so that we detect contacts also
                            leftVal === boundVal &&
                            ( left.type && !bound.type )
                        )
                    ) {

                        // move others greater than bound to the right
                        list[ hole ] = left;
                        hole--;
                        left = list[ hole - 1 ];
                        leftVal = left && left.val.get( axis );
                    }

                    // insert bound in the hole
                    list[ hole ] = bound;
                }
            }
        },

        /**
         * Get a pair object for the tracker objects
         * @param  {Object} tr1      First tracker
         * @param  {Object} tr2      Second tracker
         * @param  {Boolean} doCreate Create if not already found
         * @return {Mixed}          Pair object or null if not found
         */
        getPair: function(tr1, tr2, doCreate){

            var hash = pairHash( tr1.id, tr2.id );

            if ( hash === false ){
                return null;
            }

            var c = this.pairs[ hash ];

            if ( !c ){

                if ( !doCreate ){
                    return null;
                }

                c = this.pairs[ hash ] = {
                    bodyA: tr1.body,
                    bodyB: tr2.body,
                    flag: 0
                };
            }

            return c;
        },

        /**
         * Check each axis for overlaps of bodies AABBs
         * @return {Array} List of candidate collisions 
         */
        checkOverlaps: function(){

            var isX
                ,hash
                ,tr1
                ,tr2
                ,bound
                ,list
                ,len
                ,i
                ,j
                ,c
                // determine which axis is the last we need to check
                ,collisionFlag = ( dof.z || dof.y || dof.x )
                ,encounters = []
                ,enclen = 0
                ,candidates = []
                ;

            for ( var xyz in dof ){

                // is the x coord
                isX = (xyz === 'x');
                // get the interval list for this axis
                list = this.intervalLists[ xyz ];
                i = -1;
                len = list.length;

                // for each interval bound
                while ( (++i) < len ){
                    
                    bound = list[ i ];
                    tr1 = bound.tracker;

                    if ( bound.type ){

                        // is a max

                        j = enclen;

                        while ( (--j) >= 0 ){

                            tr2 = encounters[ j ];

                            // if they are the same tracked interval
                            if ( tr2 === tr1 ){

                                // remove the interval from the encounters list
                                // faster than .splice()
                                if ( j < enclen - 1 ) {
                                    
                                    encounters[ j ] = encounters.pop();

                                } else {

                                    // encountered a max right after a min... no overlap
                                    encounters.pop();
                                }

                                enclen--;

                            } else {

                                // check if we have flagged this pair before
                                // if it's the x axis, create a pair
                                c = this.getPair( tr1, tr2, isX );

                                if ( c ){
                                    
                                    // if it's the x axis, set the flag
                                    // to = 1.
                                    // if not, increment the flag by one.
                                    c.flag = isX? 0 : c.flag + 1;

                                    // c.flag will equal collisionFlag 
                                    // if we've incremented the flag
                                    // enough that all axes are overlapping
                                    if ( c.flag === collisionFlag ){

                                        // overlaps on all axes.
                                        // add it to possible collision
                                        // candidates list for narrow phase

                                        candidates.push( c );
                                    }
                                }
                            }
                        }

                    } else {

                        // is a min
                        // just add this minimum to the encounters list
                        enclen = encounters.push( tr1 );
                    }
                }
            }

            return candidates;
        },

        /**
         * Update position intervals on each axis
         * @return {[type]} [description]
         */
        updateIntervals: function(){

            var tr
                ,intr
                ,scratch = Physics.scratchpad()
                ,pos = scratch.vector()
                ,aabb = scratch.vector()
                ,list = this.tracked
                ,i = list.length
                ;

            // for all tracked bodies
            while ( (--i) >= 0 ){

                tr = list[ i ];
                intr = tr.interval;
                pos.clone( tr.body.state.pos );
                aabb.clone( tr.body.aabb() );

                // copy the position (plus or minus) the aabb bounds
                // into the min/max intervals
                intr.min.val.clone( pos ).vsub( aabb );
                intr.max.val.clone( pos ).vadd( aabb );
            }

            scratch.done();
        },

        /**
         * Add body to list of those tracked by sweep and prune
         * @param  {Object} data Event data
         * @return {void}
         */
        trackBody: function( data ){

            var body = data.body
                ,tracker = {

                    id: getUniqueId(),
                    body: body
                }
                ,intr = {

                    min: {
                        type: false, //min
                        val: Physics.vector(),
                        tracker: tracker
                    },

                    max: {
                        type: true, //max
                        val: Physics.vector(),
                        tracker: tracker
                    }
                }
                ;

            tracker.interval = intr;
            this.tracked.push( tracker );
            
            for ( var xyz in dof ){

                this.intervalLists[ xyz ].push( intr.min, intr.max );
            }
        },

        /**
         * Remove body from list of those tracked
         * @param  {Object} data Event data
         * @return {void}
         */
        untrackBody: function( data ){

            var body = data.body
                ,list
                ,minmax
                ,trackedList = this.tracked
                ,tracker
                ,count
                ;

            for ( var i = 0, l = trackedList.length; i < l; ++i ){

                tracker = trackedList[ i ];
                
                if ( tracker.body === body ){

                    // remove the tracker at this index
                    trackedList.splice(i, 1);

                    for ( var xyz in dof ){

                        count = 0;
                        list = this.intervalLists[ xyz ];

                        for ( var j = 0, m = list.length; j < m; ++j ){
                                
                            minmax = list[ j ];

                            if ( minmax === tracker.interval.min || minmax === tracker.interval.max ){

                                // remove interval from list
                                list.splice(j, 1);
                                j--;
                                l--;

                                if (count > 0){
                                    break;
                                }

                                count++;
                            }
                        }
                    }

                    break;
                }
            }            
        },

        /**
         * Sweep and publish event if any candidate collisions are found
         * @param  {Object} data Event data
         * @return {void}
         */
        sweep: function( data ){

            var self = this
                ,candidates
                ;

            candidates = self.broadPhase();
            
            if ( candidates.length ){

                this._world.emit( this.options.channel, {
                    candidates: candidates
                });
            }
        }
    };
});

// ---
// inside: src/behaviors/verlet-constraints.js

/**
 * Verlet constraints manager.
 * Handles distance constraints, and angle constraints
 * @module behaviors/rigid-constraint-manager
 */
Physics.behavior('verlet-constraints', function( parent ){

    var TWOPI = 2 * Math.PI;

    var defaults = {

        // number of iterations to resolve constraints
        iterations: 2
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration object
         * @return {void}
         */
        init: function( options ){

            parent.init.call( this );
            this.options.defaults( defaults );
            this.options( options );

            this._distanceConstraints = [];
            this._angleConstraints = [];
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            var intg = world.integrator();

            if ( intg && intg.name.indexOf('verlet') < 0 ){

                throw 'The rigid constraint manager needs a world with a "verlet" compatible integrator.';
            }

            world.on('integrate:positions', this.resolve, this);
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off('integrate:positions', this.resolve);
        },

        /**
         * Remove all constraints
         * @return {self}
         */
        drop: function(){

            // drop the current constraints
            this._distanceConstraints = [];
            this._angleConstraints = [];
            return this;
        },

        /**
         * Constrain two bodies to a target relative distance
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        distanceConstraint: function( bodyA, bodyB, stiffness, targetLength ){

            var cst;

            if (!bodyA || !bodyB){

                return false;
            }

            cst = {
                id: Physics.util.uniqueId('dis-constraint'),
                type: 'dis',
                bodyA: bodyA,
                bodyB: bodyB,
                stiffness: stiffness || 0.5,
                targetLength: targetLength || bodyB.state.pos.dist( bodyA.state.pos )
            };

            cst.targetLengthSq = cst.targetLength * cst.targetLength;

            this._distanceConstraints.push( cst );
            return cst;
        },

        /**
         * Constrain three bodies to a target relative angle
         * @param  {Object} bodyA        First body
         * @param  {Object} bodyB        Second body
         * @param  {Object} bodyC        Third body
         * @param  {Number} targetLength (optional) Target length. defaults to target length specified in configuration options
         * @return {object}              The constraint object, which holds .bodyA and .bodyB references to the bodies, .id the string ID of the constraint, .targetLength the target length
         */
        angleConstraint: function( bodyA, bodyB, bodyC, stiffness, targetAngle ){

            var cst;

            if (!bodyA || !bodyB){

                return false;
            }

            cst = {
                id: Physics.util.uniqueId('ang-constraint'),
                type: 'ang',
                bodyA: bodyA,
                bodyB: bodyB,
                bodyC: bodyC,
                stiffness: stiffness || 0.5,
                targetAngle: targetAngle || bodyB.state.pos.angle2( bodyA.state.pos, bodyC.state.pos )
            };

            this._angleConstraints.push( cst );
            return cst;
        },

        /**
         * Remove a constraint
         * @param  {Mixed} indexCstrOrId Either the constraint object or the constraint id
         * @return {self}
         */
        remove: function( cstrOrId ){

            var constraints
                ,type
                ,isObj
                ,i
                ,l
                ;

            isObj = Physics.util.isObject( cstrOrId );

            type = (isObj) ? cstrOrId.type : cstrOrId.substr(0, 3);
            constraints = ( type === 'ang' ) ? this._angleConstraints : this._distanceConstraints;

            if ( isObj ){

                for ( i = 0, l = constraints.length; i < l; ++i ){
                    
                    if ( constraints[ i ] === cstrOrId ){

                        constraints.splice( i, 1 );
                        return this;
                    }
                }
            } else {

                for ( i = 0, l = constraints.length; i < l; ++i ){
                    
                    if ( constraints[ i ].id === cstrOrId ){

                        constraints.splice( i, 1 );
                        return this;
                    }
                }
            }

            return this;
        },

        resolveAngleConstraints: function( coef ){

            var constraints = this._angleConstraints
                ,scratch = Physics.scratchpad()
                ,trans = scratch.transform()
                ,con
                ,ang
                ,corr
                ,proportion
                ,invMassSum
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                ang = con.bodyB.state.pos.angle2( con.bodyA.state.pos, con.bodyC.state.pos );
                corr = ang - con.targetAngle;

                if (!corr){

                    continue;

                } else if (corr <= -Math.PI){
                
                    corr += TWOPI;

                } else if (corr >= Math.PI){
                
                    corr -= TWOPI;
                }

                trans.setTranslation( con.bodyB.state.pos );

                corr *= -coef * con.stiffness;

                if ( !con.bodyA.fixed && !con.bodyB.fixed && !con.bodyC.fixed ){
                    invMassSum = 1 / (con.bodyA.mass + con.bodyB.mass + con.bodyC.mass);
                }

                if ( !con.bodyA.fixed ){

                    if ( !con.bodyB.fixed && !con.bodyC.fixed ){
                        
                        ang = corr * (con.bodyB.mass + con.bodyC.mass) * invMassSum;

                    } else if ( con.bodyB.fixed ){

                        ang = corr * con.bodyC.mass / ( con.bodyC.mass + con.bodyA.mass );

                    } else {

                        ang = corr * con.bodyB.mass / ( con.bodyB.mass + con.bodyA.mass );
                    }

                    // ang = corr;

                    trans.setRotation( ang );
                    con.bodyA.state.pos.translateInv( trans );
                    con.bodyA.state.pos.rotate( trans );
                    con.bodyA.state.pos.translate( trans );
                }

                if ( !con.bodyC.fixed ){

                    if ( !con.bodyA.fixed && !con.bodyB.fixed ){
                        
                        ang = -corr * (con.bodyB.mass + con.bodyA.mass) * invMassSum;

                    } else if ( con.bodyB.fixed ){

                        ang = -corr * con.bodyA.mass / ( con.bodyC.mass + con.bodyA.mass );
                        
                    } else {

                        ang = -corr * con.bodyB.mass / ( con.bodyB.mass + con.bodyC.mass );
                    }

                    // ang = -corr;

                    trans.setRotation( ang );
                    con.bodyC.state.pos.translateInv( trans );
                    con.bodyC.state.pos.rotate( trans );
                    con.bodyC.state.pos.translate( trans );
                }

                if ( !con.bodyB.fixed ){

                    if ( !con.bodyA.fixed && !con.bodyC.fixed ){
                        
                        ang = corr * (con.bodyA.mass + con.bodyC.mass) * invMassSum;

                    } else if ( con.bodyA.fixed ){

                        ang = corr * con.bodyC.mass / ( con.bodyC.mass + con.bodyB.mass );
                        
                    } else {

                        ang = corr * con.bodyA.mass / ( con.bodyA.mass + con.bodyC.mass );
                    }

                    // ang = corr;

                    trans.setRotation( ang ).setTranslation( con.bodyA.state.pos );
                    con.bodyB.state.pos.translateInv( trans );
                    con.bodyB.state.pos.rotate( trans );
                    con.bodyB.state.pos.translate( trans );

                    trans.setTranslation( con.bodyC.state.pos );
                    con.bodyB.state.pos.translateInv( trans );
                    con.bodyB.state.pos.rotateInv( trans );
                    con.bodyB.state.pos.translate( trans );
                }
            }

            scratch.done();
        },

        resolveDistanceConstraints: function( coef ){

            var constraints = this._distanceConstraints
                ,scratch = Physics.scratchpad()
                ,BA = scratch.vector()
                ,con
                ,len
                ,corr
                ,proportion
                ;

            for ( var i = 0, l = constraints.length; i < l; ++i ){
            
                con = constraints[ i ];

                // move constrained bodies to target length based on their
                // mass proportions
                BA.clone( con.bodyB.state.pos ).vsub( con.bodyA.state.pos );
                len = BA.normSq() || Math.random() * 0.0001;
                corr = coef * con.stiffness * ( len - con.targetLengthSq ) / len;
                
                BA.mult( corr );
                proportion = (con.bodyA.fixed || con.bodyB.fixed) ? 1 : con.bodyB.mass / (con.bodyA.mass + con.bodyB.mass);

                if ( !con.bodyA.fixed ){

                    if ( !con.bodyB.fixed ){
                        BA.mult( proportion );
                    }

                    con.bodyA.state.pos.vadd( BA );

                    if ( !con.bodyB.fixed ){
                        BA.mult( 1 / proportion );
                    }
                }

                if ( !con.bodyB.fixed ){

                    if ( !con.bodyA.fixed ){
                        BA.mult( 1 - proportion );
                    }

                    con.bodyB.state.pos.vsub( BA );
                }
            }

            scratch.done();
        },

        shuffleConstraints: function(){

            this._distanceConstraints = Physics.util.shuffle( this._distanceConstraints );
            this._angleConstraints = Physics.util.shuffle( this._angleConstraints );
        },

        /**
         * Resolve constraints
         * @return {void}
         */
        resolve: function(){

            var its = this.options.iterations
                ,coef = 1 / its
                ;

            for (var i = 0; i < its; i++){

                // this.shuffleConstraints();
                this.resolveDistanceConstraints( coef );
                this.resolveAngleConstraints( coef );
            }
        },

        /**
         * Get all constraints
         * @return {Object} The object containing copied arrays of the constraints
         */
        getConstraints: function(){

            return {
                distanceConstraints: [].concat(this._distanceConstraints),
                angleConstraints: [].concat(this._angleConstraints)
            };
        }
    };
});


// ---
// inside: src/integrators/improved-euler.js

Physics.integrator('improved-euler', function( parent ){

    return {

        /**
         * Initialization
         * @param  {Object} options Configuration options
         * @return {void}
         */
        init: function( options ){

            // call parent init
            parent.init.call(this, options);
        },

        /**
         * Velocity integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integrateVelocities: function( bodies, dt ){

            // half the timestep squared
            var drag = 1 - this.options.drag
                ,body = null
                ,state
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){

                    // Inspired from https://github.com/soulwire/Coffee-Physics
                    // @licence MIT
                    // 
                    // x += (v * dt) + (a * 0.5 * dt * dt)
                    // v += a * dt

                    
                    // Scale force to mass.
                    // state.acc.mult( body.massInv );

                    // Remember velocity for future use.
                    state.old.vel.clone( state.vel );

                    // remember original acc
                    state.old.acc.clone( state.acc );

                    // Update velocity first so we can reuse the acc vector.
                    // a *= dt
                    // v += a ...
                    state.vel.vadd( state.acc.mult( dt ) );

                    // Apply "air resistance".
                    if ( drag ){

                        state.vel.mult( drag );
                    }

                    // Reset accel
                    state.acc.zero();

                    //
                    // Angular components
                    // 

                    state.old.angular.vel = state.angular.vel;
                    state.angular.vel += state.angular.acc * dt;
                    state.angular.acc = 0;

                } else {
                    // set the velocity and acceleration to zero!
                    state.vel.zero();
                    state.acc.zero();
                    state.angular.vel = 0;
                    state.angular.acc = 0;
                }
            }
        },

        /**
         * Position integration
         * @param  {Array} bodies Array of bodies to integrate
         * @param  {Number} dt     Timestep size
         * @return {void}
         */
        integratePositions: function( bodies, dt ){

            // half the timestep squared
            var halfdtdt = 0.5 * dt * dt
                ,body = null
                ,state
                // use cached vector instances
                // so we don't need to recreate them in a loop
                ,scratch = Physics.scratchpad()
                ,vel = scratch.vector()
                ,angVel
                ;

            for ( var i = 0, l = bodies.length; i < l; ++i ){

                body = bodies[ i ];
                state = body.state;

                // only integrate if the body isn't fixed
                if ( !body.fixed ){


                    // Store previous location.
                    state.old.pos.clone( state.pos );

                    // Update position.
                    // ...
                    // oldV *= dt
                    // a *= 0.5 * dt
                    // x += oldV + a
                    vel.clone( state.old.vel );
                    state.pos.vadd( vel.mult( dt ) ).vadd( state.old.acc.mult( halfdtdt ) );

                    state.old.acc.zero();

                    //
                    // Angular components
                    // 

                    state.old.angular.pos = state.angular.pos;
                    state.angular.pos += state.old.angular.vel * dt + state.old.angular.acc * halfdtdt;
                    state.old.angular.acc = 0;

                }
            }

            scratch.done();
        }
    };
});



// ---
// inside: src/renderers/canvas.js

/**
 * A simple canvas renderer.
 * Renders circles and convex-polygons
 * @module renderers/canvas
 */
Physics.renderer('canvas', function( proto ){

    if ( !document ){
        // must be in node environment
        return {};
    }

    var Pi2 = Math.PI * 2
        // helper to create new dom elements
        ,newEl = function( node, content ){
            var el = document.createElement(node || 'div');
            if (content){
                el.innerHTML = content;
            }
            return el;
        }
        ;

    var defaults = {

        // draw aabbs of bodies for debugging
        debug: false,
        // the element to place meta data into
        metaEl: null,
        // default styles of drawn objects
        styles: {

            'point' : 'rgba(80, 50, 100, 0.7)',

            'circle' : {
                strokeStyle: 'rgba(70, 50, 100, 0.7)',
                lineWidth: 1,
                fillStyle: 'rgba(44, 105, 44, 0.7)',
                angleIndicator: 'rgba(69, 51, 78, 0.7)'
            },

            'convex-polygon' : {
                strokeStyle: 'rgba(80, 50, 100, 0.7)',
                lineWidth: 1,
                fillStyle: 'rgba(114, 105, 124, 0.7)',
                angleIndicator: 'rgba(69, 51, 78, 0.7)'
            }
        },
        offset: {x: 0, y: 0}
    };

    // deep copy callback to extend deeper into options
    var deep = function( a, b ){

        if ( Physics.util.isPlainObject( b ) ){

            return Physics.util.extend({}, a, b, deep );
        }

        return b !== undefined ? b : a;
    };

    return {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            var self = this;

            // call proto init
            proto.init.call(this, options);

            // further options
            this.options = Physics.util.extend({}, defaults, this.options, deep);
            this.options.offset = Physics.vector( this.options.offset );


            // hidden canvas
            this.hiddenCanvas = document.createElement('canvas');
            this.hiddenCanvas.width = this.hiddenCanvas.height = 100;
            
            if (!this.hiddenCanvas.getContext){
                throw "Canvas not supported";
            }

            this.hiddenCtx = this.hiddenCanvas.getContext('2d');

            // actual viewport
            var viewport = this.el;
            if (viewport.nodeName.toUpperCase() !== "CANVAS"){

                viewport = document.createElement('canvas');
                this.el.appendChild( viewport );
                if (typeof this.options.el === 'string' && this.el === document.body){
                    viewport.id = this.options.el;
                }
                this.el = viewport;
            }

            viewport.width = this.options.width;
            viewport.height = this.options.height;

            this.ctx = viewport.getContext("2d");

            this.els = {};

            if (this.options.meta){
                var stats = this.options.metaEl || newEl();
                stats.className = 'pjs-meta';
                this.els.fps = newEl('span');
                this.els.ipf = newEl('span');
                stats.appendChild(newEl('span', 'fps: '));
                stats.appendChild(this.els.fps);
                stats.appendChild(newEl('br'));
                stats.appendChild(newEl('span', 'ipf: '));
                stats.appendChild(this.els.ipf);

                viewport.parentNode.insertBefore(stats, viewport);
            }
        },

        /**
         * Set the styles of specified context
         * @param {Object|String} styles Styles configuration for body drawing
         * @param {Canvas2DContext} ctx    (optional) Defaults to visible canvas context
         */
        setStyle: function( styles, ctx ){

            ctx = ctx || this.ctx;

            if ( Physics.util.isObject(styles) ){

                ctx.lineWidth = styles.lineWidth;
                ctx.strokeStyle = styles.lineWidth ? styles.strokeStyle : 'rgba(0,0,0,0)';
                ctx.fillStyle = styles.fillStyle;

            } else {

                ctx.fillStyle = ctx.strokeStyle = styles;
                ctx.lineWidth = 1;
            }
        },

        /**
         * Draw a circle to specified canvas context
         * @param  {Number} x      The x coord
         * @param  {Number} y      The y coord
         * @param  {Number} r      The circle radius
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawCircle: function(x, y, r, styles, ctx){

            ctx = ctx || this.ctx;

            ctx.beginPath();
            this.setStyle( styles, ctx );
            ctx.arc(x, y, r, 0, Pi2, false);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        },

        /**
         * Draw a polygon to specified canvas context
         * @param  {Array} verts  Array of vectorish vertices
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawPolygon: function(verts, styles, ctx){

            var vert = verts[0]
                ,x = vert.x === undefined ? vert.get(0) : vert.x
                ,y = vert.y === undefined ? vert.get(1) : vert.y
                ,l = verts.length
                ;

            ctx = ctx || this.ctx;
            ctx.beginPath();
            this.setStyle( styles, ctx );

            ctx.moveTo(x, y);

            for ( var i = 1; i < l; ++i ){
                
                vert = verts[ i ];
                x = vert.x === undefined ? vert.get(0) : vert.x;
                y = vert.y === undefined ? vert.get(1) : vert.y;
                ctx.lineTo(x, y);
            }

            if (l > 2){
                ctx.closePath();
            }

            ctx.stroke();
            ctx.fill();
        },

        /**
         * Draw a rectangle to specified canvas context
         * @param  {Number} x      The x coord
         * @param  {Number} y      The y coord
         * @param  {Number} width  Width of the rectangle
         * @param  {Number} height Height of the rectangle
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawRect: function(x, y, width, height, styles, ctx){

            var hw = width * 0.5
                ,hh = height * 0.5
                ;

            ctx = ctx || this.ctx;
            this.setStyle( styles, ctx );
            ctx.beginPath();
            ctx.rect(x - hw, y - hh, width, height);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        },

        /**
         * Draw a line onto specified canvas context
         * @param  {Vectorish} from   Starting point
         * @param  {Vectorish} to     Ending point
         * @param  {Object|String} styles The styles configuration
         * @param  {Canvas2DContext} ctx    (optional) The canvas context
         * @return {void}
         */
        drawLine: function(from, to, styles, ctx){

            var x = from.x === undefined ? from.get(0) : from.x
                ,y = from.y === undefined ? from.get(1) : from.y
                ;

            ctx = ctx || this.ctx;

            ctx.beginPath();
            this.setStyle( styles, ctx );

            ctx.moveTo(x, y);

            x = to.x === undefined ? to.get(0) : to.x;
            y = to.y === undefined ? to.get(1) : to.y;
            
            ctx.lineTo(x, y);
            
            ctx.stroke();
            ctx.fill();
        },

        /**
         * Create a view for specified geometry.
         * @param  {Geometry} geometry The geometry
         * @param  {Object|String} styles The styles configuration
         * @return {Image}          An image cache of the geometry
         */
        createView: function( geometry, styles ){

            var view = new Image()
                ,aabb = geometry.aabb()
                ,hw = aabb.halfWidth + Math.abs(aabb.pos.x)
                ,hh = aabb.halfHeight + Math.abs(aabb.pos.y)
                ,x = hw + 1
                ,y = hh + 1
                ,hiddenCtx = this.hiddenCtx
                ,hiddenCanvas = this.hiddenCanvas
                ,name = geometry.name
                ;

            styles = styles || this.options.styles[ name ];

            x += styles.lineWidth | 0;
            y += styles.lineWidth | 0;
            
            // clear
            hiddenCanvas.width = 2 * hw + 2 + (2 * styles.lineWidth|0);
            hiddenCanvas.height = 2 * hh + 2 + (2 * styles.lineWidth|0);

            hiddenCtx.save();
            hiddenCtx.translate(x, y);

            if (name === 'circle'){

                this.drawCircle(0, 0, geometry.radius, styles, hiddenCtx);

            } else if (name === 'convex-polygon'){

                this.drawPolygon(geometry.vertices, styles, hiddenCtx);
            }

            if (styles.angleIndicator){

                hiddenCtx.beginPath();
                this.setStyle( styles.angleIndicator, hiddenCtx );
                hiddenCtx.moveTo(0, 0);
                hiddenCtx.lineTo(hw, 0);
                hiddenCtx.closePath();
                hiddenCtx.stroke();
            }

            hiddenCtx.restore();

            view.src = hiddenCanvas.toDataURL("image/png");
            view.width = hiddenCanvas.width;
            view.height = hiddenCanvas.height;
            return view;
        },

        /**
         * Draw the meta data
         * @param  {Object} meta The meta data
         * @return {void}
         */
        drawMeta: function( meta ){

            this.els.fps.innerHTML = meta.fps.toFixed(2);
            this.els.ipf.innerHTML = meta.ipf;
        },

        /**
         * Callback to be run before rendering
         * @private
         * @return {void}
         */
        beforeRender: function(){

            // clear canvas
            this.ctx.clearRect(0, 0, this.el.width, this.el.height);
        },

        /**
         * Draw a body to canvas
         * @param  {Body} body The body to draw
         * @param  {Image} view The view for that body
         * @return {void}
         */
        drawBody: function( body, view ){

            var ctx = this.ctx
                ,pos = body.state.pos
                ,offset = this.options.offset
                ,aabb = body.aabb()
                ;

            ctx.save();
            ctx.translate(pos.get(0) + offset.get(0), pos.get(1) + offset.get(1));
            ctx.rotate(body.state.angular.pos);
            ctx.drawImage(view, -view.width/2, -view.height/2);
            ctx.restore();

            if ( this.options.debug ){
                // draw bounding boxes
                this.drawRect( aabb.pos.x, aabb.pos.y, 2 * aabb.x, 2 * aabb.y, 'rgba(100, 255, 100, 0.3)' );
                
                // draw also paths
                body._debugView = body._debugView || this.createView(body.geometry, 'rgba(0, 255, 0, 0.5)');
                ctx.save();
                ctx.translate(pos.get(0) + offset.get(0), pos.get(1) + offset.get(1));
                ctx.rotate(body.state.angular.pos);
                ctx.drawImage(body._debugView, -body._debugView.width * 0.5, -body._debugView.height * 0.5);
                ctx.restore();
            }
        }
    };
});


// ---
// inside: src/renderers/dom.js

/**
 * A pathetically simple dom renderer
 * @module renderers/dom
 */
Physics.renderer('dom', function( proto ){

    if ( !document ){
        // must be in node environment
        return {};
    }

    // utility methods
    var thePrefix = {}
        ,tmpdiv = document.createElement("div")
        ,toTitleCase = function toTitleCase(str) {
            return str.replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }
        // return the prefixed name for the specified css property
        ,pfx = function pfx(prop) {

            if (thePrefix[prop]){
                return thePrefix[prop];
            }

            var arrayOfPrefixes = ['Webkit', 'Moz', 'Ms', 'O']
                ,name
                ;

            for (var i = 0, l = arrayOfPrefixes.length; i < l; ++i) {

                name = arrayOfPrefixes[i] + toTitleCase(prop);

                if (name in tmpdiv.style){
                    return thePrefix[prop] = name;
                }
            }

            if (name in tmpdiv.style){
                return thePrefix[prop] = prop;
            }

            return false;
        }
        ;

    var classpfx = 'pjs-'
        ,px = 'px'
        ,cssTransform = pfx('transform')
        ;

    var newEl = function( node, content ){
            var el = document.createElement(node || 'div');
            if (content){
                el.innerHTML = content;
            }
            return el;
        }
        ,drawBody
        ;

    // determine which drawBody method we can use
    if (cssTransform){
        drawBody = function( body, view ){

            var pos = body.state.pos;
            view.style[cssTransform] = 'translate('+pos.get(0)+'px,'+pos.get(1)+'px) rotate('+body.state.angular.pos+'rad)';
        };
    } else {
        drawBody = function( body, view ){

            var pos = body.state.pos;
            view.style.left = pos.get(0) + px;
            view.style.top = pos.get(1) + px;
        };
    }

    return {

        /**
         * Initialization
         * @param  {Object} options Config options passed by initializer
         * @return {void}
         */
        init: function( options ){

            // call proto init
            proto.init.call(this, options);

            var viewport = this.el;
            viewport.style.position = 'relative';
            viewport.style.overflow = 'hidden';
            viewport.style[cssTransform] = 'translateZ(0)'; // force GPU accel
            viewport.style.width = this.options.width + px;
            viewport.style.height = this.options.height + px;

            this.els = {};

            if (options.meta){
                var stats = newEl();
                stats.className = 'pjs-meta';
                this.els.fps = newEl('span');
                this.els.ipf = newEl('span');
                stats.appendChild(newEl('span', 'fps: '));
                stats.appendChild(this.els.fps);
                stats.appendChild(newEl('br'));
                stats.appendChild(newEl('span', 'ipf: '));
                stats.appendChild(this.els.ipf);

                viewport.appendChild(stats);
            }
        },

        /**
         * Set dom element style properties for a circle
         * @param  {HTMLElement} el       The element
         * @param  {Geometry} geometry The body's geometry
         * @return {void}
         */
        circleProperties: function( el, geometry ){

            var aabb = geometry.aabb();

            el.style.width = (aabb.halfWidth * 2) + px;
            el.style.height = (aabb.halfHeight * 2) + px;
            el.style.marginLeft = (-aabb.halfWidth) + px;
            el.style.marginTop = (-aabb.halfHeight) + px;
        },

        /**
         * Create a dom element for the specified geometry
         * @param  {Geometry} geometry The body's geometry
         * @return {HTMLElement}          The element
         */
        createView: function( geometry ){

            var el = newEl()
                ,fn = geometry.name + 'Properties'
                ;

            el.className = classpfx + geometry.name;
            el.style.position = 'absolute';            
            el.style.top = '0px';
            el.style.left = '0px';
            
            if (this[ fn ]){
                this[ fn ](el, geometry);
            }
            
            this.el.appendChild( el );
            return el;
        },

        /**
         * Connect to world. Automatically called when added to world by the setWorld method
         * @param  {Object} world The world to connect to
         * @return {void}
         */
        connect: function( world ){

            world.on( 'add:body', this.attach, this );
            world.on( 'remove:body', this.detach, this );
        },

        /**
         * Disconnect from world
         * @param  {Object} world The world to disconnect from
         * @return {void}
         */
        disconnect: function( world ){

            world.off( 'add:body', this.attach );
            world.off( 'remove:body', this.detach );
        },

        /**
         * Detach a node from the DOM
         * @param  {HTMLElement|Object} data DOM node or event data (data.body)
         * @return {self}
         */
        detach: function( data ){

            // interpred data as either dom node or event data
            var el = (data.nodeType && data) || (data.body && data.body.view)
                ,par = el && el.parentNode
                ;

            if ( el && par ){
                // remove view from dom
                par.removeChild( el );
            }

            return this;
        },

        /**
         * Attach a node to the viewport
         * @param  {HTMLElement|Object} data DOM node or event data (data.body)
         * @return {self}
         */
        attach: function( data ){

            // interpred data as either dom node or event data
            var el = (data.nodeType && data) || (data.body && data.body.view)
                ;

            if ( el ){
                // attach to viewport
                this.el.appendChild( el );
            }

            return this;
        },

        /**
         * Draw the meta data
         * @param  {Object} meta The meta data
         * @return {void}
         */
        drawMeta: function( meta ){

            this.els.fps.innerHTML = meta.fps.toFixed(2);
            this.els.ipf.innerHTML = meta.ipf;
        },

        /**
         * Update dom element to reflect body's current state
         * @param  {Body} body The body to draw
         * @param  {HTMLElement} view The view for that body
         * @return {void}
         */
        drawBody: drawBody
    };
});


// ---
// inside: src/renderers/pixi-renderer.js

/**
 * A PIXI renderer
 * Renders physics object with PIXI components
 * @module renderers/pixi
 */
 /* global PIXI */
Physics.renderer('pixi', function( proto ){

	if ( !document ){
		// must be in node environment
		return {};
	}
	
	var Pi2 = Math.PI * 2;

	var defaults = {

		// draw aabbs of bodies for debugging
		debug: false,
		// the element to place meta data into
		metaEl: null,
		offset: {x: 0, y: 0},
		// Provide some default colours
		styles: {
			// Defines the default canvas colour
			color: 0x66FF99,
			
			'point' : '0xE8900C',
			
			'circle' : {
				strokeStyle: '0xE8900C',
				lineWidth: 3,
				fillStyle: '0xD5DE4C',
				angleIndicator: '0xE8900C'
			},
			
			'convex-polygon' : {
				strokeStyle: '0xE8900C',
				lineWidth: 3,
				fillStyle: '0xD5DE4C',
				angleIndicator: '0xE8900C'
			}
		}
	};

	// deep copy callback to extend deeper into options
	var deep = function( a, b ){

		if ( Physics.util.isPlainObject( b ) ){

			return Physics.util.extend({}, a, b, deep );
		}

		return b !== undefined ? b : a;
	};

	return {

		/**
		 * Initialization
		 * @param  {Object} options Config options passed by initializer
		 * @return {void}
		 */
		init: function( options ){

			if (typeof PIXI === 'undefined') {
				throw "PIXI obj not present - cannot continue ";
			}
				
			// call proto init
			proto.init.call(this, options);

			// further options
			this.options = Physics.util.extend({}, defaults, this.options, deep);
			this.options.offset = Physics.vector( this.options.offset );

			// Hook in PIXI stage here
			this.stage = new PIXI.Stage(this.options.styles.color);
			this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height);
			
			// Create empty meta object for use later
			this.meta = {};
			
			// add the renderer view element to the DOM according to its type
			if(this.el.nodeName == 'CANVAS')
	                	this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height, this.el);
	                else{
	                	this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height);
	
	                	if (this.el !== null) {
	                    		this.el.appendChild(this.renderer.view);
	        		} else {
	                		document.body.appendChild(this.renderer.view);
	        		 }
	            	};
		},
		
		/**
		* Loads textures defined in a spritesheet
		* @param  {Array} assetsToLoad Array of spritesheets to load
		* @param  {Function} callback Function to call when loading is complete
		* @return {void}
		*/
		loadSpritesheets: function ( assetsToLoad, callback ){
			if (!assetsToLoad instanceof Array) {
				throw "Spritesheets must be defined in arrays";
			}
			
			var loader = new PIXI.AssetLoader(assetsToLoad);
			
			// Start loading resources!
			loader.load();
			var self = this;
			
			loader.on('onComplete', function(evt){
				self.assetsLoaded = true;
				callback();
			});
		},

		/**
		 * Draw a PIXI.DisplayObject to the stage
		 * @param  {DisplayObject} body      The body to render
		 * @return {void}
		 */
		drawBody: function( body ){
			if (body.view !== null){
				// Draw a body here
				var view = body.view;
				var x = body.state.pos.get(0);
				var y = body.state.pos.get(1);
				var angle = body.state.angular.pos;
				
				view.position.x = x;
				view.position.y = y;
				view.rotation = angle;
				
				this.renderer.render(this.stage);
			}
		},
		/**
		 * Create a circle for use in PIXI stage
		 * @param  {Number} x      The x coord
		 * @param  {Number} y      The y coord
		 * @param  {Number} r      The circle radius
		 * @param  {Object|String} styles The styles configuration
		 * @return {PIXI.Graphics} A graphic object representing a stage
		 */
		createCircle: function(x, y, r, style){
			
			var graphics = new PIXI.Graphics();
			graphics.beginFill(style.fillStyle);
			graphics.lineStyle(style.lineWidth, style.strokeStyle);
			graphics.drawCircle(x, y, r);
			// Center the graphics to the circle
			graphics.pivot.x = (x / 2) + (r / 2);
			graphics.pivot.y = (y / 2) + (r / 2);
			return graphics;
		},
		/**
		 * Creates a polygon for PIXI
		 * @param  {Array} verts  Array of vectorish vertices
		 * @param  {Object|String} styles The styles configuration
		 * @param  {Canvas2DContext} ctx    (optional) The canvas context
		 * @return {PIXI.Graphics} a graphic object representing a polygon
		 */
		createPolygon: function(verts, styles){
		
			var vert = verts[0]
				,x = vert.x === undefined ? vert.get(0) : vert.x
				,y = vert.y === undefined ? vert.get(1) : vert.y
				,l = verts.length
				;
			var start = {
				x: x,
				y: y
			};
			var graphics = new PIXI.Graphics();
			
			graphics.beginFill(styles.fillStyle);
			graphics.lineStyle(styles.lineWidth, styles.strokeStyle);
		
			graphics.moveTo(x, y);
			
			for ( var i = 1; i < l; ++i ){
				
				vert = verts[ i ];
				x = vert.x === undefined ? vert.get(0) : vert.x;
				y = vert.y === undefined ? vert.get(1) : vert.y;
				graphics.lineTo(x, y);
			}
			
			if (l > 2){
				graphics.lineTo(start.x, start.y);
			}
			
			graphics.endFill();
			return graphics;
		},
		/**
		 * Draw a line onto specified canvas context
		 * @param  {Vectorish} from   Starting point
		 * @param  {Vectorish} to     Ending point
		 * @param  {Object|String} styles The styles configuration
		 * @return {PIXI.Graphics} a graphics object representing a line
		 */
		createLine: function(from, to, styles){
		
			var x = from.x === undefined ? from.get(0) : from.x
				,y = from.y === undefined ? from.get(1) : from.y
				;
		
			var graphics = new PIXI.Graphics();
			graphics.beginFill(styles.fillStyle);
			graphics.lineStyle(styles.lineWidth, styles.strokeStyle);
		
			graphics.moveTo(x, y);
		
			x = to.x === undefined ? to.get(0) : to.x;
			y = to.y === undefined ? to.get(1) : to.y;
			
			graphics.lineTo(x, y);
			
			graphics.endFill();
			return graphics;
		},
		/**
		 * Create a view for specified geometry.
		 * @param  {Geometry} geometry The geometry
		 * @return {PIXI.DisplayObject}    An image cache of the geometry
		 */
		createView: function( geometry ){

			var view = null
				,aabb = geometry.aabb()
				,hw = aabb.halfWidth + Math.abs(aabb.pos.x)
				,hh = aabb.halfHeight + Math.abs(aabb.pos.y)
				,x = hw + 1
				,y = hh + 1
				,name = geometry.name
				;
			
			var styles = styles || this.options.styles[ name ];
			
			x += styles.lineWidth | 0;
			y += styles.lineWidth | 0;
			
			if (name === 'circle'){
			
				view = this.createCircle(x, y, geometry.radius, styles);
			
			} else if (name === 'convex-polygon'){
			
				view = this.createPolygon(geometry.vertices, styles);
			}
			
			if (styles.angleIndicator){
				
				view.beginFill(styles.angleIndicator);
				view.moveTo((x / 2), (5 + styles.lineWidth));
				view.lineTo((x / 2) + (geometry.radius / 2), geometry.radius);
				// Center the graphics to the circle
				view.endFill();
				
			}
			if (view) {
				this.stage.addChild(view);
				return view;
			} else {
				throw "Invalid view name passed.";
			}

		},

		/**
		 * Draw the meta data
		 * @param  {Object} meta The meta data
		 * @return {void}
		 */
		drawMeta: function( meta ){
			if (!this.meta.loaded){
				// define the font style here
				var fontStyles = {
					font: "18px Snippet", 
					fill: "white", 
					align: "left"
				};
				this.meta.fps = new PIXI.Text('FPS: ' + meta.fps.toFixed(2), fontStyles);
				this.meta.fps.position.x = 15;
				this.meta.fps.position.y = 5;
				
				this.meta.ipf = new PIXI.Text('IPF: ' + meta.ipf, fontStyles);
				this.meta.ipf.position.x = 15;
				this.meta.ipf.position.y = 30;
				
				this.stage.addChild(this.meta.fps);
				this.stage.addChild(this.meta.ipf);
				this.meta.loaded = true;
			} else {
				this.meta.fps.setText('FPS: ' + meta.fps.toFixed(2));
				this.meta.ipf.setText('IPF: ' + meta.ipf);
			}
		},

		/**
		 * Callback to be run before rendering
		 * @private
		 * @return {void}
		 */
		beforeRender: function(){

			// Do pre-rendering things here (clear stage?)
		},
		/**
		 * Create a view for specified geometry.
		 * @param  {String} type The type of PIXI.DisplayObject to make
		 * @param  {Object} options The specific options to apply to the view
		 * @return {PIXI.DisplayObject} An object that is renderable
		 */
		createDisplay: function( type, options ){
			var view = null
				,texture = null
				;
			switch (type){
				// Create a sprite object
				case 'sprite':
					texture = PIXI.Texture.fromImage(options.texture);
					view = new PIXI.Sprite(texture);
					if (options.anchor ) {
						view.anchor.x = options.anchor.x;
						view.anchor.y = options.anchor.y;
					}
					// If a container is specified, use add to that container
					if (options.container) {
						options.container.addChild(view);
					} else {
						// Otherwise just add the view to the stage
						this.stage.addChild(view);
					}
					return view;
				// Create a movieclip object
				case 'movieclip':
					if (!this.assetsLoaded) {
						throw "No assets have been loaded. Use loadSpritesheet() first";
					}
					var tex = []
						,i = 0
						;
					// Populate our movieclip
					for (i; i < options.frames.length; i++) {
						texture = PIXI.Texture.fromFrame(options.frames[i]);
						tex.push(texture);
					}
					view = new PIXI.MovieClip(tex);
					if (options.anchor ) {
						view.anchor.x = options.anchor.x;
						view.anchor.y = options.anchor.y;
					}
					// If a container is specified, use add to that container
					if (options.container) {
						options.container.addChild(view);
					} else {
						// Otherwise just add the view to the stage
						this.stage.addChild(view);
					}
					return view;
				// Create a default case
				default: 
					throw 'Invalid PIXI.DisplayObject passed';
			}
		},
		/**
		* Helper function
		* Centers the anchor to {x: 0.5, y: 0.5} of a view
		* @param  {PIXI.DisplayObject} view The view to center the anchor
		* @return {void}
		*/
		centerAnchor: function( view ) {
			if (view !== null){
				view.anchor.x = 0.5;
				view.anchor.y = 0.5;
			}
		}
	};
});


// ---
// inside: src/outro.js

return Physics;
}));