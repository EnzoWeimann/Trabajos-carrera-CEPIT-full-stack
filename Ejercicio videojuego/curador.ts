import { Personaje } from "./personaje";

export class Curador extends Personaje {
    
    constructor (nombre: string) {
        super(nombre)
        this.vida = 50;
        this.defensa = 50;
        this.ataque = 20;
        this.magia = 80;
    }

    mejorarPersonaje(puntos: number, estadistica: string): void {
        if (puntos > 0 && puntos <= this.puntosMejora) {
            switch (estadistica) {
                case "vida":
                    this.vida += puntos * 4;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de vida aumentaron a ${this.vida}.`);
                    break;
                case "defensa":
                    this.defensa += puntos * 4;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de defensa aumentaron a ${this.defensa}.`);
                    break;
                case "ataque":
                    this.ataque += puntos;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de ataque aumentaron a ${this.ataque}.`);
                    break;
                case "magia":
                    this.magia += puntos * 10;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de magia aumentaron a ${this.magia}.`);
                    break;
                default:
                    console.log("Estadística inválida. Las opciones posibles son vida, denfensa, ataque y magia.");
            }

            if (this.puntosMejora == 0) {
                console.log("No tienes más puntos para mejorar hasta que subas un nivel más.");
            }
            
        } else {
            console.log(`Error, tus puntos disponibles para mejorar son: ${this.puntosMejora}. Vuelve a intentarlo!`);
        }
    }

    ataqueBasico(): void {
        console.log("Lanzas un rayo mágico con tu varita.");
    }
    
    habilidadComun(): void {
        if (this.nivel >= 3) {
            console.log("Curas a un un integrante del grupo por un 25% de tu habildad de magia");
            console.log(`Se han restaurado ${this.magia / 4} puntos de vida`);
        } else {
            console.log("Debes ser nivel 3 o superior para usar tu habilidad común.");
        }
        
    };

    habilidadEspecial(): void {
        if (this.nivel >= 5) {
            console.log("Le das una protección temporal a todo el grupo igual a tu habilidad de magia.");
            console.log(`Protección activa de ${this.magia} puntos de vida`);
            setTimeout(() => {
                console.log("Protección desactivada");
            }, 5000);
        } else {
            console.log("Debes ser nivel 5 o superior para usar tu habilidad especial.");
        }
        
    };
}