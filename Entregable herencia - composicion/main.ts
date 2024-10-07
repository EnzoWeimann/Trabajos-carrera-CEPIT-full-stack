import { Moto } from "./moto";
import { Auto } from "./auto";
import { Camion } from "./camion";

//Ejemplo con un auto (hay que crear un vehiculo si o si porque no hay ninguno por defecto guardado)
const auto1 = new Auto("azul", "fiat", 2005, true, true, 2, 5);

console.log("Puertas en auto1: " + auto1.getPuertas());
console.log("Nuevo color de auto1: " + auto1.getColor());
console.log("Cambio de color a gris");
auto1.setColor("gris");
console.log("Nuevo color de auto1: " + auto1.getColor());