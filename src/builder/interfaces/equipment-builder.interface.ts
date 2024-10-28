import { Equipment } from "./equipment.interface";

export interface EquipmentBuilder {
    reset(): void;
    setMaterial(material: string): EquipmentBuilder;
    setElement(element: string): EquipmentBuilder;
    setPower(power: number): EquipmentBuilder;
    build(): Equipment;
}
