const inputTexto = document.querySelector(".input-text")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// funcion para el boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(stringEncriptado){
    
    //Matriz encriptador
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    //validacion solo recibe minusculas
    stringEncriptado = stringEncriptado.toLowerCase();

    //contador en 0 -----condicion------incrementador
    for (let i = 0;i < matrizCodigo.length; i++){

        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}



// funcion para el boton desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptado){
    
    //Matriz encriptador
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    //validacion solo recibe minusculas
    stringDesencriptado = stringDesencriptado.toLowerCase();

    //contador en 0 -----condicion------incrementador
    for (let i = 0;i < matrizCodigo.length; i++){

        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// funcion para copiar texto
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
    
}

function btnlimpiar(){
    mensaje.value = "";
    inputTexto.value = "";
}