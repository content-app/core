export default {
    "name": "Core: Seo",
    "description": "",
    "displayField": "title",
    "fields": [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol"
        },
        {
            "id": "metaTitle",
            "name": "metaTitle",
            "type": "Symbol"
        },
        {
            "id": "metaDescription",
            "name": "metaDescription",
            "type": "Symbol"
        },
        {
            "id": "openGraph",
            "name": "openGraph",
            "type": "Link",
            "validations": [
                {
                    "linkContentType": [
                        "coreOpenGraph"
                    ]
                }
            ],
            "linkType": "Entry"
        }
    ]
}