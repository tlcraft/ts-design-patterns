import { EquipmentBuilder } from "../interfaces/equipment-builder.interface";
import { Sheild } from "../interfaces/sheild.interface";

export class ShieldBuilder implements EquipmentBuilder {
    private sheild: Sheild = {} as Sheild;

    reset(): void {
        this.sheild = {} as Sheild;
    }

    setMaterial(material: string): ShieldBuilder {
        this.sheild.material = material;
        return this;
    }
    
    setElement(element: string): ShieldBuilder {
        this.sheild.element = element;
        return this;
    }
    
    setPower(power: number): ShieldBuilder {
        this.sheild.power = power;
        return this;
    }

    setBaseDetails(): ShieldBuilder {
        this.sheild.color = 'red';
        return this;
    }

    build(): Sheild {
        return this.sheild;
    }
}
