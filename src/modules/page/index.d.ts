import { ContentfulClientApi } from 'contentful';

type RoutePayload = {
    client: ContentfulClientApi;
    modules?: PageModule[];
    routes: string[];
};

type FetchDataPayload = {
    client: ContentfulClientApi;
    slug: string;
    moduleMapping?: {
        [key: string]: ContentModule;
    };
};

export interface PageModule {
    loadRoutes: (payload: RoutePayload) => Promise<string[]>;
    loadContent: (payload: FetchDataPayload) => Promise<any>;
    shouldLoadContent: (payload: FetchDataPayload) => boolean;
};