AFRAME.registerComponent ('zoom', {
	schema: {
		target: {type: 'selector', default: ''}
	},
	
	init: function () {
		var el = this.el;
        var data = this.data;
        var id = el.id;
        
		el.addEventListener('click', function () {			
			if (id=="doordrawn") {
                var currentScale = el.getDOMAttribute('scale');
                
                if(currentScale.x !=2){
                    console.log("devo dar zoom");
                    el.setAttribute('scale', {x:2, y:2, z: 2});
                    el.setAttribute('position', {x:0 ,y:1.65, z: 3});
                    console.log(el.getDOMAttribute('scale'));
                }
                else{
                    console.log("sou porta e devo voltar ao normal");
                    el.setAttribute('position', {x:-1.1, y:1.65, z:-1.5});
                    el.setAttribute('scale', {x:1, y:0.8, z:1});
                    console.log(el.getDOMAttribute('scale'));
                    }
                }
            
            if(id == "techdrawn"){
                var currentScale = el.getDOMAttribute('scale');
                
                if(currentScale.x !=2){
                    console.log("devo dar zoom");
                    el.setAttribute('scale', {x:2, y:2, z: 2});
                    el.setAttribute('position', {x:0 ,y:1.65, z: 3});
                    console.log(el.getDOMAttribute('scale'));
                }
                else{
                   
                        console.log("sou porta e devo voltar ao normal");
                        el.setAttribute('position', {x:0.4, y:1.65, z:-1.5});
                        el.setAttribute('scale', {x:1, y:0.6, z:1});
                        console.log(el.getDOMAttribute('scale'));
                    }
                }
            			
		});
	}
});
