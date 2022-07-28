/* LIBRERIA DE COMPPONENTES */
export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");

/* LIBRERIAS BD USER Y ADMINISTRADOR*/
import { administrador } from "./administrador.js";
import { user_ob } from "../data/user.js";

export function revisarusuario(usuario, password){
    
    /* Con un for se recorre la Base de Datos de Usuarios para validar las
    credenciales ingresadas */
    
    for (let i=0;i<user_ob.length;i++){ //Valida si el user ingresado se encuentra en la BD

        if(usuario===user_ob[i].nikname){
                    
          if(password===user_ob[i].password){
            
            alert('* Acceso con usuario valido *');
            i=user_ob.length;

            administrador();
            
          }else{
            console.log("Contraseña no valida");
         }
                      
        } else if(usuario===user_ob[i].email){  //Valida si el email ingresado se encuentra en la BD

            if(password===user_ob[i].password){
                
                alert("* Acceso con email valido *"); //Msj que indica al usuario que su correo es valido
                i=user_ob.length;
                
                administrador();
            }

        } 
               
    }
 
}