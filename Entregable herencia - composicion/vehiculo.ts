export class Vehiculo {
    protected color: string;
    protected marca: string;
    protected año: number;
    protected vtv: boolean;
    protected tieneSeguro: boolean;

    constructor(color: string, marca: string, año: number, vtv: boolean, asegurado: boolean) {
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.vtv = vtv;
        this.tieneSeguro = asegurado;
    }

    // Metodos get
    getColor(): string {
        return this.color;
    }
    
    getMarca(): string {
        return this.marca;
    }
    
    getAño(): number {
        return this.año;
    }
    
    getVtv(): boolean {
        return this.vtv;
    }

    getSeguro(): boolean {
        return this.tieneSeguro;
    }
    


    // Metodos set
    setColor(color: string): void {
        this.color = color;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    setAño(año: number): void {
        if (año > 1900 && año < 2025) {
            this.año = año;
        }
    }

    setVtv(vtv: boolean): void {
        this.vtv = vtv;
    }

    setSeguro(estado: boolean): void {
        this.tieneSeguro = estado;
    }

    // Metodo para agregar seguro al vehiculo
    public asegurar(): void {
        this.setSeguro(true)
        console.log("El vehículo está asegurado.");
    }

    // Metodo para quitar el seguro del vehiculo
    public quitarSeguro(): void {
        this.setSeguro(false)
        console.log("El vehículo no tiene seguro.");
    }

}