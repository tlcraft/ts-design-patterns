import { CompositeComponet } from "./classes/composite-component";
import { CountComponent } from "./classes/count-component";
import { DescriptionComponent } from "./classes/description-component";
import { NameCompoent } from "./classes/name-component";
import { Item } from "./interfaces/item.interface";

const driver = (): void => {
    const compositeComponent = new CompositeComponet('1234');
    const nameCompoent = new NameCompoent('2345');
    const countComponent = new CountComponent('3456');
    const descriptionComponent = new DescriptionComponent('4567');

    compositeComponent.addComponent(nameCompoent);
    compositeComponent.addComponent(countComponent);
    compositeComponent.addComponent(descriptionComponent);

    const item = {} as Item;

    compositeComponent.process(item);

    console.log('Item: ', JSON.stringify(item));
};

driver();
