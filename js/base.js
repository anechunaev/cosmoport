function extend(Child, Parent){
	var F = function(){}
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
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

var Game = {
	cnv : document.getElementById("cnv"),
	ctx : document.getElementById("cnv").getContext("2d"),
	status : 'init',
	scene : {},
	
	Start : function(options){
		this.status = 'loading';
		this.scene = options.scene;
		this.cnv.width = window.innerWidth - 3;
		this.cnv.height = window.innerHeight - 3;

		// Insertion sort
		for(var i in this.scene.objects){
			if(this.scene.objects[i].z === undefined){this.scene.objects[i].z = i}
			var obj = this.scene.objects[i];
			var key = obj.z;
			for(j = i-1; j > -1 && this.scene.objects[j].z > key; j--){
				this.scene.objects[j+1] = this.scene.objects[j];
			}
			this.scene.objects[j+1] = obj;
		}
		
		// Loading sources
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
		
		// Run "Start" functions
		for(var i in this.scene.objects){
			this.scene.objects[i].Start();
		}
	},
	
	Draw : function(){
		this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
		
		for(var i in this.scene.objects){
			this.scene.objects[i].Update();
			this.scene.objects[i].Draw(this.ctx);
			this.scene.GUI();
		}
	},
	
	Run : function(options){
		this.Start(options);
		
		if(this.status == 'ready'){
			this.status = 'run';
			setInterval(function(){ Game.Draw() }, 17);
		}
	}
};