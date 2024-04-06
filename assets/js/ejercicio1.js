let formularioContacto = document.getElementById("formContacto");

formularioContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    // capturar input con mensajes
    let mensajeForm = document.getElementById("mensajeFormulario");

    // nombre completo
    let nombreCompleto = document.getElementById("nombreCompleto");
    let mensajeNombreCompleto = document.getElementById("mensajeNombreCompleto");
    let datoNombreCompleto = nombreCompleto.value;

    // asunto
    let asunto = document.getElementById("asunto");
    let mensajeAsunto = document.getElementById("mensajeAsunto");
    let datoAsunto = asunto.value;

    // mensaje
    let msg = document.getElementById("msg");
    let mensajeMsg = document.getElementById("mensajeMsg");
    let datoMsg = msg.value;

    // se definen patrones
    const patron = /^[A-Za-z\sñáéíóúü'-]+$/i;

    // flag envío de formulario

    let flagFormulario = true;

    if (patron.test(datoNombreCompleto)) {
        mensajeNombreCompleto.style.color = "green";
        mensajeNombreCompleto.innerText = "Cumple con formato.";
    } else {
        mensajeNombreCompleto.style.color = "red";
        mensajeNombreCompleto.innerText = "El nombre es requerido.";
        flagFormulario = false;
    }

    if (patron.test(datoAsunto)) {
        mensajeAsunto.style.color = "green";
        mensajeAsunto.innerText = "Cumple con formato.";
    } else {
        mensajeAsunto.style.color = "red";
        mensajeAsunto.innerText = "El asunto es requerido.";
        flagFormulario = false;
    }

    if (patron.test(datoMsg)) {
        mensajeMsg.style.color = "green";
        mensajeMsg.innerText = "Cumple con formato.";
    } else {
        mensajeMsg.style.color = "red";
        mensajeMsg.innerText = "El mensaje es requerido.";
        flagFormulario = false;
    }

    //enviar formulario si es que se cumplen todos los criterios

    if (flagFormulario) {
        mensajeForm.style.color = "green";
        mensajeForm.innerText = "Mensaje enviado con éxito!";
        // resetea formulario y borra los mensajes
        formularioContacto.reset();
        mensajeNombreCompleto.innerText = "";
        mensajeAsunto.innerText = "";
        mensajeMsg.innerText = "";
    }
});