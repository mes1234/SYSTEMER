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



