/* inicializar array datos */
const datos = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    pedido: ''
}

/* eventos de los input */
let nombre = document.querySelector('#nombre');
let correo = document.querySelector('#correo');
let telefono = document.querySelector('#telefono');
let direccion = document.querySelector('#direccion');
let pedido = document.querySelector('#pedido');

//--- metodo addEventListener, escucha un evento indicado y ejecuta una funcion
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
direccion.addEventListener('input', leerTexto);
pedido.addEventListener('input', leerTexto);

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const { nombre, correo, telefono, direccion, pedido} = datos;
    // console.log(nombre);
	// console.log(correo);
	// console.log(telefono);
	// console.log(direccion);
    // console.log(pedido);

if(nombre === '' || correo === '' || telefono === '' || direccion === '' || pedido === ''){
    mostrarError('Todos los campos son obligatorios');
    return;
}
    mostrarMensaje("Enviando datos correctamente");
});

//Funcion sirve para mostrar un mensaje dentro del form
function mostrarError(mensaje){
	let error = document.createElement('p');
	error.textContent = mensaje;
	error.classList.add('error');
	formulario.appendChild(error);

	setTimeout(() => {
		error.remove();
		
		}, 5000);
}

function mostrarMensaje(mensaje){
	let alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('correcto');
	formulario.appendChild(alerta);

	setTimeout(() => {
		alerta.remove();
	}, 3000);
}