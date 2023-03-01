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
        id: 'modules',
        name: 'modules',
        type: 'Array',
        items: {
            type: 'Link',
            validations: [],
            linkType: 'Entry'
        },
        required: false,
        localized: false,
    }
]

const articleModel = {
    name: 'Core: Article',
    description: '',
    displayField: 'title',
    fields,
}

export default articleModel;