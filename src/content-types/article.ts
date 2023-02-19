export default {
    "name": "Core: Article",
    "description": "",
    "displayField": "title",
    "fields": [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol"
        },
        {
            "id": "modules",
            "name": "modules",
            "type": "Array",
            "items": {
                "type": "Link",
                "validations": [],
                "linkType": "Entry"
            }
        }
    ]
}