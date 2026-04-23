export function Checklist({ password })  {

    const tieneNumero = /[0-9]/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const largo = password.length >= 8;    
    
    return (
        <div>
            <p>Requisitos:</p>
            <ul>
                <li style={{ color: tieneNumero ? "green" : "red" }}>
                    Debe contener un número
                </li>
                <li style={{ color: tieneMayuscula ? "green" : "red" }}>
                    Debe contener una mayúscula
                </li>
                <li style={{ color: tieneCaracterEspecial ? "green" : "red" }}>
                    Debe contener un caracter especial
                </li>
                <li style={{ color: largo ? "green" : "red" }}>
                    Mínimo 8 caracteres
                </li>
            </ul>
        </div>
    );
}