'use strict'

let buttonMenu = document.getElementById("buttonMenu");
let listHidden = document.getElementById("listHidden");
let content = document.getElementById("content");

let flatHidden = false;

buttonMenu.onclick = function(){
    if(!flatHidden){
        listHidden.className = "nav_hidden_list nav_hidden_list_search";        
        buttonMenu.className = "nav_small_button nav_small_button_image";
    }
    else{
        listHidden.className = "nav_hidden_list";        
        buttonMenu.className = "nav_small_button";
    }

    flatHidden = !flatHidden;
}

let buttonFooter = document.getElementsByClassName("section-footer__h3");
let sectionFooter = document.getElementsByClassName("section-footer__ul");


for(let i = 0; i < buttonFooter.length; i++){
    buttonFooter[i].onclick = function(){
        if(sectionFooter[i].className == "section-footer__ul"){
            
            for(let j = 0; j < sectionFooter.length-1; j++){
                sectionFooter[j].className = "section-footer__ul";
            }
            
            sectionFooter[i].className += " section-footer__ul--active";

        }else
            sectionFooter[i].className = "section-footer__ul";
    }
}