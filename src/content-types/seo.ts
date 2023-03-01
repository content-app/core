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
        id: 'metaTitle',
        name: 'metaTitle',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'metaDescription',
        name: 'metaDescription',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'openGraph',
        name: 'openGraph',
        type: 'Link',
        required: false,
        localized: false,
        validations: [
            {
                linkContentType: [
                    'coreOpenGraph'
                ]
            }
        ],
        linkType: 'Entry'
    }
]

const seoModel = {
    name: 'Core: Seo',
    displayField: 'title',
    description: 'SEO model',
    fields,
}

export default seoModel;