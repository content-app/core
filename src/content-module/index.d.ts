import { ContentfulClientApi } from 'contentful';

type Config = {
    client: ContentfulClientApi;
    moduleData: any; 
    fetchFromContentful: () => Promise<any>;
}

export interface ContentModule {
    name: string;
    fetch(data: Config): Promise<any>;
}