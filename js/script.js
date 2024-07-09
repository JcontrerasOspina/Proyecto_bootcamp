/* inicializar array datos */
const datos = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    pedido: ''
}

/* eventos de los input */
let nombre = document.getElementById('#nombre');
let correo = document.getElementById('#correo');
let telefono = document.getElementById('#telefono');
let direccion = document.getElementById('#direccion');
let pedido = document.getElementById('#pedido');

nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
direccion.addEventListener('input', leerTexto);
pedido.addEventListener('input', leerTexto);

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}