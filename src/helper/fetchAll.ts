import { ContentfulCollection } from "contentful";

const fetchAll = async (fetch: (skip: number) => Promise<ContentfulCollection<any>>) => {
    const items: any[] = [];

    const innerFetch = async (skip: number) => {
        const response = await fetch(skip);

        items.push(...response.items);

        if (response.skip + response.limit < response.total) {
            await innerFetch(response.skip + response.limit);
        }
    };

    await innerFetch(0);

    return items;
};

export default fetchAll;