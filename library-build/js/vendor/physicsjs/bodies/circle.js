/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs","../geometries/circle"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs","../geometries/circle"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.body("circle",function(t){var n={radius:1};return{init:function(r){t.init.call(this,r),r=e.util.extend({},n,r),this.geometry=e.geometry("circle",{radius:r.radius}),this.recalc()},recalc:function(){t.recalc.call(this),this.moi=this.mass*this.geometry.radius*this.geometry.radius/2}}}),e});