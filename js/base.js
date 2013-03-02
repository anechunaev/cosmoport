var Camera = function(options){
	this.x = options.x;
	this.y = options.y;
}

var Scene = function(options){
	this.dx = options.dx;
	this.dy = options.dy;
	this.width = options.width;
	this.wheight = options.height;
	this.objects = options.objects;
	this.sources = options.sources;
	
	this.GUI = function(){}
}

var game = {
	cnv : document.getElementById("cnv"),
	ctx : document.getElementById("cnv").getContext("2d"),
	status : 'init',
	scene : {},
	
	Start : function(options){
		this.status = 'loading';
		this.scene = options.scene;
		this.cnv.width = window.innerWidth - 3;
		this.cnv.height = window.innerHeight - 3;
		
		var k = 0;
		while(this.status != 'ready'){
			if(this.scene.sources[k].complete){
				k++;
				if(k >= this.scene.sources.length){
					this.status = 'ready';
					break;
				}
			}
			if(this.scene.sources.length==0) break;
		}
		
		for(var i in this.scene.objects){
			this.scene.objects[i].Start();
		}
	},
	
	Draw : function(){
		this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
		
		for(var i in this.scene.objects){
			this.scene.objects[i].Update();
			this.scene.objects[i].Draw();
			this.scene.GUI();
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