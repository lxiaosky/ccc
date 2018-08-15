(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];


// symbols:
// helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.se1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AiYpgIAABdIgkBpIgDgBIAMAGQAGADADAGQAGAMgCARIA7gQQAFgCAEAEQAEAEAAAHQAAAHgEAGQgDAFgGACIhDASIhPHbIBBBYIFfheIiSjKQgQAEgJgLQgLgMAAgVIAAgVQAAgVALgSQAKgSAQgEIHIh7QAQgEALAMQALAMAAAVIAABIIAYATIBIg+IAOgEIAAB0IgOADIgWAAQAQAUARAxQAYBCgLAxIgjAJQAIAcAAAjQAABTgtBHQgsBHg+AQQgwANgngaQgmgbgQg2QgEgMgCgOIgzANIgUgbInxCGQgDBRgrBEQgsBDg9ARQg8AQgsgtQgrgsgDhQIhIAUQAAh1A7hlQA6hlBWghIC+myIhKATIABhnIAjgKIAAgtIBKAjIAihkQgQgKABgYQAAgTAKgRQAKgQAOgEg");
        this.shape.setTransform(63.5,60.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E75297").s().p("AoEJAQgrgsgDhQIhIAUQAAh1A7hlQA6hlBWghIC+myIhKATIABhnIAjgKIAAgtIBKAjIAihkQgQgKABgYQAAgTAKgRQAKgQAOgEIAABdIgkBpIgDgBIAMAGQAGADADAGQAGAMgCARIA7gQQAFgCAEAEQAEAEAAAHQAAAHgEAGQgDAFgGACIhDASIhPHbIBBBYIFfheIiSjKQgQAEgJgLQgLgMAAgVIAAgVQAAgVALgSQAKgSAQgEIHIh7QAQgEALAMQALAMAAAVIAABIIAYATIBIg+IAOgEIAAB0IgOADIgWAAQAQAUARAxQAYBCgLAxIgjAJQAIAcAAAjQAABTgtBHQgsBHg+AQQgwANgngaQgmgbgQg2QgEgMgCgOIgzANIgUgbInxCGQgDBRgrBEQgsBDg9ARQgQAEgPAAQgpAAggghg");
        this.shape_1.setTransform(63.5,60.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#FFF000").s().p("AoEJAQgrgsgDhQIhIAUQAAh1A7hlQA6hlBWghIC+myIhKATIABhnIAjgKIAAgtIBKAjIAihkQgQgKABgYQAAgTAKgRQAKgQAOgEIAABdIgkBpIgDgBIAMAGQAGADADAGQAGAMgCARIA7gQQAFgCAEAEQAEAEAAAHQAAAHgEAGQgDAFgGACIhDASIhPHbIBBBYIFfheIiSjKQgQAEgJgLQgLgMAAgVIAAgVQAAgVALgSQAKgSAQgEIHIh7QAQgEALAMQALAMAAAVIAABIIAYATIBIg+IAOgEIAAB0IgOADIgWAAQAQAUARAxQAYBCgLAxIgjAJQAIAcAAAjQAABTgtBHQgsBHg+AQQgwANgngaQgmgbgQg2QgEgMgCgOIgzANIgUgbInxCGQgDBRgrBEQgsBDg9ARQgQAEgPAAQgpAAggghg");
            _this.shape_1.setTransform(63.5,60.9);
            setTimeout(function () {
                _this.shape_1.graphics.f("#E75297").s().p("AoEJAQgrgsgDhQIhIAUQAAh1A7hlQA6hlBWghIC+myIhKATIABhnIAjgKIAAgtIBKAjIAihkQgQgKABgYQAAgTAKgRQAKgQAOgEIAABdIgkBpIgDgBIAMAGQAGADADAGQAGAMgCARIA7gQQAFgCAEAEQAEAEAAAHQAAAHgEAGQgDAFgGACIhDASIhPHbIBBBYIFfheIiSjKQgQAEgJgLQgLgMAAgVIAAgVQAAgVALgSQAKgSAQgEIHIh7QAQgEALAMQALAMAAAVIAABIIAYATIBIg+IAOgEIAAB0IgOADIgWAAQAQAUARAxQAYBCgLAxIgjAJQAIAcAAAjQAABTgtBHQgsBHg+AQQgwANgngaQgmgbgQg2QgEgMgCgOIgzANIgUgbInxCGQgDBRgrBEQgsBDg9ARQgQAEgPAAQgpAAggghg");
                _this.shape_1.setTransform(63.5,60.9);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.se1, new cjs.Rectangle(-1,-1,129.1,123.8), null);


    (lib.Group_21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AkNhAIHQBhQAsAKAlAYInVhkQgkgWgogJgAkThCIAGAC");
        this.shape.setTransform(28.3,7.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AjEghQgkgXgogJIHQBhQAsAKAlAYg");
        this.shape_1.setTransform(28.6,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(-0.2,-0.2,57.1,15.3), null);


    (lib.Group_17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AkJhAIHMBhQAqAJAnAZInVhjQgjgWglgKIgFgBQgCAAgDgB");
        this.shape.setTransform(28.3,7.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AjGghQgjgWglgKIHMBhQAqAJAnAZg");
        this.shape_1.setTransform(28.8,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.2,-0.2,57.1,15.4), null);


    (lib.Group_16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0AVIHUhWQg4APgzAeInUBWQAzgeA4gPg");
        this.shape.setTransform(29.5,7.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ai0AVIHThWQg3APgzAeInUBWQA0geA3gPg");
        this.shape_1.setTransform(29.5,7.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.2,-0.2,59.5,15.2), null);


    (lib.Group_15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0AVIHThWQg2APg0AeInTBWQA0geA2gPg");
        this.shape.setTransform(29.5,7.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ai0AVIHThWQg2APg0AeInTBWQA0geA2gPg");
        this.shape_1.setTransform(29.5,7.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.2,-0.2,59.5,15.2), null);


    (lib.Group_13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AzKE5InOhaMAtjgIXIHOBag");
        this.shape.setTransform(169.7,32.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("A6YDfMAtjgIXIHOBaMgtjAIXg");
        this.shape_1.setTransform(169.7,32.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ADnBmInNhaIAAhxIHNBag");
        this.shape_2.setTransform(23.9,64.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AjmALIAAhwIHNBaIAABxg");
        this.shape_3.setTransform(23.9,64.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AWyp8IAAByIi+AjIAAKRIhTAPIgBqRIrNCEIAAKSIhTAPIgBqSIr+COIABKRIhUAPIAAqRIrOCEIABKRIhTAQIgBqSIi+AiIAAhxg");
        this.shape_4.setTransform(192.8,73.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AzzgUIi+AiIAAhxMAtjgIZIAAByIi+AjIAAKRIhTAQIgBqRIrNCDIAAKRIhTAQIgBqRIr+CNIABKRIhUAPIAAqRIrOCEIABKRIhTAQg");
        this.shape_5.setTransform(192.8,73.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ADnF2InNhbIAAqQIHNBag");
        this.shape_6.setTransform(42.9,99.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AjmEbIAAqQIHNBaIAAKRg");
        this.shape_7.setTransform(42.9,99.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ADnF2InNhaIAAqRIHNBag");
        this.shape_8.setTransform(123,84.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AjmEcIAAqRIHNBaIAAKRg");
        this.shape_9.setTransform(123,84.9);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("ADnF2InNhaIgBqRIHNBag");
        this.shape_10.setTransform(208.1,69.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("AjlEcIgCqRIHOBaIABKRg");
        this.shape_11.setTransform(208.1,69.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ADnF2InNhaIAAqRIHNBag");
        this.shape_12.setTransform(288.1,54.6);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AjmEcIAAqRIHNBaIAAKRg");
        this.shape_13.setTransform(288.1,54.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.2,-0.2,339.9,138.3), null);


    (lib.Group_12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AmzgWIFQhgIIXCNIlPBgg");
        this.shape.setTransform(44.4,12.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmzgWIFQhgIIXCNIlPBgg");
        this.shape_1.setTransform(44.4,12.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AimgIIFOhgIAABxIlPBgg");
        this.shape_2.setTransform(71.2,25.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AimgIIFOhgIAABxIlPBgg");
        this.shape_3.setTransform(71.2,25.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AENANIgBBzIoYiNIABhyg");
        this.shape_4.setTransform(27.6,23.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AkMgNIABhyIIYCMIgBBzg");
        this.shape_5.setTransform(27.6,23.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.2,-0.2,89.3,37.2), null);


    (lib.Group_11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AhTBtIldhXIIDiCIFeBXg");
        this.shape.setTransform(44.2,11.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmwAWIIEiCIFdBXIoECBg");
        this.shape_1.setTransform(44.2,11.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ACuLUIldhXIAC1QIFdBWg");
        this.shape_2.setTransform(18.3,86.2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AivJ9IAC1QIFcBWIgBVRg");
        this.shape_3.setTransform(18.3,86.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AEDrpIgCVRIoDCCIAB1Rg");
        this.shape_4.setTransform(61.6,84);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#009FE8").s().p("AkBpnIIEiCIgBVQIoECDg");
        this.shape_5.setTransform(61.6,84);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.2,-0.2,88.8,159.9), null);


    (lib.Group_10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ACzF4IlmhoIABqHIFmBng");
        this.shape.setTransform(18.8,69.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("AizEQIABqHIFmBnIgBKIg");
        this.shape_1.setTransform(18.8,69.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AmODPIlmhoISDk1IFmBog");
        this.shape_2.setTransform(76.6,21.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B3B3B3").s().p("Ar0BnISDk1IFmBoIyDE1g");
        this.shape_3.setTransform(76.6,21.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ApAipISDk1IgCKHIyDE2g");
        this.shape_4.setTransform(94.5,59.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#009FE8").s().p("ApAipISDk1IgCKHIyDE2g");
        this.shape_5.setTransform(94.5,59.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.2,-0.2,153.6,108.3), null);


    (lib.Group_9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AmygUIFWhWIIPB/IlXBWg");
        this.shape.setTransform(44.3,11.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmygUIFWhWIIPB/IlXBWg");
        this.shape_1.setTransform(44.3,11.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AiqgOIFWhWIgBBzIlVBVg");
        this.shape_2.setTransform(70.6,23.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AiqgOIFWhVIgBByIlVBWg");
        this.shape_3.setTransform(70.6,23.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AEIghIgBBzIgigJIAABZIhCgQIABhZIhCgPIAABYIhCgQIABhYIhBgQIAABYIhCgPIABhYIhCgQIAABYIhCgQIAAhYIgigIIABh0g");
        this.shape_4.setTransform(27.1,25.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("ACjCSIABhZIhCgPIAABYIhCgQIABhYIhBgQIAABYIhCgPIABhYIhCgQIAABYIhCgQIAAhYIgigIIABh0IIOCAIgBBzIgigJIAABZg");
        this.shape_5.setTransform(27.1,25.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AiqgBIFVhVIAABXIlWBWg");
        this.shape_6.setTransform(67.2,33);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFF000").s().p("AiqgBIFWhVIgBBYIlVBVg");
        this.shape_7.setTransform(67.2,33);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AiqgBIFVhVIAABXIlVBWg");
        this.shape_8.setTransform(54,29.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFF000").s().p("AiqgBIFVhVIAABYIlVBVg");
        this.shape_9.setTransform(54,29.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AiqAAIFVhWIAABYIlVBVg");
        this.shape_10.setTransform(40.9,26.6);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFF000").s().p("AiqAAIFVhWIAABXIlVBWg");
        this.shape_11.setTransform(40.9,26.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("AiqgBIFVhVIAABYIlVBVg");
        this.shape_12.setTransform(27.8,23.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFF000").s().p("AiqgBIFVhVIAABYIlVBVg");
        this.shape_13.setTransform(27.8,23.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.2,-0.2,89,42.9), null);


    (lib.Group_8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AlEC7IlmhoIPvkNIFmBng");
        this.shape.setTransform(69.1,19.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AqqBTIPvkNIFmBnIvvEOg");
        this.shape_1.setTransform(69.1,19.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ACzCzIlmhoIABj9IFmBog");
        this.shape_2.setTransform(18.7,45.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AizBLIABj9IFlBpIAAD8g");
        this.shape_3.setTransform(18.7,45.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AH4kFIAAD+IvvENIAAj9g");
        this.shape_4.setTransform(87,37.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#009FE8").s().p("An3AJIPvkOIAAD+IvvENg");
        this.shape_5.setTransform(87,37.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.2,-0.2,138.7,64.7), null);


    (lib.Group_7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AqQDGIiKgjIWqloICLAig");
        this.shape.setTransform(80.2,20.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AsaCjIWrloICKAiI2qFpg");
        this.shape_1.setTransform(80.2,20.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ABFBLIiJgiIAAhzICJAjg");
        this.shape_2.setTransform(7.7,44.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AhEAoIAAhyICJAjIAAByg");
        this.shape_3.setTransform(7.7,44.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ALVuUIABcUIhUAVIgC6gI1VFUIgBhzg");
        this.shape_4.setTransform(87.2,95.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AKAsLI1VFUIAAhzIWqlqIABcUIhUAVg");
        this.shape_5.setTransform(87.2,95.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ABGNiIiJgjIgC6gICJAjg");
        this.shape_6.setTransform(144.4,101);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AhEM/IgB6gICJAjIACagg");
        this.shape_7.setTransform(144.4,101);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.2,-0.2,161.1,188.8), null);


    (lib.Group_6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AisgNIFZhXIAAByIlZBYg");
        this.shape.setTransform(184.1,78.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BB641D").s().p("AisgNIFZhXIAAByIlZBXg");
        this.shape_1.setTransform(184.1,78.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AlwgEIFahXIGHBgIlaBXg");
        this.shape_2.setTransform(164.5,67.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B3B3B3").s().p("AlwgEIFahXIGHBgIlaBXg");
        this.shape_3.setTransform(164.5,67.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AIKiIIABDhIhVgVIAABzIGIBhIAABzI57mZIAAh0IGIBhIAAh0IhVgUIAAjhg");
        this.shape_4.setTransform(83.8,49);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("As9gPIAAhzIGIBhIAAh0IhVgUIAAjhIQUEDIAADgIhUgWIAABzIGIBhIAAB0g");
        this.shape_5.setTransform(83.8,49);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("Aq3hVIFahXIQVECIlbBXg");
        this.shape_6.setTransform(101,18.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B3B3B3").s().p("Aq3hUIFbhYIQUECIlaBXg");
        this.shape_7.setTransform(101,18.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AishEIFZhXIAADgIlZBXg");
        this.shape_8.setTransform(153.3,42.2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#BB641D").s().p("AishEIFZhXIAADgIlZBXg");
        this.shape_9.setTransform(153.3,42.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AisgNIFZhXIAAByIlZBXg");
        this.shape_10.setTransform(144.8,57.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#BB641D").s().p("AisgNIFZhXIAAByIlZBXg");
        this.shape_11.setTransform(144.8,57.1);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("AlwgEIFahXIGHBgIlaBXg");
        this.shape_12.setTransform(37.7,36.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#B3B3B3").s().p("AlwgEIFahXIGHBgIlaBXg");
        this.shape_13.setTransform(37.7,36.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.2,-0.2,202.6,89.8), null);


    (lib.Group_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAzBWIlmhmIEBhFIFmBng");
        this.shape.setTransform(31.6,44.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AkzgQIEBhFIFmBnIkBBEg");
        this.shape_1.setTransform(31.6,44.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ACzCyIlmhnIABj8IFmBng");
        this.shape_2.setTransform(18.7,60.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AizBLIABj8IFlBnIAAD8g");
        this.shape_3.setTransform(18.7,60.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AG7iYIAAD8It1DtIAAj9IEBhEIABj8IFzhkIgBD9g");
        this.shape_4.setTransform(80.9,44.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#009FE8").s().p("Am6BUIEBhEIABj8IFzhkIgBD9IEBhFIAAD8It1Dtg");
        this.shape_5.setTransform(80.9,44.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AgGBmIlmhnIFzhkIFmBng");
        this.shape_6.setTransform(63.1,10.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B3B3B3").s().p("AlsgBIFzhkIFmBnIlzBkg");
        this.shape_7.setTransform(63.1,10.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ACzCzIlmhoIABj8IFlBog");
        this.shape_8.setTransform(44.5,28.6);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AizBLIABj8IFlBnIAAD9g");
        this.shape_9.setTransform(44.5,28.6);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AAzBWIlmhmIEBhFIFmBmg");
        this.shape_10.setTransform(94.5,27.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AkzgQIEBhFIFmBmIkBBFg");
        this.shape_11.setTransform(94.5,27.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.2,-0.2,126.5,79.8), null);


    (lib.Group_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AM4mxIAACgIgkAJIAAEuIhUAVIAAkuIilAqIAAEtIhUAVIAAktIikApIgBEuIhUAVIABkuIilApIgBEuIhSAVIAAktIilApIAAEuIhUAVIAAkvIilApIAAEvIhUAVIAAkvIilAqIAAEvIhUAVIAAkvIgjAJIAAifg");
        this.shape.setTransform(118,52.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009FE8").s().p("AsUCDIgjAJIAAifIZvmeIAACgIgkAJIAAEuIhUAVIAAkuIilAqIAAEtIhUAVIAAktIikApIgBEuIhUAVIABkuIilApIgBEuIhSAVIAAktIilApIAAEuIhUAVIAAkvIilApIAAEvIhUAVIAAkvIilAqIAAEvIhUAVg");
        this.shape_1.setTransform(118,52.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ACuB7IlbhXIAAifIFbBXg");
        this.shape_2.setTransform(18.2,54.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AitAlIAAifIFbBWIAACfg");
        this.shape_3.setTransform(18.2,54.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AqJD6IldhXIZwmcIFdBXg");
        this.shape_4.setTransform(100.6,25.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#B3B3B3").s().p("AvmCjIZwmcIFcBXI5vGcg");
        this.shape_5.setTransform(100.6,25.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlbhXIAAkuIFbBXg");
        this.shape_6.setTransform(21.7,76.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_7.setTransform(21.7,76.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlbhXIAAkuIFbBXg");
        this.shape_8.setTransform(46.6,70.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_9.setTransform(46.6,70.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlchXIABkuIFcBXg");
        this.shape_10.setTransform(71.5,64.2);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_11.setTransform(71.5,64.2);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlbhXIAAkuIFbBXg");
        this.shape_12.setTransform(96.4,58);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_13.setTransform(96.4,58);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlchXIABkuIFbBXg");
        this.shape_14.setTransform(121.3,51.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#666666").s().p("AiuBsIABkuIFbBXIAAEug");
        this.shape_15.setTransform(121.3,51.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlbhXIAAkuIFbBXg");
        this.shape_16.setTransform(146.1,45.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_17.setTransform(146.1,45.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("ACuDDIlbhXIAAkuIFbBXg");
        this.shape_18.setTransform(171,39.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#666666").s().p("AitBsIAAkuIFbBXIAAEug");
        this.shape_19.setTransform(171,39.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.2,-0.2,201.7,97.5), null);


    (lib.Group_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("EgjRgHcIFchcMBBHAQUIlcBdg");
        this.shape.setTransform(226.6,57.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("EgjRgHcIFchcMBBHAQUIlcBdg");
        this.shape_1.setTransform(226.6,57.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("EAgkACfIABBzIhaBcIAFIJIp8ifIgGoKMgqYgKnIAFIIIp7ieIgFoKIhdiKIgChzg");
        this.shape_2.setTransform(209.2,98.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AVTLYIgFoKMgqYgKnIAFIIIp7ieIgFoKIhdiKIgChzMBBHAQVIACBzIhaBcIAEIJg");
        this.shape_3.setTransform(209.2,98.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AiugKIFchdIABByIlcBdg");
        this.shape_4.setTransform(435,115.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFF000").s().p("AiugKIFchdIABByIlcBdg");
        this.shape_5.setTransform(435,115.7);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AiAAAIFbhcIhaBcIlbBdg");
        this.shape_6.setTransform(430.6,126.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFF000").s().p("AiAAAIFbhbIhaBbIlbBcg");
        this.shape_7.setTransform(430.6,126.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AiwjVIFbhdIAGIIIlcBdg");
        this.shape_8.setTransform(426.3,156.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFF000").s().p("AiwjWIFbhcIAGIIIlcBdg");
        this.shape_9.setTransform(426.3,156.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchbIDBAwIlcBbg");
        this.shape_10.setTransform(344.5,121.7);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AkOAWIFchbIDBAwIlbBcg");
        this.shape_11.setTransform(344.5,121.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhcIAEGVIlbBdg");
        this.shape_12.setTransform(354.4,144.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFF000").s().p("AivicIFbhcIAEGVIlbBcg");
        this.shape_13.setTransform(354.4,144.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjAgxIgFmWg");
        this.shape_14.setTransform(327.3,146.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#666666").s().p("AhdCzIgFmVIDBAwIAEGVg");
        this.shape_15.setTransform(327.3,146.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_16.setTransform(328.2,137.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_17.setTransform(328.2,137.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFbhcIDCAwIlcBcg");
        this.shape_18.setTransform(318.4,115.2);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AkOAWIFbhcIDCAwIlcBdg");
        this.shape_19.setTransform(318.4,115.2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjAgxIgEmWg");
        this.shape_20.setTransform(301.2,140.1);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#666666").s().p("AheCzIgDmVIC/AwIAFGVg");
        this.shape_21.setTransform(301.2,140.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_22.setTransform(302.1,131.3);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_23.setTransform(302.1,131.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchcIDBAxIlcBcg");
        this.shape_24.setTransform(292.2,108.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#B3B3B3").s().p("AkOAWIFchcIDBAxIlcBcg");
        this.shape_25.setTransform(292.2,108.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("ABeiyIAFGWIjBgxIgEmWg");
        this.shape_26.setTransform(275,133.6);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#666666").s().p("AheCzIgEmWIDAAxIAFGWg");
        this.shape_27.setTransform(275,133.6);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_28.setTransform(276,124.8);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_29.setTransform(276,124.8);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchcIDBAxIlcBcg");
        this.shape_30.setTransform(266.1,102);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#B3B3B3").s().p("AkOAWIFchcIDBAxIlbBcg");
        this.shape_31.setTransform(266.1,102);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjAgxIgFmWg");
        this.shape_32.setTransform(248.9,127);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#666666").s().p("AhdCzIgFmWIDBAxIAEGWg");
        this.shape_33.setTransform(248.9,127);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("ABeiyIAEGWIi/gxIgEmVg");
        this.shape_34.setTransform(222.8,120.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#666666").s().p("AhdCzIgEmVIC/AwIAEGVg");
        this.shape_35.setTransform(222.8,120.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFbhcIDCAxIlcBcg");
        this.shape_36.setTransform(240,95.5);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("AkOAWIFbhcIDCAxIlcBcg");
        this.shape_37.setTransform(240,95.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_38.setTransform(249.8,118.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_39.setTransform(249.8,118.2);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchcIDBAxIlcBbg");
        this.shape_40.setTransform(213.8,88.9);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#B3B3B3").s().p("AkOAWIFchcIDBAxIlcBbg");
        this.shape_41.setTransform(213.8,88.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_42.setTransform(223.7,111.7);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_43.setTransform(223.7,111.7);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#231815").ss(1.5,1,1).p("ABeiyIAFGWIjBgxIgEmWg");
        this.shape_44.setTransform(196.6,113.9);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#666666").s().p("AheCzIgEmWIDAAxIAFGWg");
        this.shape_45.setTransform(196.6,113.9);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjAgxIgFmWg");
        this.shape_46.setTransform(170.5,107.3);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#666666").s().p("AhdC0IgFmXIDBAxIAEGWg");
        this.shape_47.setTransform(170.5,107.3);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchbIDBAwIlcBcg");
        this.shape_48.setTransform(187.7,82.4);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#B3B3B3").s().p("AkOAWIFchbIDBAwIlcBbg");
        this.shape_49.setTransform(187.7,82.4);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_50.setTransform(197.6,105.1);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FFF000").s().p("AivicIFbhcIAEGVIlbBdg");
        this.shape_51.setTransform(197.6,105.1);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#231815").ss(1.5,1,1).p("ABeiyIAFGWIjBgxIgEmWg");
        this.shape_52.setTransform(144.4,100.8);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#666666").s().p("AheCzIgEmVIDAAwIAFGVg");
        this.shape_53.setTransform(144.4,100.8);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchbIDBAwIlcBbg");
        this.shape_54.setTransform(161.6,75.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#B3B3B3").s().p("AkOAWIFchbIDBAwIlcBcg");
        this.shape_55.setTransform(161.6,75.8);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_56.setTransform(171.4,98.6);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FFF000").s().p("AivicIFbhcIAEGVIlbBcg");
        this.shape_57.setTransform(171.4,98.6);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjBgxIgEmWg");
        this.shape_58.setTransform(118.2,94.2);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#666666").s().p("AheCzIgEmVIDBAwIAEGVg");
        this.shape_59.setTransform(118.2,94.2);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFchbIDBAwIlbBbg");
        this.shape_60.setTransform(135.4,69.3);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#B3B3B3").s().p("AkOAWIFchcIDBAxIlbBcg");
        this.shape_61.setTransform(135.4,69.3);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_62.setTransform(145.3,92);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBcg");
        this.shape_63.setTransform(145.3,92);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#231815").ss(1.5,1,1).p("ABfiyIAEGWIjAgxIgFmWg");
        this.shape_64.setTransform(92.1,87.7);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#666666").s().p("AhdCzIgFmWIDBAxIAEGWg");
        this.shape_65.setTransform(92.1,87.7);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#231815").ss(1.5,1,1).p("AivicIFbhdIAEGWIlbBdg");
        this.shape_66.setTransform(119.2,85.5);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFF000").s().p("AivicIFbhdIAEGWIlbBdg");
        this.shape_67.setTransform(119.2,85.5);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#231815").ss(1.5,1,1).p("AkOAWIFbhcIDCAxIlcBbg");
        this.shape_68.setTransform(109.3,62.7);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#B3B3B3").s().p("AkOAWIFchcIDBAxIlcBbg");
        this.shape_69.setTransform(109.3,62.7);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("#231815").ss(1.5,1,1).p("AiwjVIFbhdIAGIJIlcBcg");
        this.shape_70.setTransform(91.4,72.7);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#FFF000").s().p("AiwjVIFbhdIAGIJIlcBcg");
        this.shape_71.setTransform(91.4,72.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.2,-0.2,453.8,188.7), null);


    (lib.Group_2_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AmzgWIFQhgIIXCNIlPBgg");
        this.shape.setTransform(44.5,12.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmzgWIFPhgIIYCNIlPBgg");
        this.shape_1.setTransform(44.5,12.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AimgIIFOhgIAABxIlPBgg");
        this.shape_2.setTransform(71.2,25.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AimgIIFOhgIAABxIlPBgg");
        this.shape_3.setTransform(71.2,25.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AENANIgBBzIoYiNIABhyg");
        this.shape_4.setTransform(27.6,23.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AkMgNIABhyIIYCMIgBBzg");
        this.shape_5.setTransform(27.6,23.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(-0.2,-0.2,89.3,37.2), null);


    (lib.Group_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAPoHIAfgJIgEFsIBYiNIAWAXIhvCxIgGJxIgeAJIAEmgIigipIAWgjICKCSIAElrIhqhyIAWgjIBVBbg");
        this.shape.setTransform(33.9,59.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AAIBxIifipIAXgjICJCSIAElrIhqhxIAWgkIBVBbIABiZIAegJIgDFtIBYiOIAVAYIhtCvIgHJyIgeAJg");
        this.shape_1.setTransform(33.9,59.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ABPAuIizg4IAVgjIC0A4g");
        this.shape_2.setTransform(16.6,12.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B3B3B3").s().p("AhkgKIAVgjIC0A4IgWAjg");
        this.shape_3.setTransform(16.6,12.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ACQBWIi0g5IhrhxICzA5g");
        this.shape_4.setTransform(20.9,19.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AgkAdIhrhyICzA6IBrBwg");
        this.shape_5.setTransform(20.9,19.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ACqByIizg6IigipICzA6g");
        this.shape_6.setTransform(17.8,59.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AgJA4IigipICzA6ICgCpg");
        this.shape_7.setTransform(17.8,59.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ABPAuIizg4IAWgjICzA4g");
        this.shape_8.setTransform(10.9,49);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#B3B3B3").s().p("AhkgKIAWgjICzA4IgWAjg");
        this.shape_9.setTransform(10.9,49);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("ABLAhIizg4IAegJICzA5g");
        this.shape_10.setTransform(27.9,4.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AhogXIAegJICzA4IgeAJg");
        this.shape_11.setTransform(27.9,4.1);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ABZBpIizg5IACiYICzA5g");
        this.shape_12.setTransform(26.3,12.2);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AhaAwIACiYICzA5IgCCYg");
        this.shape_13.setTransform(26.3,12.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ABYDSIizg4IAElrICzA5g");
        this.shape_14.setTransform(26,43.8);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#666666").s().p("AhbCZIAElqICzA4IgEFsg");
        this.shape_15.setTransform(26,43.8);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("AAuBjIizg6IBYiLICzA5g");
        this.shape_16.setTransform(33.5,33);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#B3B3B3").s().p("AiFAqIBYiMICzA5IhYCMg");
        this.shape_17.setTransform(33.5,33);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("ABYDsIizg5IAEmfICzA6g");
        this.shape_18.setTransform(25.5,88.6);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#666666").s().p("AhbCzIAEmfICzA6IgEGfg");
        this.shape_19.setTransform(25.5,88.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.2,-0.2,50.3,113.5), null);


    (lib.Group_1_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AmzgWIFPhgIIYCNIlQBgg");
        this.shape.setTransform(44.5,12.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmzgWIFPhgIIYCMIlQBhg");
        this.shape_1.setTransform(44.5,12.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AingIIFPhgIgBBxIlOBgg");
        this.shape_2.setTransform(71.3,25.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AingIIFPhgIgBBxIlOBgg");
        this.shape_3.setTransform(71.3,25.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AENANIgBBzIoYiMIABhzg");
        this.shape_4.setTransform(27.6,23.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AkMgMIABhzIIYCMIgBBzg");
        this.shape_5.setTransform(27.6,23.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(-0.2,-0.2,89.4,37.2), null);


    (lib.Group_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ADWBnIgBhkIhKgWIAABjgAKbDvIBOAYIABCHI3Sm/IgBiIIBOAYIgBjsIEUBSIAADsIBOAYIgBjsIEUBTIABDqIBNAYIgBjrIETBTIABDrIBOAXIgBjrIEUBSgAI3DRIAAhlIhLgWIABBkgAiLgDIAAhkIhLgWIABBkgAnshtIAAhkIhLgWIABBkg");
        this.shape.setTransform(75.3,51.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("ArogxIgBiIIBOAYIgBjsIEUBTIAADrIBOAYIgBjsIEUBTIABDrIBNAXIgBjrIETBTIABDrIBOAXIgBjrIEUBSIAADsIBOAXIABCIgAHtC7IBKAWIAAhlIhLgWgACLBRIBLAVIgBhkIhKgVgAjVgZIBKAXIAAhlIhLgWgAo2iDIBKAXIAAhlIhLgWg");
        this.shape_1.setTransform(75.3,51.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("Ak/APIFshvIETBTIlrBug");
        this.shape_2.setTransform(146.4,42.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B3B3B3").s().p("Ak/AOIFshuIETBTIlrBug");
        this.shape_3.setTransform(146.4,42.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2g9IFshwIABDrIlsBwg");
        this.shape_4.setTransform(160.3,58.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("Ai1g9IFqhwIABDrIlrBwg");
        this.shape_5.setTransform(160.3,58.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AjcAsIFrhvIBOAYIlrBvg");
        this.shape_6.setTransform(164.2,71.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B3B3B3").s().p("AjcAsIFrhvIBOAYIlrBug");
        this.shape_7.setTransform(164.2,71.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2gLIFshwIABCHIlsBvg");
        this.shape_8.setTransform(168.1,79.2);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("Ai2gLIFshwIABCHIlsBwg");
        this.shape_9.setTransform(168.1,79.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AjaAsIFrhuIBKAWIlrBvg");
        this.shape_10.setTransform(146.5,65.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AjaAtIFrhvIBKAWIlrBvg");
        this.shape_11.setTransform(146.5,65.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("Ai1AFIFrhuIAABlIlrBug");
        this.shape_12.setTransform(142.8,59.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("Ai1AFIFrhuIAABlIlrBug");
        this.shape_13.setTransform(142.8,59.8);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("Ak/AOIFshuIETBTIlrBug");
        this.shape_14.setTransform(111.1,31.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#B3B3B3").s().p("Ak/AOIFshuIETBTIlrBug");
        this.shape_15.setTransform(111.1,31.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2g9IFshwIABDrIlsBwg");
        this.shape_16.setTransform(124.9,47.6);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("Ai1g9IFrhwIABDrIlsBwg");
        this.shape_17.setTransform(124.9,47.6);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AjcAsIFrhuIBOAXIlrBug");
        this.shape_18.setTransform(128.9,60.6);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AjcAsIFrhuIBOAXIlrBug");
        this.shape_19.setTransform(128.9,60.6);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AjaAtIFrhvIBKAWIlrBvg");
        this.shape_20.setTransform(111.2,55.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#B3B3B3").s().p("AjaAtIFrhvIBKAWIlrBvg");
        this.shape_21.setTransform(111.2,55.3);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2AGIFshvIABBlIlsBug");
        this.shape_22.setTransform(107.5,49.2);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("Ai2AFIFshuIABBkIlsBvg");
        this.shape_23.setTransform(107.5,49.2);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2g9IFshwIABDrIlsBwg");
        this.shape_24.setTransform(89.6,37);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFFFFF").s().p("Ai2g9IFshwIABDrIlsBwg");
        this.shape_25.setTransform(89.6,37);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("Ak/AOIFshuIETBTIlsBug");
        this.shape_26.setTransform(75.8,21.1);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#B3B3B3").s().p("Ak/AOIFrhuIEUBTIlsBug");
        this.shape_27.setTransform(75.8,21.1);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("AjcAsIFrhvIBOAYIlrBvg");
        this.shape_28.setTransform(93.5,50);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#B3B3B3").s().p("AjcAsIFrhuIBOAXIlrBvg");
        this.shape_29.setTransform(93.5,50);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("AjaAsIFrhuIBLAWIlsBvg");
        this.shape_30.setTransform(75.9,44.7);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#B3B3B3").s().p("AjaAtIFrhvIBLAXIlsBug");
        this.shape_31.setTransform(75.9,44.7);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("Ai1AGIFrhvIABBkIlsBvg");
        this.shape_32.setTransform(72.1,38.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("Ai2AGIFshvIABBkIlsBvg");
        this.shape_33.setTransform(72.1,38.5);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("Ai2g9IFshwIABDrIlsBwg");
        this.shape_34.setTransform(54.3,26.4);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FFFFFF").s().p("Ai2g9IFrhwIACDrIlsBwg");
        this.shape_35.setTransform(54.3,26.4);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("Ak/APIFshvIETBTIlrBug");
        this.shape_36.setTransform(40.4,10.5);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("Ak/AOIFshuIETBTIlrBug");
        this.shape_37.setTransform(40.4,10.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("AjcAsIFrhvIBOAYIlrBvg");
        this.shape_38.setTransform(58.2,39.4);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#B3B3B3").s().p("AjcAsIFrhvIBOAYIlrBug");
        this.shape_39.setTransform(58.2,39.4);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("AjaAtIFrhvIBKAXIlrBug");
        this.shape_40.setTransform(40.5,34.1);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#B3B3B3").s().p("AjaAtIFrhvIBKAXIlrBug");
        this.shape_41.setTransform(40.5,34.1);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("Ai1AGIFrhvIAABlIlrBug");
        this.shape_42.setTransform(36.8,27.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFFFFF").s().p("Ai1AGIFrhvIAABlIlrBug");
        this.shape_43.setTransform(36.8,27.9);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#231815").ss(1.5,1,1).p("AjcAsIFrhvIBOAYIlrBvg");
        this.shape_44.setTransform(22.9,28.8);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#B3B3B3").s().p("AjcAsIFrhvIBOAYIlrBug");
        this.shape_45.setTransform(22.9,28.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.2,-0.2,187.6,92.8), null);


    (lib.Group_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AiThCIF0BwIhMAVIl1hwg");
        this.shape.setTransform(23.3,67.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AjfgtIBMgVIF0BwIhNAVg");
        this.shape_1.setTransform(23.3,67.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5h7IF0BwIgBCHIl0hwg");
        this.shape_2.setTransform(19.4,75.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("Ai6AMIABiHIF0BwIgBCHg");
        this.shape_3.setTransform(19.4,75.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AHihdIBIgUIAAhlIhIAUgAqLDeIABjsIENhLIgBDsIBMgVIABjsIENhLIgBDsIBLgWIABjrIENhLIgBDtIBMgWIABjtIENhLIgBDtIBMgVIAACII2vGVIAAiIgACIACIBJgTIAAhlIhIAUgAjQBiIBJgUIAAhkIhIAUgAopDCIBJgUIAAhlIhIAVg");
        this.shape_4.setTransform(110.9,49.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("ArXDzIBMgVIABjsIENhLIgBDsIBMgVIABjsIENhLIgBDsIBLgWIABjrIENhLIgBDtIBMgWIABjtIENhLIgBDtIBMgVIAACII2vGVgAooBeIgBBkIBJgUIAAhlgAjPgCIgBBkIBJgUIAAhkgACJhiIgBBkIBJgTIAAhlgAHijCIAABlIBIgUIAAhlg");
        this.shape_5.setTransform(110.9,49.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AgzhdIF0BwIkNBLIl0hwg");
        this.shape_6.setTransform(40.6,39);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B3B3B3").s().p("AlAgSIENhLIF0BwIkNBLg");
        this.shape_7.setTransform(40.6,39);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5iuIF0BxIgBDsIl0hxg");
        this.shape_8.setTransform(27.1,54.6);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("Ai5A+IAAjsIFzBxIAADsg");
        this.shape_9.setTransform(27.1,54.6);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AiVhBIF0BvIhJAUIl0hvg");
        this.shape_10.setTransform(40.5,62.7);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AjegtIBJgUIF0BvIhJAUg");
        this.shape_11.setTransform(40.5,62.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5hqIF0BwIAABlIl1hwg");
        this.shape_12.setTransform(44.2,56.6);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("Ai6gFIABhlIF0BwIAABlg");
        this.shape_13.setTransform(44.2,56.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("AiThCIF0BwIhNAVIl0hvg");
        this.shape_14.setTransform(57.8,57.9);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#B3B3B3").s().p("AjggtIBNgVIFzBwIhLAVg");
        this.shape_15.setTransform(57.8,57.9);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("AgzhdIF0BwIkNBLIl0hwg");
        this.shape_16.setTransform(75.1,29.4);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#B3B3B3").s().p("AlAgSIENhLIF0BwIkNBLg");
        this.shape_17.setTransform(75.1,29.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5iuIF0BxIgBDsIl0hxg");
        this.shape_18.setTransform(61.6,45);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#666666").s().p("Ai6A+IABjsIF0BxIgBDsg");
        this.shape_19.setTransform(61.6,45);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AiVhBIF0BvIhJAVIl0hwg");
        this.shape_20.setTransform(75,53.1);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#B3B3B3").s().p("AjegtIBJgUIF0BvIhJAUg");
        this.shape_21.setTransform(75,53.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5hpIFzBvIAABkIl0hvg");
        this.shape_22.setTransform(78.7,47);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#666666").s().p("Ai5gFIAAhkIFzBvIAABlg");
        this.shape_23.setTransform(78.7,47);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("AiThCIF0BvIhNAWIl0hvg");
        this.shape_24.setTransform(92.3,48.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#B3B3B3").s().p("AjfgsIBMgWIFzBwIhMAVg");
        this.shape_25.setTransform(92.3,48.3);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5iuIF0BxIgBDsIl0hxg");
        this.shape_26.setTransform(96.1,35.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#666666").s().p("Ai6A+IABjsIF0BxIgBDsg");
        this.shape_27.setTransform(96.1,35.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("AgzhdIF0BwIkNBLIl0hwg");
        this.shape_28.setTransform(109.6,19.8);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#B3B3B3").s().p("AlAgSIENhLIF0BwIkNBLg");
        this.shape_29.setTransform(109.6,19.8);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("AiVhCIF0BwIhJAUIl0hvg");
        this.shape_30.setTransform(109.5,43.5);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#B3B3B3").s().p("AjegtIBJgUIF0BvIhJAVg");
        this.shape_31.setTransform(109.5,43.5);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5hqIF0BwIAABlIl1hwg");
        this.shape_32.setTransform(113.2,37.4);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#666666").s().p("Ai6gFIABhlIFzBwIAABlg");
        this.shape_33.setTransform(113.2,37.4);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("AiThCIFzBwIhMAVIlzhwg");
        this.shape_34.setTransform(126.8,38.7);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#B3B3B3").s().p("AjfgtIBMgVIFzBwIhMAVg");
        this.shape_35.setTransform(126.8,38.7);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("AgzhdIF0BwIkNBLIl0hwg");
        this.shape_36.setTransform(144.1,10.1);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("AlAgSIENhLIF0BwIkNBLg");
        this.shape_37.setTransform(144.1,10.1);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5iuIF0BxIgBDsIl0hxg");
        this.shape_38.setTransform(130.6,25.7);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#666666").s().p("Ai6A+IABjsIF0BxIgBDsg");
        this.shape_39.setTransform(130.6,25.7);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("AiVhBIF0BvIhJAUIl0hvg");
        this.shape_40.setTransform(144,33.8);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#B3B3B3").s().p("AjegtIBJgUIF0BvIhJAUg");
        this.shape_41.setTransform(144,33.8);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("Ai5hqIF0BwIAABlIl1hwg");
        this.shape_42.setTransform(147.7,27.8);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#666666").s().p("Ai6gFIABhlIF0BwIAABlg");
        this.shape_43.setTransform(147.7,27.8);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#231815").ss(1.5,1,1).p("AiThCIFzBwIhMAVIlzhwg");
        this.shape_44.setTransform(161.3,29);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#B3B3B3").s().p("AjfgtIBMgVIFzBwIhMAVg");
        this.shape_45.setTransform(161.3,29);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-0.2,-0.2,185,89), null);


    (lib.Group = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AgLGjIkbhUIEyrxIEbBVg");
        this.shape.setTransform(30.3,87.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("AkmFPIEyrxIEbBVIkyLwg");
        this.shape_1.setTransform(30.3,87.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ABQpWIFdMHIBUjOICJEwI0TFEIEzrxIB/Eag");
        this.shape_2.setTransform(94.1,69.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E75297").s().p("AlWiaIB/EaIEnrWIFdMHIBUjOICJEwI0TFEg");
        this.shape_3.setTransform(94.1,69.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AgGGWIkbhVIEnrWIEbBVg");
        this.shape_4.setTransform(73.2,41.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#B3B3B3").s().p("AkhFBIEnrWIEbBVIkmLWg");
        this.shape_5.setTransform(73.2,41.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ABjCSIkahVIBVjOIEaBVg");
        this.shape_6.setTransform(127,72.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#B3B3B3").s().p("Ai3A9IBVjOIEaBVIhVDOg");
        this.shape_7.setTransform(127,72.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.2,-0.2,160.4,130.2), null);


    (lib.ClipGroup_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AExBQInehgQg+gnhFgYIHeBgQBCAXBBAog");
        this.shape.setTransform(31.3,8.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AitgQQg+gnhFgYIHdBgQBDAXBBAog");
        mask.setTransform(31.3,8.8);

        // 图层_3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#231815").ss(1.5,1,1).p("AExBQInehgQg+gnhFgYIHeBgQBCAXBBAog");
        this.shape_1.setTransform(31.3,8.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#666666").s().p("AitgQQg+gnhFgYIHdBgQBDAXBBAog");
        this.shape_2.setTransform(31.3,8.8);

        var maskedShapeInstanceList = [this.shape_1,this.shape_2];

        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

        // 图层_1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AitgQQg+gnhFgYIHdBgQBDAXBBAog");
        this.shape_3.setTransform(31.3,8.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(-0.2,-0.2,63,18.1), null);


    (lib.元件20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ACmB4IlLhdIAAiSIFLBdg");
        this.shape.setTransform(16.6,49);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("AilAbIAAiSIFLBdIgBCSg");
        this.shape_1.setTransform(16.6,49);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AApBsIlLhdID6h6IFLBdg");
        this.shape_2.setTransform(29.1,35.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B3B3B3").s().p("AkiAPID6h6IFLBdIj6B6g");
        this.shape_3.setTransform(29.1,35.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AC6BSIlKhcQgSgFgLgTQgMgTAAgcIFLBcQAAAcALATQALATASAFg");
        this.shape_4.setTransform(31.1,56.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AiQgKQgTgFgKgTQgMgTAAgcIFKBcQAAAbAMAUQALATASAFg");
        this.shape_5.setTransform(31.1,56.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AB+CBIlLhdIBRikIFKBdg");
        this.shape_6.setTransform(45.6,21.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AjNAkIBRikIFKBdIhQCkg");
        this.shape_7.setTransform(45.6,21.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ABNBHIlLhcICygxIFLBcg");
        this.shape_8.setTransform(53.9,25.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#B3B3B3").s().p("Aj+gVICygxIFLBcIiyAxg");
        this.shape_9.setTransform(53.9,25.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AARBYIlLhcIErhTIFKBdg");
        this.shape_10.setTransform(64.6,8.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("Ak6gEIEqhSIFLBcIkrBRg");
        this.shape_11.setTransform(64.6,8.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ACmBmIlLhdIAAhtIFLBdg");
        this.shape_12.setTransform(62.8,17.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AilAIIAAhtIFLBdIAABug");
        this.shape_13.setTransform(62.8,17.4);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ABNBHIlKhcICwgxIFLBcg");
        this.shape_14.setTransform(73.5,20);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#B3B3B3").s().p("Aj+gVICxgxIFMBcIiyAxg");
        this.shape_15.setTransform(73.5,20);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("ADFBdIlLhdIg+hcIFLBcg");
        this.shape_16.setTransform(79.2,12.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#666666").s().p("AiGAAIg+hcIFLBcIA+Bdg");
        this.shape_17.setTransform(79.2,12.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AA5AnIlLhbIDaAOIFLBcg");
        this.shape_18.setTransform(98.1,16.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AA5AnIlLhbIDaANIFLBdg");
        this.shape_19.setTransform(98.1,16.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AiQgKQgSgFgLgTQgMgTAAgcIFLBcQAAAcAMATQAKASASAGg");
        this.shape_20.setTransform(85.8,41.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#666666").s().p("AiQgKQgSgFgLgTQgLgTAAgcIFLBcQAAAcALATQAKASASAGg");
        this.shape_21.setTransform(85.8,41.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(-1,-1,127.6,66.6), null);


    (lib.元件19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AD0ihIDaAOIAACFIh6AgQAAAlgTAfQgTAfgbAIQgbAHgTgUQgTgVAAglImgBzQAAAlgTAfQgTAfgbAHQgbAIgTgVQgTgUAAglIh9AiIAAiTID6h6IBRikIEphSgAAAheIAAhuIh3AhIg6B+gAAShjICxgwIg+hdIhzAgg");
        this.shape.setTransform(46.2,27.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E75297").s().p("Ak9EGQgTgUAAglIh9AiIAAiTID6h6IBRikIEphSIBNBzIDaAOIAACFIh6AgQAAAlgTAfQgTAfgbAIQgbAHgTgUQgTgVAAglImgBzQAAAlgTAfQgTAfgbAHQgHACgHAAQgSAAgOgPgAh3irIg6B+ICxgxIAAhugAASjQIAABtICxgwIg+hdg");
        this.shape_1.setTransform(46.2,27.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#009FE8").s().p("Ak9EGQgTgUAAglIh9AiIAAiTID6h6IBRikIEphSIBNBzIDaAOIAACFIh6AgQAAAlgTAfQgTAfgbAIQgbAHgTgUQgTgVAAglImgBzQAAAlgTAfQgTAfgbAHQgHACgHAAQgSAAgOgPgAh3irIg6B+ICxgxIAAhugAASjQIAABtICxgwIg+hdg");
            _this.shape_1.setTransform(46.2,27.7);
            setTimeout(function () {
                _this.shape_1.graphics.f("#E75297").s().p("Ak9EGQgTgUAAglIh9AiIAAiTID6h6IBRikIEphSIBNBzIDaAOIAACFIh6AgQAAAlgTAfQgTAfgbAIQgbAHgTgUQgTgVAAglImgBzQAAAlgTAfQgTAfgbAHQgHACgHAAQgSAAgOgPgAh3irIg6B+ICxgxIAAhugAASjQIAABtICxgwIg+hdg");
                _this.shape_1.setTransform(46.2,27.7);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(-1,-1,94.5,57.5), null);


    (lib.元件17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAAlBQAjgJAZAcQAZAbAAAwIAAGcQAAAwgZApQgYAogkAJQgiAIgZgbQgZgcAAgwIAAmcQgBgwAZgoQAZgpAjgIg");
        this.shape.setTransform(8.5,32.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6FB92C").s().p("Ag7EwQgZgcAAgwIAAmcQgBgwAZgoQAZgpAjgIQAjgJAZAcQAZAbAAAwIAAGcQAAAwgZApQgYAogkAJQgHACgIAAQgZAAgTgVg");
        this.shape_1.setTransform(8.5,32.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#FFF000").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
            _this.shape_1.setTransform(8.5,32.5);
            setTimeout(function () {
                _this.shape_1.graphics.f("#E75297").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },1000)
            setTimeout(function () {
                _this.shape_1.graphics.f("#6FB92C").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },2000)
        },3000)

    }).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(-1,-1,19.1,66.9), null);


    (lib.元件16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAAlCQAkgIAYAbQAZAcAAAwIABGcQAAAwgZApQgZAogjAJQgjAIgZgbQgZgcAAgwIgBmcQAAgwAZgoQAZgpAjgJg");
        this.shape.setTransform(8.6,32.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFF000").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
        this.shape_1.setTransform(8.6,32.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#E75297").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
            _this.shape_1.setTransform(8.5,32.5);
            setTimeout(function () {
                _this.shape_1.graphics.f("#6FB92C").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },1000)
            setTimeout(function () {
                _this.shape_1.graphics.f("#FFF000").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAYgpAjgJQAjgIAZAbQAZAcAAAwIABGcQAAAwgaApQgYAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },2000)
        },3000)

    }).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(-1,-1,19.1,67), null);


    (lib.元件15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAAlCQAjgIAZAbQAZAcAAAwIAAGcQABAwgZApQgZAogkAJQgiAIgZgbQgZgcAAgwIAAmcQAAgwAZgoQAZgpAigJg");
        this.shape.setTransform(8.5,32.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E75297").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAZgpAigJQAjgIAZAbQAZAcAAAwIAAGcQABAwgZApQgZAogkAJQgHACgIAAQgZAAgTgVg");
        this.shape_1.setTransform(8.5,32.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#6FB92C").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAZgpAigJQAjgIAZAbQAZAcAAAwIAAGcQABAwgZApQgZAogkAJQgHACgIAAQgZAAgTgVg");
            _this.shape_1.setTransform(8.5,32.5);
            setTimeout(function () {
                _this.shape_1.graphics.f("#FFF000").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAZgpAigJQAjgIAZAbQAZAcAAAwIAAGcQABAwgZApQgZAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },1000)
            setTimeout(function () {
                _this.shape_1.graphics.f("#E75297").s().p("Ag7EwQgZgcAAgwIAAmcQAAgwAZgoQAZgpAigJQAjgIAZAbQAZAcAAAwIAAGcQABAwgZApQgZAogkAJQgHACgIAAQgZAAgTgVg");
                _this.shape_1.setTransform(8.5,32.5);
            },2000)
        },3000)

    }).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(-1,-1,19.1,67), null);


    (lib.元件13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAAjyQCNgdCJAZQCDAYB1BJIg5CRQhAgohDgXIgCC/Ig5AMIABjcQiIgiiSAeQiPAdiHBUIgDDfIg5ALIACjDQhIA1g9A+Ig2h8QB2h0CChMQCHhNCOgcg");
        this.shape.setTransform(52.6,25.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009FE8").s().p("AlSBAQhIA1g9A+Ig2h8QB2h0CChMQCIhNCNgcQCOgdCHAZQCEAYB1BJIg5CRQhAgohDgXIgCC/Ig6AMIACjcQiJgiiRAeQiPAdiHBUIgCDfIg6ALg");
        this.shape_1.setTransform(52.6,25.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this;
        setInterval(function () {
            _this.shape_1.graphics.f("#FFF000").s().p("AlSBAQhIA1g9A+Ig2h8QB2h0CChMQCIhNCNgcQCOgdCHAZQCEAYB1BJIg5CRQhAgohDgXIgCC/Ig6AMIACjcQiJgiiRAeQiPAdiHBUIgCDfIg6ALg");
            _this.shape_1.setTransform(52.6,25.9);
            setTimeout(function () {
                _this.shape_1.graphics.f("#009FE8").s().p("AlSBAQhIA1g9A+Ig2h8QB2h0CChMQCIhNCNgcQCOgdCHAZQCEAYB1BJIg5CRQhAgohDgXIgCC/Ig6AMIACjcQiJgiiRAeQiPAdiHBUIgCDfIg6ALg");
                _this.shape_1.setTransform(52.6,25.9);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(-1,-1,107.2,53.8), null);


    (lib.元件12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AAAiDQBtgUBeA6IgXA3QhGgshRAGIgDDKIg5ALIADjLQhTAYhGBEIgVguQBehbBsgUg");
        this.shape.setTransform(300.2,21.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFF000").s().p("AgchCQhTAYhGBEIgVguQBehbBsgUQBtgUBdA6IgVA3QhGgshSAGIgCDKIg6ALg");
        this.shape_1.setTransform(300.2,21.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AAAiDQBvgUBcA6IgWA3QhFgshSAGIgDDKIg6ALIADjLQhSAYhHBDIgVguQBehaBsgUg");
        this.shape_2.setTransform(20.3,13.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AgchCQhTAYhGBDIgVguQBdhaBtgUQBugUBcA6IgVA3QhFgshSAGIgDDKIg6ALg");
        this.shape_3.setTransform(20.3,13.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this;
        setInterval(function () {
            _this.shape_3.graphics.f("#E75297").s().p("AgchCQhTAYhGBEIgVguQBehbBsgUQBtgUBdA6IgVA3QhGgshSAGIgCDKIg6ALg");
            _this.shape_3.setTransform(20.3,13.7);
            setTimeout(function () {
                _this.shape_3.graphics.f("#FFF000").s().p("AgchCQhTAYhGBEIgVguQBehbBsgUQBtgUBdA6IgVA3QhGgshSAGIgCDKIg6ALg");
                _this.shape_3.setTransform(20.3,13.7);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-1,-1,322.4,36.9), null);


    (lib.元件11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AHTm6IAAGeIMhiUIAACZIt0ChIgBjaIr+CMIABDcIt1CjIAAiZIMhiTIgBmdg");
        this.shape.setTransform(126.8,44.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFF000").s().p("AzzEiIMhiUIgBmcIOmisIAAGeIMhiTIAACYIt0CiIAAjcIr/CMIAADdIt0Cjg");
        this.shape_1.setTransform(126.8,44.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this;
        setInterval(function () {
            _this.shape_1.graphics.f("#009FE8").s().p("AzzEiIMhiUIgBmcIOmisIAAGeIMhiTIAACYIt0CiIAAjcIr/CMIAADdIt0Cjg");
            _this.shape_1.setTransform(126.8,44.3);
            setTimeout(function () {
                _this.shape_1.graphics.f("#FFF000").s().p("AzzEiIMhiUIgBmcIOmisIAAGeIMhiTIAACYIt0CiIAAjcIr/CMIAADdIt0Cjg");
                _this.shape_1.setTransform(126.8,44.3);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(-1,-1,255.6,90.5), null);


    (lib.元件10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AHpkoQgBCshYCIQhXCJh8AXIqlB9IACmdg");
        this.shape.setTransform(382.6,29.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009FE8").s().p("Anmh0IPOi0QAACshYCIQhXCJh9AXIqjB9g");
        this.shape_1.setTransform(382.6,29.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AHokPIgBGdIqlB9Qh7AXhXhpQhXhpAAiqg");
        this.shape_2.setTransform(48.8,78.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#009FE8").s().p("AmRC5QhWhpAAiqIPPi1IgBGdIqlB9QgWAFgVAAQhgAAhIhXg");
        this.shape_3.setTransform(48.8,78.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#6FB92C").s().p("Anmh0IPOi0QAACshYCIQhXCJh9AXIqjB9g");
            _this.shape_1.setTransform(382.6,29.7);
            _this.shape_3.graphics.f("#6FB92C").s().p("AmRC5QhWhpAAiqIPPi1IgBGdIqlB9QgWAFgVAAQhgAAhIhXg");
            _this.shape_3.setTransform(48.8,78.9);
            setTimeout(function () {
                _this.shape_1.graphics.f("#009FE8").s().p("Anmh0IPOi0QAACshYCIQhXCJh9AXIqjB9g");
                _this.shape_1.setTransform(382.6,29.7);
                _this.shape_3.graphics.f("#009FE8").s().p("AmRC5QhWhpAAiqIPPi1IgBGdIqlB9QgWAFgVAAQhgAAhIhXg");
                _this.shape_3.setTransform(48.8,78.9);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-1,-1,433.4,108.1), null);


    (lib.元件9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AjpAPIHUhaIgBA9InUBag");
        this.shape.setTransform(83.1,14.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6FB92C").s().p("AjpAPIHUhaIgBA9InUBag");
        this.shape_1.setTransform(83.1,14.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AjmiNIHUhaIgHF1InUBag");
        this.shape_2.setTransform(57.7,30.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6FB92C").s().p("AjmiNIHUhaIgHF1InUBag");
        this.shape_3.setTransform(57.7,30.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AjmiNIHUhaIgHF1InUBag");
        this.shape_4.setTransform(23.8,23.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#6FB92C").s().p("AjmiNIHThaIgGF1InUBag");
        this.shape_5.setTransform(23.8,23.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-1,-1,108.6,56), null);


    (lib.元件8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ABfDpImIhyQABh0A7hlQA6hkBWgiIGHByQhWAhg6BkQg7BlAAB1g");
        this.shape.setTransform(29.8,96.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AkpB3QABh0A7hlQA6hkBWgiIGHByQhWAhg6BkQg7BlAAB0g");
        this.shape_1.setTransform(29.8,96.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("ADvCEImEhwQgogMgZgnQgagqgBg7IGHByQACA6AZApQAYAnAmAMgADyCFIgDgB");
        this.shape_2.setTransform(31.5,119.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AiUAUQgogMgZgnQgZgqgCg7IGHByQACA6AaApQAXAoAnAMg");
        this.shape_3.setTransform(31.4,119.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ACyA9ImHhwIAkgJIGHBwg");
        this.shape_4.setTransform(53.4,26.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#B3B3B3").s().p("AjVgzIAkgJIGHBwIgkAJg");
        this.shape_5.setTransform(53.4,26.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ADEBtImHhxIAAhoIGHBxg");
        this.shape_6.setTransform(51.6,31.8);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AjDgEIAAhoIGHBxIAABng");
        this.shape_7.setTransform(51.6,31.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ADEBPImHhwIAAgtIGHBwg");
        this.shape_8.setTransform(55.2,23.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AjDghIAAgtIGHBwIAAAtg");
        this.shape_9.setTransform(55.2,23.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("ABlETImHhyIC+mzIGHByg");
        this.shape_10.setTransform(49.5,56.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("AkiChIC+myIGHBxIi+Gzg");
        this.shape_11.setTransform(49.5,56.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ADCBlImHhvQgPgKAAgZQAAgTAKgQQAKgRAOgEIGIBxQgOAEgLAQQgKARAAATQAAAYAPAJg");
        this.shape_12.setTransform(66.2,10.2);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AjFgLQgQgJAAgZQAAgTAKgQQAKgQAPgFIGIBxQgOAEgLAQQgKARAAASQAAAZAPAJg");
        this.shape_13.setTransform(66.2,10.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ACzBrImHhxIAihkIGHBwg");
        this.shape_14.setTransform(64.3,19.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#B3B3B3").s().p("AjUgGIAihkIGHBwIghBlg");
        this.shape_15.setTransform(64.3,19.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("Aijg/QgCgBgDABIg7AQIGHBwIA7gQQADAAACAAg");
        this.shape_16.setTransform(69.7,28.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#B3B3B3").s().p("AjjgvIA7gQQADgBACABIGHBwIgFAAIg7AQg");
        this.shape_17.setTransform(69.7,28.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AAUBoImHhxIFgheIGHBxg");
        this.shape_18.setTransform(81.9,85);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AlzgJIFgheIGHBxIlgBeg");
        this.shape_19.setTransform(81.9,85);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AHAhBImFhxQgHgBgIABInHB7QgQAEgLASQgLASAAAUIAAAWQgBAPAHALQAGALAKACIGIByQgKgEgGgKQgGgLAAgPIAAgWQAAgVALgSQALgSAQgEIHHh5QAGgCAGABQABAAACAB");
        this.shape_20.setTransform(106.6,47.7);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#B3B3B3").s().p("AmqBCQgKgCgGgLQgHgLABgPIAAgWQAAgUALgSQALgSAQgEIHHh7QAIgBAHABIGFBxQgGgBgGACInHB5QgQAEgLASQgLASAAAVIAAAWQAAAPAGALQAGAKAKADg");
        this.shape_21.setTransform(106.5,47.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AENCeImHhxIiSjKIGHBxg");
        this.shape_22.setTransform(92.2,70.1);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#666666").s().p("Ah6AtIiSjKIGHBxICSDKg");
        this.shape_23.setTransform(92.2,70.1);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("AiVAEQgdgHgWgZQgWgZgLglQgEgNgCgNIGHBxQADAOADAMQALAkAWAZQAVAYAcAJg");
        this.shape_24.setTransform(118.2,97.8);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#666666").s().p("AiVAEQgdgHgWgZQgWgYgLgmQgEgNgCgNIGHByQADANADAMQALAlAWAYQAVAYAcAJg");
        this.shape_25.setTransform(118.2,97.8);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#9F9F9F").s().p("AjHg3IAIgCIGHBxIgJACg");
        this.shape_26.setTransform(134,46.9);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#231815").ss(1.5,1,1).p("AiYhYIgOADIhIA+IGHBwIBIg9IAOgEg");
        this.shape_27.setTransform(141,45.4);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#B3B3B3").s().p("AjugXIBIg+IAOgDIGHBwIgOAEIhIA9g");
        this.shape_28.setTransform(141,45.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-1,-1,167,134.7), null);


    (lib.元件7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AmylUIDCDwIEvg1IDCDvIExg2IDPEBIgiA0IjCjwIkwA2IjCjwIkwA2IjCjwIk5A3IABhBg");
        this.shape.setTransform(76.9,34.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BB641D").s().p("AIdBlIkwA2IjCjwIkwA2IjCjxIk5A4IABhCIFNg6IDCDwIEvg2IDCDwIExg2IDPEBIgiA0g");
        this.shape_1.setTransform(76.9,34.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

        var _this = this
        setInterval(function () {
            _this.shape_1.graphics.f("#bba121").s().p("AIdBlIkwA2IjCjwIkwA2IjCjxIk5A4IABhCIFNg6IDCDwIEvg2IDCDwIExg2IDPEBIgiA0g");
            _this.shape_1.setTransform(76.9,34.1);
            setTimeout(function () {
                _this.shape_1.graphics.f("#BB641D").s().p("AIdBlIkwA2IjCjwIkwA2IjCjxIk5A4IABhCIFNg6IDCDwIEvg2IDCDwIExg2IDPEBIgiA0g");
                _this.shape_1.setTransform(76.9,34.1);
            },1000)
        },2000)

    }).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-1,-1,155.9,70.2), null);


    (lib.元件5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ABEghIDzg9IkwhMIjyA8QgfAIgWAkQgXAjABAqQAAAhAOAXQANAXAWAFIEuBMQgVgGgNgWQgNgXAAghQAAgqAVgkQAWgiAfgIg");
        this.shape.setTransform(44.6,27.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AkFBfQgWgFgNgXQgOgXAAghQgBgqAXgjQAWgkAfgIIDyg8IEwBMIjzA9QgfAIgWAiQgVAkAAAqQAAAhANAXQANAWAVAGg");
        this.shape_1.setTransform(44.6,27.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AFkiLQBIgSAzA5QAzA4AABhQAABigzBSQgyBShIASQhIARgzg4Qgyg4AAhiQAAg7AUg5QATg2AigpIhMifIiCFUQANAVAAAcQAAAlgSAeQgTAegbAHQgZAHgTgVQgTgVAAglQAAgcANgcIiCkRIhLDDQAhAZAUAtQATAuAAA6QAABigyBSQgzBShHARQhIASgzg4Qgzg5AAhhQAAhiAzhSQAyhSBIgSQAlgJAiAMICVmFIi3AuQgSAEgMATQgMAUAAAXQAAAXAMANQAMAOASgEQAHgCAFAFQAFAGAAAKQAAAJgFAIQgFAIgHACQgfAIgXgYQgWgZAAgrQAAgqAWgkQAWgjAggIIDzg9IhKDCIFBhQIAihbIhLATQgGABgEgEQgDgEAAgHIgBg6QAAgIAEgGQAEgGAFgBIDRg0QAFgCAEAFQAEAEAAAHIAAA6QAAAHgEAHQgEAGgFABIhdAXIgsBzIBWC1QAigdAjgJgAjQDuQAAgxgRgnQgPgmgcgVIg1CLQAJAOAAAUQAAAYgNAVQgNAUgSAFQgSAEgMgOQgNgOAAgZQAAgYANgVQAMgUASgFIAFgBIA1iLQgcgJgeAHQg9AQgrBFQgrBGAABTQAABUArAwQAsAwA8gQQA9gPAshFQArhGAAhTgAAADWQAMgDAIgNQAIgOAAgQQAAgPgIgKQgJgJgLADQgLADgIANQgIAOAAAPQAAAQAIAKQAJAJAKgDgAAXBYICAlNIkuBMICAENQAMgJALgDQAMgDALADgAFlEpQA9gPArhFQArhGAAhTQAAhTgrgwQgsgwg9APQgdAIgbAWIA1BwIAEgBQASgEANAOQAMAOAAAZQAAAYgMAVQgNAUgSAFQgSAEgNgOQgNgOAAgZQAAgVAKgTIg1hvQgcAkgQAsQgRAwAAAxQABBUArAwQArAwA9gQg");
        this.shape_2.setTransform(83.4,59.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFF000").s().p("AneHYQgzg5AAhhQAAhiAzhSQAyhSBIgSQAlgJAiAMICVmFIi3AuQgSAEgMATQgMAUAAAXQAAAXAMANQAMAOASgEQAHgCAFAFQAFAGAAAKQAAAJgFAIQgFAIgHACQgfAIgXgYQgWgZAAgrQAAgqAWgkQAWgjAggIIDzg9IhKDCIFBhQIAihbIhLATQgGABgEgEQgDgEAAgHIgBg6QAAgIAEgGQAEgGAFgBIDRg0QAFgCAEAFQAEAEAAAHIAAA6QAAAHgEAHQgEAGgFABIhdAXIgsBzIBWC1QAigdAjgJQBIgSAzA5QAzA4AABhQAABigzBSQgyBShIASQhIARgzg4Qgyg4AAhiQAAg7AUg5QATg2AigpIhMifIiCFUQANAVAAAcQAAAlgSAeQgTAegbAHQgZAHgTgVQgTgVAAglQAAgcANgcIiCkRIhLDDQAhAZAUAtQATAuAAA6QAABigyBSQgzBShHARQgSAFgQAAQgyAAgngrgAlkBJQg9AQgrBFQgrBGAABTQAABUArAwQAsAwA8gQQA9gPAshFQArhGAAhTQAAgxgRgnQgPgmgcgVIg1CLQAJAOAAAUQAAAYgNAVQgNAUgSAFQgSAEgMgOQgNgOAAgZQAAgYANgVQAMgUASgFIAFgBIA1iLQgPgFgRAAQgNAAgNADgADiAkQgRAwAAAxQABBUArAwQArAwA9gQQA9gPArhFQArhGAAhTQAAhTgrgwQgsgwg9APQgdAIgbAWIA1BwIAEgBQASgEANAOQAMAOAAAZQAAAYgMAVQgNAUgSAFQgSAEgNgOQgNgOAAgZQAAgVAKgTIg1hvQgcAkgQAsgAAACJQgLADgIANQgIAOAAAPQAAAQAIAKQAJAJAKgDQAMgDAIgNQAIgOAAgQQAAgPgIgKQgHgGgIAAIgFAAgAiXipICAENQAMgJALgDQAMgDALADICAlNg");
        this.shape_3.setTransform(83.4,59.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ACTEUIkshMQgzgNgfg0Qggg1AAhLQAAhhAyhSQAzhSBIgSQAfgHAcAHIEwBMQgfgHgdAIQhIASgyBSQgzBRAABhQAABLAgA2QAfAyAwAOgACWEUIgDAA");
        this.shape_4.setTransform(26.9,82.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#B3B3B3").s().p("AiZDJQgzgNgfg0Qghg2AAhLQABhhAyhRQAzhSBHgSQAfgIAdAHIEwBNQgfgHgdAHQhIASgyBSQgzBSAABhQAABLAgA1QAfAzAvANg");
        this.shape_5.setTransform(26.9,82.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AiTAWQgMgDgIgNQgIgNAAgTQAAgYANgVQAMgUASgFIAFgBIEwBNIgFABQgSAEgNAUQgNAUAAAZQAAATAIANQAIAMALAEg");
        this.shape_6.setTransform(30.6,82.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AiTAWQgMgDgJgNQgIgNAAgTQABgYANgVQAMgUASgFIAFgBIEvBNIgEABQgTAEgMAUQgNAUAAAZQAAATAIANQAIAMALAEg");
        this.shape_7.setTransform(30.6,82.7);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AB+BsIkwhNIA1iKIEwBNg");
        this.shape_8.setTransform(35.7,69.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AiyAfIA1iKIEwBNIg1CKg");
        this.shape_9.setTransform(35.7,69.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AC/iaIkwhNQAcAVAQAmQAQAnAAAxQAABTgrBFQgrBFg9APQgaAGgYgFIEvBMQAYAGAagGQA9gPAshGQArhFAAhTQAAgwgRgnQgPgmgcgVg");
        this.shape_10.setTransform(37.5,83.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AA1DlIkvhMQAYAFAagGQA9gPArhFQArhFAAhTQAAgxgQgnQgQgmgcgVIEvBNQAcAVAQAmQARAnAAAwQAABTgrBFQgsBGg9APQgOADgNAAQgMAAgLgDg");
        this.shape_11.setTransform(37.5,83.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ABODpIkwhMICVmGIEwBNg");
        this.shape_12.setTransform(47.1,39.9);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AjiCdICVmFIEwBMIiVGFg");
        this.shape_13.setTransform(47.1,39.9);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ADZCvIkvhMIiCkRIEvBMg");
        this.shape_14.setTransform(56.6,55.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#666666").s().p("AhWBjIiCkRIEvBMICCERg");
        this.shape_15.setTransform(56.6,55.1);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("AgIBOIkwhMIFBhPIEwBMg");
        this.shape_16.setTransform(69.2,29.6);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#B3B3B3").s().p("Ak4ACIFBhPIEwBMIlBBPg");
        this.shape_17.setTransform(69.2,29.6);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AiBAaQgTgFgMgTQgMgTAAgcQAAgdANgbIEwBMQgNAbAAAcQAAAcAMAUQALATASAFg");
        this.shape_18.setTransform(63.8,75.2);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AiBAaQgTgFgLgTQgNgTAAgcQAAgdAOgbIEvBMQgNAbAAAcQAAAcAMAUQALATASAFg");
        this.shape_19.setTransform(63.8,75.2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AiAgrIEvBMQgLgDgLADQgLADgMAJIkwhLQAMgJAMgDQALgDALACg");
        this.shape_20.setTransform(68.1,64.6);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#B3B3B3").s().p("AiugeQALgJANgDQALgDALACIEvBMQgMgDgKADQgLADgMAJg");
        this.shape_21.setTransform(68.1,64.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AgmhuQgCAAgDAAIjQA0QgFACgEAGQgEAGAAAHIAAA5QAAANAJACIEvBMQgIgCAAgMIgBg6QAAgIAEgGQAEgGAFgBIDRgzQACgBACAAg");
        this.shape_22.setTransform(91.1,11.1);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#B3B3B3").s().p("Aj/AjQgJgCAAgNIAAg5QAAgHAEgGQAEgGAFgCIDQg0IAFAAIEvBMIgEABIjRAzQgFABgEAGQgEAGAAAIIABA6QAAAMAIACg");
        this.shape_23.setTransform(91.1,11.1);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("ACUAAQAIACAFAIQAFAJAAAMQAAAQgIANQgIANgMADIkvhMQALgCAJgNQAIgOAAgPQAAgMgGgJQgFgIgHgCg");
        this.shape_24.setTransform(69.6,72.9);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#666666").s().p("AilAAQALgCAJgNQAIgOAAgPQAAgMgGgJQgFgIgHgCIEvBLQAIACAFAIQAFAJAAAMQAAAQgIANQgIANgMADg");
        this.shape_25.setTransform(69.6,72.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("ABYDNIkvhMIB/lNIEwBMg");
        this.shape_26.setTransform(77,47.4);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#666666").s().p("AjXCBICAlNIEvBMIiAFNg");
        this.shape_27.setTransform(77,47.4);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("ACHBUIkvhNIAihaIEvBNg");
        this.shape_28.setTransform(87,21.1);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#666666").s().p("AioAHIAihZIEvBMIgiBZg");
        this.shape_29.setTransform(87,21.1);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("AC+B2IkvhNIhMieIEwBMg");
        this.shape_30.setTransform(90.1,40.2);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#666666").s().p("AhxAqIhMifIEwBNIBLCeg");
        this.shape_31.setTransform(90.1,40.2);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("AheCkQgygMgfg0Qggg2AAhKQAAg7AUg4QATg3AigqIEvBNQghApgUA3QgUA4AAA7QAABLAgA1QAfAzAxAOg");
        this.shape_32.setTransform(92.2,68.4);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#B3B3B3").s().p("AheClQgygNgfg0Qggg2AAhKQAAg7AUg4QATg3AigpIEvBMQghApgUA3QgUA5AAA6QAABKAgA2QAfAzAxANg");
        this.shape_33.setTransform(92.2,68.4);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("ACzBeIkvhMIg1hvIEvBMg");
        this.shape_34.setTransform(97.9,56.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#666666").s().p("Ah8ARIg2huIEwBMIA1Bvg");
        this.shape_35.setTransform(97.9,56.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("AhWg3QgcgHgfAIQglAJghAcIEvBMQAjgdAjgJQAegHAcAGg");
        this.shape_36.setTransform(103.3,43);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("AjXgRQAhgcAlgJQAfgIAcAHIEuBLQgcgGgeAHQgjAJgjAdg");
        this.shape_37.setTransform(103.3,43);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("AiJAHQgMgEgIgMQgIgNAAgTQAAgUAKgUIEvBMQgKASAAAVQAAATAIAOQAIAMAMADg");
        this.shape_38.setTransform(100.9,66.4);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#666666").s().p("AiIAHQgNgEgIgMQgIgNAAgTQAAgUAKgUIEvBMQgKASAAAVQABATAHAOQAIAMAMADg");
        this.shape_39.setTransform(100.9,66.4);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("AiOglIEvBLQgHgCgHACIgDABIkwhLIADgBQAJgCAGACg");
        this.shape_40.setTransform(104.4,59);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FFFFFF").s().p("AifgkIACgBQAJgCAHACIEuBLQgHgCgHACIgDABg");
        this.shape_41.setTransform(104.4,59);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("AiTjvQAqALAZArQAcAtAABAQAABSgrBGQgrBGg9APQgZAGgagFIEvBMQAYAGAbgHQA9gPArhFQArhGAAhTQAAg/gbguQgbgsgrgLIkthLIgCgB");
        this.shape_42.setTransform(108.7,65.1);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#B3B3B3").s().p("AA1DuIkvhMQAaAFAZgGQA9gPArhGQArhGAAhSQAAhAgcgtQgZgsgpgLIEsBMQArALAbAsQAbAuAAA/QAABTgrBGQgrBFg9APQgOAEgNAAQgMAAgMgDg");
        this.shape_43.setTransform(108.7,65.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-1,-1,138.4,112.6), null);


    (lib.ClipGroup_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AkNhAIHQBhQAsAKAlAYInVhkQgkgWgogJgAkThCIAGAC");
        this.shape.setTransform(28.3,7.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjEghQgkgXgogJIHQBhQAsAKAlAYg");
        mask.setTransform(28.6,7.5);

        // 图层_3
        this.instance = new lib.Group_21();
        this.instance.parent = this;
        this.instance.setTransform(28.3,7.4,1,1,0,0,0,28.3,7.4);

        var maskedShapeInstanceList = [this.instance];

        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AjEghQgkgXgogJIHQBhQAsAKAlAYg");
        this.shape_1.setTransform(28.6,7.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(-0.2,-0.2,57.1,15.3), null);


    (lib.ClipGroup_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AkJhAIHMBhQAqAJAnAZInVhjQgjgWglgKgAkThCIAKAC");
        this.shape.setTransform(28.3,7.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AjGghQgjgWglgKIHMBhQAqAJAnAZg");
        mask.setTransform(28.8,7.5);

        // 图层_3
        this.instance = new lib.Group_17();
        this.instance.parent = this;
        this.instance.setTransform(28.3,7.4,1,1,0,0,0,28.3,7.4);

        var maskedShapeInstanceList = [this.instance];

        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AjGghQgjgWglgKIHMBhQAqAJAnAZg");
        this.shape_1.setTransform(28.8,7.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(-0.2,-0.2,57.1,15.4), null);


    (lib.ClipGroup_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0AVIHUhWQg4APgzAeInUBWQAzgeA4gPg");
        this.shape.setTransform(29.5,7.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai0AVIHThWQg3APgzAeInUBWQA0geA3gPg");
        mask.setTransform(29.5,7.4);

        // 图层_3
        this.instance = new lib.Group_16();
        this.instance.parent = this;
        this.instance.setTransform(29.5,7.4,1,1,0,0,0,29.5,7.4);

        var maskedShapeInstanceList = [this.instance];

        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ai0AVIHThWQg3APgzAeInUBWQA0geA3gPg");
        this.shape_1.setTransform(29.5,7.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(-0.2,-0.2,59.5,15.2), null);


    (lib.ClipGroup_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0AVIHThWQg2APg0AeInTBWQA0geA2gPg");
        this.shape.setTransform(29.5,7.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ai0AVIHThWQg2APg0AeInTBWQA0geA2gPg");
        mask.setTransform(29.5,7.3);

        // 图层_3
        this.instance = new lib.Group_15();
        this.instance.parent = this;
        this.instance.setTransform(29.4,7.3,1,1,0,0,0,29.4,7.3);

        var maskedShapeInstanceList = [this.instance];

        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ai0AVIHThWQg2APg0AeInTBWQA0geA2gPg");
        this.shape_1.setTransform(29.5,7.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(-0.2,-0.2,59.5,15.2), null);


    (lib.元件18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AhnjmICJgjQAZBAAXB8QAWB1AAA5QAAA1gJAhQgHAbgQAVIiKAjQARgVAHgbQAIghAAg1QAAg5gVh1QgXh8gZhAg");
        this.shape.setTransform(231.5,26.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E75297").s().p("AgqDaQAIghAAg1QAAg5gVh1QgXh8gZhAICJgjQAZBAAXB8QAWB1AAA5QAAA1gJAhQgHAbgQAVIiKAjQARgVAHgbg");
        this.shape_1.setTransform(231.5,26.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AAAlRQAYBAAXB8QAWB2AAA4QAAA1gJAhQgHAbgQAVIAcAHQAGACAEAHQAFAHAAAJQAAAIgFAFQgEAFgGgBIgngKIgKCNIgfgIIgKiSIgngKQgGgBgEgHQgFgHAAgJQAAgIAFgFQAEgFAGABIAcAHQgQgdgHgfQgJglAAg0QAAg5AVhrQAXhxAYg0g");
        this.shape_2.setTransform(221.1,37.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AgPFKIgKiRIgngKQgGgCgEgHQgFgGAAgJQAAgJAFgEQAEgFAGABIAcAHQgQgdgHgfQgJgmAAgzQAAg6AVhrQAXhwAYg1QAYBBAXB8QAWB2AAA4QAAA1gJAhQgHAbgQAVIAcAHQAGABAEAIQAFAHAAAJQAAAIgFAFQgEAFgGgBIgngKIgKCMg");
        this.shape_3.setTransform(221.1,37.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ABMgiIgcgHIiKAjIAcAGQAHACAEAHQAEAHAAAJQAAAOgJADICJgjQAKgDAAgNQAAgJgFgHQgEgHgGgCg");
        this.shape_4.setTransform(233.9,53.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E75297").s().p("AgvAZQAAgJgEgHQgEgHgHgCIgcgGICKgjIAcAHQAGACAEAHQAFAHAAAJQAAANgKADIiJAjQAJgDAAgOg");
        this.shape_5.setTransform(233.9,53.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("Ag/g0ICJgjIgKCMIiJAjg");
        this.shape_6.setTransform(230.1,62.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E75297").s().p("Ag/g0ICJgjIgKCMIiJAjg");
        this.shape_7.setTransform(230.1,62.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AA6gUQgDgBgCABIiKAiQADAAADAAIAbAHICKgig");
        this.shape_8.setTransform(222.7,49.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhQAOIgFAAICJgiQADgBADABIAcAHIiKAig");
        this.shape_9.setTransform(222.7,49.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AgLlSQgOgDgPADQgjAJgZAoQgZAoAAAxIAAGbQAAAlAQAbQAQAZAYAHICJAiQgYgHgPgYQgQgbAAglIAAmcQAAgwAZgoQAZgoAjgJQAPgEANADg");
        this.shape_10.setTransform(371.6,375.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("AhFEzQgYgHgPgZQgRgbABglIgBmbQAAgxAZgoQAZgoAjgJQAPgDAOADICJAiQgNgDgPAEQgjAJgZAoQgaAoAAAwIABGcQAAAlAQAbQAPAYAXAHg");
        this.shape_11.setTransform(371.6,375.4);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("AB7kwIiGgiQgPgDgOADQgjAJgZAoQgZAoAAAxIAAGbQAAAmAQAaQAPAZAZAHICIAiQgYgHgPgYQgQgbAAglIAAmcQAAgwAZgoQAZgoAjgJQAOgEAMADQABAAACAB");
        this.shape_12.setTransform(413.3,362.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AhDEzQgZgHgPgZQgQgaAAgmIAAmbQAAgxAZgoQAZgoAjgJQAOgDAPADICFAiQgLgDgOAEQgjAJgZAoQgZAoAAAwIAAGcQAAAlAQAbQAPAYAYAHg");
        this.shape_13.setTransform(413.1,362.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("AAyEJIAnoaIiKgjIgnIaQABASAHAMQAHAMALACICJAjQgLgDgHgMQgHgMAAgRg");
        this.shape_14.setTransform(277.7,156.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#666666").s().p("Ag+ESQgLgCgHgMQgHgMgBgSIAnoaICKAjIgnIaQAAARAHAMQAHAMALADg");
        this.shape_15.setTransform(277.7,156.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("AgnCCICXi+IiYFCQgLAYgVAFQgPAEgMgNQgMgNAAgWIAnoag");
        this.shape_16.setTransform(293.9,158.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFF000").s().p("AhkEaQgLgNAAgWIAnoaIAhGlICXi+IiYFCQgLAYgVAFIgHABQgLAAgKgKg");
        this.shape_17.setTransform(293.9,158.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("AgGBxIiKgjICXi+ICKAjg");
        this.shape_18.setTransform(290.6,160.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("AiQBOICXi+ICKAjIiXC+g");
        this.shape_19.setTransform(290.6,160.3);

        this.instance = new lib.Group_12();
        this.instance.parent = this;
        this.instance.setTransform(226.3,73.8,1,1,0,0,0,44.4,18.4);

        this.instance_1 = new lib.Group_1_0();
        this.instance_1.parent = this;
        this.instance_1.setTransform(226.2,90.9,1,1,0,0,0,44.4,18.3);

        this.instance_2 = new lib.Group_2_0();
        this.instance_2.parent = this;
        this.instance_2.setTransform(226.1,108.1,1,1,0,0,0,44.4,18.4);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("ADulSIiIghQgqgKgsALQhpAahMB7QhLB8gBCSQAABzAwBRQAvBPBLATICGAhQhHgUgthNQgwhRABhzQABiSBLh7QBKh8BrgaQAqgKAnAIgABFF5IgGgBADylRIgEgB");
        this.shape_20.setTransform(258.7,175.2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#666666").s().p("AhFFYQhMgTgvhPQgwhRABhzQAAiSBMh8QBLh7BqgaQAsgLApAKICJAhQgngIgrAKQhqAahLB8QhLB7gBCSQAABzAwBRQAtBNBHATg");
        this.shape_21.setTransform(258.5,175.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AABljQBqgbBLBWQBLBVAACUQgBCThLB7QhMB7hpAaQhqAbhLhWQhLhWAAiTQABiTBLh7QBMh7Bpgag");
        this.shape_22.setTransform(274.2,177.2);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#6FB92C").s().p("Ai1EpQhLhWAAiTQABiTBLh7QBMh7BpgaQBqgbBLBWQBLBVAACUQgBCThLB7QhMB7hpAaQgZAHgYAAQhLAAg5hCg");
        this.shape_23.setTransform(274.2,177.2);

        this.instance_3 = new lib.Group_11();
        this.instance_3.parent = this;
        this.instance_3.setTransform(226.2,191,1,1,0,0,0,44.1,79.7);

        this.instance_4 = new lib.Group_9();
        this.instance_4.parent = this;
        this.instance_4.setTransform(226.3,277.4,1,1,0,0,0,44.3,21.2);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("AB7kwIiGgiQgOgDgPADQgjAJgZApQgZAoAAAwIAAGcQAAAlAQAaQAPAZAZAHICIAiQgYgHgPgYQgPgbgBglIAAmcQAAgwAZgoQAZgoAjgJQAOgEAMADQACAAABAB");
        this.shape_24.setTransform(451.2,353.7);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#666666").s().p("AhDEzQgZgHgQgZQgPgaAAglIgBmcQAAgwAZgoQAZgpAjgJQAQgDAOADICGAiQgNgDgNAEQgkAJgZAoQgZAoABAwIAAGcQAAAlAQAbQAPAYAXAHg");
        this.shape_25.setTransform(451,353.7);

        this.instance_5 = new lib.Group_7();
        this.instance_5.parent = this;
        this.instance_5.setTransform(416.8,429.2,1,1,0,0,0,80.3,94.2);

        this.instance_6 = new lib.Group_6();
        this.instance_6.parent = this;
        this.instance_6.setTransform(226.2,321.6,1,1,0,0,0,101,44.6);

        this.instance_7 = new lib.Group_4();
        this.instance_7.parent = this;
        this.instance_7.setTransform(226.2,369.1,1,1,0,0,0,100.6,48.5);

        this.instance_8 = new lib.Group_3();
        this.instance_8.parent = this;
        this.instance_8.setTransform(225.9,437.2,1,1,0,0,0,226.6,94.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_25},{t:this.shape_24},{t:this.instance_4},{t:this.instance_3},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(-0.7,-1,497.9,532.3), null);


    (lib.元件14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("AGJgBIgIgBInOhjQg2gLg6AKQhsAUhfBaIHWBkQBdhbBtgTQA1gKA0AK");
        this.shape.setTransform(370,27.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AmEAIQBehaBtgUQA6gKA2ALIHOBjQg1gKg1AKQhtAThdBbg");
        this.shape_1.setTransform(369.7,27.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AD1BKInVhjIgUgvIHVBjg");
        this.shape_2.setTransform(355.3,36);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("AjggZIgUgvIHVBjIAUAug");
        this.shape_3.setTransform(355.3,36);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("ADqCYInVhkIACjLIHVBkg");
        this.shape_4.setTransform(371.5,39.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AjsA0IAEjLIHUBkIgCDLg");
        this.shape_5.setTransform(371.5,39.3);

        this.instance = new lib.ClipGroup_4();
        this.instance.parent = this;
        this.instance.setTransform(388.5,30.2,1,1,0,0,0,28.3,7.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("AEKBuIndhhIg2h7IHdBhg");
        this.shape_6.setTransform(146.8,71.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#666666").s().p("AjTANIg2h6IHdBhIA2B6g");
        this.shape_7.setTransform(146.8,71.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("AJyhhInJhdQiMgdiXAeQiNAciHBOQiDBLh2B0IHfBhQB2h1CBhLQCHhNCNgcQCLgcCEAXIARADQACABADAA");
        this.shape_8.setTransform(185,49.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#B3B3B3").s().p("Ap8BsQB2h0CDhLQCHhOCNgcQCXgeCMAdIHJBdQiEgXiLAcQiNAciHBNQiBBLh2B1g");
        this.shape_9.setTransform(183.9,49.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("ADuCSIndhhIACjCIHdBhg");
        this.shape_10.setTransform(162.8,75.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("AjvAxIACjCIHdBhIgCDCg");
        this.shape_11.setTransform(162.8,75.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("ADuCfIndhhIACjcIHdBig");
        this.shape_12.setTransform(224.7,62.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("AjvA9IACjbIHdBiIgCDbg");
        this.shape_13.setTransform(224.7,62.3);

        this.instance_1 = new lib.ClipGroup_3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(237.2,56.1,1,1,0,0,0,31.3,8.8);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("Aj8CHInWhaIPQizIHVBag");
        this.shape_14.setTransform(406.1,57.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#B3B3B3").s().p("ArRAtIPOizIHVBaIvOCzg");
        this.shape_15.setTransform(406.1,57.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("ADqD8InVhaIACmdIHUBbg");
        this.shape_16.setTransform(357.2,87.4);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#666666").s().p("AjrCiIACmdIHVBbIgCGcg");
        this.shape_17.setTransform(357.2,87.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("Aj9CIInVhbIPPi0IHWBbg");
        this.shape_18.setTransform(72.3,109.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#B3B3B3").s().p("ArRAtIPOi0IHWBbIvQC0g");
        this.shape_19.setTransform(72.3,109.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AFYDhIgGgBInPhaQhggTg9hiQg9hjAAiOIHUBbQAACNA+BkQA7BfBcAV");
        this.shape_20.setTransform(34.4,136.4);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#666666").s().p("Ah6CGQhggSg9hjQg9hjAAiNIHUBbQAACMA+BkQA7BgBcAUg");
        this.shape_21.setTransform(34.1,136.4);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AioB3InPhaIMgiTIHPBag");
        this.shape_22.setTransform(144,147.4);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#B3B3B3").s().p("Ap3AdIMgiTIHPBaIsgCTg");
        this.shape_23.setTransform(144,147.4);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("ADnB5InNhaIAAiXIHNBag");
        this.shape_24.setTransform(103.9,162.4);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#666666").s().p("AjmAfIAAiXIHNBaIAACXg");
        this.shape_25.setTransform(103.9,162.4);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("AjrCDInOhaIOlirIHOBag");
        this.shape_26.setTransform(230.7,90.1);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#B3B3B3").s().p("Aq5ApIOlirIHOBaIulCrg");
        this.shape_27.setTransform(230.7,90.1);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("ADnD8InNhaIAAmdIHNBag");
        this.shape_28.setTransform(184,119.3);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#666666").s().p("AjmCiIAAmdIHNBaIAAGdg");
        this.shape_29.setTransform(184,119.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("ADnCbInNhaIAAjbIHNBag");
        this.shape_30.setTransform(269.1,128.6);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#666666").s().p("AjmBBIAAjbIHNBaIAADbg");
        this.shape_31.setTransform(269.1,128.6);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("AipB3InOhaIMgiTIHPBag");
        this.shape_32.setTransform(317.5,115.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#B3B3B3").s().p("Ap3AdIMgiTIHOBaIsgCTg");
        this.shape_33.setTransform(317.5,115.5);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("ADrBRInWhfIABhCIHWBfg");
        this.shape_34.setTransform(186.2,297.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#666666").s().p("AjrgOIABhCIHWBfIgBBCg");
        this.shape_35.setTransform(186.2,297.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("ABFBNInWhfIFNg6IHWBfg");
        this.shape_36.setTransform(202.9,291.3);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("AmRgSIFNg6IHWBfIlNA6g");
        this.shape_37.setTransform(202.9,291.3);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("AFMCoInVhgIjCjvIHVBgg");
        this.shape_38.setTransform(227.2,307.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#666666").s().p("AiJBIIjCjvIHVBgIDCDvg");
        this.shape_39.setTransform(227.2,307.2);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("ABTBLInWhfIExg2IHWBfg");
        this.shape_40.setTransform(254.2,309.7);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#B3B3B3").s().p("AmDgUIExg2IHVBfIkwA2g");
        this.shape_41.setTransform(254.2,309.7);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("AFMCoInVhgIjCjvIHVBgg");
        this.shape_42.setTransform(277,325.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#666666").s().p("AiJBIIjCjvIHVBgIDCDvg");
        this.shape_43.setTransform(277,325.9);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#231815").ss(1.5,1,1).p("ABTBLInWhfIExg2IHWBfg");
        this.shape_44.setTransform(304,328.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#B3B3B3").s().p("AmCgUIEwg2IHVBfIkwA2g");
        this.shape_45.setTransform(304,328.3);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#231815").ss(1.5,1,1).p("AFMCoInVhgIjCjvIHVBgg");
        this.shape_46.setTransform(326.9,344.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#666666").s().p("AiJBIIjCjvIHVBgIDCDvg");
        this.shape_47.setTransform(326.9,344.5);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#231815").ss(1.5,1,1).p("AMbjqIgDBBIk8hHIjQDmIkzhFIjPDlIk0hFIjPDmIghg1IDej2IE0BFIDPjlIEzBEIDQjmg");
        this.shape_48.setTransform(94.2,258.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#666666").s().p("AsaECIDej3IE0BFIDPjkIEzBEIDPjmIFSBLIgCBBIk+hHIjPDnIkzhFIjPDlIk0hFIjPDmg");
        this.shape_49.setTransform(94.2,258.6);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#231815").ss(1.5,1,1).p("AjnAJIHQhTIgBBCInRBTg");
        this.shape_50.setTransform(196.8,234.1);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#BB641D").s().p("AjmAJIHQhSIgCBBInQBSg");
        this.shape_51.setTransform(196.8,234.1);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#231815").ss(1.5,1,1).p("AmQAEIHQhTIFRBMInQBTg");
        this.shape_52.setTransform(180.1,227.1);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#B3B3B3").s().p("AmQAEIHRhTIFQBMInQBSg");
        this.shape_53.setTransform(180.1,227.1);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#231815").ss(1.5,1,1).p("AiAhIIHRhUIjQDlInRBUg");
        this.shape_54.setTransform(154.7,241.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#BB641D").s().p("AiAhIIHRhUIjQDlInQBUg");
        this.shape_55.setTransform(154.7,241.8);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#231815").ss(1.5,1,1).p("AmBAIIHQhTIE0BEInRBTg");
        this.shape_56.setTransform(127.1,242.9);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#B3B3B3").s().p("AmCAIIHRhTIEzBEInQBTg");
        this.shape_57.setTransform(127.1,242.9);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#231815").ss(1.5,1,1).p("AiAhIIHQhUIjPDlInRBUg");
        this.shape_58.setTransform(103.2,257.9);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#BB641D").s().p("AiAhIIHQhUIjPDlInQBUg");
        this.shape_59.setTransform(103.2,257.9);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#231815").ss(1.5,1,1).p("AmCAIIHRhTIE0BEInRBTg");
        this.shape_60.setTransform(75.6,259);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#B3B3B3").s().p("AmCAHIHRhTIE0BGInRBSg");
        this.shape_61.setTransform(75.6,259);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#231815").ss(1.5,1,1).p("AiAhIIHQhUIjPDlInQBUg");
        this.shape_62.setTransform(51.6,274);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#BB641D").s().p("AiAhIIHQhUIjPDlInQBUg");
        this.shape_63.setTransform(51.6,274);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#231815").ss(1.5,1,1).p("AGBgCIADABQACAAADABAGBgCInOhiQg1gMg7ALQhsAUhfBZIHWBkQBdhaBtgTQA2gLAzAKg");
        this.shape_64.setTransform(90.1,20.4);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#B3B3B3").s().p("AmEAIQBehZBtgUQA6gLA2AMIHOBiQgzgKg2ALQhuAThdBag");
        this.shape_65.setTransform(89.7,20.4);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#231815").ss(1.5,1,1).p("AD1BKInVhjIgUgvIHVBjg");
        this.shape_66.setTransform(75.4,28.5);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#666666").s().p("AjggZIgUgwIHVBjIAUAwg");
        this.shape_67.setTransform(75.4,28.5);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#231815").ss(1.5,1,1).p("ADqCYInVhkIACjLIHVBkg");
        this.shape_68.setTransform(91.6,31.8);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#666666").s().p("AjsA0IAEjLIHUBkIgCDLg");
        this.shape_69.setTransform(91.6,31.8);

        this.instance_2 = new lib.ClipGroup_2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(108.6,22.7,1,1,0,0,0,28.3,7.4);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("#231815").ss(1.5,1,1).p("AjXAEIHUhWIgmBPInTBWg");
        this.shape_70.setTransform(99.9,80.9);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#E75297").s().p("AjWAEIHThWIgmBPInTBWg");
        this.shape_71.setTransform(99.9,80.9);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("#231815").ss(1.5,1,1).p("Anjg2QBTgNBZASQBeATBYAyQBWAyBMBNIHUhXQhNhMhWgyQhYgzhegTQhigThaARInDBUIgRAD");
        this.shape_72.setTransform(75.1,66.6);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#B3B3B3").s().p("AiJAUQhZgyhdgTQhZgShTANIHDhUQBagRBiATQBdATBZAzQBWAyBMBMInUBXQhLhNhWgyg");
        this.shape_73.setTransform(75.9,66.6);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f().s("#231815").ss(1.5,1,1).p("AAAjBQBdATBYAzQBWAyBNBMIglBPQgygyg3glIgCDRIg7gLIACjqQhHgmhJgPQhFgOhIAIIgCDrIg7gMIACjUQg4APgzAeIgjhdQBNgtBWgOQBYgPBcASg");
        this.shape_74.setTransform(44,81);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#666666").s().p("ACNDBIACjqQhHgmhJgPQhFgOhIAIIgCDrIg7gMIACjUQg4APgzAeIgjhdQBNgtBWgOQBYgPBcASQBdATBYAzQBWAyBNBMIglBPQgygyg3glIgCDRg");
        this.shape_75.setTransform(44,81);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f().s("#231815").ss(1.5,1,1).p("Ajog9IHThXIgCDSInTBXg");
        this.shape_76.setTransform(87.5,86.5);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#E75297").s().p("Ajog9IHThXIgCDSInTBXg");
        this.shape_77.setTransform(87.5,86.5);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f().s("#231815").ss(1.5,1,1).p("AjohKIHThWIgCDqInTBXg");
        this.shape_78.setTransform(53,78.3);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#E75297").s().p("AjohJIHThXIgCDqInTBYg");
        this.shape_79.setTransform(53,78.3);

        this.instance_3 = new lib.ClipGroup_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(41.9,70,1,1,0,0,0,29.5,7.4);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f().s("#231815").ss(1.5,1,1).p("AjWAEIHThWIglBPInUBWg");
        this.shape_80.setTransform(309.2,29.1);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#E75297").s().p("AjXAEIHThWIgkBPInUBWg");
        this.shape_81.setTransform(309.2,29.1);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("#231815").ss(1.5,1,1).p("Anog1IgMACAnog1QBYgOBZASQC7AmCdCeIHUhXQieiei7gmQhfgThdARg");
        this.shape_82.setTransform(284.4,14.7);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#B3B3B3").s().p("Ak9gxQhZgShYAOIHIhVQBdgRBfATQC7AmCeCeInUBXQidiei7gmg");
        this.shape_83.setTransform(285,14.7);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f().s("#231815").ss(1.5,1,1).p("AAAjBQC6AmCeCeIglBPQgxgyg4gmIgCDSIg7gMIACjpQhHgmhJgPQhJgPhEAJIgCDrIg7gMIACjUQg3APg0AeIgjheQCghcC3Alg");
        this.shape_84.setTransform(253.3,29.1);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#666666").s().p("ACNDAIACjpQhHgmhJgPQhJgPhEAJIgCDrIg7gMIACjUQg3APg0AeIgjheQCghcC3AlQC6AmCeCeIglBPQgxgyg4gmIgCDSg");
        this.shape_85.setTransform(253.3,29.1);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f().s("#231815").ss(1.5,1,1).p("Ajog9IHThXIgCDSInTBXg");
        this.shape_86.setTransform(296.8,34.7);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#E75297").s().p("Ajog9IHThXIgCDSInTBXg");
        this.shape_87.setTransform(296.8,34.7);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f().s("#231815").ss(1.5,1,1).p("AjohKIHThWIgCDrInTBWg");
        this.shape_88.setTransform(262.3,26.5);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#E75297").s().p("AjohKIHThWIgCDrInTBXg");
        this.shape_89.setTransform(262.3,26.5);

        this.instance_4 = new lib.ClipGroup_0();
        this.instance_4.parent = this;
        this.instance_4.setTransform(251.1,18,1,1,0,0,0,29.4,7.3);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f().s("#231815").ss(1.5,1,1).p("Aq2g5IHVhaIOYDNInVBag");
        this.shape_90.setTransform(296.3,241.2);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#B3B3B3").s().p("Aq2g5IHVhaIOYDNInVBag");
        this.shape_91.setTransform(296.3,241.2);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f().s("#231815").ss(1.5,1,1).p("AHNhVIgBA9Ij6g4IgGF0IhTgSIAHl1IkBg5IgGF0IhSgSIAGl1Ij5g4IABg8g");
        this.shape_92.setTransform(272.9,264.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#666666").s().p("AB6ESIAGl1IkAg5IgHF0IhSgSIAHl1Ij6g4IABg8IOYDOIgBA9Ij6g4IgGF0g");
        this.shape_93.setTransform(272.9,264.6);

        this.instance_5 = new lib.Group_13();
        this.instance_5.parent = this;
        this.instance_5.setTransform(211.5,212.7,1,1,0,0,0,169.7,68.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_4},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.instance_3},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_2},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(-1,-1,480.3,363.4), null);


    (lib.元件3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层_1
        this.instance = new lib.Group_2();
        this.instance.parent = this;
        this.instance.setTransform(294.8,285.2,1,1,0,0,0,24.9,56.5);

        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#231815").ss(1.5,1,1).p("ADujfIi8g3IgBAAIgGgBIgNgCIgCAAQgDAAgHAAIgBAAQgGAAgDAAIgCAAIgCABIgHAAIgBABIgVAEIgBAAIgLAEIggAPIgBAAIgJAGIAAAAIgJAGIgfAZIgSASIgkAwIgSAgIgBABIgZA+IAAABIgBACIgIAcIgBAFIgFAYIgBADIAAADIgEAeIAAA4IAAACIAFApIATA9IASAfIC0A1IAAAAIgOgXIgPgnIgHgZIAAgFIgCgGIgDgaIgBhAIAPhVIAWg6IASgjIACgDIAZgoIAageIAEgDIAFgGIAfgZIAJgGIAAAAIAVgMIAhgNIAVgEIABgBIAKgBIACAAQADAAAGAAIABAAQAHAAADAAIACAAg");
        this.shape.setTransform(273.1,210.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B3B3B3").s().p("AjDDlIgSgfIgTg9IgFgpIAAgCIAAg4IAEgeIAAgDIABgDIAFgYIABgFIAIgcIABgCIAAgBIAZg+IABgBIASggIAkgwIASgSIAfgZIAJgGIAAAAIAJgGIABAAIAggPIALgEIABAAIAVgEIABgBIAHAAIACgBIACAAIAJAAIABAAIAKAAIACAAIANACIAGABIABAAIC8A3IgcgFIgCAAIgKAAIgBAAIgJAAIgCAAIgKABIgBABIgVAEIghANIgVAMIAAAAIgJAGIgfAZIgFAGIgEADIgaAeIgZAoIgCADIgSAjIgWA6IgPBVIABBAIADAaIACAGIAAAFIAHAZIAPAnIAOAXIAAAAg");
        this.shape_1.setTransform(273.1,210.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#231815").ss(1.5,1,1).p("AgBogQBYgZA+BCQA/BBAAB3QABBegrBYQAtAlAZBAQAbBAAABRQAACUhOB/QhOB/huAgQhuAghOhSQhOhTgBiUQAAhRAahQQAYhOAtg+QgqhAAAheQgBh2A/hmQA+hlBYgag");
        this.shape_2.setTransform(288.7,242.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6FB92C").s().p("Ai7HtQhOhTgBiUQAAhRAahQQAYhOAtg+QgqhAAAheQgBh2A/hmQA+hlBYgaQBYgZA+BCQA/BBAAB3QABBegrBYQAtAlAZBAQAbBAAABRQAACUhOB/QhOB/huAgQgeAJgcAAQhKAAg4g7g");
        this.shape_3.setTransform(288.7,242.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#231815").ss(1.5,1,1).p("AhaDYIAcAYIAkAUIAQAFIABABICzA1IgdgMIgcgRIgDgDIgHgFIgOgNIgTgXIgUgeIgCgFIgDgFIgSgtIgLguIgBgBIgGg3IABhAIACgTIAAgBIADgTIAAgBIAEgUIAWhOIAZg5QACgGAFgJIABgCIAegvIizg1IgMARIgBABIgRAdIgBACIgZA0IAAABIgOAmIAAAAIgLAmIAAABIgIAoIAAAAIAAABIgDATIAAABIgCATIAAACIAAACIgBBCIAGAxIAAABIAFAXIAOAsIATAnIALARIADAEIADAEIADAEIADAEg");
        this.shape_4.setTransform(261.1,264.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#666666").s().p("AgIEJIgBAAIgRgGIgkgTIgcgYIgNgPIgDgFIgDgDIgDgEIgDgEIgLgSIgSgmIgPgsIgEgYIAAAAIgHgxIABhCIAAgCIAAgCIACgTIAAgBIADgTIABgBIAAAAIAIgpIAAAAIALgmIAAAAIANgmIAAgBIAZg0IABgCIARgeIABgBIAMgRICzA1IgeAvIgBADIgHAOIgZA6IgWBNIgDAVIAAABIgEATIAAABIgCATIgBA/IAHA3IAAABIALAuIASAuIADAFIADAFIATAeIATAWIAOAOIAHAFIAEADIAcARIAdALg");
        this.shape_5.setTransform(261.1,264.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#231815").ss(1.5,1,1).p("ADbCjIAAk8IgBgCIAAgGIAAgCIAAgDIgBgCIAAgDIAAgCIgBgDIAAgBIAAgBIgBgEIAAgBIgBgBIgFgRIAAAAIAAgBIgIgRIAAAAIAAAAIgGgKIAAgBIgFgGIAAAAIAAgBIgIgJIAAAAIgBgBIgCgCIgCgCIgBgCIgBAAIgDgDIgDgCIgBgBIgBgBIgBgBIgBAAIgCgBIgBgBIAAAAIgDgCIAAAAIgBAAIgCgCIgBAAIgBAAIgBgBIgBAAIgBgBIgBgBIgCAAIgBAAIgBgBIgCgBIlpBuIAEACIAKAEIABABIAHAEIABABIACABIABACIACABIACACIABABIALALIADAFIABABIAEAGIAAABQADACAEAHIAIATIAEAKIAAABIADALIAAADIABADIAAACIABAFIAAADIAAACIAAAFIABADIAAE8g");
        this.shape_6.setTransform(211.3,41.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BB641D").s().p("AiPgrIAAgDIAAgFIgBgCIAAgDIAAgFIAAgCIgBgDIAAgDIgDgLIAAgBIgEgKIgJgTIgFgJIgBgBIgEgGIgBgBIgDgFIgLgLIgCgBIgBgCIgCgBIgBgCIgDgBIgBgBIgGgEIgBgBIgKgEIgEgCIFohuIADABIAAABIACAAIACAAIABABIABABIAAAAIACABIABAAIAAAAIADACIABAAIAAAAIADACIAAAAIABABIACABIABAAIABABIABABIABABIACACIAEADIABAAIABACIABACIADACIAAABIABAAIAHAJIABABIAAAAIAFAGIAAABIAFAKIAAAAIABAAIAHARIAAABIABAAIAFARIABABIAAABIAAAEIAAABIABABIAAADIAAACIABADIAAACIAAADIABACIAAAGIAAACIAAE8IlpBug");
        this.shape_7.setTransform(211.3,41.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#231815").ss(1.5,1,1).p("ADmiTQAfAJAWAkQAWAkAAApIAAE4Iphi0IAAk4QAAgpAWgXQAVgXAfAJIAABkIHMCIg");
        this.shape_8.setTransform(166.4,39.6);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#666666").s().p("AkwBrIAAk4QAAgpAWgXQAVgXAfAJIAABkIHMCIIAAhkQAfAJAWAkQAWAkAAApIAAE4g");
        this.shape_9.setTransform(166.4,39.6);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#231815").ss(1.5,1,1).p("AmagMIFqhuIHLCHIlpBug");
        this.shape_10.setTransform(184.5,22.6);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#B3B3B3").s().p("AmagMIFqhuIHLCHIlpBug");
        this.shape_11.setTransform(184.5,22.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0AFIFphtIAABlIlpBsg");
        this.shape_12.setTransform(161.4,10.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#BB641D").s().p("Ai0AEIFphsIAABkIlpBtg");
        this.shape_13.setTransform(161.4,10.8);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5,1,1).p("ADEg0IAAgBIgDAAIgBAAIgDgCIgCAAIgCAAIgJAAIgEAAIAAAAIgBABIgFABIlpBtIAFgCIABAAIAEAAIABAAIAEAAIABAAIADAAIACAAIABAAIAEABIABAAIADABg");
        this.shape_14.setTransform(159.9,5.6);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AioA3IgBAAIgEAAIgBgBIgCAAIgDgBIgBAAIgEABIgBAAIgEABIgBAAIgFABIFphtIAFgBIABgBIAAAAIAEAAIAJAAIACAAIACAAIADABIABAAIADABIAAABIlpBsg");
        this.shape_15.setTransform(159.9,5.6);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5,1,1).p("ADGAzIl1hkIgBAAIgBgBIgFAAIAAAAIgJAAIgDABIgDABIFxBjIAEgBIAFAAIABAAIAFgBIABAAIAEABIACAAg");
        this.shape_16.setTransform(201,56.8);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("ADCAyIgCAAIgEgBIgBAAIgFABIgBAAIgFAAIgEABIlxhjIADgBIADgBIAJAAIAAAAIAFAAIABABIABAAIF1Bkg");
        this.shape_17.setTransform(201,56.8);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5,1,1).p("Ai0CWQgfAIgVgYQgVgYABgqQAAgpAVgiQAUgiAdgKQgOAGgJARQgKARAAASQAAAVAKAMQALAMAPgEIFnhfQAPgEALgSQALgSAAgVQABgTgKgMQgJgMgOABQAdgFAUAXQAUAYgBApQAAAqgWAjQgWAjgeAIg");
        this.shape_18.setTransform(200.1,76.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFF000").s().p("AjoCGQgVgYABgqQAAgpAVgiQAUgiAdgKQgOAGgJARQgKARAAASQAAAVAKAMQALAMAPgEIFnhfQAPgEALgSQALgSAAgVQABgTgKgMQgJgMgOABQAdgFAUAXQAUAYgBApQAAAqgWAjQgWAjgeAIIlnBhQgIACgHAAQgVAAgQgSg");
        this.shape_19.setTransform(200.1,76.9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5,1,1).p("AiTiXIgEABIgJAEIgFADIgBABIgGAEIgMALIgBAAIgFAGIgBABIgBACQgBACgBAAIgLATIAAAAIgIASIgDAKIAAAAIgCAKIgBABIgBAKIAAACIgBAGIAAAYIAEAVIADAJIAGALIACADIABACIACADIABABIACADIACABIACADIACABIACACIAFADIAFACIF3BnIgGgCIgDgCIgCgBIgDgBIgBgCIgEgDIgEgEIgCgCIgCgCIgFgHIgGgMIgEgOIgCgHIAAgCIgBgFIAAgDIAAgDIADgnIACgHIAAgDIAEgLIAAgBIAEgJIAMgVIAGgIIAMgOIAGgEIABgBIAGgEIABgBIAGgDIAHgDIAAAAIAEgBg");
        this.shape_20.setTransform(160,76.7);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#666666").s().p("Ai2AxIgFgCIgFgDIgCgCIgCgBIgCgDIgCgBIgCgDIgBgBIgCgDIgBgCIgCgDIgGgLIgDgJIgEgVIAAgYIABgGIAAgCIABgKIABgBIACgKIAAAAIADgKIAIgSIAAAAIALgTIACgCIABgCIABgBIAFgGIABAAIAMgLIAGgEIABgBIAFgDIAJgEIAEgBIFxBlIgEABIAAAAIgHADIgGADIgBABIgGAEIgBABIgGAEIgMAOIgGAIIgMAVIgEAJIAAABIgEALIAAADIgCAHIgDAnIAAADIAAADIABAFIAAACIACAHIAEAOIAGAMIAFAHIACACIACACIAEAEIAEADIABACIADABIACABIADACIAGACg");
        this.shape_21.setTransform(160,76.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5,1,1).p("AgCiVQACAAACACIAEACIAHAIIABAAIACAFIAAAAIAEALIAAABIAAAGIAAABIABAFIgBADIAAAEIAAACIgBAEIgDAMIgCAFIAAABIgEAHIgBACIgBACIgCACIgBABIgCACIgEAFIgIAGIgDABIlsBhIgHABIgBAAIgDAAIgCgBIF0BlIADAAIABABIAAAAIAEgBIABAAIFrhhIABgBIACAAIACgBIACgBIAAAAIABgBIAGgEIABgCIACgCIADgDIABgBIAAgBIADgEIABgCIABgBIAAgBIADgEIAAgBIAAAAIACgFIAAgBIACgEIAAgBIAAgCIABgDIAAAAIABgCIAAgDIAAgBIABgEIAAgJIgBgGIAAgBIgCgGIAAAAIgCgFIAAgBIgCgEIgBgBIgCgDIgBgBQgBgCgCgBIgBAAIgDgDIgBAAQgCgBgCAA");
        this.shape_22.setTransform(182.8,66.8);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#B3B3B3").s().p("AgNCVIgBAAIgEAAIl0hlIADAAIADAAIABABIAHgBIFshhIACgBIAJgGIAEgFIACgCIABgCIABgCIABgCIACgCIADgGIAAgBIADgFIADgNIABgDIAAgCIAAgEIABgDIgBgFIAAgBIAAgGIAAgBIgEgLIgBgBIgCgEIAAgBIgHgHIgEgDIgBAAIFvBjIAEACIABAAIADACIAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABIABAAIACAEIAAAAIADAFIAAAAIACAFIAAABIACAFIAAABIABAGIAAAJIgBAEIAAABIAAAEIgBABIAAABIgBADIAAACIAAAAIgCAFIAAAAIgCAFIAAABIgBAAIgCAFIAAABIgBABIgBACIgDAEIgBAAIAAABIgDAEIgCACIgCABIgFAEIgBABIAAAAIgCABIgCABIgCABIgBAAIlrBiIgCAAIgDAAg");
        this.shape_23.setTransform(182.8,66.9);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5,1,1).p("Ag2DDQg7AQgpgvQgpguABhSQABhRAqhFQAphDA6gRQgcAJgUAhQgVAigBApQgBApAVAXQAUAXAegHID4hDIgDDEg");
        this.shape_24.setTransform(141.5,108.4);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFF000").s().p("AiaCkQgpguABhSQABhRAqhFQAphDA6gRQgcAJgUAhQgVAigBApQgBApAVAXQAUAXAegHID4hDIgDDEIj3BDQgQAEgOAAQgoAAgegjg");
        this.shape_25.setTransform(141.5,108.4);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#231815").ss(1.5,1,1).p("ADBD0IgQgIIgCAAIgGgFIgBgBQgDgCgEgEIgBAAIgGgGIAAAAIgGgIIgBgBIgFgIIgBAAIgFgJIgJgVIgBAAIgDgLIAAgBIgGgXIAAgBIgCgMIgBgCIgBgqIAEgmIACgFIAAgFIAMgnIAPgjIAFgKIAAAAIAVgfIAYgbIADgCIAHgGIASgNIAUgKIAOgFIlyhkIgGACIAAAAIgKAEIgZANIgEADIgDACIgRAPIgDADIgSAUIAAABIgKAOIgDAFIgCADIgDAFIgCADIAAABIAAAAIgMAVIAAACIAAABIgFAKIAAABIgDAJIgBABIgPA9IAAADIgBABIgBAWIgBABIABAdIABAMIAAACIACALIABACIACALIAAABIADALIAAABIAEAKIAAABIAJAUIABAAIAFAJIABABIAFAHIAOAQIAGAGIABABIAHAFIASAIIF6BoIgJgDg");
        this.shape_26.setTransform(110.7,103.2);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#666666").s().p("AiwCQIgSgJIgHgEIgBgBIgHgGIgNgQIgFgHIgBgBIgFgIIgBgCIgJgUIAAAAIgDgKIgBgBIgDgKIAAgCIgDgLIAAgCIgCgLIAAgCIgBgMIAAgdIAAgBIABgWIABgBIAAgDIAPg9IABgBIADgJIAAgBIAFgKIAAAAIABgCIALgWIAAgBIAAAAIACgDIADgFIACgDIACgFIALgOIAAAAIASgVIADgDIARgOIAEgDIADgDIAZgNIAJgEIABAAIAGgBIFxBjIgOAGIgUAKIgSAMIgGAGIgDACIgZAbIgUAeIAAABIgFAKIgPAiIgMAoIAAAEIgCAGIgEAmIABArIABABIABAMIABACIAFAWIAAABIAEAKIAAABIAKAVIAFAJIAAABIAGAHIABABIAFAIIABAAIAGAGIABAAIAGAGIABABIAHAFIACABIAQAIIAAAAIAJADg");
        this.shape_27.setTransform(110.7,103.2);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#231815").ss(1.5,1,1).p("Ak8gQIFxBkIABAAIAFAAIABAAIABAAIAGAAIEAhEIlyhjIj5BCIgBAAIgGABIgFAAIgCABIgFgBIgBAAIgGgB");
        this.shape_28.setTransform(128.8,99.9);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#B3B3B3").s().p("AA4BVIgEgBIgBAAIlyhkIABAAIAGABIABgBIAGAAIAFgBIACAAID4hCIFyBjIkABEIgGAAIgBABg");
        this.shape_29.setTransform(129.1,99.9);

        this.instance_1 = new lib.Group_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(92.8,304.7,1,1,0,0,0,93.5,46.1);

        this.instance_2 = new lib.Group_5();
        this.instance_2.parent = this;
        this.instance_2.setTransform(182.6,120.5,1,1,0,0,0,63,39.6);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#231815").ss(1.5,1,1).p("ACnAzIAOgCIAKAAIAEAAIADAAIAEABIACAAIAHABIl4hlIgCAAIgFAAIgCAAIgFgBIgHAAIgDABIgOABIgDABIgEAAIFyBkIAGgBg");
        this.shape_30.setTransform(254.2,59.1);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FFFFFF").s().p("AjSgvIAEgBIADgBIAOgCIADAAIAHAAIAFAAIACAAIAFABIACAAIF4BmIgHgCIgCAAIgEgBIgDAAIgEgBIgKAAIgOADIgBAAIgGABg");
        this.shape_31.setTransform(254.2,59.1);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#231815").ss(1.5,1,1).p("AA2geQAegIAVgjQAVgiABgpQAAgpgUgXQgTgWgcAFQA5gNAoAtQApAvgBBSQgBBQgrBFQgqBFg7AQIj4BCIADjFg");
        this.shape_32.setTransform(264.5,87.2);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFF000").s().p("AjBAjID3hBQAegIAVgjQAVgiABgpQAAgpgUgXQgTgWgcAFQA5gNAoAtQApAvgBBSQgBBQgrBFQgqBFg7AQIj4BCg");
        this.shape_33.setTransform(264.5,87.2);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#231815").ss(1.5,1,1).p("AC4CVIlxhlIACjEIFxBlg");
        this.shape_34.setTransform(226.4,95.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#666666").s().p("Ai5AwIACjEIFxBlIgCDEg");
        this.shape_35.setTransform(226.4,95.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#231815").ss(1.5,1,1).p("AhEi1IAGACIAHAEIAGAEIAEAEIACACIABACIAEAEIABADIACACIAEAJIABACIACAGIAAABIABAFIACAHIAAACIABAEIAAADIAAAEIgBAaIgBAKIgBABIgCAKIAAABIgDAJIgBABIgGAQIgBABIgDAFIAAABIgEAHIgBABIgFAGIAAABIgCADIgBABIgDADIAAABIgIAHIgCAAIgBACIgEACIgBACIgEACIgBABIgGADIgBAAIgJADIj5BDIFyBkID7hDQACgBAEgCIAHgDIAAAAIADgCIAHgFIACgBIACgCIABgBIACgCIAEgEIAGgIIABAAIAFgHIAAAAIAEgIIABAAIACgFIABgCIACgEIAAgBIABAAIAEgKIAAgBIAAAAIADgKIAAgBIADgJIAAgBIABgKIABgBIAAgLIABgBIgDghIgFgNIgCgEIAAgCIgCgDIgBgCIgCgDIgBgCIgCgDIgCgBIgCgDIgBgBIgDgCIgBgCIgDgBIgBgCIgIgEIgGgC");
        this.shape_36.setTransform(242.6,72.5);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#B3B3B3").s().p("AlZBSID5hDIAJgDIABAAIAGgDIABgBIAEgCIABgCIAEgCIABgCIACAAIAIgHIAAgBIADgDIABgBIACgDIAAgBIAFgGIABgBIAEgHIAAgBIADgFIABgBIAGgQIABgBIADgJIAAgBIACgKIABgBIABgKIABgaIAAgEIAAgDIgBgEIAAgCIgCgHIgBgFIAAgBIgCgGIgBgCIgEgJIgCgCIgBgDIgEgEIgBgCIgCgCIgEgEIgGgEIgHgEIgGgCIF3BmIAIAEIABACIADABIABACIADACIABABIACADIACABIACADIABACIACADIABACIACADIAAACIACAEIAFANIADAhIgBABIAAALIgBABIgBAKIAAABIgDAJIAAABIgDAKIAAAAIAAABIgEAKIgBAAIAAABIgCAEIgBACIgCAFIgBAAIgEAIIAAAAIgFAHIgBAAIgGAIIgEAEIgCACIgBABIgCACIgCABIgHAFIgDACIAAAAIgHADIgGADIj7BDg");
        this.shape_37.setTransform(242.6,72.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#231815").ss(1.5,1,1).p("ACoAyIAMgBIAKAAIAFAAIACAAIAFAAIAJADIl4hmIgBAAIgBAAIgFAAIgDAAIgEgBIgKAAIgVAEIFxBjIAHgBg");
        this.shape_38.setTransform(217.9,122.3);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FFFFFF").s().p("AjSgvIAVgEIAKAAIAEAAIADAAIAFABIABABIABAAIF4BlIgJgCIgFgBIgCAAIgFAAIgKAAIgMABIgCABIgHABg");
        this.shape_39.setTransform(217.9,122.3);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#231815").ss(1.5,1,1).p("ADBD1IgBAAIgQgIIgBgBIgHgFIgBgBIgGgFIgPgQIgLgSIgEgJIgBgBIgEgKIAAAAIgDgLIgBAAIgDgLIAAgCIgDgKIAAgCIgCgLIAAgCIgBgMIABg2IACgEIAAgGIALgtIAHgTIAAgBIAEgKIAXgoIAcgkIADgCIALgKIADgCQACgCABgBIAOgKIAKgFIAYgJIlxhlIgGACIAAAAIgIADIgRAIIgCABIgBABIgEACIgDADIgEACIgKAIIgLAKIgCACIgFAFIgBACIgMAOIAAAAIgFAHIgDAEIgCADIgJANIgBADIAAAAIAAABIgMAWIgBABIAAABIgIAUIAAABIgGATIgBACIgFASIAAADIAAACIgEAUIAAABIgBA0IABAMIAAACIAEAYIAEAMIAAABIAEAKIAAABIAEAJIABACIAEAIIABACIAFAIIAAABIAFAIIABABIAGAHIAAAAIAIAHIAGAGIABABIAHAEIABABIAQAIIAAAAIAJADIFxBlg");
        this.shape_40.setTransform(110.5,168.4);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#666666").s().p("AioCTIgJgDIAAAAIgQgIIgBgBIgHgEIgBgBIgHgGIgGgHIgBAAIgGgHIAAgBIgGgIIgBgBIgEgIIgBgCIgFgIIAAgCIgEgJIAAgBIgEgKIAAgBIgDgMIgFgYIAAgCIgBgMIABg0IAAgBIAEgUIAAgCIABgDIAEgSIABgCIAGgTIAAgBIAIgUIAAgBIABgBIALgWIAAgBIABAAIACgDIAHgNIADgDIADgEIAFgHIAAAAIAMgOIABgCIAFgFIADgCIAKgKIAKgIIAEgCIADgDIAEgCIACgBIACgBIARgIIAGgDIABAAIAGgCIFxBlIgXAJIgKAFIgPAKIgDADIgEACIgKAKIgCACIgdAkIgXAoIgDAKIgBABIgHATIgLAtIAAAGIgCAEIgBA2IABAMIAAACIADALIAAACIACAKIAAACIADALIAAAAIAEALIAAAAIAEAKIAAABIAFAJIALASIAPAQIAGAFIABABIAHAFIABABIAQAIIABAAIAIADg");
        this.shape_41.setTransform(110.5,168.4);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#231815").ss(1.5,1,1).p("AHulIQA5gNAnAtQApAvgBBRQgBBSgqBFQgqBEg7AQIvPEFQg7AQgpgvQgpguABhSQABhSAqhEQAphDA5gRQgbAJgUAhQgVAhgBApQAAApAUAXQAVAYAdgIIPPkFQAdgIAWgiQAVgiAAgpQABgpgVgXQgTgWgbAFgAHqlHIAEgB");
        this.shape_42.setTransform(184.8,160.3);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFF000").s().p("ApNEpQgpguABhSQABhSAqhEQAphDA5gRQgbAJgUAhQgVAhgBApQAAApAUAXQAVAYAdgIIPPkFQAdgIAWgiQAVgiAAgpQABgpgVgXQgTgWgbAFQA5gNAnAtQApAvgBBRQgBBSgqBFQgqBEg7AQIvPEFQgPAEgOAAQgpAAgegjg");
        this.shape_43.setTransform(184.8,160.3);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#231815").ss(1.5,1,1).p("AE0kXIAGACIAHAEIAEADIAEADIACACIACACIAGAJIAGALIADAJIADASIAAADIAAAEIABAJIgBAFIAAAGIAAAFIAAABIgCAKIAAABIgDAKIAAAAIgDAKIAAAAIgHARIAAABIgIANIAAAAIgFAHIgDADIAAABIgEADIAAACIgCACIgCABIgFAFIgLAIIgBAAIgMAGIgDABIvPEEIgCABIgLABIgBAAIgFAAIgBAAIgGgBIFyBkIAEABIACAAIABAAIAEABIADAAIAFgBIPWkHIADAAIAAgBIAGgCIABAAIAGgDIAAAAIAAgBIALgHIACgCIACgBIAFgFIAAgBQAEgCAAgBIABgBIACgDIAAAAIAAAAIAFgHIAAgBQADgCACgFIADgFIAAgCIAHgQIABAAIAAgBIACgJIAAgBIADgKIAAAAIACgKIAAgBIABgaIgBgBIAAgCIgCgRIgGgSIgFgKIgFgGIgGgFIgCgCIgCgCIgJgFIgGgC");
        this.shape_44.setTransform(168.6,145.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#B3B3B3").s().p("AlUEYIgEAAIgBAAIgCAAIgEgBIlyhkIAGABIABAAIAFAAIABAAIAMgBIABgBIPOkEIAEgBIAMgGIABAAIALgIIAFgFIABgBIADgDIAAgBIAEgDIAAgBIADgDIAFgHIAAAAIAIgNIAAgBIAHgRIAAAAIADgJIABgBIACgKIAAgBIABgKIAAgBIABgFIAAgHIABgEIgBgJIAAgEIAAgDIgDgSIgDgJIgGgLIgHgJIgBgDIgCgBIgEgDIgEgEIgIgEIgGgBIFzBkIAAAAIAGACIAJAFIACACIACABIAFAGIAGAGIAFALIAGARIACAQIAAADIABABIgBAaIAAABIgCAKIAAABIgCAJIAAABIgDAJIAAABIgBAAIgGAQIgBABIgDAGIgFAHIAAABIgFAGIAAABIgBAAIgBADIgBABIgDADIgBABIgFAFIgCAAIgCACIgLAIIAAAAIgBAAIgFADIgBABIgGACIAAABIgEAAIvVEHIgFAAg");
        this.shape_45.setTransform(168.6,145.5);

        this.instance_3 = new lib.Group_8();
        this.instance_3.parent = this;
        this.instance_3.setTransform(204.9,187.3,1,1,0,0,0,69.1,32.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#231815").ss(1.5,1,1).p("AIaltQBBgPAtA0QAtA1gBBaQgBBdgwBNQgwBNhDASIwlEdQhDASgug1Qgug0ABhdQABhcAwhOQAuhLBBgSQgfAJgXAlQgYAmgBAuQAAAuAXAbQAXAaAhgJIQmkbQAhgJAYgnQAYgnABguQAAgtgWgaQgVgaggAGg");
        this.shape_46.setTransform(154.1,213.4);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#FFF000").s().p("AqGFKQgug0ABhdQABhcAwhOQAuhLBBgSQgfAJgXAlQgYAmgBAuQAAAuAXAbQAXAaAhgJIQmkbQAhgJAZgnQAXgnABguQAAgtgVgaQgWgaggAGQBBgPAtA0QAtA1gBBaQgBBdgwBNQgwBNhCASIwmEdQgRAEgQAAQgtAAgjgng");
        this.shape_47.setTransform(154.1,213.4);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#231815").ss(1.5,1,1).p("AC/EOIgFgCIgCgBIgNgGIgCgCIgDgBIgKgJIgFgEQAAAAgDgDIgRgTIgCgGIgCgCIgCgDIgBgCIgCgEIgBgCIgCgEIgBgCIgFgLIAAgCIgDgGIAAAAIgEgOIgFgSIAAgHIgCgEIAAgEIAAgEIAAgEIgBgIIgBgZIAEgvIACgMIASg8IATgoIABAAIAFgKIALgRIADgDIADgFIAfghIAFgEIACgDIAZgQIADgCIAFgCIAPgHIAEgBIAHgCIlkhhIgBAAIgGACIAAAAIgUAIIgEACIgDACIgDABIgCABIgPALQgCABgDACIgIAHIgPAPIgPASIAAABIgEADIgLASIgCAEIgEAFIgCAEIgBAAIgMAZIgBACIAAAAIgUA5IgCAMIgBADIAAACIgEAXIAAABIgCA6IABABIAAAEIAIAyIACACIABAHIABAAIAHATIABACIACAEIABACIACAEIABACIACADIACACQABADABAAIABADIAHAIIAAACIANANIACABIACACIAQAMIANAGIACABIADABIFmBiIAGAB");
        this.shape_48.setTransform(75.2,222.8);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#666666").s().p("AimCtIgEgCIgCAAIgNgGIgQgMIgCgDIgCAAIgNgOIgBgCIgGgIIgBgCIgCgDIgBgCIgCgEIgCgBIgCgEIgBgDIgCgDIgBgCIgHgTIgBgBIgBgGIgBgDIgJgxIAAgEIgBgBIACg6IAAgBIAEgYIAAgBIABgDIADgMIATg5IABAAIAAgCIAMgZIABAAIACgFIAEgEIABgFIANgRIADgEIAAAAIAPgSIAPgQIAIgGIAFgEIAPgKIADgBIACgBIADgCIAEgDIAUgIIAAAAIAHgCIAAAAIFkBhIgHACIgEACIgQAGIgEADIgDACIgYAQIgDADIgFADIgfAiIgDAEIgDAEIgLARIgGAKIAAAAIgTAnIgSA9IgCALIgEAwIAAAZIABAIIAAAEIACAEIAAADIABAFIABAHIADASIAFANIAAABIADAGIAAACIAFAKIABADIACAEIABACIABAEIACACIACADIACACIACAFIARAUIADADIAFAEIAKAJIADABIADABIAMAHIACAAIAGACg");
        this.shape_49.setTransform(75.2,222.8);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#231815").ss(1.5,1,1).p("ACgAwIALgBIABAAIAQAAIADABIAFAAIAKACIllhgIgHgBIgBAAIgBgBIgGAAIgCgBIgQAAIgCAAIgHABIgBAAIgLACIFlBgIAGgBg");
        this.shape_50.setTransform(192.7,171.8);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FFFFFF").s().p("ADEAwIgFAAIgDgBIgQAAIgBAAIgLABIgCABIgGABIllhgIALgCIABAAIAHgBIACAAIAQAAIACABIAGAAIABABIABAAIAHABIFlBgg");
        this.shape_51.setTransform(192.7,171.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#231815").ss(1.5,1,1).p("AFmkuIAFABIAHAEIADACIACABIAEADIADADIABACIADACIABACIADADIADAFIABADIADAFIACAFIABACIAEANIADATIAAAFIABACIgBATIgBAHIAAABIgCALIAAABIgCALIgBABIgDALIAAAAIgMAaIAAAAIgLARIAAAAIgHAIIgBABIgDADIgBABIgCADIgEADIgCABIgGAFIgCABIgDACIgSAIIwpEcIgCAAIgGABIgJAAIgBAAIgDAAIgBgBIgDAAIFlBhIAEAAIABABIACAAIACAAIAIAAIAKgBIQnkdIABgBIADAAIAAgBIAOgGIABAAIABgBIACgBIACgBIACgCIABgBIADgCIABgBIAEgCIACgDIACgBIAHgIIAAgBIADgDIAAAAIAAAAIAGgIIAAAAIAFgJIABAAIADgGIAAgCIAIgSIAAAAIAEgLIAAgBIAAAAIADgLIAAgBIACgLIAAgBIABgNIAAgBIAAgEIAAgMIgBgDIAAgEIgCgPIgIgWIgHgLIgEgFIgCgCIgCgCIgCgDIgHgFIgIgEIgCgBIgFgB");
        this.shape_52.setTransform(138.9,197.5);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#B3B3B3").s().p("AmOEvIgCAAIgCAAIgBgBIgEAAIllhhIADAAIABABIADAAIABAAIAJAAIAGgBIACAAIQpkcIASgIIADgCIACgBIAGgFIACgBIAEgDIACgDIABgBIADgDIABgBIAHgIIAAAAIALgRIAAAAIAMgaIAAAAIADgLIABgBIACgLIAAgBIACgLIAAgBIABgHIABgTIgBgCIAAgFIgDgTIgEgNIgBgCIgCgFIgDgFIgBgDIgDgFIgDgDIgBgCIgDgCIgBgCIgDgDIgEgDIgCgBIgDgCIgHgEIgFgBIFqBiIACABIAIAEIAHAFIACADIACACIACACIAEAFIAHALIAIAWIACAPIAAAEIABADIAAAMIAAAEIAAABIgBANIAAABIgCALIAAABIgDALIAAAAIAAABIgEALIAAAAIgIASIAAACIgDAGIgBAAIgFAJIAAAAIgGAIIAAAAIAAAAIgDADIAAABIgHAIIgCABIgCADIgEACIgBABIgDACIgBABIgCACIgCABIgCABIgBABIgBAAIgOAGIAAABIgDAAIgBABIwnEdIgKABg");
        this.shape_53.setTransform(138.9,197.5);

        this.instance_4 = new lib.Group_10();
        this.instance_4.parent = this;
        this.instance_4.setTransform(182.3,259.4,1,1,0,0,0,76.5,53.9);

        this.instance_5 = new lib.Group_0();
        this.instance_5.parent = this;
        this.instance_5.setTransform(211.3,383.8,1,1,0,0,0,92.2,44.3);

        this.instance_6 = new lib.Group();
        this.instance_6.parent = this;
        this.instance_6.setTransform(311.4,153.2,1,1,0,0,0,79.9,64.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_3},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_2},{t:this.instance_1},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-0.7,-1,392.1,429), null);


// stage content:
    (lib.无标题2 = function(mode,startPosition,loop) {
        if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

        // se2
        this.instance = new lib.元件7();
        this.instance.parent = this;
        this.instance.setTransform(1549,1005.4,1,1,0,0,0,76.9,34.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({x:1509.3},0).wait(1).to({x:1469.6},0).wait(1).to({x:1430},0).wait(1).to({x:1390.3},0).wait(1).to({x:1350.6},0).wait(1).to({x:1311},0).wait(1).to({x:1271.4},0).wait(1).to({x:1231.7},0).wait(1).to({x:1192},0).wait(1).to({x:1152.3},0).wait(1).to({x:1112.7},0).wait(1).to({x:1073.1},0).wait(1).to({x:1033.4},0).wait(1).to({x:993.7},0).wait(1).to({x:954},0).wait(1).to({x:914.4},0).wait(1).to({x:874.7},0).wait(1).to({x:835.1},0).wait(1).to({x:795.4},0).wait(1));

        // se4
        this.instance_1 = new lib.元件10();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1525,784.4,1,1,0,0,0,215.7,53);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({x:1485.3},0).wait(1).to({x:1445.6,y:784.5},0).wait(1).to({x:1406},0).wait(1).to({x:1366.2,y:784.6},0).wait(1).to({x:1326.6,y:784.7},0).wait(1).to({x:1286.9},0).wait(1).to({x:1247.2,y:784.8},0).wait(1).to({x:1207.5,y:784.9},0).wait(1).to({x:1167.8},0).wait(1).to({x:1128.1,y:785},0).wait(1).to({x:1088.4,y:785.1},0).wait(1).to({x:1048.8},0).wait(1).to({x:1009,y:785.2},0).wait(1).to({x:969.4,y:785.3},0).wait(1).to({x:929.7},0).wait(1).to({x:890,y:785.4},0).wait(1).to({x:850.3,y:785.5},0).wait(1).to({x:810.6},0).wait(1).to({x:770.9,y:785.6},0).wait(1));

        // se5
        this.instance_2 = new lib.元件11();
        this.instance_2.parent = this;
        this.instance_2.setTransform(1516.2,808.4,1,1,0,0,0,126.8,44.3);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({x:1476.5,y:808.5},0).wait(1).to({x:1436.7},0).wait(1).to({x:1397.1,y:808.6},0).wait(1).to({x:1357.3},0).wait(1).to({x:1317.6,y:808.7},0).wait(1).to({x:1277.9},0).wait(1).to({x:1238.2,y:808.8},0).wait(1).to({x:1198.4},0).wait(1).to({x:1158.7,y:808.9},0).wait(1).to({x:1118.9},0).wait(1).to({x:1079.2,y:809},0).wait(1).to({x:1039.5},0).wait(1).to({x:999.8,y:809.1},0).wait(1).to({x:960.1},0).wait(1).to({x:920.3,y:809.2},0).wait(1).to({x:880.6},0).wait(1).to({x:840.9,y:809.3},0).wait(1).to({x:801.2},0).wait(1).to({x:761.4,y:809.4},0).wait(1));

        // se3
        this.instance_3 = new lib.元件12();
        this.instance_3.parent = this;
        this.instance_3.setTransform(1520.5,715.1,1,1,0,0,0,160.2,17.4);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(1).to({regY:17.5,x:1480.8,y:715.2},0).wait(1).to({x:1441.1},0).wait(1).to({x:1401.5},0).wait(1).to({x:1361.8},0).wait(1).to({x:1322.1},0).wait(1).to({x:1282.5},0).wait(1).to({x:1242.8},0).wait(1).to({x:1203.1},0).wait(1).to({x:1163.5},0).wait(1).to({x:1123.7},0).wait(1).to({x:1084.1},0).wait(1).to({x:1044.4},0).wait(1).to({x:1004.7},0).wait(1).to({x:965.1},0).wait(1).to({x:925.4},0).wait(1).to({x:885.7},0).wait(1).to({x:846},0).wait(1).to({x:806.4},0).wait(1).to({x:766.7},0).wait(1));

        // se6
        this.instance_4 = new lib.元件13();
        this.instance_4.parent = this;
        this.instance_4.setTransform(1483.1,742.7,1,1,0,0,0,52.6,25.9);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(1).to({x:1443.3},0).wait(1).to({x:1403.6,y:742.8},0).wait(1).to({x:1364},0).wait(1).to({x:1324.2,y:742.9},0).wait(1).to({x:1284.5},0).wait(1).to({x:1244.8,y:743},0).wait(1).to({x:1205.1},0).wait(1).to({x:1165.4,y:743.1},0).wait(1).to({x:1125.7},0).wait(1).to({x:1086,y:743.2},0).wait(1).to({x:1046.3},0).wait(1).to({x:1006.6,y:743.3},0).wait(1).to({x:966.8},0).wait(1).to({x:927.2,y:743.4},0).wait(1).to({x:887.4},0).wait(1).to({x:847.7,y:743.5},0).wait(1).to({x:808},0).wait(1).to({x:768.3,y:743.6},0).wait(1).to({x:728.6},0).wait(1));

        // 图层_4
        this.instance_5 = new lib.元件14();
        this.instance_5.parent = this;
        this.instance_5.setTransform(1501.6,858.8,1,1,0,0,0,239.2,180.7);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({regX:239.1,x:1461.8},0).wait(1).to({x:1422.1},0).wait(1).to({x:1382.5},0).wait(1).to({x:1342.7},0).wait(1).to({x:1303.1},0).wait(1).to({x:1263.4},0).wait(1).to({x:1223.7},0).wait(1).to({x:1184},0).wait(1).to({x:1144.3},0).wait(1).to({x:1104.6},0).wait(1).to({x:1064.9},0).wait(1).to({x:1025.3},0).wait(1).to({x:985.5},0).wait(1).to({x:945.9},0).wait(1).to({x:906.2},0).wait(1).to({x:866.5},0).wait(1).to({x:826.8},0).wait(1).to({x:787.1},0).wait(1).to({x:747.4},0).wait(1));

        // se7
        this.instance_6 = new lib.元件9();
        this.instance_6.parent = this;
        this.instance_6.setTransform(1575,944.9,1,1,0,0,0,53.3,27);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).wait(1).to({x:1535.3},0).wait(1).to({x:1495.6},0).wait(1).to({x:1456},0).wait(1).to({x:1416.3},0).wait(1).to({x:1376.7},0).wait(1).to({x:1337},0).wait(1).to({x:1297.4},0).wait(1).to({x:1257.7},0).wait(1).to({x:1218.1},0).wait(1).to({x:1178.4},0).wait(1).to({x:1138.7},0).wait(1).to({x:1099.1},0).wait(1).to({x:1059.4},0).wait(1).to({x:1019.8},0).wait(1).to({x:980.1},0).wait(1).to({x:940.4},0).wait(1).to({x:900.8},0).wait(1).to({x:861.1},0).wait(1).to({x:821.5},0).wait(1));

        // d1
        this.instance_7 = new lib.元件15();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-727.4,750,1,1,0,0,0,8.5,32.5);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).wait(1).to({x:-671.6},0).wait(1).to({x:-615.9},0).wait(1).to({x:-560.3},0).wait(1).to({x:-504.5},0).wait(1).to({x:-448.8,y:750.1},0).wait(1).to({x:-393.1},0).wait(1).to({x:-337.4},0).wait(1).to({x:-281.7},0).wait(1).to({x:-226},0).wait(1).to({x:-170.2},0).wait(1).to({x:-114.5},0).wait(1).to({x:-58.9},0).wait(1).to({x:-3.1},0).wait(1).to({x:52.5},0).wait(1).to({x:108.3,y:750.2},0).wait(1).to({x:164},0).wait(1).to({x:219.7},0).wait(1).to({x:275.3},0).wait(1).to({x:331.1},0).wait(1));

        // d2
        this.instance_8 = new lib.元件16();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-685.6,737.1,1,1,0,0,0,8.6,32.5);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).wait(1).to({x:-629.9},0).wait(1).to({x:-574.2},0).wait(1).to({x:-518.5},0).wait(1).to({x:-462.7},0).wait(1).to({x:-407},0).wait(1).to({x:-351.4},0).wait(1).to({x:-295.7},0).wait(1).to({x:-239.9},0).wait(1).to({x:-184.2},0).wait(1).to({x:-128.5},0).wait(1).to({x:-72.8},0).wait(1).to({x:-17.1},0).wait(1).to({x:38.6},0).wait(1).to({x:94.3},0).wait(1).to({x:150},0).wait(1).to({x:205.8},0).wait(1).to({x:261.5},0).wait(1).to({x:317.1},0).wait(1).to({x:372.9},0).wait(1));

        // d3
        this.instance_9 = new lib.元件17();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-647.8,728.3,1,1,0,0,0,8.5,32.5);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).wait(1).to({regY:32.4,x:-592.1,y:728.2},0).wait(1).to({x:-536.3},0).wait(1).to({x:-480.6},0).wait(1).to({x:-424.9},0).wait(1).to({x:-369.1},0).wait(1).to({x:-313.4},0).wait(1).to({x:-257.7},0).wait(1).to({x:-201.9},0).wait(1).to({x:-146.2},0).wait(1).to({x:-90.4,y:728.3},0).wait(1).to({x:-34.7},0).wait(1).to({x:20.9},0).wait(1).to({x:76.7},0).wait(1).to({x:132.4},0).wait(1).to({x:188.2},0).wait(1).to({x:243.9},0).wait(1).to({x:299.7},0).wait(1).to({x:355.4},0).wait(1).to({x:411.2},0).wait(1));

        // 图层_5
        this.instance_10 = new lib.元件18();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-860.5,638,1,1,0,0,0,248.2,265.3);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).wait(1).to({x:-804.8},0).wait(1).to({x:-749},0).wait(1).to({x:-693.4},0).wait(1).to({x:-637.6},0).wait(1).to({x:-581.8},0).wait(1).to({x:-526.2},0).wait(1).to({x:-470.4},0).wait(1).to({x:-414.6},0).wait(1).to({x:-358.9},0).wait(1).to({x:-303.2},0).wait(1).to({x:-247.4},0).wait(1).to({x:-191.7},0).wait(1).to({x:-136},0).wait(1).to({x:-80.3},0).wait(1).to({x:-24.5},0).wait(1).to({x:31.2},0).wait(1).to({x:87},0).wait(1).to({x:142.7},0).wait(1).to({x:198.4},0).wait(1));

        // 图层_6
        this.instance_11 = new lib.元件3();
        this.instance_11.parent = this;
        this.instance_11.setTransform(1209.9,159.1,1,1,0,0,0,195.3,213.6);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).wait(1).to({x:1173,y:175.2},0).wait(1).to({x:1136.1,y:191.3},0).wait(1).to({x:1099.3,y:207.4},0).wait(1).to({x:1062.4,y:223.4},0).wait(1).to({x:1025.5,y:239.5},0).wait(1).to({x:988.6,y:255.5},0).wait(1).to({x:951.8,y:271.6},0).wait(1).to({x:914.9,y:287.7},0).wait(1).to({x:878,y:303.7},0).wait(1).to({x:841.1,y:319.8},0).wait(1).to({x:804.2,y:335.9},0).wait(1).to({x:767.4,y:352},0).wait(1).to({x:730.5,y:368.1},0).wait(1).to({x:693.7,y:384.1},0).wait(1).to({x:656.7,y:400.2},0).wait(1).to({x:619.9,y:416.3},0).wait(1).to({x:583,y:432.4},0).wait(1).to({x:546.2,y:448.4},0).wait(1).to({x:509.3,y:464.5},0).wait(1));

        // 图层_23
        this.instance_12 = new lib.元件19();
        this.instance_12.parent = this;
        this.instance_12.setTransform(992.9,386.8,1,1,0,0,0,46.2,27.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:976.8,y:393.3},0).wait(1).to({x:960.7,y:399.8},0).wait(1).to({x:944.6,y:406.3},0).wait(1).to({x:928.5,y:412.9},0).wait(1).to({x:912.4,y:419.4},0).wait(1).to({x:896.3,y:425.9},0).wait(1).to({x:880.2,y:432.4},0).wait(1).to({x:864.2,y:438.9},0).wait(1).to({x:848.1,y:445.4},0).wait(1).to({x:832,y:451.9},0).wait(1).to({x:815.9,y:458.4},0).wait(1).to({x:799.8,y:465},0).wait(1).to({x:783.7,y:471.5},0).wait(1).to({x:767.6,y:478},0).wait(1).to({x:751.5,y:484.5},0).wait(1).to({x:735.4,y:491},0).wait(1).to({x:719.3,y:497.5},0).wait(1).to({x:703.2,y:504},0).wait(1).to({x:687.1,y:510.5},0).wait(1).to({x:671,y:517.1},0).wait(1).to({x:654.9,y:523.6},0).wait(1).to({x:638.8,y:530.1},0).wait(1).to({x:622.7,y:536.6},0).wait(1).to({x:606.7,y:543.1},0).wait(1).to({x:590.6,y:549.6},0).wait(1).to({x:574.5,y:556.1},0).wait(1).to({x:558.4,y:562.6},0).wait(1).to({x:542.3,y:569.2},0).wait(1).to({x:526.2,y:575.7},0).wait(1).to({x:510.1,y:582.2},0).wait(1).to({x:494,y:588.7},0).wait(1).to({x:477.9,y:595.2},0).wait(1).to({x:461.8,y:601.7},0).wait(1).to({x:445.7,y:608.2},0).wait(1).to({x:429.6,y:614.7},0).wait(1).to({x:413.5,y:621.3},0).wait(1).to({x:397.4,y:627.8},0).wait(1).to({x:381.3,y:634.3},0).wait(1).to({x:365.3,y:640.8},0).wait(1));

        // 图层_7
        this.instance_13 = new lib.元件20();
        this.instance_13.parent = this;
        this.instance_13.setTransform(976.4,382.1,1,1,0,0,0,62.8,32.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:960.3,y:388.6},0).wait(1).to({x:944.2,y:395.1},0).wait(1).to({x:928.1,y:401.7},0).wait(1).to({x:912,y:408.2},0).wait(1).to({x:895.9,y:414.7},0).wait(1).to({x:879.8,y:421.2},0).wait(1).to({x:863.7,y:427.7},0).wait(1).to({x:847.6,y:434.2},0).wait(1).to({x:831.5,y:440.8},0).wait(1).to({x:815.4,y:447.3},0).wait(1).to({x:799.3,y:453.8},0).wait(1).to({x:783.2,y:460.3},0).wait(1).to({x:767.1,y:466.8},0).wait(1).to({x:751,y:473.3},0).wait(1).to({x:734.9,y:479.9},0).wait(1).to({x:718.9,y:486.4},0).wait(1).to({x:702.8,y:492.9},0).wait(1).to({x:686.7,y:499.4},0).wait(1).to({x:670.6,y:505.9},0).wait(1).to({x:654.5,y:512.4},0).wait(1).to({x:638.4,y:519},0).wait(1).to({x:622.3,y:525.5},0).wait(1).to({x:606.2,y:532},0).wait(1).to({x:590.1,y:538.5},0).wait(1).to({x:574,y:545},0).wait(1).to({x:557.9,y:551.5},0).wait(1).to({x:541.8,y:558.1},0).wait(1).to({x:525.7,y:564.6},0).wait(1).to({x:509.6,y:571.1},0).wait(1).to({x:493.5,y:577.6},0).wait(1).to({x:477.5,y:584.1},0).wait(1).to({x:461.4,y:590.6},0).wait(1).to({x:445.3,y:597.2},0).wait(1).to({x:429.2,y:603.7},0).wait(1).to({x:413.1,y:610.2},0).wait(1).to({x:397,y:616.7},0).wait(1).to({x:380.9,y:623.2},0).wait(1).to({x:364.8,y:629.7},0).wait(1).to({x:348.7,y:636.3},0).wait(1));

        // 图层_8
        this.instance_13 = new lib.元件5();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-286.9,755.8,1,1,0,0,0,68.2,55.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:-260.7,y:739.1},0).wait(1).to({x:-234.4,y:722.5},0).wait(1).to({x:-208.2,y:705.9},0).wait(1).to({x:-181.9,y:689.3},0).wait(1).to({x:-155.7,y:672.7},0).wait(1).to({x:-129.5,y:656.1},0).wait(1).to({x:-103.2,y:639.5},0).wait(1).to({x:-77,y:622.9},0).wait(1).to({x:-50.7,y:606.3},0).wait(1).to({x:-24.5,y:589.7},0).wait(1).to({x:1.8,y:573.1},0).wait(1).to({x:28,y:556.5},0).wait(1).to({x:54.2,y:539.9},0).wait(1).to({x:80.4,y:523.3},0).wait(1).to({x:106.7,y:506.7},0).wait(1).to({x:132.9,y:490.1},0).wait(1).to({x:159.2,y:473.5},0).wait(1).to({x:185.4,y:456.9},0).wait(1).to({x:211.6,y:440.3},0).wait(1).to({x:237.9,y:423.7},0).wait(1).to({x:264.1,y:407.1},0).wait(1).to({x:290.4,y:390.5},0).wait(1).to({x:316.6,y:373.9},0).wait(17));

        // se1
        this.instance_14 = new lib.se1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(1197.1,422.1,1,1,0,0,0,63.5,60.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:1177.8,y:430.1},0).wait(1).to({x:1158.6,y:438.2},0).wait(1).to({x:1139.4,y:446.3},0).wait(1).to({x:1120.1,y:454.3},0).wait(1).to({x:1100.9,y:462.4},0).wait(1).to({x:1081.7,y:470.5},0).wait(1).to({x:1062.5,y:478.6},0).wait(1).to({x:1043.2,y:486.6},0).wait(1).to({x:1024,y:494.7},0).wait(1).to({x:1004.8,y:502.8},0).wait(1).to({x:985.6,y:510.8},0).wait(1).to({x:966.3,y:518.9},0).wait(1).to({x:947.1,y:527},0).wait(1).to({x:927.9,y:535.1},0).wait(1).to({x:908.7,y:543.1},0).wait(1).to({x:889.4,y:551.2},0).wait(1).to({x:870.2,y:559.3},0).wait(1).to({x:851,y:567.3},0).wait(1).to({x:831.8,y:575.4},0).wait(1).to({x:812.5,y:583.5},0).wait(1).to({x:793.3,y:591.6},0).wait(1).to({x:774.1,y:599.6},0).wait(1).to({x:754.9,y:607.7},0).wait(17));

        // 图层_10
        this.instance_15 = new lib.元件8();
        this.instance_15.parent = this;
        this.instance_15.setTransform(1176.8,416.1,1,1,0,0,0,82.5,66.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({x:1157.6,y:424.2},0).wait(1).to({x:1138.5,y:432.3},0).wait(1).to({x:1119.3,y:440.4},0).wait(1).to({x:1100.1,y:448.5},0).wait(1).to({x:1081,y:456.5},0).wait(1).to({x:1061.8,y:464.6},0).wait(1).to({x:1042.6,y:472.7},0).wait(1).to({x:1023.5,y:480.8},0).wait(1).to({x:1004.3,y:488.9},0).wait(1).to({x:985.1,y:497},0).wait(1).to({x:966,y:505.1},0).wait(1).to({x:946.8,y:513.2},0).wait(1).to({x:927.6,y:521.3},0).wait(1).to({x:908.5,y:529.3},0).wait(1).to({x:889.3,y:537.4},0).wait(1).to({x:870.1,y:545.5},0).wait(1).to({x:851,y:553.6},0).wait(1).to({x:831.8,y:561.7},0).wait(1).to({x:812.6,y:569.8},0).wait(1).to({x:793.5,y:577.9},0).wait(1).to({x:774.3,y:586},0).wait(1).to({x:755.1,y:594.1},0).wait(1).to({x:736,y:602.2},0).wait(17));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#231815").s().p("AgwBMIAAhYQgIANgMALIgJgMQAegbAHgwIAQAEQAFABgHAEQgBAMgJAUIAEABQADADgFACIAABogAAJBHQgMAAgBgMIAAiEIANAAQAHAAgGAEIAAA1QAbgLAWgRIALAMQAFAFgIAAQgfAPgaALIAAAyQAAAHAEAAIAmAAQAIgBAAgHIACgRIAQADIgCAQQgDAVgRAAg");
        this.shape.setTransform(680.1,1141);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#231815").s().p("AhLgIIgBhGIAKAGIAZAAIAHgGIAKAKIgHAEIgTAmQAMANAFAIQAFAHAAAIQAAAIgDAHQgEAHgPAFQgBgKgPgFIAAA0IgKAFIABhXgAhCATQASAEAFgBQAGgBgBgNQAAgLgQgXIAOgpIgaAAgAgMA+IAAgCQAUADADAAQAFgBAAgGIAAhOIgYAAQgJAAgIADIgGgHIBXAAIAJgIIALAMIgyAAIAABRQAAAGgDAFQgDAEgMAFQgBgKgTgHgAgrA8QAPgRAIgTQAKgSACgLIAOAJIgGAEQgUAngWAPgAA8AuQgEgMgGgKIgOgYIACAAQAYAWAEAIQAFAIAAAGQAAADgCAEQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgDAAgDgJgAgRhFIA+AAIAIgIIALAMIg/AAQgEAAgJACg");
        this.shape_1.setTransform(662.6,1141);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#231815").s().p("AhIBNIAAiZICRAAIAACWIgPAAIAAgGIh0AAIAAAJgAg6A2IB0AAIAAh0Ih0AAgAgxAmIAAgNIAqAAIAAgbIgfAAIAAgOIAfAAIAAgUIgmAAIAAgNIBbAAIAAANIgnAAIAAAUIAhAAIAAAOIghAAIAAAbIAqAAIAAANgAAMAHIAJgHQAJAGAJAJIgKAJQgGgJgLgIg");
        this.shape_2.setTransform(643.9,1141.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#231815").s().p("AgwBMIAAhYQgIANgMALIgJgMQAdgbAJgwIAPAEQAFABgHAEQgBAMgJAUIAFABQACADgFACIAABogAAIBHQgMAAAAgMIAAiEIANAAQAHAAgGAEIAAA1QAbgLAWgRIALAMQAEAFgHAAQgfAPgaALIAAAyQAAAHAEAAIAmAAQAIgBAAgHIACgRIAQADIgCAQQgDAVgRAAg");
        this.shape_3.setTransform(568.8,1141);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#231815").s().p("AAZBBIAAgEIAWAEQAKABADgOQADgPACgtIgOAAQgJAmgVAUQgVAVgdAKIgBgDQAcgNARgVQASgVAHgfIgQAAQgGAQgLASQgLAQgbAOIgCgDQASgLAMgPQALgRAFgSIgQAAIgGADIgIgJIAIgDQAbgYAXgZIgsAAIgHACIgHgFIA6AAIAHgIIALAKIgHAEQgcAcgZAWIBBAAIAHgHIAKALIgFAEQgEAvgCAOQgDANgHAGQgHAFgGACQgDgLgTgGgAhRAtIAfgMIAAg7IgGAAQgJAAgIACIgGgHIAdAAIAAgXIgBgbIARAIIgFAHIAAAjIAKAAIAIgIIAMANIgeAAIAAA3IAdgOIABAEQg0AcgLAKg");
        this.shape_4.setTransform(550.5,1141);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#231815").s().p("AgIBPIAAhWIgkAAIAABDIgQAAIAAhQIA0AAIAAgXIhHAAIAAgNIBHAAIAAgXIAOAAQAGABgFAEIAAASIBJAAIAAANIhJAAIAAAXIA4AAIAABFQAAALgLAAIgTAAIgBgPIAMAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgxIgoAAIAABWg");
        this.shape_5.setTransform(532.6,1141);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#231815").s().p("AgwBMIAAhYQgJANgMALIgJgMQAegbAIgwIAQAEQAFABgHAEQgCAMgIAUIAEABQADADgFACIAABogAAJBHQgNAAAAgMIAAiEIANAAQAHAAgHAEIAAA1QAbgLAXgRIALAMQAFAFgJAAQgeAPgbALIAAAyQAAAHAGAAIAlAAQAIgBABgHIABgRIARADIgDAQQgDAVgSAAg");
        this.shape_6.setTransform(457.6,1141);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#231815").s().p("AhTBFIA8AAIAAh1IgBgaIAQAIIgGAGIAACBIAcAAIAAh1IAAgaIARAIIgHAFIAABlQAbgoAKgmIARAMIgIAEQgaAvgUAUIAAAYIAiAAIAKgMIAQAQIiQAAQgJAAgIACgAgxAbQgDgSgVgrIACgCQAgAsACALQACALgDAFIgGAFQgEAAgBgNg");
        this.shape_7.setTransform(439.6,1140.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#231815").s().p("AAYBPQgHgHgMgIQgMgIgWgLIABgDQAYAHAPAIIAcglIg6AAIgFAFIgKgJIAGgGIAGgVIgjAAQgKAAgHADIgHgHIA8AAIAFgeIgXAAQgKAAgHACIgHgHIAwAAIAFggIANAIIgEAEIgDAUIAoAAIALgIIANANIhBAAIgFAeIBDAAIALgJIANANIhcAAIgIAaIA6AAIAGgHIAOAOQgJACgKAJIgZAYQAPAHACAEIAAAHIgBAGIgCACQgCAAgDgEg");
        this.shape_8.setTransform(421.4,1140.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#231815").s().p("AgwBMIAAhYQgIANgMALIgJgMQAdgbAJgwIAPAEQAFABgHAEQgCAMgIAUIAFABQACADgFACIAABogAAIBHQgMAAABgMIAAiEIAMAAQAHAAgHAEIAAA1QAcgLAWgRIALAMQAEAFgHAAQgfAPgbALIAAAyQABAHAFAAIAlAAQAIgBAAgHIACgRIAQADIgCAQQgDAVgRAAg");
        this.shape_9.setTransform(346.4,1141);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#231815").s().p("AgUBOIAAhDIAiAAIAAgbIgxAAIAAgNIAxAAIAAgbQgVABgVADIgDgOQAzgDAlgIIAJANQABAFgFgDIgiAFIAAAcIA1AAIAAANIg1AAIAAAbIAkAAIAABBIgOAAIAAgGIg4AAIAAAIgAgGA5IA4AAIAAghIg4AAgAhBBMIgOgMQASgZALgaIAOAJQgQAjgKAPQAAABAAABQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAgAhMgVIAKgNQALAGANALIgJAOIgZgSgAhGg+IAJgOQAIAFARANIgJAPIgZgTg");
        this.shape_10.setTransform(328.4,1141.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#231815").s().p("AhMBLIAAgOIBJAAIAAgpIgvAAIAAgOIAvAAIAAgfIglAAQgIAWgRAQIgLgLQAagZAEgnIAQADQADACgEACIgFAQIAhAAIAAgjIAMAAQAGABgFAEIAAAeIA6AAIAAAOIg6AAIAAAfIAyAAIAAAOIgyAAIAAApIBEAAIAAAOg");
        this.shape_11.setTransform(310.3,1140.4);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#231815").ss(1.5).p("AGpCDItRAAIAAkFINRAAg");
        this.shape_12.setTransform(662,1141.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AmoCDIAAkFINRAAIAAEFg");
        this.shape_13.setTransform(662,1141.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#231815").ss(1.5).p("AGpCDItRAAIAAkFINRAAg");
        this.shape_14.setTransform(550.8,1141.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AmoCDIAAkFINRAAIAAEFg");
        this.shape_15.setTransform(550.8,1141.3);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#231815").ss(1.5).p("AGpCDItRAAIAAkFINRAAg");
        this.shape_16.setTransform(439.6,1141.3);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AmoCDIAAkFINRAAIAAEFg");
        this.shape_17.setTransform(439.6,1141.3);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#231815").ss(1.5).p("AGpCDItRAAIAAkFINRAAg");
        this.shape_18.setTransform(328.4,1141.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AmoCDIAAkFINRAAIAAEFg");
        this.shape_19.setTransform(328.4,1141.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#231815").ss(1.5).p("ACDiCIkFEF");
        this.shape_20.setTransform(495.2,1141.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#231815").ss(1.5).p("AiCiCIEFEF");
        this.shape_21.setTransform(495.2,1141.3);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#231815").ss(1.5).p("ACDiCIkFEF");
        this.shape_22.setTransform(606.4,1141.3);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#231815").ss(1.5).p("AiCiCIEFEF");
        this.shape_23.setTransform(606.4,1141.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#231815").ss(1.5).p("ACDiCIkFEF");
        this.shape_24.setTransform(384,1141.3);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#231815").ss(1.5).p("AiCiCIEFEF");
        this.shape_25.setTransform(384,1141.3);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#231815").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAJgJAAQgDAAgDgCg");
        this.shape_26.setTransform(81.6,1147.4);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#231815").s().p("ALdAwIAFgJQAZAGAaAOIgHAJQgWgOgbgGgAGqBDIAAhNIgkAAIAAgLIAkAAIAAgsIAMAAIAAAsIAkAAIAAALIgkAAIAABNgAncA4QAugOAOgOQgWgWgGgiIgaAAIAAgLIA4AAIAAgZIAMAAIAAAZIA3AAIAAALIgYAAQgHAigVAWQAXASAlAKIgIAKQglgLgXgTQgTARgpAOgAmXAUQASgTAGgdIgxAAQAEAcAVAUgAKgA2QAXABAPgIQAOgJADgWIALACQgDAYgPALQgPAMgcAAgAgwBBIgDgLIAPABQADAAAAgEIAAh0IAMAAIAAB4QAAAFgDADQgEACgDAAgApoA3IAWgDQAKgBAKgEQAKgDAJgFQALgHAGgIQAIgJAGgPIAKAFQgMAggZAOQgaANggABgAkiBBIAAhJQgHAJgKAHIgIgIQAZgTAQgvIAKAEIgIAYIgGAMIAABbgAEIArQgTAOgYAHIgGgJQAcgKANgJQgJgJgKgVIgHAAIAAgKIBCAAQgDAWgUASQAOAKAZAIIgIAKQgZgJgPgMgAEIAcQALgJAGgNIgfAAQAHAQAHAGgAqAA6QAVgXAJgdIALAEQgIAfgWAXgAsDA2QACgBAAgEIAAgwIgiAAIAAgKIAiAAIAAg3IAMAAIAAAnQAigKAagVIAIAJQgdAVgnAMIAAAFIBaAAIAAAKIg9AAQAMAiA0APIgIAKQg4gUgMgnIgRAAIAAAwIAggMIAAALIgnAQgAFpA2QACgDAAgDIAAg/IgWAAIAAgKIAiAAIAABIIAXgMIAAAMIgeAQgAA/A/QgMAAAAgPIAAgMIAMAAIAAANQAAAEAEAAIAeAAQADAAACgFIACgHIALAEQgCAJgFAGQgDAEgJgBgAJOAeQgNgUgFgcQgFAcgOAUQgOATgZANIgJgKQAugUAJgyIgvAAIAAgLIAwAAQACgOgBgXIANACQAAAVgBAOIA3AAIAAALIgtAAQAFAaAMARQALAQAYANIgIAJQgYgOgOgTgAB1ApIAJgHQANADAMAQIgJAIQgJgOgQgGgAjlA9QgIAAgFgEQgFgEAAgHIAAhsIAMAAIAAA1QAVgNATgYIAKAHQgWAcgcAPIAAAoQAAAGAJAAIAbAAQALAAAAgcIAMAEQgCAVgFAHQgFAHgJAAgAAJAzQAUgFAKgMIAHAIQgLAMgTAHgAh3A8QgMAAAAgMIAAg6QgEAFgKAFIgIgKQAggNAOgrIAKAEIgEAMQAaASAPATIgIAKIgKgMQAAAegCAIQgCAHgEADQgEADgFAAQgEAAgIgCIgDgNQAKAEACAAQAFAAABgGQACgGAAgTIgdAAIAAA0QAAABAAABQABAAAAABQAAAAABAAQAAABABAAIAmAAQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAIACgEIAAgLIAMAGQgCAUgLABgAh7gRIAsAAQgLgNgPgLQgHANgLALgADCAsQACgDAAgEIAAgvIgWAAIAAgKIAiAAIAAA5IAWgLIAAAMIgdAPgABDAhIAGgFIgkAAIAAgoIBXAAIAAAoIgrAAQAJAEAHAHIgJAIQgGgJgPgFgAAwARIBAAAIAAgGIhAAAgAAwACIBAAAIAAgEIhAAAgAK5ArIAAgYQgLAGgTAGIgGgJQAegIAPgRIgnAAIAAgKIApAAIAAgEIgVAAIAAgJIAVAAIAAgDIgXAAIAAgKIAXAAIAAgEIgbAAIAAAPIgMAAIAAgZIA8AAIgJgIIAKgFQAEADAHAKIA2AAIAAAZIgMAAIAAgPIgaAAIAAAEIAXAAIAAAKIgXAAIAAADIAVAAIAAAJIgVAAIAAAEIApAAIAAAKIglAAQANAPAeAKIgIAIQgQgFgNgJIAAAZIgLAAIAAgdIgwAAIAAAfgALMACIAkAAIgFgFIgbAAgALPgNIAbAAIAAgEIgbAAgALPgaIAbAAIAAgDIgbAAgALPgnIAbAAIAAgEIgbAAgAg5AiIAAhNIAMAAIAABNgAo8AbIgDgLIAOAAIADAAIABgCIAAhNIAMAAIAABPQAAAEgDADQgDADgEAAIgKABIgHAAgApbAAQATgOAIgaIALAEQgGAYgVATgAobghIAKgGQASAMAMAYIgKAHQgKgWgUgPgAqBgXIAIgIQATAJAJANIgEAEIgFAFQgHgOgUgJgADbgPQAIgCAFgEQAEgFACgEQACgEAAgGIAAgUIAwAAIAAAiQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIARAAIAAALIgTAAQgGAAgDgDQgDgDAAgFIAAgYIgZAAIAAAOQAAAJgGAIQgHAJgKADgAAQgSIAAgLIApAAQgIgKgCgBIAEgDIgZAAIAAgLIAwAAIAAgMIAMAAIAAAMIAwAAIAAALIgYAAIACACQgDAGgFAGIApAAIAAALgABGgdIATAAQAHgFADgJIgnAAQAGAFAEAJgAp3g3IAIgIQARAHAMAQIgKAJQgJgQgSgIgAC9g3IAIgHQANAJAIAOIgJAHQgGgMgOgLgAFeg8IAIgGQANAHAIAOIgKAIQgFgLgOgMg");
        this.shape_27.setTransform(168,1147.7);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#231815").s().p("AhYBCIAAgyIgmAAIAAALIgMAAIAAhBIAyAAIAAgbIANAAIgBAbIAyAAIAABAIgMAAIAAgKIglAAIAAAygAhLAFIAlAAIAAggIglAAgAh+AFIAmAAIAAggIgmAAgACBBBIAAgKIhfAAIAAAKIgLAAIAAh8IB1AAIAAB8gAAiAsIBfAAIAAhdIhfAAgAAlAiIAAgKIAmAAIAAgYIgfAAIAAgLIAfAAIAAgSIgkAAIAAgLIBUAAIAAALIglAAIAAASIAgAAIAAALIggAAIAAAYIAmAAIAAAKgABbAGIAHgGQAOAIAGAJIgIAGQgJgMgKgFg");
        this.shape_28.setTransform(62.4,1147.7);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#231815").s().p("AAQAiIAAgnQAAgKgEgEQgCgEgIAAQgDAAgGACQgFADgBAEQgCAEAAAJIAAAjIgMAAIAAhCIALAAIAAAKQAFgGAEgCQAFgDAHAAIAKACQAGADACACQADAEAAAFIABALIAAAog");
        this.shape_29.setTransform(233.8,1131.9);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#231815").s().p("AgVAbQgKgJAAgSQABgRAIgIQAJgJANAAQAOAAAIAJQAJAJAAAQQABATgKAIQgKAIgMAAQgLAAgKgIgAgNgSQgGAFABANQgBANAGAGQAFAHAIAAQAKAAAFgHQAFgHAAgMQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
        this.shape_30.setTransform(225.9,1132);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#231815").s().p("AgFAuIAAhCIALAAIAABCgAgFggIAAgNIALAAIAAANg");
        this.shape_31.setTransform(220.1,1130.7);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#231815").s().p("AgCArQgDgCgBgEIgBgxIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmQAAAFACACQAAACAFAAIAFAAIABAKIgIABQgIAAgCgDg");
        this.shape_32.setTransform(216.2,1130.8);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#231815").s().p("AgFAuIAAhCIALAAIAABCgAgFggIAAgNIALAAIAAANg");
        this.shape_33.setTransform(212.2,1130.7);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#231815").s().p("AgCArQgDgCgBgEIgBgMIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAHQABACAFAAIAFAAIABAKIgIABQgIAAgCgDg");
        this.shape_34.setTransform(208.3,1130.8);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#231815").s().p("AgVAaQgJgJAAgRQAAgPAIgJQAJgKANAAQAIAAAHADQAHADAEAIQAFAJAAAOIgxAAQABALAFAGQAGAGAHAAQAHAAAEgEQAEgDACgHIAMABQgDALgHAFQgHAGgMAAQgOAAgIgJgAgMgTQgFAFgBAIIAlAAQgBgKgGgEQgEgFgIAAQgHAAgFAGg");
        this.shape_35.setTransform(202.1,1132);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#231815").s().p("AgcAvIAAhcIAKAAIAAAJIABAAQAFgKAMAAQAOAAAHAJQAIAKAAAPQAAARgJAIQgIAKgMAAQgJAAgIgJIAAAAIAAAhgAgNgeQgFAIAAALQAAALAFAHQAFAHAIAAQAIAAAEgHQAGgGAAgNQAAgMgGgHQgFgGgHAAQgHAAgGAHg");
        this.shape_36.setTransform(194.4,1133.2);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#231815").s().p("AAiAiIAAgxQgBgDgDgDQgDgCgFAAQgHAAgFAEQgEAFAAALIAAAlIgLAAIAAgqQABgIgEgEQgDgDgGAAQgHAAgEAFQgGAGAAAMIAAAiIgKAAIAAhCIAJAAIAAAKIABAAQAHgLANAAQAHAAAFADQAEADACAGQAHgMAOAAQAKAAAFAGQAGAFAAALIAAAtg");
        this.shape_37.setTransform(184.5,1131.9);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#231815").s().p("AgVAbQgKgJAAgSQAAgRAKgIQAJgJAMAAQANAAAJAJQAKAJgBAQQAAATgJAIQgKAIgMAAQgLAAgKgIgAgNgSQgGAFAAANQAAANAGAGQAGAHAHAAQAJAAAGgHQAFgHAAgMQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
        this.shape_38.setTransform(174.7,1132);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#231815").s().p("AgeAiQgKgPAAgTQAAgWAMgMQANgNASAAQANAAAKAHQAJAHAEANIgLADQgFgLgFgEQgFgEgKAAQgOAAgJAKQgHAKAAAQQgBASAJAKQAJAJAMAAQALABAGgHQAIgGACgMIAMAEQgFAQgJAHQgKAIgOAAQgWAAgLgOg");
        this.shape_39.setTransform(165.8,1130.7);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#231815").s().p("AAQAiIAAgnQAAgKgEgEQgDgEgHAAQgEAAgFACQgEADgCAEQgCAEAAAJIAAAjIgLAAIAAhCIAKAAIAAAKQAFgGAEgCQAGgDAFAAIALACQAFACADADQADAEABAFIABALIAAAog");
        this.shape_40.setTransform(152.4,1131.9);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#231815").s().p("AgTArQgHgFAAgMIALACQABAFADADQAEACAHAAQAJAAADgDQAEgDABgGIABgOQgHAJgLgBQgNAAgHgJQgJgKABgNQgBgPAJgKQAHgKANAAQALAAAIAKIAAAAIAAgJIALAAIAAA5QAAARgDAFQgDAHgHAEQgIAEgJAAQgKAAgJgFgAgLgfQgGAHAAALQAAANAGAGQAFAFAGAAQAHAAAHgFQAFgGAAgMQAAgOgFgFQgGgGgIAAQgHAAgEAGg");
        this.shape_41.setTransform(144.3,1133.3);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#231815").s().p("AgFAuIAAhCIAKAAIAABCgAgFggIAAgNIAKAAIAAANg");
        this.shape_42.setTransform(138.7,1130.7);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#231815").s().p("AgSAeQgHgFgCgMIALgBQABAHAFADQAEAEAGAAQAJAAADgDQAEgDAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgFgDIgLgDQgPgEgEgDQgFgFAAgHQAAgJAHgFQAGgFAMAAQALAAAHAFQAGAEACAKIgMABQgBgFgDgDQgEgDgGAAQgGAAgEACQgEADAAAEQAAAEADACIAcAJQAFABADADQADAEAAAHQAAAJgIAGQgGAGgNAAQgMAAgHgFg");
        this.shape_43.setTransform(133.3,1132);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#231815").s().p("AgWAaQgIgJAAgRQAAgPAIgJQAIgKAPAAQAHAAAGADQAIADAEAIQAFAJAAAOIgxAAQAAALAGAGQAGAGAHAAQAHAAAEgEQAFgDACgHIALABQgCALgIAFQgHAGgMAAQgOAAgJgJgAgMgTQgFAFgBAIIAlAAQgBgKgFgEQgGgFgGAAQgIAAgFAGg");
        this.shape_44.setTransform(125.8,1132);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#231815").s().p("AglAuIAAhbIAtABQAGAAAGAEQAGAEADAFQAEAFADAIQACAHAAALQAAAVgJAMQgKANgXAAgAgZAjIAeAAQAEgBAFgDQAFgEADgHQAEgHAAgNQAAgHgCgGQAAgFgEgGQgDgFgFgCIgIgDIgKAAIgTAAg");
        this.shape_45.setTransform(116.9,1130.7);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#231815").s().p("AgWAaQgIgKAAgQQAAgOAIgKQAJgKAOAAQAHAAAHADQAGADAFAIQAFAIAAAPIgxAAQAAAKAGAHQAGAGAIAAQAGAAAEgEQAFgEACgGIAMABQgDALgIAFQgIAGgKAAQgOAAgKgJgAgMgTQgEAFgCAIIAmAAQgBgKgGgEQgGgFgGAAQgIAAgFAGg");
        this.shape_46.setTransform(104.9,1132);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#231815").s().p("AgEAhIgahCIANAAIARA2IATg2IALAAIgZBCg");
        this.shape_47.setTransform(97.3,1132);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#231815").s().p("AgFAuIAAhCIALAAIAABCgAgFggIAAgNIALAAIAAANg");
        this.shape_48.setTransform(91.9,1130.7);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#231815").s().p("AgCArQgDgCgBgEIgBgxIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmQAAAFACACQAAACAFAAIAFAAIABAKIgIABQgIAAgCgDg");
        this.shape_49.setTransform(88,1130.8);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#231815").s().p("AgYAeQgGgFAAgJQAAgIAGgGQAHgFAOgBIAJgCQAFAAAFgCIgBgHIgBgFQgCgCgEgBQgCgCgGAAQgGAAgFADQgFADgBAHIgLgBQACgKAHgGQAJgFALAAQALAAAHADQAFAEACAFQABADAAAKIAAAOIABATQAAAFADAEIgMAAIgDgIQgLAKgMAAQgKAAgHgFgAgFAFQgNABAAAJQAAAFAEADQADADAHAAQAGAAAHgFQAHgFAAgMIAAgEQgHACgOADg");
        this.shape_50.setTransform(81.8,1132);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#231815").s().p("AgWAaQgIgJAAgRQAAgPAIgJQAJgKAOAAQAHAAAGADQAIADAEAIQAFAJAAAOIgyAAQACALAFAGQAGAGAHAAQAHAAAEgEQAFgDACgHIALABQgCALgIAFQgHAGgMAAQgOAAgJgJgAgMgTQgFAFgBAIIAlAAQgBgKgFgEQgFgFgHAAQgIAAgFAGg");
        this.shape_51.setTransform(73.9,1132);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#231815").s().p("AgRAiIAAhCIAKAAIAAALIABAAQAFgMAIAAQAFAAAGADIgDALQgEgCgFAAQgGAAgCAFQgEAGAAAKIAAAig");
        this.shape_52.setTransform(67.9,1131.9);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#231815").s().p("AgdAiQgLgPAAgTQAAgVANgNQALgNATAAQANAAAKAHQAKAHADANIgMADQgCgKgHgFQgGgEgJAAQgOAAgIAKQgIAJAAARQAAATAIAJQAIAJAMAAQAMABAGgHQAHgFADgNIAMAEQgEAPgKAIQgKAIgOAAQgWAAgKgOg");
        this.shape_53.setTransform(59.9,1130.7);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#231815").s().p("AgFAuIAAhbIALAAIAABbg");
        this.shape_54.setTransform(225.2,1115.2);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#231815").s().p("AgYAeQgGgFAAgJQAAgIAGgGQAEgEARgCIAJgCIAJgCIAAgHIgBgFQgCgCgEgBQgCgCgGAAQgHAAgEADQgEACgCAIIgLgBQACgLAHgFQAJgFALAAQALAAAHAEQAFADACAFIABAuQABAGADAEIgMAAIgDgJQgLAKgMAAQgLAAgGgFgAgFAFQgNABAAAKQAAAEAEADQADADAHAAQAHAAAGgFQAHgFgBgMIAAgEQgKADgKACg");
        this.shape_55.setTransform(219.4,1116.4);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#231815").s().p("AgRAiIAAhBIAKAAIAAAKIAAAAQAGgMAHAAQAGAAAGADIgEALQgDgDgFABQgGAAgDAFQgDAHAAAJIAAAig");
        this.shape_56.setTransform(213.4,1116.4);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#231815").s().p("AgQAfQgHgEgBgFQgCgFAAgKIAAgoIALAAIABAwQAAAEAEADQAEACAFAAQAFAAAGgEQAGgFAAgOIAAgiIALAAIAABCIgKAAIAAgKQgJALgLAAQgIAAgFgDg");
        this.shape_57.setTransform(206.4,1116.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#231815").s().p("AgCArQgDgCgBgEIgBgMIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAHQABACAFAAIAFAAIABAKIgIABQgIAAgCgDg");
        this.shape_58.setTransform(200.4,1115.3);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#231815").s().p("AgFAuIAAhbIALAAIAABbg");
        this.shape_59.setTransform(196.3,1115.2);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#231815").s().p("AgQAfQgHgEgBgFQgCgFAAgKIAAgoIALAAIABAwQAAAEAEADQAEACAFAAQAGAAAFgEQAGgFAAgOIAAgiIALAAIAABCIgKAAIAAgKQgJALgLAAQgIAAgFgDg");
        this.shape_60.setTransform(190.6,1116.5);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#231815").s().p("AgeAiQgKgPAAgTQAAgWANgNQAMgMASAAQANAAAKAHQAKAHADANIgLADQgDgKgHgFQgFgEgLAAQgNgBgIALQgIAKAAAQQAAATAIAJQAIAJANAAQAKAAAHgFQAHgGADgMIAMADQgDAOgLAJQgKAIgPAAQgVAAgLgOg");
        this.shape_61.setTransform(181.7,1115.2);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#231815").s().p("AgYAeQgGgFAAgJQAAgIAGgGQAFgEAPgCIAKgCIAKgCIAAgHIgDgFQgBgCgDgBQgEgCgFAAQgHAAgEADQgEACgCAIIgLgBQABgKAJgGQAHgFAMAAQALAAAHAEQAFADACAFIACAuQABAGACAEIgMAAIgCgJQgMAKgMAAQgLAAgGgFgAgFAFQgNABAAAKQAAAEADADQAFADAFAAQAIAAAGgFQAHgFAAgMIAAgEQgLADgKACg");
        this.shape_62.setTransform(168.3,1116.4);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#231815").s().p("AAQAuIAAgqQAAgHgEgFQgDgDgHAAQgGAAgFAEQgGAEAAAMIAAAlIgLAAIAAhbIALAAIAAAhQAIgKALABQAHAAAGADQAFABADAHQACAEAAAKIAAAqg");
        this.shape_63.setTransform(160.3,1115.2);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#231815").s().p("AgSAeQgHgFgCgLIALgCQABAHAFADQAEAEAHAAQAHAAAFgDQADgDAAgFQAAgDgBgCIgFgDIgLgDQgPgEgEgDQgFgFAAgHQAAgIAHgGQAGgFAMAAQAKAAAHAFQAHAEACAKIgLABQgBgGgEgCQgDgDgHAAQgFAAgFADQgEABAAAFQAAAEAEACIALAEIAQAFQAFABADADQADAEAAAHQAAAJgIAGQgHAGgMAAQgLAAgIgFg");
        this.shape_64.setTransform(152.7,1116.4);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#231815").s().p("AgTArQgHgFAAgMIALACQABAGADACQADADAIAAQAJAAADgEQAFgEAAgFIABgOQgIAJgKAAQgNAAgIgKQgHgJgBgOQAAgPAIgKQAIgKANAAQALAAAIAKIAAgIIALAAIAAA5QAAAOgDAHQgDAHgIAEQgGAEgKAAQgLAAgIgFgAgMgfQgFAGAAAMQAAANAFAFQAGAGAHABQAGgBAGgFQAGgGAAgMQAAgMgGgHQgFgGgHgBQgIABgFAGg");
        this.shape_65.setTransform(145,1117.7);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#231815").s().p("AAQAiIAAgnQAAgLgEgEQgEgDgGAAQgEAAgFACQgEACgCAFQgCAEAAAIIAAAkIgLAAIAAhBIAKAAIAAAJIAAAAQAEgFAFgDQAGgDAFAAIALACQAGACACADQADAFABADIAAA0g");
        this.shape_66.setTransform(137.3,1116.4);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#231815").s().p("AgYAeQgGgFAAgJQAAgIAGgGQAFgEAPgCIAKgCIAJgCIAAgHIgCgFQgBgCgDgBQgEgCgFAAQgHAAgEADQgEACgCAIIgLgBQABgKAIgGQAJgFALAAQAMAAAGAEQAGADABAFIACAuQAAAGADAEIgMAAIgCgJQgMAKgMAAQgKAAgHgFgAgFAFQgNABAAAKQAAAEAEADQAEADAFAAQAIAAAHgFQAFgFAAgMIAAgEQgKADgKACg");
        this.shape_67.setTransform(129.4,1116.4);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#231815").s().p("AAQAuIAAgqQAAgIgEgEQgDgDgHAAQgGAAgGAEQgFAFAAALIAAAlIgLAAIAAhbIALAAIAAAhQAIgKALABQAHAAAGADQAFABADAHQACAEAAAKIAAAqg");
        this.shape_68.setTransform(121.4,1115.2);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#231815").s().p("AgeAiQgKgPAAgTQAAgWAMgNQANgMASAAQANAAAKAHQAJAHAFANIgMADQgFgKgFgFQgFgEgKAAQgPgBgIALQgHAKgBAQQAAASAJAKQAIAJANAAQAKAAAHgFQAIgHACgLIAMADQgFAQgKAHQgJAIgOAAQgWAAgLgOg");
        this.shape_69.setTransform(112.5,1115.2);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#231815").s().p("AgYAeQgGgFAAgJQAAgIAGgGQAFgEAQgCIAJgCIAKgCIAAgHIgCgFQgCgCgDgBQgDgCgGAAQgHAAgEADQgEACgCAIIgLgBQACgKAHgGQAJgFALAAQAMAAAGAEQAGADABAFIACAuIADAKIgMAAIgCgJQgMAKgMAAQgKAAgHgFgAgFAFQgNABAAAKQAAAEAEADQAEADAGAAQAHAAAHgFQAGgFAAgMIAAgEQgMAEgJABg");
        this.shape_70.setTransform(99.1,1116.4);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#231815").s().p("AAQAiIAAgnQAAgLgEgEQgEgDgGAAQgEAAgFACQgEACgCAFQgCAFAAAHIAAAkIgLAAIAAhBIAKAAIAAAJIAAAAQAEgFAFgDQAGgDAFAAIALACQAFABADAEQADAFABADIAAA0g");
        this.shape_71.setTransform(91.2,1116.4);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#231815").s().p("AgEAuIAAhBIAJAAIAABBgAgEghIAAgMIAJAAIAAAMg");
        this.shape_72.setTransform(85.4,1115.2);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#231815").s().p("AAQAuIAAgqQAAgGgDgGQgEgDgHAAQgGAAgGAEQgFAEAAAMIAAAlIgMAAIAAhbIAMAAIAAAhQAJgKAKABQAHAAAFADQAHACACAGQADAFAAAJIAAAqg");
        this.shape_73.setTransform(79.7,1115.2);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#231815").s().p("AgdAiQgLgPAAgTQAAgWANgNQAMgMASAAQANAAAKAHQAKAHADANIgMADQgDgKgGgFQgGgEgKAAQgNgBgIALQgIAKAAAQQAAATAIAJQAIAJAMAAQAMAAAGgFQAHgGADgMIAMADQgEAOgKAJQgLAIgOAAQgVAAgKgOg");
        this.shape_74.setTransform(70.7,1115.2);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#FFFFFF").s().p("Ah7B+Qg1g0AAhKQAAhJA1g0QA0g0BIAAQAvAAApAXQAnAXAYAmIABABIAAAAIADAFQARAjAAAOQAAALgUAFQgRADgSgCQgdgEgLgUQgMgTgUgMQgVgMgYAAQgjAAgbAaQgaAaAAAkQAAAlAaAaQAaAaAkAAQAYAAAVgMQAUgLAMgUQALgVAdgHQATgFASACQAXADgBAOQgCANgJAWQgGAQgGAIIABAAQgYAogoAXQgqAYgwAAQhIAAg0g0g");
        this.shape_75.setTransform(228.8,1080.4);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFFFF").s().p("Ah7B+Qg1g0AAhKQAAhJA1g0QA0g0BIAAQAvAAApAXQAnAXAYAmIABABIAAAAIADAFQARAjAAAOQAAALgUAFQgRADgSgCQgdgEgLgUQgMgTgUgMQgVgMgYAAQgjAAgbAaQgaAaAAAkQAAAlAaAaQAaAaAkAAQAYAAAVgMQAUgLAMgUQALgVAdgHQATgFASACQAXADgBAOQgCANgJAWQgGAQgGAIIABAAQgYAogoAXQgqAYgwAAQhIAAg0g0g");
        this.shape_76.setTransform(147.3,1080.4);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#FFFFFF").s().p("Ah8B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQAvAAApAXQAnAXAYAmIAAABIABAAIAAAAIADAFQARAjAAAOQAAALgUAFQgRADgSgCQgdgEgLgUIgBAAQgMgTgTgMQgVgMgYAAQgjAAgbAaQgaAaAAAkQAAAlAaAaQAaAaAkAAQAYAAAUgMQAUgLAMgUQALgUAdgIQAUgFASACQAXADgCAOQgBAXgVAkQgXAngoAYQgqAYgwAAQhJAAg0g0g");
        this.shape_77.setTransform(106.1,1080.4);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#EF8200").s().p("AhtCOQg6gugJhJQgJhIAug6QAhgrA1gRQAXgHAPgBQArgDAZAMQAOAHgOAdQgPAegUAJQgHAEgQABQgnADgZAfQgXAdAFAjQAEAlAdAXQAdAWAkgEQAkgEAXgdQAUgZgBgdIAAhlQAAgyAdgTQARgMAWABQALAAAEAEQAFAFAAARIABCaQAAA+gmAwQguA6hJAIIgWACQg7AAgxgmg");
        this.shape_78.setTransform(188,1080.2);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#FFFFFF").s().p("Ah8B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQAvAAApAXQAnAXAYAmIAAABIABAAIAAAAIADAFQARAjAAAOQAAALgUAFQgRADgSgCQgdgEgLgUQgNgTgTgMQgVgMgYAAQgjAAgbAaQgaAaAAAkQAAAlAaAaQAaAaAkAAQAYAAAVgMQATgLAMgUQALgUAdgIQAUgFASACQAXADgCAOQgBANgJAWQgGAPgGAJQgXAngoAYQgqAYgwAAQhJAAg0g0g");
        this.shape_79.setTransform(64.5,1080.4);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#231815").s().p("AbiDDIgVgUIAAiXIg+A9IAAg6IA+g8IAAiSIApAAIAABpIBahaIAAA6IhaBaIAACqIBuAAIAAAVIgUAUgAYpDDIAAkNIg+A+IAAg6IB8h7IAAA6IgVAUIAAE2gAoyDDIgUgUIAAlOIAUgVIFSAAIAUAVIAAFOIgUAUgAocCaIEnAAIAAkkIknAAgAtVDDIAAhQIiUAAIgVgUIAAjGIAVgVICUAAIAAhGIApAAIAABGICUAAIAUAVIAADGIgUAUIiUAAIAABQgAssBKICAAAIAAidIiAAAgAvUBKIB/AAIAAidIh/AAgA1PDDIgVgUIAAihIAVgTIBrAAIAAgnIiAAAIAAgpIEAAAIAAg1IkoAAIAAFNIgVAAIgVgUIAAlOIAVgVIFRAAIAUAVIAABeIgUAVIhrAAIAAAnIBrAAIAUATIAAChIgUAUgAy7CaIBXAAIAAgnIhXAAgA06CaIBWAAIAAgnIhCAAIAAgpIBCAAIAAgnIhWAAgAy7BKIBXAAIAAgnIhXAAgA87DDIgUgUIAAjwIAUgUIAqAAIAmgnIh4AAIAAgpIBaAAIgdgdIA7AAIAcAdIBRAAIAcgdIA7AAIgdAdIBbAAIAAApIjIAAIgmAnIDEAAIAVAUIAADwIgVAUgA8mCaID/AAIAAgnIjqAAIAAgpIDqAAIAAgnIjqAAIAAgoIDqAAIAAgnIj/AAgAVzDCIhuhuIhuBtIg5AAICKiKIh4h2IA7AAIBaBZIBahZIAAgpIkWAAIAAgpICHAAIAxgxIA6AAIgxAxIC4AAIAAApIg6AAIAAA6IhmBlICKCLgANZDCICNiMIAAhKIAUAAIAUAUIAABHIh7B7gAKnCIIBnhnIAAA6IhnBngAI5DCIiuiuIg/AAIAACFIBmAAIAAAVIgUAUIhnAAIgUgUIAAiaIgpAAIAAgoIApAAIAAiuIApAAIAACuIEnAAIAAAoIiuAAICuCugAn0BzIAAgpIBXAAIAAguIhXAAIAAgoIBXAAIAAgvIhXAAIAAgpIDWAAIAAApIhWAAIAAAvIBWAAIAAAoIhWAAIAAAuIAtAAIAAgVIApAAIAAAqIgUAUgAKngUIAAg6IA9A9IAAA6gAgQAdIAAg5IA3AAIAAA5gAOCgUIAAiuIApAAIAACugAPUhrIAAg6IBMBMIAAA6gAMOhZIBLhMIAAA6IhLBMgAGfg9IB3h3IA6AAIh3B3gAKniIIAAg6IA9A9IAAA6g");
        this.shape_80.setTransform(494,140.2);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#231815").s().p("Aa3EjIhshsIhtBsIhXAAICZiYIhWAAIAABJIg9AAIAAhfIAegeIE+AAIAgAeIAABfIg+AAIAAhJIhVAAIAAABICXCXgASMEjIjDjDIjDDDIhXAAID7j7IAAhsIj7AAIAAg+ID7AAIAAigIA+AAIAACgID7AAIAAA+Ij7AAIAABsID7D7gAGFEjIAAlGIifAAIAAg+ICfAAIAAjBIA+AAIAADBICfAAIAAA+IifAAIAAFGgAAuDMIBchbIAAh1IhcAAIAAg+IB7AAIAeAfIAACtIiZCZgAiOEjIhPhOIhNBOIhXAAIB5h6Ih0h0IBWAAIBJBJIBjhiIAAggIkCAAIAAg+IEhAAIAeAeIAABZIh0B0IB6B6gApSDMIBchbIAAh1IhcAAIAAg+IB6AAIAfAfIAACtIiZCZgAsfCkIhXAAIB/B/IlDAAIgfgfIAAh2IAfgeIAfAAIAAB/ICaAAIiAh/IEGAAIAAglIleAAIAAg0IFeAAIAAgkIl8AAIAADUIhdBcIAAhXIA+g9IgfgeIAAiUIAfgfIG5AAIAfAfIAACUIgfAeIA9A9IAABXgA3yEjIAAg9ICCAAIAAnyIBAAAIAAIQIgeAfgA8kEjIgfgfIAAknIAfgfIDTAAIAgAfIAACOIggAfIiWAAIAAg9IB4AAIAAhRIiWAAIAADqIDyAAIAAAeIgeAfgAbhA7IktAAIiECDIAAhWIAtgtIgtAAIAAg1IB7AAIAAgYIhcAAIAAg1IBcAAIAAgaIhcAAIAAg0IBcAAIAAgSIA+AAIAAASIDDAAIAAgSIA9AAIAAASIBdAAIAAA0IhdAAIAAAaIBdAAIAAA1IhdAAIAAAYIB7AAIAAA1IgtAAIAtAtIAABWgAXpAGIDDAAIAAgYIjDAAgAXphHIDDAAIAAgaIjDAAgA3yCKIAAkrIBBAAIAAErgA68jVIinCoIAAhWIB8h9IAAAAIAigiIBXAAIgiAiIB9B9IAABWgAh7hjIgegfIAAhNIimAAIAAgeIAfgfIClAAIAgAfIAABMIA8AAIAAA+gAmbhjIAAipIAeAAIAgAfIAACKgAzUhjIAAg1ICHAAIgpgqIg/AAIAAg0IC7AAIArgsIBWAAIgrAsIDmAAIAAA0Ig8AAIgrAqICFAAIAAA1gAv2iYIB7AAIApgqIjOAAgAAujLIAAhXIBcBcIAABXgApSjLIAAhXIBcBcIAABXgAcninIAAgbIm6AAIAAAbIg9AAIAAgxIAfgeIC6AAIArgsIBXAAIgrAsIDmAAIAeAeIAAAxg");
        this.shape_81.setTransform(494,218.1);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("#231815").ss(1.5,1,1).p("AJtEQIAAofIW5IfI25AAMgqSAAA");
        this.shape_82.setTransform(494.5,78.8);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f().s("#231815").ss(1.5,1,1).p("EgglAAAMBBLAAA");
        this.shape_83.setTransform(494.5,174.3);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#231815").s().p("Ag3A0QgUgVAAgfQAAgfAUgUQATgUAbAAQAZAAARAPIAAgLIArAAIAACHIgrAAIAAgLQgRAPgZAAQgbAAgTgUgAgXgZQgJALAAAOQAAAPAJAKQAJAKAOAAQANAAAKgKQAKgKAAgPQAAgOgKgLQgKgJgNgBQgOABgJAJg");
        this.shape_84.setTransform(530.3,79.5);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#231815").s().p("AAaBhIAAhKQAAgMgHgHQgGgGgKgBQgcABAAAkIAAA/IgrAAIAAjBIArAAIAABIQARgSAYABQAYAAAOAPQAPAQAAAYIAABTg");
        this.shape_85.setTransform(513.7,76.5);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#231815").s().p("AgoA/QgTgLgDgTIAqgJQADAQAVAAQARAAAAgLQAAgIgNgCIgbgFQgogIAAgfQAAgVARgMQAQgNAaAAQAYAAAQAKQARALAEASIgoAHQgBgGgGgEQgGgFgJAAQgPAAAAALQAAAGAKADIAfAHQAmAHAAAgQAAAWgSAMQgQAMgcAAQgYAAgRgJg");
        this.shape_86.setTransform(498.2,79.5);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#231815").s().p("AhFA/IAkgUQAIAKAHADQAGAEALAAQAPAAAIgIQAKgJAAgQIAAgEQgPANgZAAQgbAAgTgTQgTgSAAgcQAAgcATgTQATgTAbAAQAZAAAPANIAAgJIAqAAIAAB6QABAegWASQgUARghAAQgxAAgUghgAgWgzQgJAIAAAOQAAANAJAJQAJAIAOAAQANAAAIgIQAKgJAAgNQAAgOgKgIQgIgJgNAAQgOAAgJAJg");
        this.shape_87.setTransform(482.3,81.8);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#231815").s().p("AAaBGIAAhJQAAgMgGgIQgHgHgKAAQgbAAAAAlIAAA/IgsAAIAAiHIAsAAIAAANQAPgRAZAAQAYAAAPAPQAOAQAAAaIAABSg");
        this.shape_88.setTransform(465.9,79.3);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#231815").s().p("Ag3A0QgUgVAAgfQAAgfAUgUQATgUAbAAQAZAAARAPIAAgLIArAAIAACHIgrAAIAAgLQgRAPgZAAQgbAAgTgUgAgXgZQgJALAAAOQAAAPAJAKQAJAKAOAAQANAAAKgKQAKgKAAgPQAAgOgKgLQgKgJgNgBQgOABgJAJg");
        this.shape_89.setTransform(448.2,79.5);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#231815").s().p("AAaBhIAAhKQAAgMgGgHQgHgGgKgBQgbABAAAkIAAA/IgsAAIAAjBIAsAAIAABIQAQgSAYABQAYAAAPAPQAOAQAAAYIAABTg");
        this.shape_90.setTransform(431.7,76.5);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#231815").s().p("AhBBDQgcgbAAgoQAAgnAcgbQAcgcAoAAQAiAAAZATQAZATAGAgIgrAKQgJgngmAAQgWAAgOAQQgPAPgBAWQABAXAPAQQAOAPAWAAQARAAAMgKQANgKAFgUIAsAJQgGAhgZAUQgZATgjAAQgoAAgcgcg");
        this.shape_91.setTransform(412.9,77.2);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#231815").s().p("AgRARQgHgHAAgKQAAgJAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgIAHgKAAQgKAAgHgHg");
        this.shape_92.setTransform(392.9,79.2);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#231815").s().p("Ag3A0QgUgVAAgfQAAgfAUgUQATgUAbAAQAZAAARAPIAAgLIArAAIAACHIgrAAIAAgLQgRAPgZAAQgbAAgTgUgAgXgZQgKALAAAOQAAAPAKAKQAJAKAOAAQANAAAKgKQAJgKABgPQgBgOgJgLQgKgJgNgBQgOABgJAJg");
        this.shape_93.setTransform(374.1,79.5);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#231815").s().p("AAaBGIAAhJQAAgMgHgIQgGgHgKAAQgcAAAAAlIAAA/IgrAAIAAiHIArAAIAAANQARgRAYAAQAYAAAOAPQAPAQAAAaIAABSg");
        this.shape_94.setTransform(357.6,79.3);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#231815").s().p("AgVBkIAAiHIArAAIAACHgAgRg5QgHgHAAgKQAAgLAHgHQAIgHAJAAQAKAAAIAHQAHAHAAALQAAAKgHAHQgHAGgLAAQgKAAgHgGg");
        this.shape_95.setTransform(345.2,76.2);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#231815").s().p("AAaBhIAAhKQAAgMgGgHQgHgGgLgBQgaABAAAkIAAA/IgsAAIAAjBIAsAAIAABIQAPgSAZABQAYAAAOAPQAPAQAAAYIAABTg");
        this.shape_96.setTransform(332.9,76.5);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#231815").s().p("AhBBDQgcgbAAgoQAAgnAcgbQAcgcAoAAQAhAAAZATQAaATAHAgIgtAKQgDgTgOgKQgMgKgRAAQgWAAgOAQQgPAPgBAWQABAXAPAQQAOAPAWAAQAmAAAJgoIAsAJQgGAhgaAUQgYATgjAAQgoAAgcgcg");
        this.shape_97.setTransform(314.1,77.2);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f().s("#231815").ss(3).p("EgglAQbMBBLAAAMAAAgg1MhBLAAAg");
        this.shape_98.setTransform(494.5,156.7);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#FCCF00").s().p("EgglAQbMAAAgg1MBBLAAAMAAAAg1g");
        this.shape_99.setTransform(494.5,156.7);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#FCCF00").s().p("EgAQAytMAAAhlYIAiAAMAAABlYg");
        this.shape_100.setTransform(103.8,376);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#FCCF00").s().p("Aj5A4IAAhvIHzAAIAABvg");
        this.shape_101.setTransform(71.9,61.1);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#FCCF00").s().p("AiECQQg0gwAAhHQAAhBAmgrIgbAAIAAhvIFbAAIAABvIgbAAQAmArAABBQAABHgzAwQg1AzhRAAQhQAAg0gzgAhAg5QgZAZAAAiQAAAkAZAYQAZAYAnAAQAoAAAagYQAYgYAAgkQAAgigYgZQgagagoAAQgmAAgaAag");
        this.shape_102.setTransform(79.4,94.2);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#FCCF00").s().p("AirCAIAAhvIBDAAQhIgqAAhNQAAgNADgMIBvAEIAAAVQAAB3CCAAIBtAAIAABvg");
        this.shape_103.setTransform(79.2,128.8);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#FCCF00").s().p("AiyCxIAAhuIC9AAQAeAAAUgRQATgRAAgbQgBgggXgTQgYgUgwAAIiiAAIAAhvIFbAAIAABvIghAAQAsApAABBQAAA+goAlQgoAlhBAAg");
        this.shape_104.setTransform(80,167.3);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#FCCF00").s().p("Ah/CUIAAg/IhnAAIAAhuIBnAAIAAhmIBYAAIAABmIB4AAQAzAAgBguQAAgagNgZIBXgaQAaAwAAAwQAABBgjAjQgkAlhEAAIiDAAIAAA/g");
        this.shape_105.setTransform(74.8,202.9);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#FCCF00").s().p("Aj5A3IAAhuIHzAAIAABug");
        this.shape_106.setTransform(71.9,227.5);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#FCCF00").s().p("AiyCxIAAhvIC9AAQAeAAAUgQQATgRAAgaQgBghgXgTQgYgUgwAAIiiAAIAAhvIFbAAIAABvIghAAQAsAqAABAQAAA9goAmQgoAlhBAAg");
        this.shape_107.setTransform(80,258.8);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#FCCF00").s().p("AisCpQhGhHAAhnQAAhYAwhAQAxhCBRgQIAbBwQgyAKgZAiQgZAfAAAvQAAA2AnAmQAoAoA6AAQA7AAAogoQAogmAAg2QAAgugZggQgbghgzgMIAXhwQBVAQAzBBQAwA+AABcQAABnhGBHQhHBIhmAAQhlAAhHhIg");
        this.shape_108.setTransform(73.6,306.6);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#FCCF00").s().p("AiECRQg0gxAAhIQAAg/AmgsIgbAAIAAhvIFbAAIAABvIgbAAQAmAsAAA/QAABIgzAxQg1AyhRAAQhQAAg0gygAhAg5QgZAZAAAiQAAAlAZAXQAZAYAnAAQAoAAAagYQAYgXAAglQAAgjgYgYQgagagoAAQgmAAgaAag");
        this.shape_109.setTransform(79.4,372.7);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#FCCF00").s().p("Aj5CxIAAhwIC5AAQgsgqAAhAQAAg9AnglQAoglBBAAIDWAAIAABvIi+AAQgfAAgTAQQgSARAAAbQAAAhAWASQAZATAyAAIChAAIAABwg");
        this.shape_110.setTransform(71.9,415.2);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#FCCF00").s().p("AA9A1QAVgDALgTQAJgQAAgXQAAgVgIgNQgIgLgMAAQgSAAgHAjIgOBGQgJAwgaAaQgZAbgpAAQg1AAghgqQgggpAAhDQAAg/AcgrQAagpAugKIAUBlQgRADgLAPQgNAQAAAXQAAAVAJALQAIAIALAAQASAAAGgaIARhRQAKgwAbgZQAbgYAnAAQA5AAAfAtQAeAqAABIQAABAgYArQgbAvgzAIg");
        this.shape_111.setTransform(79.4,454.9);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#FCCF00").s().p("AjECNQgxgxAAhFQABhBAhgnIgXAAIAAhtIE5AAQBPAAAtA3QAqA1ABBWQAAB9hVAyIgxhdQAXgTAKgRQAKgTAAgaQAAgmgXgYQgWgYgoAAIgKAAQAhAnABBBQAABFgxAxQgxAyhIAAQhIAAgwgygAiFg5QgXAXAAAiQAAAkAXAXQAVAXAkABQAigBAXgXQAVgXABgkQgBgigVgXQgXgYgiAAQgjAAgWAYg");
        this.shape_112.setTransform(85.5,495.9);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#FCCF00").s().p("AioCxIAAhwIAhAAQgrgogBhCQAAg8AogmQAoglBBAAIDVAAIAABuIi9AAQgeAAgUARQgTARAAAaQABAhAXATQAZAUAwgBIChAAIAABwg");
        this.shape_113.setTransform(78.9,538);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#FCCF00").s().p("AiECQQg0gwAAhHQAAhBAmgrIgbAAIAAhvIFbAAIAABvIgbAAQAmArAABBQAABHgzAwQg1AzhRAAQhQAAg0gzgAhAg5QgZAZAAAiQAAAkAZAYQAZAYAnAAQAoAAAagYQAYgYAAgkQAAgigYgZQgagagoAAQgmAAgaAag");
        this.shape_114.setTransform(79.4,583.2);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#FCCF00").s().p("Aj5CxIAAhvIC5AAQgsgrAAhAQAAg9AnglQAoglBBAAIDWAAIAABvIi+AAQgeAAgUARQgSAQAAAbQAAAhAWASQAZAUAyAAIChAAIAABvg");
        this.shape_115.setTransform(71.9,625.7);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#FCCF00").s().p("AisCpQhGhIAAhmQAAhYAwhAQAxhCBRgQIAbBwQgyALgZAhQgZAgAAAuQAAA2AnAnQAoAmA6AAQA7AAAogmQAognAAg2QAAgugZggQgbghgzgMIAXhwQBVAQAzBBQAwA/AABbQAABnhGBHQhHBIhmAAQhlAAhHhIg");
        this.shape_116.setTransform(73.6,673.9);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#FCCF00").s().p("AgKV9MAAAgr5IAVAAMAAAAr5g");
        this.shape_117.setTransform(210.9,192.1);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FCCF00").s().p("AhtBzIAAhIIAVAAQgcgaAAgrQAAgoAagYQAagYAqAAICLAAIAABIIh7AAQgUAAgNALQgMAKAAASQAAAuA+AAIBqAAIAABIg");
        this.shape_118.setTransform(194.7,65.4);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FCCF00").s().p("AhWBYQghgkAAg0QAAg0AhgjQAiglA0AAQA1AAAiAlQAhAjAAA0QAAA0ghAkQgiAlg1AAQg0AAgiglgAgqgmQgQAQAAAWQAAAWAQAQQARARAZAAQAaAAAQgRQARgQgBgWQABgWgRgQQgRgRgZAAQgYAAgSARg");
        this.shape_119.setTransform(195.1,93.2);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FCCF00").s().p("AiaAfQgNgNAAgRQAAgSANgMQALgMARAAQASAAALAMQAMAMAAASQAAARgMANQgLALgSAAQgRAAgLgLgAg7AlIAAhIIDjAAIAABIg");
        this.shape_120.setTransform(189.6,113.4);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FCCF00").s().p("AhSBhIAAgpIhEAAIAAhIIBEAAIAAhDIA5AAIAABDIBOAAQAhAAAAgeQAAgSgJgPIA5gRQAQAfABAfQgBAqgWAYQgYAYgsAAIhVAAIAAApg");
        this.shape_121.setTransform(192,129.9);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FCCF00").s().p("AiaAeQgNgMAAgSQAAgRANgMQALgMARAAQASAAALAMQAMAMAAARQAAASgMAMQgLAMgSAAQgRAAgLgMgAg7AlIAAhIIDjAAIAABIg");
        this.shape_122.setTransform(189.6,146.3);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#FCCF00").s().p("AhSBhIAAgqIhEAAIAAhHIBEAAIAAhDIA5AAIAABDIBOAAQAhAAAAgeQAAgSgJgPIA5gRQAQAfABAfQgBAqgWAYQgYAYgsgBIhVAAIAAAqg");
        this.shape_123.setTransform(192,162.7);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FCCF00").s().p("AhWBUQghgjAAgyQAAgxAgghQAigiA1gBIATAAIAACmQAUgEAMgNQALgOAAgRQAAgjgagOIANhAQAkAPASAdQARAdAAAoQAAAxghAjQgiAjg1AAQg0AAgigjgAg0gdQgJAMAAAQQAAAPAKAOQAKANAQAGIAAheQgSAGgJAMg");
        this.shape_124.setTransform(195,185.5);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#FCCF00").s().p("AiUB/IAAhIIASAAQgZgcAAgqQAAgvAigfQAighA1AAQA0AAAiAhQAhAfAAAvQAAAqgZAcIBgAAIAABIgAhMgoQgRAQAAAYQAAAWARAPQAQARAaABQAZgBAQgRQARgPgBgWQABgYgRgQQgPgPgaAAQgaAAgQAPg");
        this.shape_125.setTransform(198.6,212.4);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FCCF00").s().p("AhtC/IAAhJIAVAAQgcgYAAgrQAAgYAKgTQAKgTASgLQgmgfAAgyQAAgkAZgZQAagZAoAAICOAAIAABIIh+AAQgTAAgMALQgLAKAAARQAAAUAPALQAOANAbAAIBwAAIAABHIh+AAQgTAAgMALQgLALAAAQQAAAVAPALQAOAMAbAAIBwAAIAABJg");
        this.shape_126.setTransform(194.7,249.1);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#FCCF00").s().p("AhWBYQghgkAAg0QAAg0AhgjQAiglA0AAQA1AAAiAlQAhAjAAA0QAAA0ghAkQgiAlg1AAQg0AAgiglgAgqglQgQAPAAAWQAAAWAQARQARARAZAAQAaAAAQgRQARgRgBgWQABgWgRgPQgRgRgZAAQgYAAgSARg");
        this.shape_127.setTransform(195.1,284.4);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FCCF00").s().p("AhvBuQguguAAhDQAAg5AfgqQAggrA1gLIARBKQggAHgRAVQgQAVAAAeQAAAjAZAZQAaAZAmAAQAnAAAagZQAagZAAgjQAAgegRgUQgRgWghgIIAOhJQA4AKAhAqQAfAqAAA7QAABDgtAuQguAvhDAAQhCAAgtgvg");
        this.shape_128.setTransform(191.2,315.3);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#FCCF00").s().p("AgKb4MAAAg3vIAVAAMAAAA3vg");
        this.shape_129.setTransform(164.2,230);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#FCCF00").s().p("AhtBzIAAhIIAVAAQgcgbAAgqQAAgoAagYQAagYAqAAICLAAIAABIIh7AAQgUAAgMALQgNALAAARQAAAuA+AAIBqAAIAABIg");
        this.shape_130.setTransform(148,65.4);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#FCCF00").s().p("AiABcQgfggAAgtQAAgqAWgaIgPAAIAAhHIDLAAQA0ABAdAjQAcAjAAA3QAABSg3AgIggg8QAPgNAGgLQAHgMAAgRQAAgZgOgOQgPgQgagBIgHAAQAWAaAAAqQAAAtggAgQgfAggwAAQguAAgggggAhWglQgPAQAAAVQAAAXAPAPQAOAQAWAAQAYAAAOgQQAOgPAAgXQAAgVgOgQQgPgQgXAAQgWAAgOAQg");
        this.shape_131.setTransform(152.3,94.7);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#FCCF00").s().p("AiaAeQgNgMAAgSQAAgRANgMQAMgMARAAQARAAALAMQAMAMAAARQAAATgMALQgLAMgRAAQgRAAgMgMgAg6AkIAAhHIDiAAIAABHg");
        this.shape_132.setTransform(142.9,114.8);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#FCCF00").s().p("AAoAiQAbgEgBgjQAAgOgEgIQgGgHgIAAQgLAAgGAWIgJAuQgMBCg1AAQgiAAgVgcQgWgbAAgrQAAgpASgcQASgaAegHIANBCQgLABgIAKQgIALAAAPQAAANAGAHQAFAGAHAAQAMAAAEgSIAKg0QAHggASgQQARgPAaAAQAkAAAVAdQATAcAAAuQAAAqgPAcQgSAfggAFg");
        this.shape_133.setTransform(148.4,133.2);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#FCCF00").s().p("AhWBTQgigiAAgyQAAgxAhghQAhgiA2gBIATAAIAACmQAUgFALgNQAMgNABgRQgBgigagOIANhBQAkAPASAdQARAdAAAoQAAAxggAjQgjAjg1AAQg0AAgigkgAg9gBQAAAPAJAOQALAOAQAEIAAhcQgjAKgBAjg");
        this.shape_134.setTransform(148.4,157.8);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#FCCF00").s().p("AiWCPIAAh4QgBhJAqgvQArgtBCAAQBEAAAqAtQApAvAABJIAAB4gAg+gqQgYAaAAAqIAAArICtAAIAAgrQAAgqgYgaQgYgZgnAAQgmAAgYAZg");
        this.shape_135.setTransform(144.6,186.7);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#FCCF00").s().p("AhWBUQgigjAAgyQAAgxAhghQAhgiA2gBIATAAIAACmQAUgEALgNQAMgOABgRQgBgjgagNIANhBQAkAOASAfQARAcAAAoQAAAxggAjQgjAjg1AAQg0AAgigjgAg9gBQAAAPAJANQALAOAQAGIAAheQgjALgBAjg");
        this.shape_136.setTransform(148.4,227.2);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#FCCF00").s().p("AhxA3ICLg3IiLg2IAAhMIDjBeIAABJIjjBeg");
        this.shape_137.setTransform(148.3,252.8);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#FCCF00").s().p("AiaAeQgNgMAAgSQAAgRANgMQAMgMARAAQARAAALAMQAMAMAAARQAAATgMALQgLAMgRAAQgRAAgMgMgAg6AlIAAhIIDiAAIAABIg");
        this.shape_138.setTransform(142.9,272.8);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#FCCF00").s().p("AhTBhIAAgpIhCAAIAAhIIBCAAIAAhDIA6AAIAABDIBNAAQAiAAgBgeQABgSgKgPIA5gRQASAggBAeQAAAqgWAYQgYAYgsAAIhVAAIAAApg");
        this.shape_139.setTransform(145.4,289.3);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#FCCF00").s().p("AhWBeQgigfAAgvQAAgqAZgcIgSAAIAAhIIDiAAIAABIIgSAAQAZAcAAAqQAAAvggAfQgjAhg1AAQg0AAgighgAgqglQgQAQAAAWQAAAYAQAQQARAPAZAAQAaAAARgPQAQgQAAgYQAAgWgQgQQgRgQgagBQgZABgRAQg");
        this.shape_140.setTransform(148.4,314.4);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#FCCF00").s().p("AhWBUQgigjAAgyQAAgxAhghQAhgiA2gBIATAAIAACmQAUgEALgOQAMgNABgRQgBgjgagOIANhAQAkAPASAeQARAcAAAoQAAAxggAjQgjAjg1AAQg0AAgigjgAg9gBQAAAQAJANQALANAQAGIAAheQgjALgBAjg");
        this.shape_141.setTransform(148.4,341.2);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#FCCF00").s().p("AhvBUIAAhJIAsAAQgvgbAAgzQAAgIACgIIBIAEIAAAMQAABOBUAAIBHAAIAABJg");
        this.shape_142.setTransform(148.2,362.9);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#FCCF00").s().p("AhwBuQgtgvgBhCQABg5AfgqQAggrA1gLIARBKQggAHgRAVQgQAVAAAeQAAAjAZAZQAaAZAmAAQAnAAAagZQAagZAAgjQAAgegRgUQgRgWgigIIAPhJQA4AKAhAqQAgAqgBA7QABBCgvAvQgtAvhDAAQhBAAgvgvg");
        this.shape_143.setTransform(144.6,391.2);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#FCCF00").s().p("Ah6BPQgkgiAAg0QABgpASgcQAUgdAjgKIAOBHQgaAIAAAgQABAUARAQQAWAUAnAAQgMgMgIgSQgHgTAAgSQAAgwAcgdQAagdAtABQAuAAAcAfQAdAhAAAyQAAA6gnAjQgpAihJABQhUgBgrgqgAAVgkQgMANAAATQAAARAMANQANANAUAAQATAAAMgNQAMgNAAgRQAAgTgNgNQgMgNgTAAQgTAAgNANg");
        this.shape_144.setTransform(242,63.7);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#FCCF00").s().p("AgcAeQgMgMAAgSQAAgQAMgMQAMgMAQAAQARAAAMAMQAMALAAARQAAASgMAMQgMALgRAAQgQAAgMgLg");
        this.shape_145.setTransform(253.3,82.2);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#FCCF00").s().p("AiBBZQgdggAAgyQABg6AogiQAogkBIABQBWgBApArQAkAiAAA0QABAogUAdQgUAdgjAJIgNhGQAagIAAggQgBgUgRgQQgWgTgngBQAbAaAAApQAAAwgcAdQgbAcgsABQgtAAgeghgAhVgYQgMANAAAQQAAASANAOQANAOATAAQASAAANgOQANgOAAgSQAAgRgNgMQgMgOgUAAQgTAAgNAOg");
        this.shape_146.setTransform(242,101.6);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#FCCF00").s().p("AheBIIg5hhIAAgvIEvAAIAABIIjZAAIAmBIg");
        this.shape_147.setTransform(241.9,125.7);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#FCCF00").s().p("AhyBhQgrglgBg8QABg7ArglQAsglBGAAQBHAAAsAlQArAlAAA7QAAA8grAlQgsAlhHAAQhGAAgsglgAhDgpQgZAPAAAaQAAAbAZAQQAZAPAqAAQArAAAYgPQAZgQAAgbQAAgagZgPQgZgQgqgBQgqABgZAQg");
        this.shape_148.setTransform(242,148.5);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#FCCF00").s().p("AiABQQgagfAAgxQAAgvAbgfQAbgeAsAAQAdAAAaARQATAMAgAiIAoAsIAAhuIBBAAIAADaIgxAAIhihoQgSgUgJgHQgSgNgSAAQgRAAgJALQgKAKAAAQQgBAnAxAEIgNBGQgtgCgbgfg");
        this.shape_149.setTransform(241.6,176.1);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#FCCF00").s().p("AgeBLIAAiVIA9AAIAACVg");
        this.shape_150.setTransform(245.2,197.5);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FCCF00").s().p("AAZBpQgSgPgKgaQgVAtgwAAQgmAAgXgfQgZgeAAgwQAAgwAZgeQAXgfAmAAQAwAAAVAuQAKgbASgOQATgOAYAAQAoAAAZAgQAZAiAAA0QAAA1gZAhQgZAhgoAAQgYAAgTgOgAAkgcQgKAMAAAQQAAASAKALQAKAMASAAQAQAAALgMQAJgLAAgSQAAgQgKgMQgKgNgRAAQgRAAgKANgAhdgbQgIAMgBAPQABARAIAKQALAMAQAAQAQAAAKgLQAJgLAAgRQAAgPgKgMQgJgMgRAAQgQAAgKAMg");
        this.shape_151.setTransform(242,220.4);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FCCF00").s().p("AgcAeQgMgMAAgSQAAgQAMgMQAMgMAQAAQARAAAMAMQAMALAAARQAAASgMAMQgMALgRAAQgQAAgMgLg");
        this.shape_152.setTransform(253.3,238.9);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#FCCF00").s().p("AAZBoQgSgOgKgaQgVAtgwAAQgmAAgXgfQgZgeAAgwQAAgvAZgfQAXgfAmAAQAwABAVAtQAKgbASgNQATgPAYAAQAoAAAZAgQAZAhAAA1QAAA1gZAhQgZAhgoAAQgYAAgTgPgAAkgcQgKAMAAAQQAAARAKAMQAKAMASAAQAQAAALgMQAJgMAAgRQAAgQgKgMQgKgNgRAAQgRAAgKANgAhdgaQgIAKgBAQQABAQAIAMQALAMAQgBQAQAAAKgLQAJgLAAgRQAAgPgKgLQgJgNgRAAQgQAAgKANg");
        this.shape_153.setTransform(242,257.5);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#FCCF00").s().p("AheBJIg5hiIAAguIEvAAIAABHIjZAAIAmBJg");
        this.shape_154.setTransform(241.9,280.8);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#FCCF00").s().p("AhyBhQgrglgBg8QABg7ArglQAsglBGAAQBHAAAsAlQArAlAAA7QAAA8grAlQgsAlhHAAQhGAAgsglgAhDgqQgZARAAAZQAAAbAZAQQAZAQAqAAQArAAAYgQQAZgQAAgbQAAgagZgQQgZgQgqAAQgqAAgZAQg");
        this.shape_155.setTransform(242,303.5);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#FCCF00").s().p("AiABQQgagfAAgxQAAgwAbgeQAbgeAsAAQAdgBAaASQASAMAhAjIAoArIAAhvIBBAAIAADcIgxAAIhihpQgTgUgIgHQgSgNgSAAQgRAAgJALQgKAKAAAQQgBAnAxAFIgNBEQgtgCgbgeg");
        this.shape_156.setTransform(241.6,331.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(19.1,575.1,1617.3,1105.4);
// library properties:
    lib.properties = {
        id: '32FB14BD8E1DFE4BBBBF6C65651DD5CB',
        width: 750,
        height: 1050,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [],
        preloads: []
    };



// bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }

    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['32FB14BD8E1DFE4BBBBF6C65651DD5CB'] = {
        getStage: function() { return exportRoot.getStage(); },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;