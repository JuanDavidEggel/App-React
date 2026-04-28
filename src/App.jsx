import './App.css' //importa estilos CSS
import { useState } from 'react'; //importa el hook useState de React
import { IngresarContrasena } from './Components/IngresarContrasena'; //importa el componenete donde escribo la contraseña
import { EvaluarFortaleza} from './Components/EvaluarFortaleza'; //importa el componenete que evalúa la fortaleza de la contraseña
import { Checklist } from './Components/Checklist'; //importa el componente checklist que muestra los requisitos de la contraseña 
import { CopiarContrasena } from './Components/CopiarContrasena';
import { GeneradorPro } from './Components/GeneradorPro';

function App() {
  const [password, setPassword] = useState(''); //se crea un estado que empieza vacío. En password se tiene un valor inicial y 
  // setPassword es una función para actualizar el estado
  return (
        <div className="App">
          <h1>Fortaleza de Contraseña</h1>
          <IngresarContrasena password={password} setPassword={setPassword} /> {/*se pasa password y la función setPassword como props*/}
          <CopiarContrasena password={password} /> {/*se pasa password como prop para que el componente pueda copiar la contraseña al portapapeles*/}
          <EvaluarFortaleza password={password} /> {/*se pasa password como prop para evaluar la contraseña*/} 
          <GeneradorPro setPassword={setPassword} /> {/*se pasa setPassword como prop para que el componente pueda generar una contraseña y actualizar el estado password en App*/}
          <Checklist password={password} /> {/*se pasa password como prop para que el componente pueda mostrar qué requisitos se cumplen o no*/}
        </div>
  );
}

export default App; //se exporta por defecto la función App que creamos