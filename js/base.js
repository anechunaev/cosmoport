var Camera = function(x, y){
	this.x = x;
	this.y = y;
}

var Scene = function(dx, dy, w, h, obj, src){
	this.dx = dx;
	this.dy = dy;
	this.width = w;
	this.wheight = h;
	this.objects = obj;
	this.sources = src;
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
		game.ctx.beginPath();
		game.ctx.rect(this.x, this.y, this.width, this.height);
		game.ctx.fillStyle = this.color;
		game.ctx.fill();
		game.ctx.lineWidth = this.stroke;
		game.ctx.strokeStyle = this.strokeColor;
		game.ctx.stroke();
	}
	
	this.Start = function(){}
	this.Update = function(){}
	
	game.obj2draw.push(this);
}

var Circle = function(x, y, r, sdeg, edeg, ccw, color, stroke, strokeColor){
	this.x = x;
	this.y = y;
	this.r = r;
	this.sdeg = sdeg;
	this.edeg = edeg;
	this.ccw = ccw;
	this.stroke = stroke;
	this.color = color;
	this.strokeColor = strokeColor;
	
	this.Start = function(){};
	this.Update = function(){};
	
	this.Draw = function(){
		game.ctx.beginPath();
		game.ctx.arc(this.x, this.y, this.r, this.sdeg, this.edeg, this.ccw);
		game.ctx.fillStyle = this.color;
		game.ctx.fill();
		game.ctx.lineWidth = this.stroke;
		game.ctx.strokeStyle = this.strokeColor;
		game.ctx.stroke();
	}
	
	game.obj2draw.push(this);
}

var CustomObject = function(){
	this.Draw = function(){};
	this.Start = function(){};
	this.Update = function(){};
}

var game = {
	cnv : document.getElementById("cnv"),
	ctx : document.getElementById("cnv").getContext("2d"),
	obj2draw : new Array(),
	sources : new Array(),
	status : 'init',
	scene : {},
	
	Start : function(){
		this.status = 'loading';
	
		this.cnv.width = window.innerWidth - 3;
		this.cnv.height = window.innerHeight - 3;
		
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
		this.Start(options);
		
		if(this.status == 'ready'){
			this.status = 'run';
			setInterval(function(){ game.Draw() }, 17);
		}
	}
};