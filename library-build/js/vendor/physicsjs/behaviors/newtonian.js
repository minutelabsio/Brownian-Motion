/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.behavior("newtonian",function(t){var n={strength:1,max:!1,min:!1};return{init:function(e){var r=this;t.init.call(this),this.options.defaults(n),this.options.onChange(function(e){r._maxDistSq=e.max===!1?Infinity:e.max*e.max,r._minDistSq=e.min?e.min*e.min:100*e.strength}),this.options(e)},behave:function(t){var n=this.getTargets(),r,i,s=this.options.strength,o=this._minDistSq,u=this._maxDistSq,a=e.scratchpad(),f=a.vector(),l,c;for(var h=0,p=n.length;h<p;h++){r=n[h];for(var d=h+1;d<p;d++)i=n[d],f.clone(i.state.pos),f.vsub(r.state.pos),l=f.normSq(),l>o&&l<u&&(c=s/l,r.accelerate(f.normalize().mult(c*i.mass)),i.accelerate(f.mult(r.mass/i.mass).negate()))}a.done()}}}),e});