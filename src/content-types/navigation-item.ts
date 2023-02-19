export default {
    "name": "Core: Navigation - Item",
    "description": "",
    "fields": [
        {
            "id": "page",
            "name": "page",
            "type": "Link",
            "validations": [
                {
                    "linkContentType": [
                        "corePage"
                    ]
                }
            ],
            "linkType": "Entry"
        },
        {
            "id": "childs",
            "name": "childs",
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