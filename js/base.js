var Camera = function(){
	this.width = 0;
	this.height = 0;
	this.dx = 0;
	this.dy = 0;
}

var Sprite = function(image, sx, sy, sw, sh, dx, dy, dw, dh)
{
	this.image = image;
	this.sx = sx;
	this.sy = sy;
	this.sw = sw;
	this.sh = sh;
	this.dx = dx;
	this.dy = dy;
	this.dw = dw;
	this.dh = dh;
	
	this.Start = function(){}
	this.Update = function(){}
	
	this.Draw = function(){
		game.ctx.drawImage(this.image, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
	}
	
	game.sources.push(this);
	game.obj2draw.push(this);
}

var Rect = function(x, y, width, height, color, stroke, strokeColor){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.stroke = stroke;
	this.strokeColor = strokeColor;
	
	this.Draw = function(){
		game.ctx.fillStyle = this.strokeColor;
		game.ctx.fillRect(this.x-this.stroke, this.y-this.stroke, this.width+this.stroke*2, this.height+this.stroke*2);
		game.ctx.fillStyle = this.color;
		game.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.Start = function(){}
	this.Update = function(){}
	
	game.obj2draw.push(this);
}

var game = {
	cnv : document.getElementById("cnv"),
	ctx : document.getElementById("cnv").getContext("2d"),
	cam : new Camera(),
	obj2draw : new Array(),
	sources : new Array(),
	status : 'init',
	
	Start : function(){
		this.status = 'loading';
	
		this.cnv.width = window.innerWidth - 3;
		this.cnv.height = window.innerHeight - 3;
		this.cam.width = window.innerWidth;
		this.cam.height = window.innerHeight;
		
		var k = 0;
		while(this.status != 'ready'){
			if(this.sources[k].image.complete){
				k++;
				if(k >= this.sources.length){
					this.status = 'ready';
					break;
				}
			}
		}
		
		for(var i in this.obj2draw){
			this.obj2draw[i].Start();
		}
	},
	
	Draw : function(){
		this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
		
		for(var i in this.obj2draw){
			this.obj2draw[i].Update();
			this.obj2draw[i].Draw();
		}
	},
	
	Run : function(options){
		this.Start();
		
		if(this.status == 'ready')		{
			setInterval(function(){ game.Draw() }, 17);
		}
	}
};