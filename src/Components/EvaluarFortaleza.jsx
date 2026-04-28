export function EvaluarFortaleza({ password }) { //Recibo la prop password desde App.jsx para evaluar su fortaleza
    
    if (password.length === 0){
        return <p>Debe ingresar una contraseña</p>;
    }

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password); //.test para saber si existe dentro del texto al menos un número del 0 al 9
    const tieneCaracterEspecial = /[!@#$%^&*()_+]/.test(password);
    const largo = password.length >= 15;
    
    let puntaje = 0;
    
    if (tieneNumero) puntaje++;
    if (tieneMinuscula) puntaje++;
    if (tieneMayuscula) puntaje++;
    if (tieneCaracterEspecial) puntaje++;
    if (largo) puntaje++;

    let nivel = "Poco segura"; //declaro una variable nivel que empieza con el valor 'Poco segura'

    if (password.length < 8) {
        nivel = "Poco segura";
    }
    else if (puntaje === 5) {
        nivel = "Muy segura";
    } 
    else if (puntaje >= 3) {
        nivel = "Segura";
    }

    let color = 'red';
    
    if (nivel === 'Segura') {
        color = 'orange';
    } else if (nivel === 'Muy segura') {
        color = 'green';
    }

    return(
        <div>
            <p style={{ color }}>Nivel: {nivel}</p>
        </div>
    );
}