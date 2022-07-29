/**********************
 * INICIO DE SESIÓN
 *********************/

/* Librería de los programas */
import {revisarusuario} from "./componentes/login.js"
import {panel}from "./componentes/panel.js"//<-- Diseño del panel de informacion
import {header}from "./componentes/menu.js"
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


panel();//<-- Se llama al panel