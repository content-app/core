import { ContentfulClientApi } from 'contentful';
import { RouteModule } from '../modules/page';

type Config = {
    client: ContentfulClientApi;
    modules?: RouteModule[];
  };

const fetchModuleRoutes = async (config: Config): Promise<string[]> => {
    const routes: string[] = [];
  
    for (const module of config.modules || []) {
      const moduleRoutes = await module.loadRoutes({
        client: config.client,
        modules: config.modules,
        routes,    
      });
  
      routes.push(...moduleRoutes);
    }
  
    return routes;
  };

  export default fetchModuleRoutes;