export default {
    name: 'Core: Open Graph',
    displayField: 'title',
    fields: [
        {
            'id': 'title',
            'name': 'Title',
            'required': true,
            'type': 'Symbol'
        },
        {
            'id': 'type',
            'name': 'Type',
            'type': 'Symbol'
        },
        {
            'id': 'url',
            'name': 'URL',
            'type': 'Symbol'
        },
        {
            'id': 'description',
            'name': 'Description',
            'type': 'Symbol'
        },
        {
            "id": "images",
            "name": "images",
            "type": "Array",
            "items": {
                "type": "Link",
                "validations": [
                    {
                        "linkMimetypeGroup": [
                            "image"
                        ]
                    }
                ],
                "linkType": "Asset"
            }
        }
    ]
}