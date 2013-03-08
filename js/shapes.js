var Sprite = function(options){

	// Vars
	this.image = options.image;
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.w = options.width;
	this.h = options.height;
	this.dx = options.dx;
	this.dy = options.dy;
	this.dw = options.deltaWidth;
	this.dh = options.deltaHeight;
	
	// Checking if some important vars exists
	if(options.deltaWidth === undefined || options.deltaHeight === undefined){
		this.dw = this.w;
		this.dh = this.h;
	}
	
	if(options.dx === undefined){
		this.dx = 0;
	}
	
	if(options.dy === undefined){
		this.dy = 0;
	}
	
	if(options.width === undefined){
		this.w = this.image.width;
	}
	
	if(options.height === undefined){
		this.h = this.image.height;
	}
}
Sprite.prototype = {
	"Draw"	:	function(ctx){
					ctx.drawImage(this.image, this.dx, this.dy, this.dw, this.dh, this.x, this.y, this.w, this.h);
				},
	"Start"	:	function(){},
	"Update":	function(){}
}

var Rect = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.width = options.width;
	this.height = options.height;
	this.color = options.color;
	this.stroke = options.stroke;
	this.strokeColor = options.strokeColor;
	
	// Checking vars
	if(options.color === undefined){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(options.stroke === undefined){
		this.stroke = 0;
	}
	
	if(options.strokeColor === undefined){
		this.strokeColor = '#000';
	}
}
Rect.prototype = {
	"Draw"	:	function(ctx){
					ctx.beginPath();
					ctx.rect(this.x, this.y, this.width, this.height);
					ctx.fillStyle = this.color;
					ctx.fill();
					if(this.stroke != 0){
						ctx.lineWidth = this.stroke;
						ctx.strokeStyle = this.strokeColor;
						ctx.stroke();
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}

var Circle = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
	this.z = options.z;
	this.r = options.radius;
	this.sdeg = options.startDegrees;
	this.edeg = options.endDegrees;
	this.ccw = options.counterClockwise;
	this.stroke = options.stroke;
	this.color = options.color;
	this.strokeColor = options.strokeColor;
	
	// Checking vars
	if(options.startDegrees === undefined){
		this.sdeg = 0;
	}
	
	if(options.endDegrees === undefined){
		this.edeg = Math.PI*2;
	}
	
	if(options.counterClockwise === undefined)
	{
		this.ccw = false;
	}
	
	if(options.color === undefined){
		this.color = 'rgba(0,0,0,0)';
	}
	
	if(options.stroke === undefined){
		this.stroke = 0;
	}
	
	if(options.strokeColor === undefined){
		this.strokeColor = '#000';
	}
}
Circle.prototype = {
	"Draw"	:	function(ctx){
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.r, this.sdeg, this.edeg, this.ccw);
					ctx.fillStyle = this.color;
					ctx.fill();
					if(this.stroke != 0){
						ctx.lineWidth = this.stroke;
						ctx.strokeStyle = this.strokeColor;
						ctx.stroke();
					}
				},
	"Start"	:	function(){},
	"Update":	function(){}
}

var CustomObject = function(options){

	// Methods
	this.Draw = function(){};
	this.Start = function(){};
	this.Update = function(){};
}