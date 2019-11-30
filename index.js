// import 'aframe';
// import 'aframe-event-set-component';

// var dictObjName ={
//     drill: "Furadeira",
//     tripod: "Tripe",
//     door: "Porta",
//     whiteboard: "Quadro de recados",
//     drawing: "Desenho",
//     instructions: "Instrucoes"
// }


// AFRAME.registerComponent('click-drag', {
//     init: function(){
//         var el = this.el;
//         console.log(el);

//         el.addEventListener('drag', function(){
//             console.log(el, 'fui selecionado');
            
//         });
//     }
// });

AFRAME.registerComponent('click-drag-drill', {
    init: function(){
        var el = this.el;
        console.log(el);

        el.addEventListener('ondrag', function(){
            console.log(el, 'fui selecionado');
            
        });
    }
});
