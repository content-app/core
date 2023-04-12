import { ContentfulClientApi } from 'contentful';
import { PageModule } from '../modules/page';
import fetchPageSlugs from './fetchPageSlugs';
import fetchModuleRoutes from './fetchModuleRoutes';


type Config = {
  client: ContentfulClientApi;
  modules?: PageModule[];
};

const fetchPages = async (config: Config): Promise<string[]> => {
  const routes: string[] = [];

  const pageSlugs = await fetchPageSlugs(config);
  routes.push(...pageSlugs);

  const moduleRoutes = await fetchModuleRoutes(config);
  routes.push(...moduleRoutes);

  return routes;
};

export default fetchPages;