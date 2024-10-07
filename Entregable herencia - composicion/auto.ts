import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
    private airbags: number;
    private puertas: number;
    
    constructor(color: string, marca: string, año: number, vtv: boolean, asegurado: boolean, cantAirbags: number, cantPuertas: number) {
        super(color, marca, año, vtv, asegurado);
        this.airbags = cantAirbags;
        this.puertas = cantPuertas;
    }

    // Metodos get
    getAirbags(): number {
        return this.airbags;
    }

    getPuertas(): number {
        return this.puertas;
    }
    
    // Metodos set
    setAirbags(cant: number): void {
        if (cant > 0) {
            this.airbags = cant
        }
    }

    setPuertas(cant: number): void {
        if (cant > 0 && cant < 6) {
            this.puertas = cant
        }
    }
}