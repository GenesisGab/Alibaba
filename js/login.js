/* LIBRERIA DE COMPPONENTES */
export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");

/* LIBRERIAS BD USER Y ADMINISTRADOR*/
import {user} from "./user.js";
import { administrador } from "./administrador.js";

//import { UserCreditcard } from "./user_has_creditcard.js";

export function revisarusuario(usuario, password){
    
    /* Con un for se recorre la Base de Datos de Usuarios para validar las
    credenciales ingresadas */
    
    for (let i=0;i<user.length;i++){ //Valida si el user ingresado se encuentra en la BD

        if(usuario===user[i][1]){
                    
          if(password===user[i][2]){
            
            alert('* Acceso con usuario valido *');

            //Despliegue de datos por consola del usuario
            console.log("ID del Usuario..........: ",user[i][0]);
            console.log("Nombre del Usuario......: ",user[i][1]);
            console.log("Password o Clave........: ",user[i][2]);
            console.log("Nombre completo.........: ",user[i][3]);
            console.log("Dirección...............: ",user[i][4]);
            console.log("email...................: ",user[i][5]);
            console.log("Número de Telefono......: ",user[i][6]);

            //console.log("Tarjeta de credito: ",UserCreditcard[i][1]);

            i=user.length;

            administrador();
            
          }else{
            console.log("Contraseña no valida");
         }
                      
        } else if(usuario===user[i][5]){  //Valida si el email ingresado se encuentra en la BD

            if(password===user[i][2]){
                
                alert("* Acceso con email valido *"); //Msj que indica al usuario que su correo es valido

                //Despliegue de datos por consula del usuario
                console.log("ID del Usuario:.........: ",user[i][0]);
                console.log("Nombre del Usuario:.....: ",user[i][1]);
                console.log("Password o Clave:.......: ",user[i][2]);
                console.log("Nombre completo::::.....: ",user[i][3]);
                console.log("Dirección...............: ",user[i][4]);
                console.log("email...................: ",user[i][5]);
                console.log("Número de Telefono......: ",user[i][6]);
                
                //console.log("Tarjeta de Credito......: ",UserCreditcard[i][1]);

                i=user.length;
                
                administrador();
            }

        } 
               
    }
 
}