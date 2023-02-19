import { ContentfulClientApi, Entry } from 'contentful';
import { NavigationFields } from '../index.d';

const fetchNavigationByName = async (client: ContentfulClientApi, name: string): Promise<Entry<NavigationFields>> => {
    const navigationEntries = await client.getEntries({
        content_type: '7c71JlZE8xA1o63kaaJG05',
        'fields.name': name,
    });

    if (navigationEntries.items.length === 0) {
        throw new Error(`No navigation found with name ${name}`);
    }

    return navigationEntries.items[0] as Entry<NavigationFields>;
};

export default fetchNavigationByName;