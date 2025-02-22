// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Definir Array de amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del amigo desde el valor ingresado en el input con id "amigo"
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo == "") {
        alert("Por favor, ingrese un nombre");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        recorrerlista();
        limpiarResultado();
        };
}

function recorrerlista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limpiarResultado() {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
}

function sortearAmigo() {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    if (amigos.length == 0) {
        listaResultado.innerHTML = `<h2>No hay amigos para sortear</h2>`;
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        amigos.splice(indiceSorteado, 1); // Eliminar el amigo sorteado del array
        listaResultado.innerHTML = `<h2>Tu amigo secreto es ${amigoSorteado}</h2>`;
        recorrerlista();
    }
}