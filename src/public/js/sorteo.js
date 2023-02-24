const d = document;

d.addEventListener("DOMContentLoaded", () => {
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos', 'lista-jugadores');
});

function sorteoDos(input, agregar, ganador, jugadores) { //agregamos 
  const $input = document.getElementById(input), //$ indica que estas trabajando en una etiqueta HTML
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);
  let jugadoresArray = [];

  const agregarJugadores = () => {
    const inputValue = $input.value;

    if (inputValue === '' || inputValue.length === 0) {
      alert('No has ingresado participante');
    } else {
      jugadoresArray.push(inputValue);
      $jugadores.insertAdjacentHTML("beforeend", ` <li>${inputValue}</li> `);
      $input.value = '';
    }
  };
  const ganadorSorteo = () => {
    $input.focus();

    const random = Math.floor(Math.random() * jugadoresArray.length)
    const jugadorGanador = jugadoresArray[random];

    jugadoresArray = [];

    setTimeout(() => {
      $jugadores.innerHTML = "";
    }, 2000);

    alert(`${jugadorGanador} fue seleccionado`);
  };

  $agregar.addEventListener('click', () => {
    agregarJugadores()
  });
  $ganador.addEventListener('click', () => {
    if (jugadoresArray.length === 0) {
      alert('No has ingresado participantes');
    } else {
      ganadorSorteo();
      postData(ganadorSorteo);
    }
  });
}

async function postData(name){
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
            'name': name,
        })
    });
    const data = await response.json();
    console.data(data);
}