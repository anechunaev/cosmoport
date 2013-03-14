/**
 * @class Transform
 * @requires Vector2
 * @constructor
 * @param {Object} options
 */
var Transform = function(options){
	this.position = options.position; // Vector2
	this.localPosition = options.localPosition; // Vector2
	this.angle = options.angle;
	this.scale = options.scale; // Vector2
	
	if(typeof options.position === undefined) this.position = Vector2.zero;
	if(typeof options.localPosition === undefined) this.localPosition = Vector2.zero;
	if(typeof options.angle === undefined) this.angle = 0;
	if(typeof options.scale === undefined) this.scale = Vector2.one;
}
Transform.prototype = {
					/**
					 * Moving drawable object to target
					 * @requires Vector2
					 * @param {Vector2} target
					 */
	"translate"		: function(target){},
	
					/**
					 * Rotate object around local point {x: 0, y: 0}
					 * @param {Number} angle
					 */
	"rotate"		: function(angle){},
	
					/**
					 * Rotate object around specified local point
					 * @requires Vector2
					 * @param {Vector2} local
					 * @param {Number} angle
					 */
	"rotateAround"	: function(local, angle){},
	
					/**
					 * Scaling object by x and y axis
					 * @requires Vector2
					 * @param {Vector2} axis
					 */
	"scale"			: function(axis){}
}