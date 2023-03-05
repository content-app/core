import { ContentfulClientApi } from 'contentful';
import { ContentTypes } from '../constants';
import { Page as PageInterface } from '../index.d';

type Options = {
    slug: string;
    client: ContentfulClientApi;
};

const fetchPageBySlug = async (options: Options) => {
    const pages = await options.client.getEntries({
        content_type: ContentTypes.Page,
        'fields.slug': options.slug,
    });

    if (pages.items.length === 0) {
        throw new Error(`No page found with slug ${options.slug}`);
    }

    if (pages.total > 1) {
        throw new Error(`More than one page found with slug ${options.slug}`);
    }

    const { 
        articles = [],
        title,
        pageTitle,
    } = pages.items[0].fields as any;

    const page = {
        title,
        pageTitle,
    };

    const articleData = [];

    for (const articleItem of articles) {
        const { title, modules } = articleItem.fields;


        console.log(modules);

        articleData.push({
            title,
        });
    }


    return page;
};

export default fetchPageBySlug;