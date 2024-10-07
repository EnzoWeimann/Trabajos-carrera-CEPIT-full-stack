import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
    private cilindradas: number;
    private portaEquipaje: boolean;
    private vidrioProtector: boolean;

    constructor(color: string, marca: string , año: number, vtv: boolean, asegurado: boolean, cilindradas: number, portaequip: boolean, proteccion: boolean) {
        super(color, marca, año, vtv, asegurado);
        this.cilindradas = cilindradas;
        this.portaEquipaje = portaequip;
        this.vidrioProtector = proteccion;
    }   

    // Metodos get
    getCilindradas(): number {
        return this.cilindradas;
    }

    getPortaEquipaje(): boolean {
        return this.portaEquipaje;
    }

    getVidrioProtector(): boolean {
        return this.vidrioProtector;
    }

    // Metodos set
    setCilindradas(cilindradas: number): void {
        if (cilindradas > 0) {
            this.cilindradas = cilindradas
        }
    }

    setPortaEquipaje(equipaje: boolean): void {
        this.portaEquipaje = equipaje;
    }

    setVidrioProtector(vidrio: boolean): void {
        this.vidrioProtector = vidrio;
    }
}