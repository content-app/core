import { ContentfulClientApi } from 'contentful';

type Payload = {
    client: ContentfulClientApi;
    modules?: PageModule[];
    routes: string[];
};

export interface PageModule {
    load: (payload: Payload) => Promise<string[]>;
};