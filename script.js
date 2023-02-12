const textArea = document.querySelector(".bienvenida");
const mensaje = document.querySelector(".codigo");
const copia = document.querySelector(".copiar-texto");
copia.style.display = "none"

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function validarTexto(){
    let textoEscrito = document.querySelector(".bienvenida").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function botonEncriptar(){
    if(textArea.value != ""){
        const cambiar1 = document.querySelector(".buscando")
        cambiar1.style.display = "none";
        const cambiar2 = document.querySelector(".mensaje-buscar")
        cambiar2.style.display = "none";
        const cambiar3 = document.querySelector(".mensaje-texto")
        cambiar3.style.display = "none";
        const cambiar4 = document.querySelector(".resultado")
        cambiar4.style.display = "flex";
    }
    if(!validarTexto()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        copia.style.display = "block";
    }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function botonDesencriptar(){
    if(textArea.value != ""){
        const cambiar1 = document.querySelector(".buscando")
        cambiar1.style.display = "none";
        const cambiar2 = document.querySelector(".mensaje-buscar")
        cambiar2.style.display = "none";
        const cambiar3 = document.querySelector(".mensaje-texto")
        cambiar3.style.display = "none";
        const cambiar4 = document.querySelector(".resultado")
        cambiar4.style.display = "flex";
    }

    if(!validarTexto()){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        copia.style.display = "block";
    }
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");

    const cambiar1 = document.querySelector(".buscando")
    cambiar1.style.display = "";
    const cambiar2 = document.querySelector(".mensaje-buscar")
    cambiar2.style.display = "";
    const cambiar3 = document.querySelector(".mensaje-texto")
    cambiar3.style.display = "";
    const cambiar4 = document.querySelector(".resultado")
    cambiar4.style.display = "none";
}


// console.table(matrizCodigo);