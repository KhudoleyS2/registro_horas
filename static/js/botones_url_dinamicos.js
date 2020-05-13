//Inicio
var boton_comenzar = document.getElementById('boton_comenzar');
//Guardar la url que se va a modificar. (URL base sin el /_id_registro
var select = document.getElementById("select_tipo_registro");
var url_link_usuario = boton_comenzar.href;

//Funcino para poner el url con el id del primer elemento del select para que salga por default.
function boton_default_set_url(){
    let id_tipo_registro = select[0].value;
    boton_comenzar.href = url_link_usuario+id_tipo_registro
}    

//iniciar la funcion para rellenar la ulr nada mas cargar la pagina.
boton_default_set_url();


//Funcino para cambiar la url_dinamicamente cuando se seleccione el select.
function boton_tipo_registro_set_url(){
    let id_tipo_registro = select.value;
    boton_comenzar.href = url_link_usuario+id_tipo_registro
}

//Anadir Event listener al select para cambiar la url del boton comenzar registro cada vez que se cambie la opcion.
select.addEventListener('change',boton_tipo_registro_set_url);
