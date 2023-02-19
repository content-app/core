import { ContentfulClientApi } from 'contentful';

const fetchPageById = async (client: ContentfulClientApi, id: string) => {
    const page = await client.getEntry(id);
    return page;
};

export default fetchPageById;