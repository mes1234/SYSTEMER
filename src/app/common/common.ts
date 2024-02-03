export enum ElementType {
    Http = 'HTTP',
    Grpc = 'gRPC',
    Amqp = 'AMQP',
}

export interface ElementSetup {
    name: string,
    selectedType: ElementType,
    id: string
}