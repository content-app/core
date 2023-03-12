import { FetchPageConfig } from './index.d';
import fetchCorePageBySlug from './fetchCorePageBySlug';

const fetchPageBySlug = async (config: FetchPageConfig) => {
    if (config.customFetch) {
        const customFetchResult = await config.customFetch({
            client: config.client,
            slug: config.slug,
            moduleMapping: config.moduleMapping,
        });

        if (customFetchResult !== false) {
            return customFetchResult;
        }
    }

    for (const pageModule of config.pageModules || []) {
        if (pageModule.shouldLoadContent({
            client: config.client,
            slug: config.slug,
            moduleMapping: config.moduleMapping,
        })) {
            return await pageModule.loadContent({
                client: config.client,
                slug: config.slug,
                moduleMapping: config.moduleMapping,
            });
        }
    }

    return await fetchCorePageBySlug(config);
};

export default fetchPageBySlug;