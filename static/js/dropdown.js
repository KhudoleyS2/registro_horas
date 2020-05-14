//Elementos
var dropdown = document.getElementById('dropdown');
var dropdown_content = document.getElementById('dropdown-content');


//funcion para quitar display:none al dropdown_content
function display_dropdown_content(){
    dropdown_content.style.display = "block";
}


//Agregar event click al boton dropdown.
dropdown.addEventListener("click",display_dropdown_content);