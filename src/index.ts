import createCoreModels from './createCoreModels';
import { fetchAndTransformNavigationByName } from './navigation';
import { fetchPageBySlug } from './page';
import client from 'contentful';


(async () => {
    const myClient = client.createClient({
        space: 'lc0ys88hhldu',
        accessToken: 'mGXdFHmdbi2KtnhA2cWXec6RcwXxTfrNpzd-oHcp-j8',
    });

    const d = await fetchPageBySlug({
        client: myClient,
        slug: 'home',
    });

    console.log(JSON.stringify(d, null, 2));
})();

export default {
    fetchPageBySlug,
    createCoreModels,
    fetchAndTransformNavigationByName,
};