export class SlotMachine {
  constructor() {
    this.monedas = 0;
  }

  play() {
    this.monedas++;
    let booleanos = 0;
    for (let i = 0; i < 3; i++) {
      // El random entre 0 y 1 representa true o false
      let random = Math.floor(Math.random() * 2);
      // Si este es 1 lo sumanos
      random == 1 ? booleanos++ : "";
    }

    if (booleanos == 3) {
      console.log("Congratulations!!!. You won " + this.monedas + " coins!!");
      this.monedas = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}
