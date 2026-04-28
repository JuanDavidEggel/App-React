import { useState } from 'react';

export function GeneradorPro({ setPassword }) {

    const [usarMayusculas, setUsarMayusculas] = useState(true);
    const [usarMinusculas, setUsarMinusculas] = useState(true);
    const [usarNumeros, setUsarNumeros] = useState(true);
    const [usarEspeciales, setUsarEspeciales] = useState(true);
    const [largo, setLargo] = useState(12);

    const generarPassword = () => {

        let caracteres = '';

        if (usarMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (usarMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
        if (usarNumeros) caracteres += '0123456789';
        if (usarEspeciales) caracteres += '!@#$%^&*()_+';

        if (caracteres.length === 0){
            return;
        }

        let nuevaPassword = '';

        for (let i = 0; i < largo; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            nuevaPassword += caracteres[indice];
        }

        setPassword(nuevaPassword);
    };

    return (
        <div>
            <h3>Generador Pro</h3>
            <label>Largo:</label>
            <input
                type="number"
                value={largo}
                onChange={(e) => setLargo(Number(e.target.value))} //Cuando el usuario cambia el valor del input, se ejecuta onChange y recibe un evento (e). e.target representa el input que disparó el evento. 
                // e.target.value obtiene el nuevo valor que el usuario escribio. Number() convierte ese valor a número, y luego, setLargo actualiza el estado largo con ese nuevo numero.
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={usarMayusculas}
                    onChange={() => setUsarMayusculas(!usarMayusculas)} //Cuando el usuario hace click en el checkbox, se ejecuta onChange, que invierte el valor actual de usarMayusculas. Si usarMayusculas es true, se vuelve false, 
                    // y viceversa. Esto permite al usuario activar o desactivar la inclusión de mayúsculas en la contraseña generada.
                />
                Mayúsculas
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={usarMinusculas}
                    onChange={() => setUsarMinusculas(!usarMinusculas)}
                />
                Minúsculas
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={usarNumeros}
                    onChange={() => setUsarNumeros(!usarNumeros)}
                />
                Números
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={usarEspeciales}
                    onChange={() => setUsarEspeciales(!usarEspeciales)}
                />
                Especiales
            </label>
            <br />
            <br />
            <button onClick={generarPassword}>
                Generar contraseña
            </button>
        </div>
    );
}