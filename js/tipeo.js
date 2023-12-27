const textoFijoElemento = document.getElementById('texto-fijo');
const textoCambianteElemento = document.getElementById('texto-cambiante');
const palabras = [" cumpleaños", " casamiento", " bautismo", " graduación", " fiesta de compromiso", " baby shower"];
let indicePalabra = 0;
let indiceCaracter = 0;
let escribiendo = true;

function tipearTexto() {
    const palabraActual = palabras[indicePalabra];
    const textoActual = palabraActual.slice(0, indiceCaracter);
    textoCambianteElemento.textContent = textoActual;

    if (escribiendo) {
        if (indiceCaracter < palabraActual.length) {
            indiceCaracter++;
            setTimeout(tipearTexto, 100); // Velocidad de tipeo (ajusta según desees)
        } else {
            escribiendo = false;
            setTimeout(borrarTexto, 1000); // Tiempo antes de borrar el texto
        }
    } else {
        if (indiceCaracter > 0) {
            indiceCaracter--;
            setTimeout(borrarTexto, 100); // Velocidad de borrado (ajusta según desees)
        } else {
            escribiendo = true;
            indicePalabra = (indicePalabra + 1) % palabras.length;
            setTimeout(tipearTexto, 1000); // Tiempo antes de pasar a la siguiente palabra
        }
    }
}

function borrarTexto() {
    setTimeout(tipearTexto, 1000); // Iniciar la animación después de un segundo (ajusta según desees)
}

setTimeout(tipearTexto, 1000); // Iniciar la animación después de un segundo (ajusta según desees)
