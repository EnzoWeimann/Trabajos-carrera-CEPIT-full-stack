import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
    private ejes: number;
    private acoplado: boolean;

    constructor(color: string, marca: string, año: number, vtv: boolean, asegurado: boolean, cantEjes: number, acoplado: boolean) {
        super(color, marca, año, vtv, asegurado);
        this.ejes = cantEjes;
        this.acoplado = acoplado;
    }

    // Metodos get
    getEjes(): number {
        return this.ejes;
    }

    getAcoplado(): boolean {
        return this.acoplado;
    }

    // Metodos set
    setEjes(ejes: number): void {
        this.ejes = ejes;
    }

    setAcoplado(acoplado: boolean): void {
        this.acoplado = this.acoplado;
    }
}