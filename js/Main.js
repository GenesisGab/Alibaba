import{user_ob}from "./data/user.js";

/******************** */


let bt_ver = document.querySelector('#bt_ver');
let root = document.querySelector("#archivos");

//FUNCTION VER
function ver(){

    root.innerHTML = '<div class="archivos" id="archivos">'+ 
                         '<div class="element">'+user_ob[0].nikname+'</div>'+  
                    '</div>'
                   
  }
  
  bt_ver.addEventListener('click',ver);