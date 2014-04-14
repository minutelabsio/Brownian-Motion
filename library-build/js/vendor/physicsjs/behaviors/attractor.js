/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.behavior("attractor",function(t){var n={pos:null,strength:1,order:2,max:!1,min:!1};return{init:function(r){var i=this;this._pos=new e.vector,t.init.call(this),this.options.defaults(n),this.options.onChange(function(e){i._maxDist=e.max===!1?Infinity:e.max,i._minDist=e.min?e.min:10,i.position(e.pos)}),this.options(r)},position:function(e){var t=this;return e?(this._pos.clone(e),t):this._pos.values()},behave:function(t){var n=this.getTargets(),r,i=this.options.order,s=this.options.strength,o=this._minDist,u=this._maxDist,a=e.scratchpad(),f=a.vector(),l,c;for(var h=0,p=n.length;h<p;h++)r=n[h],f.clone(this._pos),f.vsub(r.state.pos),l=f.norm(),l>o&&l<u&&(c=s/Math.pow(l,i),r.accelerate(f.normalize().mult(c)));a.done()}}}),e});