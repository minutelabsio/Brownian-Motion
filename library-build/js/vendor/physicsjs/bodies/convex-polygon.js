/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs","../geometries/convex-polygon"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs","../geometries/convex-polygon"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.body("convex-polygon",function(t){var n={};return{init:function(r){t.init.call(this,r),r=e.util.extend({},n,r),this.geometry=e.geometry("convex-polygon",{vertices:r.vertices}),this.recalc()},recalc:function(){t.recalc.call(this),this.moi=e.geometry.getPolygonMOI(this.geometry.vertices)}}}),e});