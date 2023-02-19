export default {
    "name": "Core: Navigation",
    "description": "",
    "displayField": "title",
    "fields": [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol"
        },
        {
            "id": "name",
            "name": "name",
            "type": "Symbol"
        },
        {
            "id": "items",
            "name": "items",
            "type": "Array",
            "items": {
                "type": "Link",
                "validations": [
                    {
                        "linkContentType": [
                            "coreNavigationItem"
                        ]
                    }
                ],
                "linkType": "Entry"
            }
        }
    ]
}