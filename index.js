import Krepsys from "./classes/Krepsys.js";
import Vaisius from "./classes/Vaisius.js";

let grauztukai = new Map();

Krepsys.pripildyti();

console.log(Krepsys);

const vaisius = new Vaisius();
let valgomas1 = Krepsys.isimti();
valgomas1.prakastas = vaisius.prakasti();

console.log(valgomas1);

grauztukai.set(valgomas1.id, valgomas1)

let valgomas2 = Krepsys.isimti();
valgomas2.prakastas = vaisius.prakasti();
console.log(valgomas2);

grauztukai.set(valgomas2.id, valgomas2)

console.log(grauztukai);

console.log(Krepsys);

Krepsys.papildyti();

console.log(Krepsys);



