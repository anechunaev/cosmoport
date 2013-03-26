window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function extend(Child, Parent){
	var F = function(){}
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}

function isset(foo){
	return typeof foo !== 'undefined';
}

var Scene = function(options){
	this.width = options.width;
	this.height = options.height;
	this.objects = options.objects;
	this.sources = options.sources;
	
	this.GUI = function(){}
}

var Game = {
	cnv : document.getElementById("cnv"),
	ctx : document.getElementById("cnv").getContext("2d"),
	status : 'init',
	scene : {},
	time : new Time(),
	
	Start : function(options){
		this.status = 'loading';
		this.scene = options.scene;
		this.cnv.width = this.scene.width;
		this.cnv.height = this.scene.height;

		// Insertion sort
		for(var i in this.scene.objects){
			if(!isset(this.scene.objects[i].z)) this.scene.objects[i].z = i;
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
		
		this.time.sceneLoaded = Date.now();
		this.time.Tick();
		
		// Run "Start" functions
		for(var i in this.scene.objects){
			this.scene.objects[i].Start();
		}
	},
	
	Draw : function(){
		requestAnimFrame(function(){Game.Draw()});
		this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
		this.time.Tick();
		
		for(var i in this.scene.objects){
			this.scene.objects[i].Update();
			this.scene.objects[i].Draw(this.ctx);
			this.scene.GUI();
		}
	},
	
	Run : function(options){
		setInterval(function(){Game.time.Framerate()}, 1000);
		this.Start(options);
		
		if(this.status == 'ready'){
			this.status = 'run';
			this.Draw();
		}
	}
};