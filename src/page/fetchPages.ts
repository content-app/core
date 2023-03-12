import { ContentfulClientApi, Entry } from 'contentful';
import { PageModule } from '../modules/page';
import { ContentTypes } from '../constants';
import { fetchAll } from '../helper';

type Config = {
    client: ContentfulClientApi;
    modules?: PageModule[];
};

const fetchPages = async (config: Config): Promise<string[]> => {
    const routes: string[] = [];

    const pages = await fetchAll((skip: number) => {
        return config.client.getEntries({
            content_type: ContentTypes.Page,
            skip,
            limit: 1,
        });
    })

    type PageItems = Entry<{ slug: string }>[]

    for (const page of pages as PageItems) {
        const slug = page?.fields?.slug as string;

        if (!slug) {
            continue;
        }

        routes.push(slug);
    }

    for (const module of config.modules || []) {
        const moduleRoutes = await module.load({
            client: config.client,
            modules: config.modules,
            routes,    
        });

        routes.push(...moduleRoutes);
    }

    return routes;
};

export default fetchPages;