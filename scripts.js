document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

let boton = document.getElementById('miBoton');
boton.addEventListener('click', function(){
    alert('Hiciste click en el botón!');
});
const miBoton = document.getElementById('miBoton')
function handleClick() {
    alert('!Hola¡ has hecho click en boton');
}