let btnInicio = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");

class Juego {
  constructor() {
    this.iniciar();
  }
  iniciar() {
    btnInicio.classList.add("hide");
  }
}

function empezarJuego() {
  var juego = new Juego();
}
