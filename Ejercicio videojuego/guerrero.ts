import { Personaje } from "./personaje";

export class Guerrero extends Personaje {
    
    constructor (nombre: string) {
        super(nombre)
        this.vida = 100;
        this.defensa = 50;
        this.ataque = 25;
        this.magia = 25;
    }

    mejorarPersonaje(puntos: number, estadistica: string): void {
        if (puntos > 0 && puntos <= this.puntosMejora) {
            switch (estadistica) {
                case "vida":
                    this.vida += puntos * 10;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de vida aumentaron a ${this.vida}.`);
                    break;
                case "defensa":
                    this.defensa += puntos * 5;
                    this.puntosMejora -= puntos;
                    console.log(`Tus puntos de defensa aumentaron a ${this.defensa}.`);
                    break;
                case "ataque":
                    this.ataque += puntos * 3;
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
        console.log("Golpeas con tu espada.");
    }

    habilidadComun(): void {
        if (this.nivel >= 3) {
            this.defensa = this.defensa * 2;
            console.log("Bloqueas con tu escudo, lo que duplica tu defensa por 5 segundos. Defensa actual: " + this.defensa);
            setTimeout(() => {
                this.defensa = this.defensa / 2;
                console.log("Bajas el escudo. Defensa actual: " + this.defensa);
            }, 5000);
        } else {
            console.log("Debes ser nivel 3 o superior para usar tu habilidad común.");
        }
        
    };

    habilidadEspecial(): void {
        if (this.nivel >= 5) {
            console.log("Derribas a tu enemigo con tu escudo, haciendo que tu siguiente golpe haga daño doble.");
            this.ataque = this.ataque * 2;
            setTimeout(() => {
                this.ataque = this.ataque / 2;
            }, 1000);
        } else {
            console.log("Debes ser nivel 5 o superior para usar tu habilidad especial.");
        }
        
    };

}