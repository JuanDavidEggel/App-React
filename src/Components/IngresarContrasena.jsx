import { useState } from 'react'; //buscar desde React la función useState para crear estados locales en el componente

export function IngresarContrasena({ password, setPassword }) { //recibo esto desde App
  const [mostrar, setMostrar] = useState(false); //estado local, controla si el texto del input se ve o no, y empieza en false (oculto)

  return (
    <div className="contenedor-input">
        <input 
        type={mostrar ? "text" : "password"} 
        value={password} //muestra lo que hay guardado en password
        onChange={(e) => setPassword(e.target.value)} //cada vez que presiono una tecla (onChange), captura ese evento (e), toma el texto nuevo (e.target.value) y llama a la función setPassword para avisarela a App que la contraseña cambió
        placeholder="Escriba la contraseña"
        />        

        <button onClick={() => setMostrar(!mostrar)}> {/* cuando hago click, invierte mostrar */}
            {mostrar ? "Ocultar" : "Mostrar"}
        </button>
    </div>
  );
}