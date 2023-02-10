//- - - - - - Eventos de los Input y Textarea - - - - - - //
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// - - - - Evento de submit al formulario - - - - - //
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar formulario:
    const {nombre,email,mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    //Enviar el formulario:
    mostrarAlerta('Datos enviados correctamente');
});

//Muestra alerta en pantalla de error o envio correcto:
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error'); 
    } else{
        alerta.classList.add('envio');
    }

    formulario.appendChild(alerta);

    //Desaparezca la alerta después de 4 segundos:
    setTimeout( () => {
        alerta.remove();
    }, 4000);
}