import { ContentfulClientApi } from 'contentful';
import { Navigation } from '../index.d';
import fetchNavigationByName from './fetchNavigationByName';

const fetchAndTransformNavigationByName = async (client: ContentfulClientApi, name: string): Promise<Navigation> => {
    const navigation = { name, childs: []};

    const navigationData = await fetchNavigationByName(client, name);
    console.log('sdfsfd');
    navigationData.fields.items.forEach((item) => {
        console.log(item);
    });
    
    return navigation;
};

export default fetchAndTransformNavigationByName;