let btnInicio = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");
const MAX_LEVEL = 10;

class Juego {
  constructor() {
    this.iniciar = this.iniciar.bind(this);
    this.iniciar();
    this.generarSecuencia();
    setTimeout(() => {
      this.siguienteNivel();
    }, 500);
  }

  iniciar() {
    this.elegirColor = this.elegirColor.bind(this);
    if (btnInicio.classList.contains("hide")) {
      btnInicio.classList.remove("hide");
    } else {
      btnInicio.classList.add("hide");
    }
    this.nivel = 1;
    this.colores = {
      celeste: celeste,
      violeta,
      naranja,
      verde,
    };
  }
  siguienteNivel() {
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agregarClick();
  }
  generarSecuencia() {
    this.secuencia = new Array(MAX_LEVEL)
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
  removerClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
  }
  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.colorANum(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.removerClick();
        if (this.nivel === MAX_LEVEL + 1) {
          swal("Ganaste", `has superado el nivel ${MAX_LEVEL}!`, "success") //retorna promesa
            .then(() => this.iniciar());
        } else {
          //setTimeout cambia el valor de this a window
          //podemos anclar this con bind
          setTimeout(this.siguienteNivel.bind(this), 2000);
          //como buena practica definirlo en el inicio
        }
      }
    } else {
      swal("Perdiste", "Secuencia incorrecta!", "error").then(() => {
        this.removerClick();
        this.iniciar();
      });

      console.log("perdio");
    }
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
