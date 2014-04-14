/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

(function(e,t){typeof define=="function"&&define.amd?define(["physicsjs"],t):typeof exports=="object"?module.exports=t.apply(e,["physicsjs"].map(require)):t.call(e,e.Physics)})(this,function(e){return e.geometry("circle",function(t){var n={radius:1};return{init:function(r){var i=this;t.init.call(this,r),this.options.defaults(n),this.options.onChange(function(e){this.radius=e.radius}),this.options(r),this._aabb=e.aabb(),this.radius=this.options.radius},aabb:function(t){var n=this.radius;return this._aabb.hw!==n&&(this._aabb=e.aabb(-n,-n,n,n)),e.aabb.clone(this._aabb)},getFarthestHullPoint:function(t,n){return n=n||e.vector(),n.clone(t).normalize().mult(this.radius)},getFarthestCorePoint:function(t,n,r){return n=n||e.vector(),n.clone(t).normalize().mult(this.radius-r)}}}),e});