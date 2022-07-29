export function header (){
    let root = document.querySelector("#section-header");
  
   //CREACION DE LOS DIV PARA EL PANEL
    root.innerHTML = 
        '<h1 class="TituloH">🦋Gaby</h1>'+
        '<ul class="nav">'+
            '<li><a href="index.html" class="btn_1">Inicio</a></li>'+
            '<li><a href="glosario.html" class="btn_2">Glosario</a></li>'+
        '</ul>';
}
header();