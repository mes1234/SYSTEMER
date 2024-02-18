import { ElementType, LinkType } from "./common";



export interface Item {
    name: string;
    id: string;
}

export interface Element extends Item {
    type: ElementType;
}

export interface Link extends Item {
    type: LinkType;
    upstreamElementId: string;
    downstreamElementId: string;
}

export enum ItemType {
    Element = 'Element',
    Link = 'Link'
}

export enum OperationType {
    Add = 'Add',
    Remove = 'Remove',
    Update = 'Update'
}

export class Operation {
    public type?: OperationType;
    public itemType?: ItemType;
    public item?: Item;
}
