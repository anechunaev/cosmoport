/**
 * @class Sprite
 * @requires Transform
 * @requires Vector2
 * @constructor
 * @param {Object} options
 */
var Sprite = function(options){

	// Vars
	this.image = options.image;
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.rot = options.rotation;
	this.w = options.width;
	this.h = options.height;
	this.dx = options.dx;
	this.dy = options.dy;
	this.dw = options.deltaWidth;
	this.dh = options.deltaHeight;
	this.hidden = options.hidden;
	
	// Checking if some important vars exists
	if(typeof options.rotation === undefined){
		this.rot = 0;
	}
	
	if(typeof options.deltaWidth === undefined || typeof options.deltaHeight === undefined){
		this.dw = this.w;
		this.dh = this.h;
	}
	
	if(typeof options.dx === undefined){
		this.dx = 0;
	}
	
	if(typeof options.dy === undefined){
		this.dy = 0;
	}
	
	if(typeof options.width === undefined){
		this.w = this.image.width;
	}
	
	if(typeof options.height === undefined){
		this.h = this.image.height;
	}
}
Sprite.prototype = {
				/**
				 * Drawing this object
				 * @param {Object} ctx
				 */
	"Draw"	:	function(ctx){
					if(!this.hidden){
						if(this.rot != 0){
							ctx.rotate(this.rot);
						}
						ctx.drawImage(this.image, this.dx, this.dy, this.dw, this.dh, this.x, this.y, this.w, this.h);
						if(this.rot != 0){
							ctx.rotate(-this.rot);
						}
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}


/**
 * @class Rect
 * @requires Transform
 * @requires Vector2
 * @constructor
 * @param {Object} options
 */
var Rect = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.rot = options.rotation;
	this.width = options.width;
	this.height = options.height;
	this.color = options.color;
	this.stroke = options.stroke;
	this.strokeColor = options.strokeColor;
	this.hidden = options.hidden;
	
	// Checking vars
	if(typeof options.rotation === undefined){
		this.rot = 0;
	}
	
	if(typeof options.color === undefined){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(typeof options.stroke === undefined){
		this.stroke = 0;
	}
	
	if(typeof options.strokeColor === undefined){
		this.strokeColor = 'rgba(0,0,0,1)';
	}
}
Rect.prototype = {
				/**
				 * Drawing this object
				 * @param {Object} ctx
				 */
	"Draw"	:	function(ctx){
					if(!this.hidden){
						if(this.rot != 0){
							ctx.rotate(this.rot);
						}
						ctx.beginPath();
						ctx.rect(this.x, this.y, this.width, this.height);
						ctx.fillStyle = this.color;
						ctx.fill();
						if(this.stroke != 0){
							ctx.lineWidth = this.stroke;
							ctx.strokeStyle = this.strokeColor;
							ctx.stroke();
						}
						if(this.rot != 0){
							ctx.rotate(-this.rot);
						}
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}


/**
 * @class Circle
 * @requires Transform
 * @requires Vector2
 * @constructor
 * @param {Object} options
 */
var Circle = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.rot = options.rotation;
	this.r = options.radius;
	this.sdeg = options.startDegrees;
	this.edeg = options.endDegrees;
	this.ccw = options.counterClockwise;
	this.stroke = options.stroke;
	this.color = options.color;
	this.strokeColor = options.strokeColor;
	this.hidden = options.hidden;
	
	// Checking vars
	if(typeof options.rotation === undefined){
		this.rot = 0;
	}
	
	if(typeof options.startDegrees === undefined){
		this.sdeg = 0;
	}
	
	if(typeof options.endDegrees === undefined){
		this.edeg = Math.PI*2;
	}
	
	if(typeof options.counterClockwise === undefined)
	{
		this.ccw = false;
	}
	
	if(typeof options.color === undefined){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(typeof options.stroke === undefined){
		this.stroke = 0;
	}
	
	if(typeof options.strokeColor === undefined){
		this.strokeColor = 'rgba(0,0,0,1)';
	}
}
Circle.prototype = {
				/**
				 * Drawing this object
				 * @param {Object} ctx
				 */
	"Draw"	:	function(ctx){
					if(!this.hidden){
						if(this.rot != 0){
							ctx.rotate(this.rot);
						}
						ctx.beginPath();
						ctx.arc(this.x, this.y, this.r, this.sdeg, this.edeg, this.ccw);
						ctx.fillStyle = this.color;
						ctx.fill();
						if(this.stroke != 0){
							ctx.lineWidth = this.stroke;
							ctx.strokeStyle = this.strokeColor;
							ctx.stroke();
						}
						if(this.rot != 0){
							ctx.rotate(-this.rot);
						}
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}