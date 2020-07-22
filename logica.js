let btnInicio = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");

class Juego {
  constructor() {
    this.iniciar();
    this.generarSecuencia();
    this.iluminarSecuencia();
  }
  iniciar() {
    btnInicio.classList.add("hide");
    this.nivel = 1;
    this.colores = {
      celeste: celeste,
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
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      let color = this.numeroAColor(this.secuencia[i]);
      setTimeout(() => {
        this.iluminarColor(color);
      }, i * 1000);
    }
  }
  numeroAColor(num) {
    switch (num) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add("light");
    console.log(this.colores.celeste);

    setTimeout(() => {
      this.apagarColor(color);
    }, 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
