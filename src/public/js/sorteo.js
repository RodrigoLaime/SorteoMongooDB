const d = document;

d.addEventListener("DOMContentLoaded", () => {
    sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});

function sorteoDos(input, agregar, ganador, jugadores) { //agregamos 
    const input = d.getElementById(input); //$ indica que estas trabajando en una etiqueta HTML
    const agregar = d.getElementById(agregar);
    const ganador = d.getElementById(ganador);
    const jugadores = d.getElementById(jugadores);
    let jugadoresArray = [];

    const agregarJugadores = () => {
        const inputValue = input.value;

        if (inputValue === '' || inputValue.length === 0) {
            alert('No has ingresado participante');
        } else {
            jugadoresArray.push(inputValue);
            jugadores.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);
            inputValue = '';
        }
    };
    const ganadorSorteo = () => {
        input.focus();

        const random = Math.floor(Math.random() *

            jugadoresArray.length)
        const jugadorGanador = jugadoresArray[random];

        jugadoresArray = [];

        setTimeout(() => {
            jugadores.innerHTML = "";
        }, 2000);

        alert(`${jugadorGanador} fue seleccionado`);
        postData(jugadorGanador);
    };

    agregar.addEventListener('click', () => {
        agregarJugadores()
    });
    ganador.addEventListener('click', () => {
        if (jugadoresArray.length === 0) {
            alert('No has ingresado participantes');
        } else {
            ganadorSorteo();
        }
    });
}
async function postData(name){
    const response = await fetch('http://localhost:3000/api/save', {
        method: 'POST',
        headers: {
            'Accepted': 'aplication/json',
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
            'name': name,
        })
    });
    const data = await response.json();
    console.data(data);
}