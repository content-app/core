import { ClientAPI } from "contentful-management";
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

    const seoEntry = await environment.createContentType(seoType);
    await seoEntry.publish();

    const articleEntry = await environment.createContentType(articleType);
    await articleEntry.publish();

    const openGraphEntry = await environment.createContentType(openGraphType);
    await openGraphEntry.publish();

    const pageEntry = await environment.createContentType(pageType);
    await pageEntry.publish();

    const navigationItemEntry = await environment.createContentType(navigationItemType);
    await navigationItemEntry.publish();

    const navigationEntry = await environment.createContentType(navigationType);
    await navigationEntry.publish();

    console.log('Core models created successfully');
};

export default createCoreModels;