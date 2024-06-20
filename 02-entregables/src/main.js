import { head, tail, init, last } from "./activities/ArrayOperations";
import { clone, merge } from "./activities/CloneMerge";
import { concat, concat_2 } from "./activities/Concat";
import { isBookRead } from "./activities/ReadBooks";
import { SlotMachine } from "./activities/SlotMachine";

import "./styles/main.scss";

let array = ["Este", "es", "el", "contenido", "de", "mi", "array"];
let array2 = ["y", "ahora", "más", "grande"];
let array3 = ["por", "si", "fuera", "poco"];

// Head ----------------------------------------
console.log("Head -------------------------------------");
console.log("Resultado: " + head(array));

// Tail ----------------------------------------
console.log("Tail -------------------------------------");
console.log("Resultado: ", tail(array));

// Init ----------------------------------------
console.log("Init -------------------------------------");
console.log("Resultado: ", init(array));

// Last ----------------------------------------
console.log("Last -------------------------------------");
console.log("Resultado: " + last(array));

// Concat --------------------------------------
console.log("Concat -------------------------------------");
console.log("Resultado: ", concat(array, array2));
console.log("Resultado: ", concat_2(array, array2, ["que", "antes"]));
console.log("Resultado: ", concat_2(array, array2, ["que", "antes"], array3));
//------------

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// Clone ---------------------------------------
console.log("Clone -------------------------------------");
console.log("Resultado: ", clone(a));

// Merge ---------------------------------------
console.log("Merge -------------------------------------");
console.log("Resultado: ", merge(b, a));

// Read Books ----------------------------------
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log("Read Books -------------------------------------");
console.log("Devastación: " + isBookRead(books, "Devastación"));
console.log("Devastació: " + isBookRead(books, "Devastació"));
console.log(
  "Canción de hielo y fuego: " + isBookRead(books, "Canción de hielo y fuego")
);
console.log(
  "Harry Potter y la piedra filosofal: " +
    isBookRead(books, "Harry Potter y la piedra filosofal")
);

// SlotMachine ----------------------------------
console.log("SlotMachine -------------------------------------");
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
