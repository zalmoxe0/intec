(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.dieren = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.Olifant();
	this.instance.setTransform(135,142.5,1,1,0,0,0,129.9,135.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.1,98.3,180.5,154.1);


// symbols:
(lib.KOP = function() {
	this.initialize();

	// achtergrondkop
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30D9AA").s().p("AgpC0IAKBiIAvCLIg+gUIhAjYQhrgYgMiQQgFgzB6hlQj7hNAUgrQADhUghAZQgHhwBUhfQBsh6CFAUQCDATBfCHQBfCHAlCOQAlCOhuB4QguA0C/HKQhbglAZBcQkBmmhdgdg");
	this.shape.setTransform(40.9,64.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.4,1.7,75,126.3);


(lib.Olifant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hoofd
	this.instance = new lib.KOP();
	this.instance.setTransform(143.3,153.7,1,1,0,0,0,39.2,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:39.1,rotation:-29,x:143.2},14).to({regX:39.2,rotation:0,x:143.3},15).wait(1));

	// lijf
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AKyKcIjPgpQgQgVAclDQmOiBlkBVIgmDhIA+APQA3A+g9BSIjdgMIgHlWQhijJAIk4Qg8ClhCAxQgDBRgHAwQgSB7guhnQAQhBgKhCQAdhOAdhEQCflvCxhoQIQiVHxDzIAAOmIAhAAQgTA6gUBQQBDAyAWAyQAJAUABAUQg9gdgBAnIgHgTg");
	this.shape.setTransform(78,176.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,107.9,152,137.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;