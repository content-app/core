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
        id: 'page',
        name: 'page',
        type: 'Link',
        validations: [
            {
                linkContentType: [
                    'corePage'
                ],
            },
        ],
        linkType: 'Entry',
        required: false,
        localized: false,
    },
    {
        id: 'childs',
        name: 'childs',
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
    },
];

const navigationItemModel = {
    name: 'Core: Navigation - Item',
    sys: {
        id: 'coreNavigationItem',
    },
    displayField: 'title',
    description: 'Navigation item model',
    fields,
};

export default navigationItemModel;