export abstract class Personaje {
    protected nombre: string;
    protected vida: number;
    protected defensa: number;
    protected ataque: number;
    protected magia: number;
    protected nivel: number;
    protected puntosMejora: number;

    constructor (nombre: string) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosMejora = 0;
    }

    abstract mejorarPersonaje(puntos: number, estadistica: string): void;
    abstract ataqueBasico(): void;
    abstract habilidadComun(): void;
    abstract habilidadEspecial(): void;
    
    subirNivel(): void {
        this.nivel += 1;
        this.puntosMejora += 5;
        console.log("Subiste de nivel. Obtuviste 5 puntos para mejorar a tu personaje");
    }

    //Métodos GET
    getNombre(): string {
        return this.nombre;
    }

    getVida(): number {
        return this.vida;
    }

    getDefensa(): number {
        return this.defensa;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getMagia(): number {
        return this.magia;
    }

    getNivel(): number {
        return this.nivel;
    }

    getPuntosMejora(): number {
        return this.puntosMejora;
    }

    //Métodos SET
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
        console.log("Se cambió el nombre correctamente");
    }
}