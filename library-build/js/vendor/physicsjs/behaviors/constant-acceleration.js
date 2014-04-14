/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.behavior("constant-acceleration",function(t){var n={acc:{x:0,y:4e-4}};return{init:function(r){t.init.call(this),this.options.defaults(n),this.options(r),this._acc=e.vector(),this.setAcceleration(this.options.acc),delete this.options.acc},setAcceleration:function(e){return this._acc.clone(e),this},behave:function(e){var t=this.getTargets();for(var n=0,r=t.length;n<r;++n)t[n].accelerate(this._acc)}}}),e});