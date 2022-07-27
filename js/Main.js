/*
import{user_ob}from "./data/user.js";

let bt_ver = document.querySelector('#bt_ver');
let root = document.querySelector("#archivos");

//FUNCTION VER
function ver(){

    root.innerHTML = '<div class="archivos" id="archivos">'+ 
                         '<div class="element">'+user_ob[0].nikname+'</div>'+  
                    '</div>'
                   
  }
  
  bt_ver.addEventListener('click',ver);
  */

  
 /**********************
 * INICIO DE SESIÓN
 *********************/

/* Librería de los programas */
import {revisarusuario} from "./login.js"

function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    revisarusuario(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento
