/**
 * @class Vector2
 * @constructor
 * @param {Number} x
 * @param {Number} y
 */
var Vector2 = function(x, y){
	this.x = x;
	this.y = y;
	this.zero = {x: 0, y: 0};
	this.one = {x: 1, y: 1};
	this.down = {x: 0, y: 1};
	this.right = {x: 1, y: 0};
	
	if(typeof x === 'undefined') this.x = 0;
	if(typeof y === 'undefined') this.y = 0;
}

/**
 * @class Vector2
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 */
var Vector2 = function(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.zero = {x: 0, y: 0, z: 0};
	this.one = {x: 1, y: 1, z: 1};
	this.forward = {x: 0, y: 0, z: 1};
	this.down = {x: 0, y: 1, z: 0};
	this.right = {x: 1, y: 0, z: 0};
	
	if(typeof x === 'undefined') this.x = 0;
	if(typeof y === 'undefined') this.y = 0;
	if(typeof z === 'undefined') this.z = 0;
}