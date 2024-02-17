export enum ElementType {
    Regulator = 'Regulator',
    Valve = 'Valve',
}

export enum LinkType {
    Tube = 'Tube',
}

export interface ElementSetup {
    name: string,
    selectedType: ElementType,
    id: string
}


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
