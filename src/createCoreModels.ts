import { ClientAPI } from "contentful-management";
import { ContentTypes } from "./constants";
import pageType from './content-types/page';
import openGraphType from './content-types/open-graph';
import articleType from './content-types/article';
import seoType from './content-types/seo';
import  navigationType from './content-types/navigation';
import navigationItemType from './content-types/navigation-item';


type Options = {
    spaceId: string;
    environment: string;
};

const createCoreModels = async (client: ClientAPI, options: Options) => {
    if (!client) {
        throw new Error('Missing client');
    }

    if (!options.spaceId) {
        throw new Error('Missing spaceId');
    }

    if (!options.environment) {
        throw new Error('Missing environment');
    }

    console.log(`Creating core models in space ${options.spaceId} and environment ${options.environment}`);

    const space = await client.getSpace(options.spaceId);
    const environment = await space.getEnvironment(options.environment);

    const seoEntry = await environment.createContentTypeWithId(ContentTypes.Seo, seoType);
    await seoEntry.publish();

    const articleEntry = await environment.createContentTypeWithId(ContentTypes.Article, articleType);
    await articleEntry.publish();

    const openGraphEntry = await environment.createContentTypeWithId(ContentTypes.OpenGraph, openGraphType);
    await openGraphEntry.publish();

    const pageEntry = await environment.createContentTypeWithId(ContentTypes.Page, pageType);
    await pageEntry.publish();

    const navigationItemEntry = await environment.createContentTypeWithId(ContentTypes.NavigationItem, navigationItemType);
    await navigationItemEntry.publish();

    const navigationEntry = await environment.createContentTypeWithId(ContentTypes.Navigation, navigationType);
    await navigationEntry.publish();

    console.log('Core models created successfully');
};

export default createCoreModels;