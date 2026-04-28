export function Checklist({ password })  { //export permite que el componente puede usarse desde otros archivos 

    const tieneNumero = /[0-9]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()_\-+=?.,:;{}~`|<>/]/.test(password);
    const largo = password.length >= 15;    
    
    return (
        <div>
            <p>Requisitos:</p>
            <ul>
                <li style={{ color: tieneNumero ? "green" : "red" }}> {/*style es la propiedad JSX para aplicar CSS, las llaves externas indican que hay JavaScript
                dentro de JSX, las llaves internas indican que voy a crear un objeto JavaScript, color es la propiedad CSS, : separa la propiedad del objeto (color) y el valor
                del objeto (tieneNumero ? "green" : "red"), tieneNumero es la condición, ? opera si es verdadero o falso y según eso define si el color es verde o rojo*/}
                    Debe contener un número
                </li> {/*color es la propiedad CSS, y tieneNumero ? "green" : "red" define el valor que tendrá esa propiedad*/}
                <li style={{ color: tieneMinuscula ? "green" : "red" }}>
                    Debe contener una minúscula
                </li> {/*Las llaves externas indican que voy a escribir JavaScript y las internas indican que voy a crear un objeto*/}
                <li style={{ color: tieneMayuscula ? "green" : "red" }}>
                    Debe contener una mayúscula
                </li> {/*Si password tiene al menos una mayúscula, tieneMayuscula será true, y la propiedad CSS color será verde.
                Si no tiene mayúsculas, tieneMayuscula será false y el color será rojo*/}
                <li style={{ color: tieneCaracterEspecial ? "green" : "red" }}>
                    Debe contener un caracter especial
                </li>
                <li style={{ color: largo ? "green" : "red" }}>
                    Mínimo 15 caracteres
                </li>
            </ul>
        </div>
    );
}