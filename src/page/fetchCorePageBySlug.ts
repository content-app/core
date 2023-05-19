import { ContentTypes } from '../constants';
import { Page as PageInterface } from '../index.d';
import { FetchPageConfig } from './index.d';

const fetchCorePageBySlug = async (config: FetchPageConfig) => {
    const pages = await config.client.getEntries({
        content_type: ContentTypes.Page,
        'fields.slug': config.slug,
        include: 2,
    });

    if (pages.items.length === 0) {
        throw new Error(`No page found with slug ${config.slug}`);
    }

    if (pages.total > 1) {
        throw new Error(`More than one page found with slug ${config.slug}`);
    }

    const { 
        articles = [],
        title,
        pageTitle,
    } = pages.items[0].fields as any;

    const page: PageInterface = {
        title,
        pageTitle,
        slug: config.slug,
    };

    const articleData = [];

    const cachedModules: {
        [key: string]: any;
    } = {};

    for (const articleItem of articles) {
        const { title, modules, ...articleFields } = articleItem.fields;
        const moduleData: any[] = [];

        for (const module of modules) {
            const moduleId = module.sys.id;

            if (moduleId in cachedModules && !config.byPassCache) {
                moduleData.push(cachedModules[moduleId]);
                continue;
            }

            const moduleType = module.sys.contentType.sys.id;
            
            if (!moduleType || !config.moduleMapping || !(moduleType in config.moduleMapping)) {
                moduleData.push({...module});
                continue;
            }

            const data = await config.moduleMapping[moduleType].fetch({
                client: config.client,
                moduleData: module,
                fetchFromContentful: () => config.client.getEntry(moduleId),
            });
            
            cachedModules[moduleId] = data;
            moduleData.push(data);
        }

        articleData.push({
            ...articleFields,
            title,
            modules: moduleData,
        });
    }

    page.articles = articleData;

    return page;
};

export default fetchCorePageBySlug;