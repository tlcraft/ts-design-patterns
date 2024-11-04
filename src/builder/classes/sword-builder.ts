import { EquipmentBuilder } from "../interfaces/equipment-builder.interface";
import { Sword } from "../interfaces/sword.interface";

export class SwordBuilder implements EquipmentBuilder {
    private sword: Sword = {} as Sword;

    reset(): void {
        this.sword = {} as Sword;
    }

    setMaterial(material: string): SwordBuilder {
        this.sword.material = material;
        return this;
    }
    
    setElement(element: string): SwordBuilder {
        this.sword.element = element;
        return this;
    }
    
    setPower(power: number): SwordBuilder {
        this.sword.power = power;
        return this;
    }
    
    setBaseDetails(): SwordBuilder {
        this.sword.size = 10;
        return this;
    }

    build(): Sword {
        return this.sword;
    }
}
