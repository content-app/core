import { ContentfulClientApi } from 'contentful';

type RoutePayload = {
    client: ContentfulClientApi;
    modules?: RouteModule[];
    routes: string[];
};

type FetchDataPayload = {
    client: ContentfulClientApi;
    slug: string;
    moduleMapping?: {
        [key: string]: ContentModule;
    };
};

export interface RouteModule {
    loadRoutes: (payload: RoutePayload) => Promise<string[]>;
}

export interface PageModule {
    loadContent: (payload: FetchDataPayload) => Promise<any>;
    shouldLoadContent: (payload: FetchDataPayload) => boolean;
};