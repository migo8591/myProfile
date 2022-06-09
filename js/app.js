const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const  closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened")
}
openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu)

// *****************************************
//Al dar clip en dispositivo movil se cierre el menu.
//Se debe seleccionar ts ls enlaces del menu de navegación. Al dar clip se va a eliminar del menu la clase menu_opened que hace que el menu este visible. 
//1. Se debe de crear una constante menuLinks. Aquí se seleccionar ts ls elemts que se encuentren dentro de la clase menu 
const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]")
//seleccione ts ls enlaces que tengan un atributo href que comience por # (se debe usar ^) a[href^="#"] otra forma es escapando las comillas interiores: a[href^=\"#\"] 

// cuando seleccionemos cualquier elemento que comience con # lo que vamos hacer es ponerle menuLinks.forEach (recorrer td los enlaces y por cada uno de esos enlaces lo que voy hacer es añadirle un eventListener y que cuando se le haga click vamos a ejecutar una función, esta funcion lo que va hacer es agarrar el menu y elimar la clase menu_opened): Ver 6:46/20:00
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened")
    })
})