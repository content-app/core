import createCoreModels from './createCoreModels';
import contentful from 'contentful-management'

const client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: 'CFPAT-ViIgXtD-GZfILEdd0wBDuv-FOhPdne7c_fmjNnLZnVU',
})

createCoreModels(client);

export default {
    createCoreModels,
};