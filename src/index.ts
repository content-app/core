import createCoreModels from './createCoreModels';
import { fetchAndTransformNavigationByName } from './navigation';
import { fetchPages, fetchPageBySlug } from './page';
import { fetchAll } from './helper';

export default {
    fetchAll,
    fetchPages,
    fetchPageBySlug,
    createCoreModels,
    fetchAndTransformNavigationByName,
};