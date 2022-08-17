
for (let i = 0 ; i < 7 ; i++) {
    let pedirPalabra = prompt(`Por favor ingrese una palabra para armar una frase`);
    if (pedirPalabra.length >= 2 ) {
       alert(`Palabra ingresada`);
    } else {
        alert(`La palabra a ingresar tiene que tener al menos 2 letras`);
    }
    console.log(`la palabra ingresada es ${pedirPalabra}`);
}
