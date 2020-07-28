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
    this.agregarClick();
  }
  iniciar() {
    this.elegirColor = this.elegirColor.bind(this);
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
  colorANum(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add("light");

    setTimeout(() => {
      this.apagarColor(color);
    }, 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }
  agregarClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor);
    this.colores.naranja.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
    this.colores.violeta.addEventListener("click", this.elegirColor);
  }
  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.colorANum(nombreColor);
    console.log(this.secuencia);
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
