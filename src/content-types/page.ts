import { ContentFields, KeyValueMap } from 'contentful-management';

const fields: ContentFields<KeyValueMap>[] = [
    {
        id: 'title',
        name: 'title ',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'pageTitle',
        name: 'pageTitle',
        type: 'Symbol',
        required: true,
        localized: false,
    },
    {
        id: 'slug',
        name: 'slug',
        type: 'Symbol',
        required: false,
        localized: false,
    },
    {
        id: 'seo',
        name: 'seo',
        type: 'Link',
        localized: false,
        required: false,
        validations: [
          {
            linkContentType: [
              'coreSeo'
            ]
          }
        ],
        linkType: 'Entry'
      },
    {
        id: 'articles',
        name: 'articles',
        type: 'Array',
        required: false,
        localized: false,
        items: {
            type: 'Link',
            validations: [
                {
                    linkContentType: [
                        'coreArticle'
                    ]
                }
            ],
            linkType: 'Entry'
        }
    }
]

const pageModel = {
    name: 'Core: Page',
    displayField: 'title',
    fields,
    description: 'Page model',
    sys: {
        id: 'corePage',
    },
}

export default pageModel;