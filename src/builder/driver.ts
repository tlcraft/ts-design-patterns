import { ShieldBuilder } from "./classes/sheild-builder";
import { SwordBuilder } from "./classes/sword-builder";

const driver = (): void => {
    const builder = new SwordBuilder();
    builder.reset();
    builder
        .setElement('Fire')
        .setMaterial('Iron')
        .setPower(100)
        .setBaseDetails();
    
    const sword = builder.build();

    console.log('Sword: ', JSON.stringify(sword));

    const sheildBuilder = new ShieldBuilder();
    sheildBuilder.reset();
    sheildBuilder.setBaseDetails();

    const shield = sheildBuilder.build();
    
    console.log('Shield: ', JSON.stringify(shield));
};

driver();
