import { Guerrero } from "./guerrero";
import { Cazador } from "./cazador";
import { Curador } from "./curador";
import { Mago } from "./mago";

//Todos los personajes estan hechos con la misma estructura, solo cambia la definición de cada método y demás, por eso aca pruebo el codigo con solamente el guerrero

let guerrero1: Guerrero = new Guerrero("Enzo");
console.log("Su vida es: " + guerrero1.getVida())

guerrero1.subirNivel();
console.log("******MEJORO VIDA EN 3 PUNTOS");
guerrero1.mejorarPersonaje(3, "vida");
console.log("Su vida ahora es: " + guerrero1.getVida());

console.log("******INTENTO MEJORAR VIDA EN 3 PUNTOS, PERO SOLO DEBERIA TENER 2");
guerrero1.mejorarPersonaje(3, "vida");
console.log("Su vida ahora es: " + guerrero1.getVida());

console.log("******INTENTO MEJORAR VIDA EN 2 PUNTOS, PERO ESTA MAL INGRESADO");
guerrero1.mejorarPersonaje(2, "vid");
console.log("Su vida ahora es: " + guerrero1.getVida());

console.log("******INTENTO MEJORAR DEFENSA EN 2 PUNTOS, DEBERIA PODER Y QUEDARME SIN PUNTOS");
guerrero1.mejorarPersonaje(2, "defensa");
console.log("Su defensa ahora es: " + guerrero1.getDefensa());
console.log("Su ataque ahora es: " + guerrero1.getAtaque());

console.log("******INTENTO ATACAR");
guerrero1.ataqueBasico();
guerrero1.habilidadComun();

console.log("******SUBO DE NIVELES PARA USAR LA HABILIDAD COMUN");
guerrero1.subirNivel();
guerrero1.subirNivel();
guerrero1.habilidadComun();
guerrero1.habilidadEspecial();

console.log("******NO PUDE USAR LA HABILIDAD ESPECIAL ASI QUE SUBO MAS NIVELES PARA USARLA");
guerrero1.subirNivel();
guerrero1.subirNivel();
guerrero1.habilidadEspecial();