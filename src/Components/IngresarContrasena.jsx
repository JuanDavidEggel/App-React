import { useState } from 'react'; /*buscar desde React la función useState para crear estados locales en el componente*/

export function IngresarContrasena({ password, setPassword }) { //recibo props desde App.jsx
  const [mostrar, setMostrar] = useState(false); //estado local, controla si el texto del input se ve o no, y empieza en false (oculto)

  return (
    <div className="contenedor-input">
        <input 
        type={mostrar ? "text" : "password"} 
        value={password} //muestra lo que hay guardado en password
        onChange={(e) => setPassword(e.target.value)} /*Cada vez que cambio el contenido del input, React ejecuta onChange, (e) representa el 
        evento ocurrido, e.target refiere al elemento HTML que disparó el evento (el input), e.target.value obtiene el texto actual que el usuario
        acaba de escribir dentro del input y setPassword actualiza el estado password en App
        placeholder="Escriba la contraseña"*/
        />        

        <button 
        onClick={() => setMostrar(!mostrar)}> {/* cuando hago click, invierte mostrar */}
            {mostrar ? "Ocultar" : "Mostrar"}
        </button>
    </div>
  );
}