import { ContentfulClientApi, Entry } from 'contentful';
import { RouteModule } from '../modules/page';
import { ContentTypes } from '../constants';
import { fetchAll } from '../helper';

type Config = {
    client: ContentfulClientApi;
    modules?: RouteModule[];
  };

const fetchPageSlugs = async (config: Config): Promise<string[]> => {
    const slugs: string[] = [];
  
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
  
      slugs.push(slug);
    }
  
    return slugs;
  };

  export default fetchPageSlugs;