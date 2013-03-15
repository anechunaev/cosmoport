/**
 * @class Sprite
 * @requires Transform
 * @requires Vector2
 * @constructor
 * @param {Object} options
 */
var Sprite = function(options){

	// Vars
	this.image = options.image; // Image
	this.hidden = options.hidden; // Boolean
	this.position = options.position; // Vector2
	this.localPosition = options.localPosition; // Vector2
	this.localRotation = options.localRotation; // Vector2
	this.angle = options.angle; // Number
	this.scale = options.scale; // Vector2
	this.z = options.z; // Number
	this.size = options.size; // Vector2
	this.delta = options.delta; // Vector2
	this.deltaScale = options.deltaScale; // Vector2
	
	// Checking if some important vars exists
	if(!isset(options.hidden)){
		this.hidden = false;
	}
	if(!isset(options.position)){
		this.position = new Vector2(0,0);
	}
	if(!isset(options.localPosition)){
		this.localPosition = new Vector2(0,0);
	}
	if(!isset(options.localRotation)){
		this.localRotation = new Vector2(0,0);
	}
	if(!isset(options.angle)){
		this.angle = 0;
	}
	if(!isset(options.scale)){
		this.scale = new Vector2(1,1);
	}
	if(!isset(options.delta)){
		this.delta = new Vector2(0,0);
	}
	
	this.firstDraw = true;
}
Sprite.prototype = {
				/**
				 * Drawing this object
				 * @param {Object} ctx
				 */
	"Draw"	:	function(ctx){
					if(this.firstDraw){
						if(!isset(this.size)){
							this.size = new Vector2(this.image.width, this.image.height);
						}
						if(!isset(this.deltaScale)){
							this.deltaScale = new Vector2(this.size.x, this.size.y);
						}
						this.firstDraw = false;
					}
					
					if(!this.hidden){
						ctx.save();
						ctx.translate(this.position.x, this.position.y);
						ctx.scale(this.scale.x, this.scale.y);
						ctx.rotate(this.angle);
						ctx.translate(-this.localPosition.x, -this.localPosition.y);
						ctx.translate(-this.localRotation.x, -this.localRotation.y);
						ctx.drawImage(this.image, this.delta.x, this.delta.y, this.deltaScale.x, this.deltaScale.y, 0, 0, this.size.x, this.size.y);
						ctx.restore();
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
	this.hidden = options.hidden; // Boolean
	this.position = options.position; // Vector2
	this.localPosition = options.localPosition; // Vector2
	this.localRotation = options.localRotation; // Vector2
	this.angle = options.angle; // Number
	this.scale = options.scale; // Vector2
	this.z = options.z; // Number
	this.size = options.size; // Vector2
	this.color = options.color; // String
	this.stroke = options.stroke; // Number
	this.strokeColor = options.strokeColor; // String
	
	// Checking vars
	if(!isset(options.hidden)){
		this.hidden = false;
	}
	if(!isset(options.position)){
		this.position = new Vector2(0,0);
	}
	if(!isset(options.localPosition)){
		this.localPosition = new Vector2(0,0);
	}
	if(!isset(options.localRotation)){
		this.localRotation = new Vector2(0,0);
	}
	if(!isset(options.angle)){
		this.angle = 0;
	}
	if(!isset(options.scale)){
		this.scale = new Vector2(1,1);
	}
	
	if(!isset(options.color)){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(!isset(options.stroke)){
		this.stroke = 0;
	}
	
	if(!isset(options.strokeColor)){
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
						ctx.save();
						ctx.translate(this.position.x, this.position.y);
						ctx.scale(this.scale.x, this.scale.y);
						ctx.rotate(this.angle);
						ctx.translate(-this.localPosition.x, -this.localPosition.y);
						ctx.translate(-this.localRotation.x, -this.localRotation.y);
						
						// Drawing
						ctx.beginPath();
						ctx.rect(0, 0, this.width, this.height);
						ctx.fillStyle = this.color;
						ctx.fill();
						if(this.stroke != 0){
							ctx.lineWidth = this.stroke;
							ctx.strokeStyle = this.strokeColor;
							ctx.stroke();
						}
						
						ctx.restore();
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
	this.hidden = options.hidden; // Boolean
	this.position = options.position; // Vector2
	this.localPosition = options.localPosition; // Vector2
	this.localRotation = options.localRotation; // Vector2
	this.angle = options.angle; // Number
	this.scale = options.scale; // Vector2
	this.z = options.z; // Number
	this.r = options.radius; // Number
	this.sdeg = options.startDegrees; // Number, rad
	this.edeg = options.endDegrees; // Number, rad
	this.ccw = options.counterClockwise; // Boolean
	this.stroke = options.stroke; // Number
	this.color = options.color; // String
	this.strokeColor = options.strokeColor; // String
	
	// Checking vars
	if(!isset(options.hidden)){
		this.hidden = false;
	}
	if(!isset(options.position)){
		this.position = new Vector2(0,0);
	}
	if(!isset(options.localPosition)){
		this.localPosition = new Vector2(0,0);
	}
	if(!isset(options.localRotation)){
		this.localRotation = new Vector2(0,0);
	}
	if(!isset(options.angle)){
		this.angle = 0;
	}
	if(!isset(options.scale)){
		this.scale = new Vector2(1,1);
	}
	
	if(!isset(options.startDegrees)){
		this.sdeg = 0;
	}
	
	if(!isset(options.endDegrees)){
		this.edeg = Math.PI*2;
	}
	
	if(!isset(options.counterClockwise))
	{
		this.ccw = false;
	}
	
	if(!isset(options.color)){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(!isset(options.stroke)){
		this.stroke = 0;
	}
	
	if(!isset(options.strokeColor)){
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
						ctx.save();
						ctx.translate(this.position.x, this.position.y);
						ctx.scale(this.scale.x, this.scale.y);
						ctx.rotate(this.angle);
						ctx.translate(-this.localPosition.x, -this.localPosition.y);
						ctx.translate(-this.localRotation.x, -this.localRotation.y);
						
						// Drawing
						ctx.beginPath();
						ctx.arc(this.x, this.y, this.r, this.sdeg, this.edeg, this.ccw);
						ctx.fillStyle = this.color;
						ctx.fill();
						if(this.stroke != 0){
							ctx.lineWidth = this.stroke;
							ctx.strokeStyle = this.strokeColor;
							ctx.stroke();
						}
						
						ctx.restore();
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}