import { ContentfulClientApi } from 'contentful';
import { Navigation, NavigationItem } from '../index.d';
import fetchNavigationByName from './fetchNavigationByName';
import { fetchPageById } from '../fetch-helper';

const fetchAndTransformNavigationByName = async (client: ContentfulClientApi, name: string): Promise<Navigation> => {
  const navigationData = await fetchNavigationByName(client, name);

  const transformNavigationLink = async (item: any): Promise<NavigationItem> => {
    const { page } = item.fields;
    const pageData = await fetchPageById(client, page.sys.id) as any;

    const navigationLink: NavigationItem = {
      name: pageData.fields.title,
      url: pageData.fields.slug,
      childs: [],
    };

    if (item.fields.childs?.length > 0) {
      for (const childItem of item.fields.childs) {
        const childNavigationLink = await transformNavigationLink(childItem);
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
      const navigationLink = await transformNavigationLink(item);
      navigation.childs.push(navigationLink);
    }

    return navigation;
  };

  return await transformNavigation(navigationData);
};

export default fetchAndTransformNavigationByName;
