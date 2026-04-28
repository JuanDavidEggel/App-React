import { useState } from 'react'; //importa el hook useState de React para manejar estados locales en el componente

export function CopiarContrasena({ password }) { //recibe la prop password desde App.jsx para poder copiarla al portapapeles
    const [mensaje, setMensaje] = useState(false); //estado local para controlar si se muestra el mensaje de "Contraseña copiada", empieza en false (no se muestra). mensaje guarda dato,
    //mientras que setMensaje no guarda dato, solo cambia el dato.

    const copiarContrasena = () => { //función que se ejecuta al hacer click en el botón para copiar la contraseña
        if (password.length === 0) {
            return; //si no hay contraseña, no hace nada al hacer click en el botón
        }

        navigator.clipboard.writeText(password); //API de JavaScript para copiar texto al portapapeles. navigator es el navegador,
        // clipboard significa portapapeles, writeText() significa escribir/copiar texto, password es lo que se quiere copiar. El navegador copia la contraseña al portapapeles.

        setMensaje(true); //Cuando el estado cambia React vuelve a renderizar, es decir, vuelve al return

        setTimeout(() => { //setTimeout es una función de JavaScript que ejecuta una función después de un cierto tiempo. En este caso, después de 3000 milisegundos (3 segundos), 
            setMensaje(false);  // se ejecuta la función que pone mensaje en false para ocultar el mensaje de "Contraseña copiada". setMensaje(false) para ocultar mensaje
        }, 3000);
    };

    return (
        <div>
            <button onClick={copiarContrasena}> {/*cuando se hace click en el botón, se ejecuta la función copiarContrasena*/}
                Copiar contraseña
            </button>

            {mensaje ? <p>Copiado con éxito</p> : null}
        </div>
    );
}