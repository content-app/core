import { ContentfulClientApi } from 'contentful';
import { Navigation, NavigationItem } from '../index.d';
import fetchNavigationByName from './fetchNavigationByName';

const fetchAndTransformNavigationByName = async (client: ContentfulClientApi, name: string): Promise<Navigation> => {
  const navigationData = await fetchNavigationByName(client, name);

  const transformNavigationItem = async (item: any): Promise<NavigationItem> => {
    const entry = await client.getEntry(item.sys.id) as any;

    const page = entry.fields.page;
    const childs = entry.fields.childs;

    const navigationLink: NavigationItem = {
      name: page?.fields?.title,
      url: page?.fields?.slug,
      childs: [],
    };

    if (childs?.length > 0) {
      for (const childItem of childs) {
        const childNavigationLink = await transformNavigationItem(childItem);
        navigationLink.childs.push(childNavigationLink);
      }
    }

    return navigationLink;
  };

  const transformNavigation = async (navigationData: any): Promise<Navigation> => {
    const navigation: Navigation = {
      name: navigationData.fields.name,
      childs: [],
    };

    for (const item of navigationData.fields.items) {
      const navigationItem = await transformNavigationItem(item);
      navigation.childs.push(navigationItem);
    }

    return navigation;
  };

  return await transformNavigation(navigationData);
};

export default fetchAndTransformNavigationByName;
