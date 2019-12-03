AFRAME.registerComponent ('zoom', {
	schema: {
		target: {type: 'selector', default: ''}
	},
	
	init: function () {
		var el = this.el;
        var data = this.data;
		
		el.addEventListener('click', function () {			
			if (data.target) {
                console.log(data.target);
                var currentScale = el.getDOMAttribute('scale');
                var id = el.id;
                if(currentScale.x !=2){
                    console.log("devo dar zoom");
                    el.setAttribute('scale', {x:2, y:2, z: 2});
                    el.setAttribute('position', {x:0 ,y:1.65, z: 3});
                    console.log(el.getDOMAttribute('scale'));
                }
                else{
                    if(id == "doordrawn"){
                        console.log("sou porta e devo voltar ao normal");
                        el.setAttribute('position', {x:-1.1, y:1.65, z:-1.5});
                        el.setAttribute('scale', {x:1, y:0.8, z:1});
                        console.log(el.getDOMAttribute('scale'));
                    }
                    if(id == "techdrawn"){
                        console.log("sou tech e devo voltar ao normal");
                        el.setAttribute('position', {x: 0.4, y: 1.65, z: -1.5});
                        el.setAttribute('scale', {x:1, y: 0.6, z:1});
                        console.log(el.getDOMAttribute('scale'));
                    }
                }
			}			
		});
	}
});


AFRAME.registerComponent('init-training',{
    init: function(){
        var el = this.el;
    }

    var iniciar = document.querySelector('#startButton');
    iniciar.addEventListener('click', function() {

    // Change camera position
    let camera = document.querySelector('#camera');
    camera.setAttribute('position', {x:2, y:0, z:0});
    camera.setAttribute('rotation', {x:0, y:0, z:0});

    //Training Menu
    let trainingMenu = document.querySelector("#training-menu-brackground");
    trainingMenu.setAttribute("visible", true);



});