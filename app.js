// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {

    const nombre = document.getElementById('amigo').value;

    if (nombre) {

        if(!amigos.includes(nombre)){

        amigos.push(nombre);
        
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
                li.textContent = nombre;
                listaAmigos.appendChild(li);
        
        alert(`${nombre} ha sido agregado a la lista de amigos.`);

        document.getElementById('amigo').value = '';
        
        } else {
            alert(`El nombre ya está en la lista.`);
        }
    } else {
        alert(`Por favor, inserte un nombre`);
        
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return;
    }

    let amigosSorteados = [...amigos];
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posiblesAmigos = amigosSorteados.filter(a => a !== amigo);

        if (posiblesAmigos.length === 0) {
            alert("No se puede realizar el sorteo sin que alguien se quede sin amigo secreto.");
            return;
        }

        let amigoSecreto = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        resultado[amigo] = amigoSecreto;
        amigosSorteados = amigosSorteados.filter(a => a !== amigoSecreto);
    }

    const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = '';
   
    for (const [amigo, amigoSecreto] of Object.entries(resultado)) {
                const li = document.createElement('li');
                li.textContent = `${amigo} tiene a ${amigoSecreto}`;
                resultadoElement.appendChild(li);
    }
    
    return resultado;
}