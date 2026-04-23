export function EvaluarFortaleza({ password }) {
    
    if (!password) {
        return <p>Ingrese una contraseña</p>;
    }

    const tieneNumero = /[0-9]/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const largo = password.length >= 8;
    
    let nivel = 'Poco segura';

    if (tieneNumero && tieneMayuscula && tieneCaracterEspecial && largo) {
        nivel = 'Muy segura';
    } else if ((tieneNumero && tieneMayuscula) || (tieneNumero && tieneCaracterEspecial) || (tieneMayuscula && tieneCaracterEspecial)) {
        nivel = 'Segura';
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