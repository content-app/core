import { ClientAPI, Environment, Space } from 'contentful-management';

type Payload = {
    client: ClientAPI;
    environment: Environment;
    space: Space;
    contentTypes: any[];
}

export interface ModelModule {
    name: string;
    load: (payload: Payload) => void;
}