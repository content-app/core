import { ContentfulClientApi } from 'contentful';
import { ContentModule } from '../modules/content/index.d';
import { PageModule } from '../modules/page/index.d';



export type FetchPageConfig = {
    slug: string;
    client: ContentfulClientApi;
    customFetch?: (config: CustomFetchConfig) => false | Promise<any>;
    pageModules?: PageModule[];
    moduleMapping?: {
        [key: string]: ContentModule;
    };
    byPassCache?: boolean;
};