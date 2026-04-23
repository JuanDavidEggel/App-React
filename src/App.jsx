import './App.css'
import { useState } from 'react';
import { IngresarContrasena } from './Components/IngresarContrasena';
import { EvaluarFortaleza} from './Components/EvaluarFortaleza';
import { Checklist } from './Components/Checklist';

function App() {
  const [password, setPassword] = useState(''); //se crea el estado
  return (
        <div className="App">
          <h1>Fortaleza de Contraseña</h1>
          <IngresarContrasena password={password} setPassword={setPassword} /> {/*se pasa el estado y la función para actualizarlo como props*/}
          <EvaluarFortaleza password={password} />
          <Checklist password={password} />
        </div>
  );
}

export default App;