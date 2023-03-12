import { ContentFields, KeyValueMap } from 'contentful-management';

const fields: ContentFields<KeyValueMap>[] = [
    {
        id: 'title',
        name: 'Title',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'type',
        name: 'Type',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'url',
        name: 'URL',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'description',
        name: 'Description',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'images',
        name: 'images',
        type: 'Array',
        required: true,
        localized: false,
        items: {
            type: 'Link',
            validations: [
                {
                    linkMimetypeGroup: [
                        'image'
                    ]
                }
            ],
            linkType: 'Asset'
        }
    }
]

const openGraphModel = {
    name: 'Core: Open Graph',
    displayField: 'title',
    description: 'Open Graph model',
    fields,
    sys: {
        id: 'coreOpenGraph',
    },
}

export default openGraphModel;