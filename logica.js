let btnInicio = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");

class Juego {
  constructor() {
    this.iniciar();
    this.generarSecuencia();
  }
  iniciar() {
    btnInicio.classList.add("hide");
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }
  generarSecuencia() {
    this.secuencia = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
