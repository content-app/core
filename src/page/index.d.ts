import { ContentfulClientApi } from 'contentful';
import { ContentModule } from '@content-app/types/types.d';
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