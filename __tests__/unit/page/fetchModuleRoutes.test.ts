import { ContentfulClientApi } from 'contentful';
import fetchModuleRoutes from '../../../src/page/fetchModuleRoutes';

describe('fetchModuleRoutes', () => {
  test('returns an empty array if config.modules is empty', async () => {
    const config = {
      client: {} as ContentfulClientApi,
      modules: [],
    };

    const routes = await fetchModuleRoutes(config);

    expect(routes).toEqual([]);
  });

  test('returns an array of routes for each module', async () => {
    const config = {
      client: {} as ContentfulClientApi,
      modules: [
        {
          loadRoutes: () => Promise.resolve(['route1', 'route2']),
        },
        {
          loadRoutes: () => Promise.resolve(['route3', 'route4']),
        },
      ],
    };

    const routes = await fetchModuleRoutes(config);

    expect(routes).toEqual(['route1', 'route2', 'route3', 'route4']);
  });

  test('returns an array of routes for each module when on returns none', async () => {
    const config = {
      client: {} as ContentfulClientApi,
      modules: [
        {
          loadRoutes: () => Promise.resolve([]),
        },
        {
          loadRoutes: () => Promise.resolve(['route3', 'route4']),
        },
      ],
    };

    const routes = await fetchModuleRoutes(config);

    expect(routes).toEqual(['route3', 'route4']);
  });
});
