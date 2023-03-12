import { ContentFields, KeyValueMap } from 'contentful-management';

const fields: ContentFields<KeyValueMap>[] = [
    {
        id: 'title',
        name: 'title',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        'id': 'name',
        'name': 'name',
        'type': 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'items',
        name: 'items',
        type: 'Array',
        items: {
            type: 'Link',
            validations: [
                {
                    linkContentType: [
                        'coreNavigationItem',
                    ],
                },
            ],
            linkType: 'Entry',
        },
        required: false,
        localized: false,
    }
];

const navigationModel = {
    name: 'Core: Navigation',
    displayField: 'title',
    description: 'Navigation model',
    fields,
    sys: {
        id: 'coreNavigation',
    },
}

export default navigationModel;