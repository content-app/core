import createCoreModels from './createCoreModels';
import { fetchAndTransformNavigationByName } from './navigation';
const contentful = require("contentful");

(async () => {

    const client = contentful.createClient({
        space: 'oxadl7xd0vpv',
        accessToken: "IhGIYWNjjW3xhv6bUx22zrSy1mI-dpvK91b-v1lhpGY",
    });

    await fetchAndTransformNavigationByName(client, 'Main');

})();

export default {
    createCoreModels,
    fetchAndTransformNavigationByName,
};