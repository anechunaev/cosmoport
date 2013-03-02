var Sprite = function(options){

	// Vars
	this.image = options.image;
	this.sx = options.x;
	this.sy = options.y;
	this.sw = options.width;
	this.sh = options.height;
	this.dx = options.dx;
	this.dy = options.dy;
	this.dw = options.deltaWidth;
	this.dh = options.deltaHeight;
	
	// Checking if some important vars exists
	if(options.deltaWidth === undefined || options.deltaHeight === undefined){
		this.dw = this.sw;
		this.dh = this.sh;
	}
	
	if(options.dx === undefined){
		this.dx = 0;
	}
	
	if(options.dy === undefined){
		this.dy = 0;
	}
	
	if(options.width === undefined){
		this.sw = this.image.width;
	}
	
	if(options.width === undefined){
		this.sw = this.image.width;
	}
	
	// Methods
	this.Start = function(){}
	this.Update = function(){}
	
	this.Draw = function(){
		game.ctx.drawImage(this.image, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
	}
}

var Rect = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
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
	
	// Methods
	this.Draw = function(){
		game.ctx.beginPath();
		game.ctx.rect(this.x, this.y, this.width, this.height);
		game.ctx.fillStyle = this.color;
		game.ctx.fill();
		if(this.stroke != 0){
			game.ctx.lineWidth = this.stroke;
			game.ctx.strokeStyle = this.strokeColor;
			game.ctx.stroke();
		}
	}
	
	this.Start = function(){}
	this.Update = function(){}
}

var Circle = function(options){

	// Vars
	this.x = options.x;
	this.y = options.y;
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
	
	// Methods
	this.Start = function(){};
	this.Update = function(){};
	
	this.Draw = function(){
		game.ctx.beginPath();
		game.ctx.arc(this.x, this.y, this.r, this.sdeg, this.edeg, this.ccw);
		game.ctx.fillStyle = this.color;
		game.ctx.fill();
		if(this.stroke != 0){
			game.ctx.lineWidth = this.stroke;
			game.ctx.strokeStyle = this.strokeColor;
			game.ctx.stroke();
		}
	}
}

var CustomObject = function(options){

	// Methods
	this.Draw = function(){};
	this.Start = function(){};
	this.Update = function(){};
}