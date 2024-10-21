import { Personaje } from "./personaje";

export class Cazador extends Personaje {
    
    constructor (nombre: string) {
        super(nombre)
        this.vida = 60;
        this.defensa = 40;
        this.ataque = 75;
        this.magia = 25;
    }

    mejorarPersonaje(puntos: number, estadistica: string): void {
        if (puntos > 0 && puntos <= this.puntosMejora) {
            switch (estadistica) {
                case "vida":
                    this.vida += puntos * 5;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de vida aumentaron a ${this.vida}.`);
                    break;
                case "defensa":
                    this.defensa += puntos * 3;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de defensa aumentaron a ${this.defensa}.`);
                    break;
                case "ataque":
                    this.ataque += puntos * 10;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de ataque aumentaron a ${this.ataque}.`);
                    break;
                case "magia":
                    this.magia += puntos;
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
        console.log("Disparas una flecha.");
    }
    
    habilidadComun(): void {
        if (this.nivel >= 3) {
            console.log("En tu siguiente ataque, disparas 2 flechas juntas.");
            this.ataque = this.ataque * 2;
            setTimeout(() => {
                this.ataque = this.ataque / 2;
            }, 1000);
        } else {
            console.log("Debes ser nivel 3 o superior para usar tu habilidad común.");
        }
        
    };

    habilidadEspecial(): void {
        if (this.nivel >= 5) {
            console.log("Tu mascota te proteje durante 5 segundos, lo que duplica tu defensa.");
            this.defensa = this.defensa * 2;
            setTimeout(() => {
                this.defensa = this.defensa / 2;
            }, 5000);
        } else {
            console.log("Debes ser nivel 5 o superior para usar tu habilidad especial.");
        }
        
    };
}